<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobmdview': true, 'bug-mob-mdview': true }">
    
    <app-mob-header>
        <app-search-history @quickValueChange="quickValueChange" :model="model" :showfilter="true"></app-search-history>

    <app-quick-group-tab
        :items="quickGroupModel"
        @valuechange="quickGroupValueChange($event)"
        :pageTotal="pageTotal"
    ></app-quick-group-tab>
    
                    <div class="mdview-tools">
                <div class="bug-mob-mdview-toolbar default-sort">
                    <div class="view-tool">
                        <div class="view-tool-sorts">
                            <div class="view-tool-sorts-item">
                                <span :class="{text:true,active:hasColor}" @click="onSort('PRI')">优先级</span>
                                <span class="sort-icon" @click="onSort('PRI')">
                                    <app-mob-icon :class="{'ios' : true ,'hydrated': true ,'sort-select': sort.asc == 'PRI'}" name="chevron-up-outline" ></app-mob-icon>
                                    <app-mob-icon :class="{'ios' : true ,'hydrated': true ,'sort-select': sort.desc == 'PRI'}" name="chevron-down-outline" ></app-mob-icon>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mdview-tools-select">
                    <app-van-select  name="n_severity_eq" title="严重程度" :items="[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'},]" @onConfirm="onCategory"></app-van-select>
                    <app-van-select  name="n_resolution_eq" title="解决方案" :items="[{value:'bydesign',label:'设计如此'},{value:'duplicate',label:'重复Bug'},{value:'external',label:'外部原因'},{value:'fixed',label:'已解决'},{value:'notrepro',label:'无法重现'},{value:'postponed',label:'延期处理'},{value:'willnotfix',label:'不予解决'},{value:'tostory',label:'转为需求'},]" @onConfirm="onCategory"></app-van-select>
                </div>
            </div>
    </app-mob-header>

    <van-popup get-container="#app" :lazy-render="false" duration="0.2" v-model="searchformState" position="right" class="searchform" style="height: 100%; width: 85%;"  >
        <app-mob-header>
            <ion-toolbar translucent>
                <app-mob-title>{{$t('app.searchForm.title')}}</app-mob-title>
            </ion-toolbar>
        </app-mob-header>
        <div class="searchform_content">
            <view_searchform
    :viewState="viewState"
    viewName="MobMDView"
    :viewparams="viewparams" 
    :context="context" 
     
    :viewtag="viewtag"
    :showBusyIndicator="true"
    updateAction=""
    removeAction=""
    loaddraftAction="FilterGetDraft"
    loadAction="FilterGet"
    createAction=""
    WFSubmitAction=""
    WFStartAction=""
    style='' 
    name="searchform"  
    ref='searchform' 
    @search="searchform_search($event)"  
    @load="searchform_load($event)"  
    @closeview="closeView($event)">
