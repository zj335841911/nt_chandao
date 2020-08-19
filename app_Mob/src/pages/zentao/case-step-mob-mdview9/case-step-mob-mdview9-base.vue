<template>
<embed-view :className="{ 'view-container': true, 'default-mode-view': true, 'demobmdview9': true, 'case-step-mob-mdview9': true }">
    <template slot="header">
    </template>
    <template slot="content">
                <view_mdctrl 
            :viewState="viewState"
            viewName="CaseStepMobMDView9"  
            :viewparams="viewparams" 
            :context="context" 
            :showBusyIndicator="true" 
            viewType="DEMOBMDVIEW9"
            controlStyle="LISTVIEW"
            updateAction="Update"
            removeAction="Remove"
            loaddraftAction=""
            loadAction="Get"
            createAction="Create"
            fetchAction="FetchMob" 
            :isMutli="!isSingleSelect"
            :showCheack="showCheack"
            @showCheackChange="showCheackChange"
            :isTempMode="false"
            name="mdctrl"  
            ref='mdctrl' 
            @selectionchange="mdctrl_selectionchange($event)"  
            @beforeload="mdctrl_beforeload($event)"  
            @rowclick="mdctrl_rowclick($event)"  
            @load="mdctrl_load($event)"  
            @closeview="closeView($event)">
        </view_mdctrl>
    </template>
    <template slot="footer">
        
    </template>
</embed-view>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import CaseStepService from '@/app-core/service/case-step/case-step-service';

import MobMDView9Engine from '@engine/view/mob-mdview9-engine';


