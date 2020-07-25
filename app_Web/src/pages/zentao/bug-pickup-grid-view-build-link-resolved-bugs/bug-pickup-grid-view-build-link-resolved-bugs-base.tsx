import { Subject } from 'rxjs';
import { PickupGridViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugAuthService from '@/authservice/bug/bug-auth-service';
import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';
import BugUIService from '@/uiservice/bug/bug-ui-service';

/**
 * bug选择表格视图视图基类
 *
 * @export
 * @class BugPickupGridView_buildLinkResolvedBugsBase
 * @extends {PickupGridViewBase}
 */
export class BugPickupGridView_buildLinkResolvedBugsBase extends PickupGridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    protected appEntityService: BugService = new BugService;

    /**
     * 实体权限服务对象
     *
     * @type BugUIService
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    public appUIService: BugUIService = new BugUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.pickupgridview_buildlinkresolvedbugs.caption',
        srfTitle: 'entities.bug.views.pickupgridview_buildlinkresolvedbugs.title',
        srfSubTitle: 'entities.bug.views.pickupgridview_buildlinkresolvedbugs.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
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
	protected viewtag: string = 'b4a2b69da4d3cd9c597b5113df650e00';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
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
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof BugPickupGridView_buildLinkResolvedBugsBase
     */
    protected isExpandSearchForm: boolean = true;


}