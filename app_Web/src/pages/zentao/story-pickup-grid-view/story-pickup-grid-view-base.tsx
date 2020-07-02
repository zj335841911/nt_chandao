import { Subject } from 'rxjs';
import { PickupGridViewBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';

/**
 * 需求视图基类
 *
 * @export
 * @class StoryPickupGridViewBase
 * @extends {PickupGridViewBase}
 */
export class StoryPickupGridViewBase extends PickupGridViewBase {

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryPickupGridViewBase
     */
    protected appEntityService: StoryService = new StoryService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof StoryPickupGridViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof StoryPickupGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.story.views.pickupgridview.caption',
        srfTitle: 'entities.story.views.pickupgridview.title',
        srfSubTitle: 'entities.story.views.pickupgridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof StoryPickupGridViewBase
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
	protected viewtag: string = '569cd532c6b545ffc53cf5fb93427028';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof StoryPickupGridViewBase
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof StoryPickupGridViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            keyPSDEField: 'story',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof StoryPickupGridViewBase
     */
    protected isExpandSearchForm: boolean = true;


}