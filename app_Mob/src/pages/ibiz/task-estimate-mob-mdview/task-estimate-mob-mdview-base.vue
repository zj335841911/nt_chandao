<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobmdview': true, 'task-estimate-mob-mdview': true }">
    
    <ion-header>
        <ion-toolbar v-show="titleStatus" class="ionoc-view-header">
            <ion-buttons slot="start">
                <ion-button v-show="isShowBackButton" @click="closeView">
                    <ion-icon name="chevron-back"></ion-icon>
                    {{$t('app.button.back')}}
                </ion-button>
            </ion-buttons>
            <ion-title class="view-title"><label class="title-label"><ion-icon v-if="model.icon" :name="model.icon"></ion-icon> <img v-else-if="model.iconcls" :src="model.iconcls" alt=""> {{$t(model.srfCaption)}}</label></ion-title>
        </ion-toolbar>
        <ion-toolbar>
            <ion-searchbar style="height: 36px; padding-bottom: 0px;" :placeholder="$t('app.fastsearch')" debounce="500" @ionChange="quickValueChange($event)" show-cancel-button="focus" :cancel-button-text="$t('app.button.cancel')"></ion-searchbar>
        </ion-toolbar>
    </ion-header>


    <ion-content>
                <view_mdctrl
            :viewState="viewState"
            viewName="TaskEstimateMobMDView"  
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
            fetchAction="FetchDefault" 
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
import TaskEstimateService from '@/app-core/service/task-estimate/task-estimate-service';
import { CodeListService } from "@/ibiz-core";
import MobMDViewEngine from '@engine/view/mob-mdview-engine';
import TaskEstimateUIService from '@/ui-service/task-estimate/task-estimate-ui-action';

