
<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobeditview': true, 'product-mob-edit-view': true }">
    
    <ion-header>
    </ion-header>


    <ion-content>
                <view_form
            :viewState="viewState"
            viewName="ProductMobEditView"  
            :viewparams="viewparams" 
            :context="context" 
            :autosave="false" 
            :viewtag="viewtag"
            :showBusyIndicator="true"
            updateAction="Update"
            removeAction="Remove"
            loaddraftAction="GetDraft"
            loadAction="Get"
            createAction="Create"
            WFSubmitAction=""
            WFStartAction=""
            style='' 
            name="form"  
            ref='form' 
            @save="form_save($event)"  
            @beforeload="form_beforeload($event)"  
            @remove="form_remove($event)"  
            @beforesave="form_beforesave($event)"  
            @load="form_load($event)"  
            @closeview="closeView($event)">
        </view_form>
    </ion-content>
    <ion-footer class="view-footer" style="z-index:9;">
                <div  class = "bottom_menu">
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button class="app-view-toolbar-button" @click="righttoolbarModels.items1.isshow=!righttoolbarModels.items1.isshow">
            <ion-icon name="add"  ></ion-icon>
        {{$t('product.mobeditviewrighttoolbar_toolbar.items1.caption')}}
        </ion-fab-button>
        
        
        <ion-fab-list side="top">
            <ion-fab-button  @click="righttoolbar_click({ tag: 'deuiaction1' }, $event)">  <ion-icon name="close" class="group_ion-icon"></ion-icon> {{$t('product.mobeditviewrighttoolbar_toolbar.deuiaction1.caption')}} </ion-fab-button>
            <ion-fab-button  @click="righttoolbar_click({ tag: 'deuiaction2' }, $event)">  <ion-icon name="remove" class="group_ion-icon"></ion-icon> {{$t('product.mobeditviewrighttoolbar_toolbar.deuiaction2.caption')}} </ion-fab-button>
        </ion-fab-list>
        
            </ion-fab>
        </div>
    </ion-footer>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import ProductService from '@/app-core/service/product/product-service';

import MobEditViewEngine from '@engine/view/mob-edit-view-engine';


