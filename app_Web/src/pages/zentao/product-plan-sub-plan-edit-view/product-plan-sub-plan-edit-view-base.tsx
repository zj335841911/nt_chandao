import { Subject } from 'rxjs';
import { EditViewBase } from '@/studio-core';
import SubProductPlanService from '@/service/sub-product-plan/sub-product-plan-service';
import EditViewEngine from '@engine/view/edit-view-engine';

/**
 * 子计划视图基类
 *
 * @export
 * @class ProductPlanSubPlanEditViewBase
 * @extends {EditViewBase}
 */
export class ProductPlanSubPlanEditViewBase extends EditViewBase {

    /**
     * 实体服务对象
     *
     * @type {SubProductPlanService}
     * @memberof ProductPlanSubPlanEditViewBase
     */
    protected appEntityService: SubProductPlanService = new SubProductPlanService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductPlanSubPlanEditViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductPlanSubPlanEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.subproductplan.views.subplaneditview.caption',
        srfTitle: 'entities.subproductplan.views.subplaneditview.title',
        srfSubTitle: 'entities.subproductplan.views.subplaneditview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductPlanSubPlanEditViewBase
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
	protected viewtag: string = '54c7ba4afb6222c4c0af04a78a0592df';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductPlanSubPlanEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductPlanSubPlanEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'subproductplan',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPlanSubPlanEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPlanSubPlanEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPlanSubPlanEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}