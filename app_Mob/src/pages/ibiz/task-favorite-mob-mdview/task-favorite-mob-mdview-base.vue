<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobmdview': true, 'task-favorite-mob-mdview': true }">
    
    <ion-header>
    <div class="view-quick-group-tab">
		<div v-for="(group,index) in quickGroupModel" :key="index" :class="{ 'group-tab': true,'activated': quickGroupData.id === group.id}" @click="quickGroupValueChange(group.id)">{{group.text}}</div>
	</div>
    </ion-header>


    <ion-content>
                <view_mdctrl
            :viewState="viewState"
            viewName="TaskFavoriteMobMDView"  
            :viewparams="viewparams" 
            :context="context" 
            :showBusyIndicator="true" 
            viewType="DEMOBMDVIEW"
            controlStyle="LISTVIEW"
            updateAction="Update"
            removeAction="Remove"
            loaddraftAction=""
            loadAction="Get"
            createAction="Create"
            fetchAction="FetchMyFavorites" 
            :isMutli="!isSingleSelect"
            :showCheack="showCheack"
            @showCheackChange="showCheackChange"
            :isTempMode="false"
            :isEnableChoose="false"
            name="mdctrl"  
            ref='mdctrl' 
            @selectionchange="mdctrl_selectionchange($event)"  
            @beforeload="mdctrl_beforeload($event)"  
            @rowclick="mdctrl_rowclick($event)"  
            @load="mdctrl_load($event)"  
            @closeview="closeView($event)">
        </view_mdctrl>
        <ion-infinite-scroll  @ionInfinite="loadMore" distance="2%" v-if="this.isEnablePullUp">
          <ion-infinite-scroll-content
          loadingSpinner="bubbles"
          loadingText="Loading more data...">
        </ion-infinite-scroll-content>
        </ion-infinite-scroll>
    </ion-content>
    <ion-footer class="view-footer" style="z-index:9;">
        
    </ion-footer>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import TaskService from '@/app-core/service/task/task-service';
import { CodeListService } from "@/ibiz-core";
import MobMDViewEngine from '@engine/view/mob-mdview-engine';
import TaskUIService from '@/ui-service/task/task-ui-action';