@Component({
    components: {
    },
})
export default class ProductMobEditViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ProductMobEditViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductMobEditViewBase
     */
    protected appEntityService: ProductService = new ProductService();

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof ProductMobEditViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof ProductMobEditViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof ProductMobEditViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof ProductMobEditViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof ProductMobEditViewBase
	 */
	protected viewtag: string = '984a4d5ce6ca2ede5539d44590ef20a6';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof ProductMobEditViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProductMobEditViewBase
     */
    protected viewparams: any = {};

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof ProductMobEditViewBase
     */
    protected navContext: any = { 'objecttype': 'product', 'srfparentkey': '%product%' };

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof ProductMobEditViewBase
     */
    protected navParam: any = { 'srfparentkey': '%product%', 'objecttype': 'product' };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof ProductMobEditViewBase
     */
    protected model: any = {
        srfTitle: '产品移动端编辑视图',
        srfCaption: 'product.views.mobeditview.caption',
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
     * @memberof  ProductMobEditViewBase
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
     * @memberof ProductMobEditViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
        view_righttoolbar: { name: 'righttoolbar', type: 'TOOLBAR' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof ProductMobEditViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof ProductMobEditViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;



   /**
    * 工具栏 ProductMobEditView 模型
    *
    * @type {*}
    * @memberof ProductMobEditView
    */
    public righttoolbarModels: any = {
        items1: { isshow:false, name: 'items1', caption: '更多', disabled: false, type: 'ITEMS', visabled: true, dataaccaction: '', uiaction: { } }, 
          deuiaction1: {  name: 'deuiaction1', caption: '关闭', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: 'SRFUR__PROD_CLOSED_BUT', uiaction: { tag: 'CloseProductMob', target: 'SINGLEKEY' } },
          deuiaction2: {  name: 'deuiaction2', caption: '删除', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: 'SRFUR__PROD_DELETE_BUT', uiaction: { tag: 'deleteMob', target: 'SINGLEKEY' } },

    };

    /**
     * 工具栏显示状态
     *
     * @type {boolean}
     * @memberof ProductMobEditView 
     */
    public righttoolbarShowState: boolean = false;


    /**
     * 解析视图参数
     *
     * @memberof ProductMobEditViewBase
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
     * @memberof ProductMobEditViewBase
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
     * @memberof ProductMobEditViewBase
     */
    protected engine: MobEditViewEngine = new MobEditViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof ProductMobEditViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof ProductMobEditViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * Vue声明周期
     *
     * @memberof ProductMobEditViewBase
     */
    public activated() {
        this.afterMounted();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof ProductMobEditViewBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        if(this.$route && this.$route.query && this.$route.query.bsinfo){
            const bainfo:any = JSON.parse(this.$route.query.bsinfo as string);
            Object.assign(this.viewparams,bainfo);
        }

    }

    /**
     * 销毁之前
     *
     * @memberof ProductMobEditViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof ProductMobEditViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof ProductMobEditViewBase
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
     * @memberof ProductMobEditViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof ProductMobEditViewBase
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
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductMobEditViewBase
     */
    protected form_save($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductMobEditViewBase
     */
    protected form_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforeload', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductMobEditViewBase
     */
    protected form_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 beforesave 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductMobEditViewBase
     */
    protected form_beforesave($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforesave', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductMobEditViewBase
     */
    protected form_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'load', $event);
    }

    /**
     * righttoolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductMobEditViewBase
     */
    protected righttoolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.righttoolbar_deuiaction1_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.righttoolbar_deuiaction2_click($event, '', $event2);
        }
    }


    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof ProductMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('product_ui_action');
        if (curUIService) {
            curUIService.Product_CloseProductMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof ProductMobEditViewBase
     */
    protected async righttoolbar_deuiaction2_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('product_ui_action');
        if (curUIService) {
            curUIService.Product_deleteMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ProductMobEditViewBase
     */
    protected async closeView(args: any[]): Promise<any> {
                let result = await this.cheackChange();
        if(result){
            if (this.viewDefaultUsage === "routerView") {
                this.$store.commit("deletePage", this.$route.fullPath);
                this.$router.go(-1);
            } else {
                this.$emit("close", { status: "success", action: "close", data: args instanceof MouseEvent ? null : args });
            }
        }

        
    }

    /**
     * 刷新数据
     *
     * @readonly
     * @type {(number | null)}
     * @memberof ProductMobEditViewBase
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
     * @memberof ProductMobEditViewBase
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
     * 保存
     *
     * @protected
     * @memberof ProductMobEditViewBase
     */
    protected defSave(): void {
        const _this: any = this;
        const xData: any = _this.$refs.form;
        if (xData && xData.save instanceof Function) {
            const _data = _this.viewparams;
            xData.save(_data).then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                _this.$emit('viewdataschange', [{ ...response.data }]);
            });
        } else if (_this.save && _this.save instanceof Function) {
            _this.save();
        }
    }

    /**
     * 检查表单是否修改
     *
     * @param {any[]} args
     * @memberof PimEducationMobEditViewBase
     */
    public async cheackChange(): Promise<any>{
        const view = this.$store.getters['viewaction/getAppView'](this.viewtag);
        if (view && view.viewdatachange) {
                const title: any = this.$t('app.tabpage.sureclosetip.title');
                const contant: any = this.$t('app.tabpage.sureclosetip.content');
                const result = await this.$notice.confirm(title, contant);
                if (result) {
                    this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
                    return true;
                } else {
                    return false;
                }
        }else{
            return true;
        }
    }
}
</script>

<style lang='less'>
@import './product-mob-edit-view.less';
</style>