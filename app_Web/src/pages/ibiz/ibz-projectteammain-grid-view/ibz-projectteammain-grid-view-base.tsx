
import { Subject } from 'rxjs';
import { GridViewBase } from '@/studio-core';
import IBZ_PROJECTTEAMService from '@/service/ibz-projectteam/ibz-projectteam-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import CodeListService from "@service/app/codelist-service";


/**
 * 项目团队表格视图视图基类
 *
 * @export
 * @class IBZ_PROJECTTEAMMainGridViewBase
 * @extends {GridViewBase}
 */
export class IBZ_PROJECTTEAMMainGridViewBase extends GridViewBase {

    /**
     * 实体服务对象
     *
     * @type {IBZ_PROJECTTEAMService}
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    protected appEntityService: IBZ_PROJECTTEAMService = new IBZ_PROJECTTEAMService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibz_projectteam.views.maingridview.caption',
        srfTitle: 'entities.ibz_projectteam.views.maingridview.title',
        srfSubTitle: 'entities.ibz_projectteam.views.maingridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_grid: { name: 'grid', type: 'GRID' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof IBZ_PROJECTTEAMMainGridView
     */
    public toolBarModels: any = {
    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '231eecf4805f0b378601ea1a7912077f';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            opendata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.opendata(args,fullargs, params, $event, xData);
            },
            newdata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.newdata(args,fullargs, params, $event, xData);
            },
            grid: this.$refs.grid,
            keyPSDEField: 'ibz_projectteam',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IBZ_PROJECTTEAMMainGridView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IBZ_PROJECTTEAMMainGridView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


}