@Component({
    components: {
    },
})
export default class CaseStepMobMDView9Base extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof CaseStepMobMDView9Base
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {CaseStepService}
     * @memberof CaseStepMobMDView9Base
     */
    protected appEntityService: CaseStepService = new CaseStepService();

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof CaseStepMobMDView9Base
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof CaseStepMobMDView9Base
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof CaseStepMobMDView9Base
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof CaseStepMobMDView9Base
     */
    @Prop({ default: true }) protected viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof CaseStepMobMDView9Base
	 */
	protected viewtag: string = '28612624399832452f33d925194af274';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof CaseStepMobMDView9Base
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof CaseStepMobMDView9Base
     */
    protected viewparams: any = {};

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof CaseStepMobMDView9Base
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof CaseStepMobMDView9Base
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof CaseStepMobMDView9Base
     */
    protected model: any = {
        srfTitle: '用例步骤移动端多数据视图',
        srfCaption: 'casestep.views.mobmdview9.caption',
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
     * @memberof  CaseStepMobMDView9Base
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
     * 容器模型
     *
     * @type {*}
     * @memberof CaseStepMobMDView9Base
     */
    protected containerModel: any = {
        view_mdctrl: { name: 'mdctrl', type: 'MOBMDCTRL' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof CaseStepMobMDView9Base
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof CaseStepMobMDView9Base
     */
    @Prop({default:true}) protected showTitle?: boolean;


    /**
     * 解析视图参数
     *
     * @memberof CaseStepMobMDView9Base
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
     * @memberof CaseStepMobMDView9Base
     */
    get isShowBackButton(): boolean {
        // 存在路由，非路由使用，嵌入
        if (!this.viewDefaultUsage) {
            return false;
        }
        return true;
    }

    /**
     * 视图引擎
     *
     * @type {Engine}
     * @memberof CaseStepMobMDView9Base
     */
    protected engine: MobMDView9Engine = new MobMDView9Engine();

    /**
     * 引擎初始化
     *
     * @memberof CaseStepMobMDView9Base
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
            keyPSDEField: 'casestep',
            majorPSDEField: 'expect',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof CaseStepMobMDView9Base
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * Vue声明周期
     *
     * @memberof CaseStepMobMDView9Base
     */
    public activated() {
        this.afterMounted();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof CaseStepMobMDView9Base
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        if (this.formDruipart) {
            this.formDruipart.subscribe(($event: any) => {
                if (Object.is($event.action, 'load')) {
                    let opt = { data: $event.data }
                    Object.assign(opt, this.context);
                    this.viewState.next({ tag: 'mdctrl', action: 'load', data: {} })
                }
            });
        }

    }

    /**
     * 销毁之前
     *
     * @memberof CaseStepMobMDView9Base
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof CaseStepMobMDView9Base
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof CaseStepMobMDView9Base
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }

    }

    /**
     * 销毁视图回调
     *
     * @memberof CaseStepMobMDView9Base
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof CaseStepMobMDView9Base
     */
    protected afterDestroyed(){
        if (this.formDruipart) {
            this.formDruipart.unsubscribe();
        }

    }

    /**
     * mdctrl 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepMobMDView9Base
     */
    protected mdctrl_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'selectionchange', $event);
    }

    /**
     * mdctrl 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepMobMDView9Base
     */
    protected mdctrl_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'beforeload', $event);
    }

    /**
     * mdctrl 部件 rowclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepMobMDView9Base
     */
    protected mdctrl_rowclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'rowclick', $event);
    }

    /**
     * mdctrl 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepMobMDView9Base
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
     * @memberof CaseStepMobMDView9
     */
    public async newdata(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        this.$notice.warning('未指定关系视图');
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
     * @memberof CaseStepMobMDView9
     */
    public async opendata(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        this.$notice.warning('未指定关系视图');
    }


    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof CaseStepMobMDView9Base
     */
    protected async closeView(args: any[]): Promise<any> {
        if (this.viewDefaultUsage) {
            this.$store.commit("deletePage", this.$route.fullPath);
            this.$router.go(-1);
        } else {
            this.$emit("close", { status: "success", action: "close", data: args instanceof MouseEvent ? null : args });
        }
        
    }

    /**
     * 刷新数据
     *
     * @readonly
     * @type {(number | null)}
     * @memberof CaseStepMobMDView9Base
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
     * @memberof CaseStepMobMDView9Base
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
     *  app-form-druipart 组件订阅对象
     *
     * @type {Subject}
     * @memberof CaseStepMobMDView9Base
     */
    @Prop() public formDruipart !: Subject<ViewState>;


    /**
     * 搜索值
     *
     * @type {string}
     * @memberof CaseStepMobMDView9Base
     */
    public query: string = '';

    /**
     * 快速搜索值变化
     *
     * @param {*} event
     * @returns
     * @memberof CaseStepMobMDView9Base
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
     * @memberof CaseStepMobMDView9Base
     */
    @Prop({ default: true }) protected isSingleSelect!: boolean;

    /**
     * 分类值
     *
     * @type {boolean}
     * @memberof CaseStepMobMDView9Base
     */
    public categoryValue :any = {};

    /**
     * 排序值
     *
     * @type {boolean}
     * @memberof CaseStepMobMDView9Base
     */
    public sortValue :any = {};

    /**
     * 刷新视图
     *
     * @memberof CaseStepMobMDView9Base
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
     * @memberof CaseStepMobMDView9Base
     */
    public openSearchform() {
      let search :any = this.$refs.searchformcasestepmobmdview9;
      if(search){
          search.open();
      }
    }

    /**
     * 关闭搜索表单
     *
     * @memberof CaseStepMobMDView9Base
     */
    public closeSearchform(){
      let search :any = this.$refs.searchformcasestepmobmdview9;
      if(search){
          search.close();
      }
    }

    /**
     * 多选状态改变事件
     *
     * @memberof CaseStepMobMDView9Base
     */
    public showCheackChange(value:any){
        this.showCheack = value;
    }

    /**
     * 多选状态
     *
     * @memberof CaseStepMobMDView9Base
     */
    public showCheack = false;

    /**
     * 取消选择状态
     * @memberof CaseStepMobMDView9Base
     */
    public cancelSelect() {
        this.showCheackChange(false);
    }

    /**
     * 视图加载（排序|分类）
     * @memberof CaseStepMobMDView9Base
     */
    public onViewLoad() {
        let value = Object.assign(this.categoryValue,this.sortValue);
        this.engine.onViewEvent('mdctrl','viewload',value);
    }

    /**
     * 分类搜索
     *
     * @param {*} value
     * @memberof MOBENTITYHDLBBase
     */
    public onCategory(value:any){
        this.categoryValue = value;
        this.onViewLoad();
    }


}
</script>

<style lang='less'>
@import './case-step-mob-mdview9.less';
</style>