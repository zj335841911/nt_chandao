import { Subject } from 'rxjs';
import { EditViewBase } from '@/studio-core';
import ProductPlanService from '@/service/product-plan/product-plan-service';
import EditViewEngine from '@engine/view/edit-view-engine';

/**
 * 计划详情视图基类
 *
 * @export
 * @class ProductPlanMainEditViewBase
 * @extends {EditViewBase}
 */
export class ProductPlanMainEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductPlanMainEditViewBase
     */
    protected appDeName: string = 'productplan';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductPlanMainEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductPlanMainEditViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {ProductPlanService}
     * @memberof ProductPlanMainEditViewBase
     */
    protected appEntityService: ProductPlanService = new ProductPlanService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductPlanMainEditViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductPlanMainEditViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'productplan' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductPlanMainEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.productplan.views.maineditview.caption',
        srfTitle: 'entities.productplan.views.maineditview.title',
        srfSubTitle: 'entities.productplan.views.maineditview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductPlanMainEditViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '17831eefddbb65ba3bda7534b8ef8d09';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductPlanMainEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductPlanMainEditViewBase
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
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPlanMainEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPlanMainEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPlanMainEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}