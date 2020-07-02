import { Subject } from 'rxjs';
import { PickupGridViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';

/**
 * product选择表格视图视图基类
 *
 * @export
 * @class ProductPickupGridViewBase
 * @extends {PickupGridViewBase}
 */
export class ProductPickupGridViewBase extends PickupGridViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductPickupGridViewBase
     */
    protected appEntityService: ProductService = new ProductService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductPickupGridViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductPickupGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.pickupgridview.caption',
        srfTitle: 'entities.product.views.pickupgridview.title',
        srfSubTitle: 'entities.product.views.pickupgridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductPickupGridViewBase
     */
    protected containerModel: any = {
        view_grid: { name: 'grid', type: 'GRID' },
        view_searchform: { name: 'searchform', type: 'SEARCHFORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '8d53a973712c13f448efb8e2182ccc0b';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductPickupGridViewBase
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductPickupGridViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            searchform: this.$refs.searchform,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPickupGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPickupGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPickupGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPickupGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPickupGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPickupGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductPickupGridViewBase
     */
    public searchform_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof ProductPickupGridViewBase
     */
    protected isExpandSearchForm: boolean = true;


}