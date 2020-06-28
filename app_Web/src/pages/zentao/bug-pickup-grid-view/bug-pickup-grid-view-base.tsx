import { Subject } from 'rxjs';
import { PickupViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';

/**
 * bug选择表格视图视图基类
 *
 * @export
 * @class BugPickupGridViewBase
 * @extends {PickupViewBase}
 */
export class BugPickupGridViewBase extends PickupViewBase {

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugPickupGridViewBase
     */
    protected appEntityService: BugService = new BugService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof BugPickupGridViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugPickupGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.pickupgridview.caption',
        srfTitle: 'entities.bug.views.pickupgridview.title',
        srfSubTitle: 'entities.bug.views.pickupgridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugPickupGridViewBase
     */
    protected containerModel: any = {
        view_grid: { name: 'grid', type: 'GRID' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '1e7347f3fffc87077dd7f0156125b918';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugPickupGridViewBase
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugPickupGridViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof BugPickupGridViewBase
     */
    protected isExpandSearchForm: boolean = true;


}