@Component({
    components: {
    },
})
export default class TaskEstimateMobMDViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof TaskEstimateMobMDViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {TaskEstimateService}
     * @memberof TaskEstimateMobMDViewBase
     */
    protected appEntityService: TaskEstimateService = new TaskEstimateService();

    /**
     * 实体UI服务对象
     *
     * @type TaskEstimateUIService
     * @memberof TaskEstimateMobMDViewBase
     */
    public appUIService: TaskEstimateUIService = new TaskEstimateUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof TaskEstimateMobMDViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof TaskEstimateMobMDViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof TaskEstimateMobMDViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof TaskEstimateMobMDViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof TaskEstimateMobMDViewBase
	 */
	protected viewtag: string = 'c2ab529c7d645ca0bace6b925ea02c99';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof TaskEstimateMobMDViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TaskEstimateMobMDViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof TaskEstimateMobMDViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 标题状态
     *
     * @memberof TaskEstimateMobMDViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof TaskEstimateMobMDViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof TaskEstimateMobMDViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof TaskEstimateMobMDViewBase
     */
    protected model: any = {
        srfTitle: '任务预计移动端多数据视图',
        srfCaption: 'taskestimate.views.mobmdview.caption',
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
     * @memberof  TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
     */
    protected containerModel: any = {
        view_mdctrl: { name: 'mdctrl', type: 'MOBMDCTRL' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof TaskEstimateMobMDViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof TaskEstimateMobMDViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;


    /**
     * 工具栏模型集合名
     *
     * @memberof TaskEstimateMobMDViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
     */
    protected engine: MobMDViewEngine = new MobMDViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof TaskEstimateMobMDViewBase
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
            keyPSDEField: 'taskestimate',
            majorPSDEField: 'id',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof TaskEstimateMobMDViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * Vue声明周期
     *
     * @memberof TaskEstimateMobMDViewBase
     */
    public activated() {
        this.afterMounted();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof TaskEstimateMobMDViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof TaskEstimateMobMDViewBase
     */
    protected afterDestroyed(){

    }

    /**
     * mdctrl 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateMobMDViewBase
     */
    protected mdctrl_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'selectionchange', $event);
    }

    /**
     * mdctrl 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateMobMDViewBase
     */
    protected mdctrl_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'beforeload', $event);
    }

    /**
     * mdctrl 部件 rowclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateMobMDViewBase
     */
    protected mdctrl_rowclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'rowclick', $event);
    }

    /**
     * mdctrl 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDView
     */
    public async newdata(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        //this.$notice.warning('未指定关系视图');
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
     * @memberof TaskEstimateMobMDView
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
        deResParameters = [
            { pathName: 'tasks', parameterName: 'task' },
        ];
        const parameters: any[] = [
            { pathName: 'taskestimates', parameterName: 'taskestimate' },
            { pathName: 'moboptionview', parameterName: 'moboptionview' },
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
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
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
     * 搜索值
     *
     * @type {string}
     * @memberof TaskEstimateMobMDViewBase
     */
    public query: string = '';

    /**
     * 快速搜索值变化
     *
     * @param {*} event
     * @returns
     * @memberof TaskEstimateMobMDViewBase
     */
    public async quickValueChange(event: any) {
        let { detail } = event;
        if (!detail) {
            return;
        }
        let { value } = detail;
        this.query = value;

        const mdctrl: any = this.$refs.mdctrl;
        if (mdctrl) {
            let response = await mdctrl.quickSearch(this.query);
            if (response) {
            }
        }
    }

   /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof TaskEstimateMobMDViewBase
     */
    @Prop({ default: true }) protected isSingleSelect!: boolean;

   /**
     * 能否上拉加载
     *
     * @type {boolean}
     * @memberof TaskEstimateMobMDViewBase
     */ 
    @Prop({ default: true }) public isEnablePullUp?: boolean;



    /**
     * 分类值
     *
     * @type {boolean}
     * @memberof TaskEstimateMobMDViewBase
     */
    public categoryValue :any = {};

    /**
     * 排序值
     *
     * @type {boolean}
     * @memberof TaskEstimateMobMDViewBase
     */
    public sortValue :any = {};

    /**
     * 刷新视图
     *
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
     */
    public openSearchform() {
      let search :any = this.$refs.searchformtaskestimatemobmdview;
      if(search){
          search.open();
      }
    }

    /**
     * 关闭搜索表单
     *
     * @memberof TaskEstimateMobMDViewBase
     */
    public closeSearchform(){
      let search :any = this.$refs.searchformtaskestimatemobmdview;
      if(search){
          search.close();
      }
    }

    /**
     * 多选状态改变事件
     *
     * @memberof TaskEstimateMobMDViewBase
     */
    public showCheackChange(value:any){
        this.showCheack = value;
    }

    /**
     * 多选状态
     *
     * @memberof TaskEstimateMobMDViewBase
     */
    public showCheack = false;

    /**
     * 取消选择状态
     * @memberof TaskEstimateMobMDViewBase
     */
    public cancelSelect() {
        this.showCheackChange(false);
    }

    /**
     * 视图加载（排序|分类）
     * @memberof TaskEstimateMobMDViewBase
     */
    public onViewLoad() {
        let value = Object.assign(this.categoryValue,this.sortValue);
        this.engine.onViewEvent('mdctrl','viewload',value);
    }

    /**
     * 分类搜索
     *
     * @param {*} value
     * @memberof TaskEstimateMobMDViewBase
     */
    public onCategory(value:any){
        this.categoryValue = value;
        this.onViewLoad();
    }

    /**
     * 触底加载
     *
     * @param {*} value
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
     */  
    public codeListService:CodeListService = new CodeListService();

    /**
     * 快速分组数据对象
     *
     * @memberof TaskEstimateMobMDViewBase
     */
    public quickGroupData:any;

    /**
     * 快速分组是否有抛值
     *
     * @memberof TaskEstimateMobMDViewBase
     */
    public isEmitQuickGroupValue:boolean = false;

    /**
     * 快速分组模型
     *
     * @memberof TaskEstimateMobMDViewBase
     */
    public quickGroupModel:Array<any> = [];

    /**
     * 加载快速分组模型
     *
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
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
     * @memberof TaskEstimateMobMDViewBase
     */
    public quickGroupValueChange (groupId:any) {
        if (groupId) {
            this.quickGroupModel.forEach((group:any) => {
                if (group.id === groupId) {
                    this.quickGroupData = group;
                }
            })
            if (this.isEmitQuickGroupValue) {
                
            }
        }
        this.isEmitQuickGroupValue = true;
    }





}
</script>

<style lang='less'>
@import './task-estimate-mob-mdview.less';
</style>