</view_searchform>
        </div>
        <ion-footer>
        <div class="search-btn">
            <app-mob-button 
            class="search-btn-item"
            :text="$t('app.searchForm.searchButton.reset')" 
            color="light" 
            shape="round" 
            size="small"
            @click="onReset" />
            <app-mob-button 
            class="search-btn-item" 
            shape="round" 
            size="small" 
            :text="$t('app.searchForm.searchButton.search')" 
            @click="onSearch" />
        </div>
        </ion-footer>
    </van-popup>
    <div id="searchformbugmobmdview"></div>
    <ion-content :scroll-events="true" @ionScroll="onScroll" ref="ionScroll" @ionScrollEnd="onScrollEnd">
        <ion-refresher 
            slot="fixed" 
            ref="loadmore" 
            pull-factor="0.5" 
            pull-min="50" 
            pull-max="100" 
            @ionRefresh="pullDownToRefresh($event)">
            <ion-refresher-content
                pulling-icon="arrow-down-outline"
                :pulling-text="$t('app.pulling_text')"
                refreshing-spinner="circles"
                refreshing-text="">
            </ion-refresher-content>
        </ion-refresher>
                <view_mdctrl
            :viewState="viewState"
            viewName="MobMDView"
            :viewparams="viewparams" 
            :context="context" 
            viewType="DEMOBMDVIEW"
            controlStyle="LISTVIEW"
            updateAction="Update"
            removeAction="Remove"
            loaddraftAction=""
            loadAction="Get"
            createAction="Create"
            fetchAction="FetchDefault" 
            :isMutli="!isSingleSelect"
            :isNeedLoaddingText="!isPortalView"
            :showBusyIndicator="true" 
            :isTempMode="false"
            :newdata="newdata"
            :opendata="opendata"
            @pageTotalChange="pageTotalChange($event)"
            name="mdctrl"  
            ref='mdctrl' 
            @selectionchange="mdctrl_selectionchange($event)"  
            @beforeload="mdctrl_beforeload($event)"  
            @rowclick="mdctrl_rowclick($event)"  
            @load="mdctrl_load($event)"  
            @closeview="closeView($event)">
        </view_mdctrl>
    </ion-content>
    <ion-footer class="view-footer">
        
    <div class="scroll_tool">
        <div class="scrollToTop" @click="onScrollToTop" v-show="isShouleBackTop" :style="{right:isScrollStop?'-18px':'-70px'}" > <van-icon name="back-top" /></div> 
    </div>
    </ion-footer>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import { CodeListService } from "@/ibiz-core";
import BugService from '@/app-core/service/bug/bug-service';

