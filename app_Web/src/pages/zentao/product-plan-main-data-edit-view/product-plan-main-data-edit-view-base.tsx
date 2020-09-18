import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import ProductPlanService from '@/service/product-plan/product-plan-service';
import ProductPlanAuthService from '@/authservice/product-plan/product-plan-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import ProductPlanUIService from '@/uiservice/product-plan/product-plan-ui-service';

/**
 * 产品计划编辑视图视图基类
 *
 * @export
 * @class ProductPlanMainDataEditViewBase
 * @extends {EditViewBase}
 */
export class ProductPlanMainDataEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductPlanMainDataEditViewBase
     */
    protected appDeName: string = 'productplan';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductPlanMainDataEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductPlanMainDataEditViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {ProductPlanService}
     * @memberof ProductPlanMainDataEditViewBase
     */
    protected appEntityService: ProductPlanService = new ProductPlanService;

    /**
     * 实体权限服务对象
     *
     * @type ProductPlanUIService
     * @memberof ProductPlanMainDataEditViewBase
     */
    public appUIService: ProductPlanUIService = new ProductPlanUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof ProductPlanMainDataEditViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductPlanMainDataEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.productplan.views.maindataeditview.caption',
        srfTitle: 'entities.productplan.views.maindataeditview.title',
        srfSubTitle: 'entities.productplan.views.maindataeditview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductPlanMainDataEditViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_form: { name: 'form', type: 'FORM' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProductPlanMainDataEditView
     */
    public toolBarModels: any = {
        deuiaction1_newsubplan: { name: 'deuiaction1_newsubplan', caption: '子计划', 'isShowCaption': true, 'isShowIcon': true, tooltip: '子计划', iconcls: 'fa fa-sitemap', icon: '', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__PROP_CHILD_BUT', uiaction: { tag: 'NewSubPlan', target: 'SINGLEKEY', class: '' } },

        deuiaction1_mainedit: { name: 'deuiaction1_mainedit', caption: '编辑', 'isShowCaption': true, 'isShowIcon': true, tooltip: '编辑', iconcls: 'fa fa-edit', icon: '', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__PROP_EDIT_BUT', uiaction: { tag: 'MainEdit', target: 'SINGLEKEY', class: '' } },

        deuiaction1_delete: { name: 'deuiaction1_delete', caption: '删除', 'isShowCaption': true, 'isShowIcon': true, tooltip: '删除', iconcls: 'fa fa-remove', icon: '', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__PROP_DELETE_BUT', uiaction: { tag: 'Delete', target: 'SINGLEKEY', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = 'b9a10eb0b5a55e40c69c61387de5894a';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductPlanMainDataEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductPlanMainDataEditViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductPlanMainDataEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'productplan',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPlanMainDataEditViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction1_newsubplan')) {
            this.toolbar_deuiaction1_newsubplan_click(null, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_mainedit')) {
            this.toolbar_deuiaction1_mainedit_click(null, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_delete')) {
            this.toolbar_deuiaction1_delete_click(null, '', $event2);
        }
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPlanMainDataEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPlanMainDataEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPlanMainDataEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction1_newsubplan_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProductPlanUIService  = new ProductPlanUIService();
        curUIService.ProductPlan_NewSubPlan(datas,contextJO, paramJO,  $event, xData,this,"ProductPlan");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction1_mainedit_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProductPlanUIService  = new ProductPlanUIService();
        curUIService.ProductPlan_MainEdit(datas,contextJO, paramJO,  $event, xData,this,"ProductPlan");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction1_delete_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProductPlanUIService  = new ProductPlanUIService();
        curUIService.ProductPlan_Delete(datas,contextJO, paramJO,  $event, xData,this,"ProductPlan");
    }


}