@Component({
    components: {
    },
})
export default class TaskFavoriteMobMDViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected appEntityService: TaskService = new TaskService();

    /**
     * 实体UI服务对象
     *
     * @type TaskUIService
     * @memberof TaskFavoriteMobMDViewBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof TaskFavoriteMobMDViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof TaskFavoriteMobMDViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof TaskFavoriteMobMDViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof TaskFavoriteMobMDViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof TaskFavoriteMobMDViewBase
	 */
	protected viewtag: string = '6e91454cb4217d3aa1260161a539c803';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof TaskFavoriteMobMDViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 标题状态
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected model: any = {
        srfTitle: '任务移动端多数据视图',
        srfCaption: 'task.views.favoritemobmdview.caption',
        srfSubCaption: '',
        dataInfo: '',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  TaskFavoriteMobMDViewBase
     */
    @Watch('_context')
    on_context(newVal: string, oldVal: string) {
        const _this: any = this;
        this.parseViewParam();
        if (!Object.is(newVal, oldVal) && _this.engine) {
            this.$nextTick(()=>{_this.engine.load();})
        }
        
    }

    /**
     * 视图参数变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @returns
     * @memberof IBizChart
     */
    @Watch('_viewparams')
    on_viewparams(newVal: string, oldVal: string) {
        this.parseViewParam();
    }

    /**
     * 设置工具栏状态
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public setViewTitleStatus(){
        const thirdPartyName = this.$store.getters.getThirdPartyName();
        if(thirdPartyName){
            this.titleStatus = false;
        }
    }

    /**
     * 容器模型
     *
     * @type {*}
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected containerModel: any = {
        view_mdctrl: { name: 'mdctrl', type: 'MOBMDCTRL' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof TaskFavoriteMobMDViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;



   /**
    * 工具栏 TaskFavoriteMobMDView 模型
    *
    * @type {*}
    * @memberof TaskFavoriteMobMDView
    */
    public mdctrl_quicktoolbarModels: any = {
            deuiaction1: { name: 'deuiaction1', caption: '更多', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'MyFavMore', target: 'NONE' } },

    };

    


    /**
     * 工具栏模型集合名
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public toolbarModelList:any = ['mdctrl_quicktoolbarModels',]

    /**
     * 解析视图参数
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected parseViewParam(): void {
        const { context, param } = this.$viewTool.formatNavigateViewParam(this, true);
        this.context = { ...context };
        this.viewparams = { ...param }
    }

    /**
     * 是否显示返回按钮
     *
     * @readonly
     * @type {boolean}
     * @memberof TaskFavoriteMobMDViewBase
     */
    get isShowBackButton(): boolean {
        // 存在路由，非路由使用，嵌入
        if (this.viewDefaultUsage === "indexView") {
            return false;
        }
        return true;
    }

    /**
     * 视图引擎
     *
     * @type {Engine}
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected engine: MobMDViewEngine = new MobMDViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            opendata: (args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string) => {
                this.opendata(args, contextJO, paramJO, $event, xData, container, srfParentDeName);
            },
            mdctrl: this.$refs.mdctrl,
            newdata: (args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string) => {
                this.newdata(args, contextJO, paramJO, $event, xData, container, srfParentDeName);
            },
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * Vue声明周期
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public activated() {
        this.afterMounted();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof TaskFavoriteMobMDViewBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        this.setViewTitleStatus();

    }

    /**
     * 销毁之前
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        this.thirdPartyInit();

    }

    /**
     * 第三方容器初始化
     * 
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected  thirdPartyInit(){
        if(!this.isChildView){
            this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);
            this.$viewTool.setThirdPartyEvent(this.closeView);
        }
    }

    /**
     * 销毁视图回调
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected afterDestroyed(){
        if (this.viewDefaultUsage !== "indexView" && Object.keys(localStorage).length > 0) {
            Object.keys(localStorage).forEach((item: string) => {
                if (item.startsWith(this.context.srfsessionid)) {
                    localStorage.removeItem(item);
                }
            });
        }

    }

    /**
     * mdctrl 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected mdctrl_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'selectionchange', $event);
    }

    /**
     * mdctrl 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected mdctrl_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'beforeload', $event);
    }

    /**
     * mdctrl 部件 rowclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected mdctrl_rowclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'rowclick', $event);
    }

    /**
     * mdctrl 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected mdctrl_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'load', $event);
    }


    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [contextJO={}]
     * @param {*} [paramJO={}]
     * @param {*} [$event]
     * @param {*} [xData]
     * @param {*} [container]
     * @param {string} [srfParentDeName]
     * @returns {Promise<any>}
     * @memberof TaskFavoriteMobMDView
     */
    public async newdata(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const params: any = { ...paramJO };
        let context = { ...this.context, ...contextJO };
        if (args.length > 0) {
            Object.assign(context, args[0]);
        }
        let response: any = null;
        let panelNavParam = { } ;
        let panelNavContext = { } ;
        //导航参数处理
        const { context: _context, param: _params } = this.$viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let deResParameters: any[] = [];
        if (context.product && context.story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if (context.project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if (context.story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'mobeditview', parameterName: 'mobeditview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(_context, deResParameters, parameters, args, _params);
        response = await this.globaluiservice.openService.openView(routeParam);
        if (response) {
            if (!response || !Object.is(response.ret, 'OK')) {
                return;
            }
            if (!xData || !(xData.refresh instanceof Function)) {
                return;
            }
            xData.refresh(response.datas);
        }
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [contextJO={}]
     * @param {*} [paramJO={}]
     * @param {*} [$event]
     * @param {*} [xData]
     * @param {*} [container]
     * @param {string} [srfParentDeName]
     * @returns {Promise<any>}
     * @memberof TaskFavoriteMobMDView
     */
    public async opendata(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const params: any = { ...paramJO };
        let context = { ...this.context, ...contextJO };
        if (args.length > 0) {
            Object.assign(context, args[0]);
        }
        let response: any = null;
        let panelNavParam = { } ;
        let panelNavContext = { } ;
        //导航参数处理
        const { context: _context, param: _params } = this.$viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let deResParameters: any[] = [];
        if (context.product && context.story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if (context.project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if (context.story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'mobeditview', parameterName: 'mobeditview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(_context, deResParameters, parameters, args, _params);
        response = await this.globaluiservice.openService.openView(routeParam);
        if (response) {
            if (!response || !Object.is(response.ret, 'OK')) {
                return;
            }
            if (!xData || !(xData.refresh instanceof Function)) {
                return;
            }
            xData.refresh(response.datas);
        }
    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof TaskFavoriteMobMDViewBase
     */
    public quitFun() {
        if (!sessionStorage.getItem("firstQuit")) {  // 首次返回时
            // 缓存首次返回的时间
            window.sessionStorage.setItem("firstQuit", new Date().getTime().toString());
            // 提示再按一次退出
            this.$toast("再按一次退出");
            // 两秒后清除缓存（与提示的持续时间一致）
            setTimeout(() => {window.sessionStorage.removeItem("firstQuit")}, 2000);
        } else {
            // 获取首次返回时间
            let firstQuitTime: any = sessionStorage.getItem("firstQuit");
            // 如果时间差小于两秒 直接关闭
            if (new Date().getTime() - firstQuitTime < 2000) {
                this.$viewTool.ThirdPartyClose();
            }
        }
    }
    
    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof TaskFavoriteMobMDViewBase
     */
    protected async closeView(args: any[]): Promise<any> {
        if(this.viewDefaultUsage==="indexView" && this.$route.path === '/appindexview'){
            this.quitFun();
            return;
        }
        if (this.viewDefaultUsage === "routerView" ) {
           if(window.history.length == 1 && this.$viewTool.getThirdPartyName()){
                this.quitFun();
            }else{
                this.$store.commit("deletePage", this.$route.fullPath);
                this.$router.go(-1);
           }
        }
        if (this.viewDefaultUsage === "actionView") {
            this.$emit("close", { status: "success", action: "close", data: args instanceof MouseEvent ? null : args });
        }
        
    }

    /**
     * 刷新数据
     *
     * @readonly
     * @type {(number | null)}
     * @memberof TaskFavoriteMobMDViewBase
     */
    get refreshdata(): number | null {
        return this.$store.getters['viewaction/getRefreshData'](this.viewtag);
    }

    /**
     * 监控数据变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @returns
     * @memberof TaskFavoriteMobMDViewBase
     */
    @Watch('refreshdata')
    onRefreshData(newVal: any, oldVal: any) {
        if (newVal === null || newVal === undefined) {
            return;
        }
        if (newVal === 0) {
            return;
        }
        const _this: any = this;
        if (_this.onRefreshView && _this.onRefreshView instanceof Function) {
            _this.onRefreshView();
        }
    }


   /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof TaskFavoriteMobMDViewBase
     */
    @Prop({ default: true }) protected isSingleSelect!: boolean;

   /**
     * 能否上拉加载
     *
     * @type {boolean}
     * @memberof TaskFavoriteMobMDViewBase
     */ 
    @Prop({ default: true }) public isEnablePullUp?: boolean;



    /**
     * 分类值
     *
     * @type {boolean}
     * @memberof TaskFavoriteMobMDViewBase
     */
    public categoryValue :any = {};

    /**
     * 排序值
     *
     * @type {boolean}
     * @memberof TaskFavoriteMobMDViewBase
     */
    public sortValue :any = {};

    /**
     * 刷新视图
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public onRefreshView() {
        let mdctrl: any = this.$refs.mdctrl;
        if (mdctrl) {
            mdctrl.refresh();
        }
    }

    /**
     * 打开搜索表单
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public openSearchform() {
      let search :any = this.$refs.searchformtaskfavoritemobmdview;
      if(search){
          search.open();
      }
    }

    /**
     * 关闭搜索表单
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public closeSearchform(){
      let search :any = this.$refs.searchformtaskfavoritemobmdview;
      if(search){
          search.close();
      }
    }

    /**
     * 多选状态改变事件
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public showCheackChange(value:any){
        this.showCheack = value;
    }

    /**
     * 多选状态
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public showCheack = false;

    /**
     * 取消选择状态
     * @memberof TaskFavoriteMobMDViewBase
     */
    public cancelSelect() {
        this.showCheackChange(false);
    }

    /**
     * 视图加载（排序|分类）
     * @memberof TaskFavoriteMobMDViewBase
     */
    public onViewLoad() {
        let value = Object.assign(this.categoryValue,this.sortValue);
        this.engine.onViewEvent('mdctrl','viewload',value);
    }

    /**
     * 分类搜索
     *
     * @param {*} value
     * @memberof TaskFavoriteMobMDViewBase
     */
    public onCategory(value:any){
        this.categoryValue = value;
        this.onViewLoad();
    }

    /**
     * 触底加载
     *
     * @param {*} value
     * @memberof TaskFavoriteMobMDViewBase
     */
    public async loadMore(event:any){
      let mdctrl:any = this.$refs.mdctrl;
      if(mdctrl && mdctrl.loadBottom && mdctrl.loadBottom instanceof Function){
        mdctrl.loadBottom();
      }
      if(event.target && event.target.complete && event.target.complete instanceof Function){
        event.target.complete();
      }
    }

    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof TaskFavoriteMobMDViewBase
     */  
    public codeListService:CodeListService = new CodeListService();

    /**
     * 快速分组数据对象
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public quickGroupData:any;

    /**
     * 快速分组是否有抛值
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public isEmitQuickGroupValue:boolean = false;

    /**
     * 快速分组模型
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public quickGroupModel:Array<any> = [];

    /**
     * 加载快速分组模型
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public loadQuickGroupModel () {
    }

    /**
     * 快速分组代码表父代码项处理
     *
     * @memberof TaskMobMDViewBase
     */
    public parentCodeItem (inputArray:Array<any>) {
        // 对代码项分类（父代码项，非父代码项）
        let parentItems:Array<any> = [];    //父代码项
        let tempList :Array<any> = [];     //非父代码项
        inputArray.forEach((codeItem:any) => {
            if (codeItem.subItem) {
                parentItems.push(codeItem);
            } else {
                tempList.push(codeItem);
            }
        })

        // 遍历父代码项的子项和非父代码项，补全子项的内容
        let subItems:Array<any> = [];
        parentItems.forEach((parent:any) => {
            parent.subItem.forEach((item:any) => {
                tempList.forEach((codeItem:any) => {
                    if (codeItem.id.toLowerCase() === item.id.toLowerCase()) {
                        item = Object.assign(item,codeItem);
                        subItems.push(item)
                    }
                })
            })
        })

        // 替换父代码项
        this.quickGroupModel.forEach((codeItem:any) => {
            parentItems.forEach((parentItem:any) => {
                if (parentItem.id.toLowerCase() === codeItem.id.toLowerCase()) {
                    codeItem = Object.assign(parentItem,codeItem);
                }
            })
        })

        // 删除子项
        subItems.forEach((subItem:any) => {
            this.quickGroupModel.splice(this.quickGroupModel.findIndex((item:any) => {
                item.id === subItem.id;
            }),1)
        })
    }

    /**
     * 处理快速分组模型动态数据部分(%xxx%)
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public handleDynamicData (inputArray:Array<any>) {
        if (inputArray.length > 0) {
            inputArray.forEach((item:any) =>{
               if (item.data && Object.keys(item.data).length > 0) {
                   Object.keys(item.data).forEach((name:any) => {
                        let value: any = item.data[name];
                        if (value && typeof(value)=='string' && value.startsWith('%') && value.endsWith('%')) {
                            const key = (value.substring(1, value.length - 1)).toLowerCase();
                            if (this.context[key]) {
                                value = this.context[key];
                            } else if (this.viewparams[key]) {
                                value = this.viewparams[key];
                            }
                        }
                        item.data[name] = value;
                   })
               }
            })
        }
        return inputArray;
    }

    /**
     * 快速分组值变化
     *
     * @memberof TaskFavoriteMobMDViewBase
     */
    public quickGroupValueChange (groupId:any) {
        this.quickGroupModel.forEach((group:any) => {
            if (group.id === groupId && group.data) {
                this.quickGroupData = group;
                this.engine.onViewEvent('mdctrl','viewload',{query:group.data});
            } else {
                
            }
        })
    }





}
</script>

<style lang='less'>
@import './task-favorite-mob-mdview.less';
</style>