import MobMDViewEngine from '@engine/view/mob-mdview-engine';
import BugUIService from '@/ui-service/bug/bug-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class BugMobMDViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof BugMobMDViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugMobMDViewBase
     */
    protected appEntityService: BugService = new BugService();

    /**
     * 实体UI服务对象
     *
     * @type BugUIService
     * @memberof BugMobMDViewBase
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof BugMobMDViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof BugMobMDViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof BugMobMDViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof BugMobMDViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof BugMobMDViewBase
	 */
	protected viewtag: string = 'cd607beca23d03d5083b01ad62160cf1';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof BugMobMDViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof BugMobMDViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof BugMobMDViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof BugMobMDViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof BugMobMDViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof BugMobMDViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof BugMobMDViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof BugMobMDViewBase
     */
    protected model: any = {
        srfTitle: 'Bug移动端多数据视图',
        srfCaption: 'bug.views.mobmdview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'bug.mobmdview',
        iconcls: '',
        icon: 'bug'
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  BugMobMDViewBase
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
    @Watch('_viewparams',{immediate: true, deep: true})
    on_viewparams(newVal: string, oldVal: string) {
        this.parseViewParam();
        
    }

    /**
     * 设置工具栏状态
     *
     * @memberof BugMobMDViewBase
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
     * @memberof BugMobMDViewBase
     */
    protected containerModel: any = {
        view_searchform: { name: 'searchform', type: 'SEARCHFORM' },
        view_mdctrl: { name: 'mdctrl', type: 'MOBMDCTRL' },
        view_righttoolbar: { name: 'righttoolbar', type: 'TOOLBAR' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof BugMobMDViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof BugMobMDViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;




   /**
    * 工具栏 BugMobMDView 模型
    *
    * @type {*}
    * @memberof BugMobMDView
    */
    public righttoolbarModels: any = {
    };

    


    /**
     * 工具栏模型集合名
     *
     * @memberof BugMobMDViewBase
     */
    public toolbarModelList:any = ['righttoolbarModels',]

    /**
     * 解析视图参数
     *
     * @memberof BugMobMDViewBase
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
     * @memberof BugMobMDViewBase
     */
    get isShowBackButton(): boolean {
        // 存在路由，非路由使用，嵌入
        if (this.viewDefaultUsage === "indexView") {
            return false;
        }
        return true;
    }

    /**
     * 下拉刷新
     *
     * @param {*} $event
     * @returns {Promise<any>}
     * @memberof BugMobMDViewBase
     */
    public async pullDownToRefresh($event: any): Promise<any> {
        let mdctrl: any = this.$refs.mdctrl;
        if (mdctrl && mdctrl.pullDownToRefresh instanceof Function) {
            const response: any = await mdctrl.pullDownToRefresh();
            if (response) {
                $event.srcElement.complete();
            }
        }
    }

    /**
     * 视图引擎
     *
     * @type {Engine}
     * @memberof BugMobMDViewBase
     */
    protected engine: MobMDViewEngine = new MobMDViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof BugMobMDViewBase
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
            searchform: this.$refs.searchform,
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof BugMobMDViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof BugMobMDViewBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        this.setViewTitleStatus();
        this.loadQuickGroupModel();


    }

       /**
        * 部件计数
        *
        * @memberof TaskMobMDViewBase
        */
        public pageTotal:number = 0;

       /**
        * 获取部件计数
        *
        * @memberof TaskMobMDViewBase
        */
        public pageTotalChange($event:any) {
            this.pageTotal = $event;
        }

    /**
     * 销毁之前
     *
     * @memberof BugMobMDViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof BugMobMDViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof BugMobMDViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof BugMobMDViewBase
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
     * @memberof BugMobMDViewBase
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
     * @memberof BugMobMDViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof BugMobMDViewBase
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
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugMobMDViewBase
     */
    protected searchform_search($event: any, $event2?: any) {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugMobMDViewBase
     */
    protected searchform_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }

    /**
     * mdctrl 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugMobMDViewBase
     */
    protected mdctrl_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'selectionchange', $event);
    }

    /**
     * mdctrl 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugMobMDViewBase
     */
    protected mdctrl_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'beforeload', $event);
    }

    /**
     * mdctrl 部件 rowclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugMobMDViewBase
     */
    protected mdctrl_rowclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'rowclick', $event);
    }

    /**
     * mdctrl 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugMobMDViewBase
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
     * @memberof BugMobMDView
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
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
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
     * @memberof BugMobMDView
     */
    public async opendata(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const params: any = { ...paramJO };
        let _context = { ...this.context, ...contextJO };
        if (args.length > 0) {
            Object.assign(_context, args[0]);
        }
        let response: any = null;
        let panelNavParam = { } ;
        let panelNavContext = { } ;
        //导航参数处理
        const { context, param: _params } = this.$viewTool.formatNavigateParam( panelNavContext, panelNavParam, _context, params, {});
        let deResParameters: any[] = [];
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
            { pathName: 'mobeditview', parameterName: 'mobeditview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, args, _params);
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
     * @memberof BugMobMDViewBase
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
     * @memberof BugMobMDViewBase
     */
    protected async closeView(args: any[]): Promise<any> {
        if(this.$store.state.searchformStatus){
             this.$store.commit('setSearchformStatus',false);
             return
        }
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
     * @memberof BugMobMDViewBase
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
     * @memberof BugMobMDViewBase
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
     * 初始化导航栏标题
     *
     * @param {*} val
     * @param {boolean} isCreate
     * @returns
     * @memberof BugMobMDViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }

    /**
     * onScroll滚动事件
     *
     * @memberof BugMobMDViewBase
     */
    public async onScroll(e:any){
        this.isScrollStop = false;
        if (e.detail.scrollTop>600) {
            this.isShouleBackTop = true;
        }else{
            this.isShouleBackTop = false;
        }
                    let ionScroll :any= this.$refs.ionScroll;
        if(ionScroll){
            let ele =  await ionScroll.getScrollElement();
            if(ele){
                let scrollTop = ele.scrollTop;
                let clientHeight = ele.clientHeight;
                let scrollHeight = ele.scrollHeight;
                if(scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight){
                    let mdctrl:any = this.$refs.mdctrl; 
                    if(mdctrl && mdctrl.loadBottom && this.$util.isFunction(mdctrl.loadBottom)){
                        mdctrl.loadStatus = true;
                        await mdctrl.loadBottom()
                        mdctrl.loadStatus = false;
                    }           
                }
            }
        }

    }

    /**
     * onScroll滚动结束事件
     *
     * @memberof BugMobMDViewBase
     */
    public onScrollEnd(){
        this.isScrollStop = true;
    }

    /**
     * 返回顶部
     *
     * @memberof BugMobMDViewBase
     */
    public onScrollToTop() {
        let ionScroll:any = this.$refs.ionScroll;
        if(ionScroll && ionScroll.scrollToTop && this.$util.isFunction(ionScroll.scrollToTop)){
            ionScroll.scrollToTop(500);
        }
    }

    /**
     * 是否应该显示返回顶部按钮
     *
     * @memberof BugMobMDViewBase
     */
    public isShouleBackTop = false;

    /**
     * 当前滚动条是否是停止状态
     *
     * @memberof BugMobMDViewBase
     */
    public isScrollStop = true;



    /**
     * 搜索表单状态
     *
     * @type {get}
     * @memberof BugMobMDViewBase
     */
    get searchformState(){
        return this.$store.state.searchformStatus;
    }

    /**
     * 搜索表单状态
     *
     * @type {set}
     * @memberof BugMobMDViewBase
     */
    set searchformState(val:any){
        this.$store.commit('setSearchformStatus',val); 
    }

    /**
     * 是否展开搜索表单
     *
     * @type {boolean}
     * @memberof BugMobMDViewBase
     */
    public isExpandSearchForm: boolean = false;

    /**
     * 执行搜索表单
     *
     * @memberof BugMobMDViewBase
     */
    public onSearch(): void {
        this.$store.commit('setSearchformStatus',false); 
        this.isExpandSearchForm = true;
        const form: any = this.$refs.searchform;
        if (form) {
            form.onSearch();
        }
        this.closeSearchform();
    }

    /**
     * 重置搜索表单
     *
     * @memberof BugMobMDViewBase
     */
    public onReset(): void {
        this.$store.commit('setSearchformStatus',false); 
        this.isExpandSearchForm = false;
        const form: any = this.$refs.searchform;
        if (form) {
            form.onReset();
        }
        this.closeSearchform();
    }

    /**
     * 搜索值
     *
     * @type {string}
     * @memberof BugMobMDViewBase
     */
    public query: string = '';

    /**
     * 快速搜索值变化
     *
     * @param {*} event
     * @returns
     * @memberof BugMobMDViewBase
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
            mdctrl.quickSearch(this.query);
        }
    }

   /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof BugMobMDViewBase
     */
    @Prop({ default: true }) protected isSingleSelect!: boolean;

   /**
     * 能否上拉加载
     *
     * @type {boolean}
     * @memberof BugMobMDViewBase
     */ 
    @Prop({ default: true }) public isEnablePullUp?: boolean;



    /**
     * 排序对象
     *
     * @type {*}
     * @memberof BugMobMDViewBase
     */
    public sort: any = { asc: "", desc: "" };

    /**
     * 点击优先级加主题色
     *
     * @memberof BugMobMDViewBase
     */
    public hasColor:boolean = false;

    /**
     * 排序
     *
     * @param {*} field
     * @memberof BugMobMDViewBase
     */
    public onSort(field: any) {
        if (this.sort.desc == field) {
            this.sort.desc = "";
            this.sortValue = {};
            this.onViewLoad();
            this.hasColor = false; 
            return
        }
        if (this.sort.asc == field) {
            this.sort.asc = "";
            this.sort.desc = field;
            this.sortValue = { sort: field + ",desc" };
            this.onViewLoad();
            this.hasColor = true;
        } else {
            this.sort.asc = field;
            this.sort.desc = "";
            this.sortValue = { sort: field + ",asc" };
            this.onViewLoad();
            this.hasColor = true;
        }
    }

    /**
     * 分类值
     *
     * @type {boolean}
     * @memberof BugMobMDViewBase
     */
    public categoryValue :any = {};

    /**
     * 排序值
     *
     * @type {boolean}
     * @memberof BugMobMDViewBase
     */
    public sortValue :any = {};

    /**
     * 刷新视图
     *
     * @memberof BugMobMDViewBase
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
     * @memberof BugMobMDViewBase
     */
    public openSearchform() {
      let search :any = this.$refs.searchformbugmobmdview;
      if(search){
          search.open();
      }
    }

    /**
     * 关闭搜索表单
     *
     * @memberof BugMobMDViewBase
     */
    public closeSearchform(){
      let search :any = this.$refs.searchformbugmobmdview;
      if(search){
          search.close();
      }
    }

    /**
     * 多选状态改变事件
     *
     * @memberof BugMobMDViewBase
     */
    public isChooseChange(value:any){
        this.isChoose = value;
    }

    /**
     * 多选状态
     *
     * @memberof BugMobMDViewBase
     */
    public isChoose = false;

    /**
     * 取消选择状态
     * @memberof BugMobMDViewBase
     */
    public cancelSelect() {
        this.isChooseChange(false);
    }

    /**
     * 视图加载（排序|分类）
     * @memberof BugMobMDViewBase
     */
    public onViewLoad() {
        let value = Object.assign(this.categoryValue,this.sortValue);
        this.engine.onViewEvent('mdctrl','viewload',value);
    }

    /**
     * 分类搜索
     *
     * @param {*} value
     * @memberof BugMobMDViewBase
     */
    public onCategory(value:any){
        Object.assign(this.categoryValue,value);
        this.onViewLoad();
    }
    


    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof BugMobMDViewBase
     */  
    public codeListService:CodeListService = new CodeListService();


    /**
     * 快速分组数据对象
     *
     * @memberof BugMobMDViewBase
     */
    public quickGroupData:any ={};

    /**
     * 快速分组是否有抛值
     *
     * @memberof BugMobMDViewBase
     */
    public isEmitQuickGroupValue:boolean = false;

    /**
     * 快速分组模型
     *
     * @memberof BugMobMDViewBase
     */
    public quickGroupModel:Array<any> = [];

    /**
     * 加载快速分组模型
     *
     * @memberof BugMobMDViewBase
     */
    public loadQuickGroupModel(){
        let quickGroupCodeList:any = {tag:'BugCodeList2',codelistType:'STATIC'};
        if(quickGroupCodeList.tag && Object.is(quickGroupCodeList.codelistType,"STATIC")){
            const codelist = this.$store.getters.getCodeList(quickGroupCodeList.tag);
            if (codelist) {
                this.quickGroupModel = [...this.handleDynamicData(JSON.parse(JSON.stringify(codelist.items)))];
            } else {
                console.log(`----${quickGroupCodeList.tag}----代码表不存在`);
            }
        }else if(quickGroupCodeList.tag && Object.is(quickGroupCodeList.codelistType,"DYNAMIC")){
            this.codeListService.getItems(quickGroupCodeList.tag,{},{}).then((res:any) => {
                this.quickGroupModel = res;
            }).catch((error:any) => {
                console.log(`----${quickGroupCodeList.tag}----代码表不存在`);
            });
        }
    }

    /**
     * 处理快速分组模型动态数据部分(%xxx%)
     *
     * @memberof BugMobMDViewBase
     */
    public handleDynamicData(inputArray:Array<any>){
        if(inputArray.length >0){
            inputArray.forEach((item:any) =>{
               if(item.data && Object.keys(item.data).length >0){
                   Object.keys(item.data).forEach((name:any) =>{
                        let value: any = item.data[name];
                        if (value && typeof(value)=='string' && value.startsWith('%') && value.endsWith('%')) {
                            const key = (value.substring(1, value.length - 1)).toLowerCase();
                            if (this.context[key]) {
                                value = this.context[key];
                            } else if(this.viewparams[key]){
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
     * @memberof BugMobMDViewBase
     */
    public quickGroupValueChange($event:any) {
        if($event){
            this.quickGroupData = $event.data;
            this.engine.onViewEvent('mdctrl','viewload',JSON.parse(JSON.stringify($event.data)));
        }
    }

}
</script>

<style lang='less'>
@import './bug-mob-mdview.less';
</style>