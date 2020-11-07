
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { GridViewBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import DocLibAuthService from '@/authservice/doc-lib/doc-lib-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';
import CodeListService from "@service/app/codelist-service";


/**
 * doclib表格视图视图基类
 *
 * @export
 * @class DocLibProductGridViewBase
 * @extends {GridViewBase}
 */
export class DocLibProductGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductGridViewBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductGridViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductGridViewBase
     */ 
    protected dataControl:string = "grid";

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibProductGridViewBase
     */
    protected appEntityService: DocLibService = new DocLibService;

    /**
     * 实体权限服务对象
     *
     * @type DocLibUIService
     * @memberof DocLibProductGridViewBase
     */
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof DocLibProductGridViewBase
	 */
    protected customViewNavContexts: any = {
        'PRODUCT': { isRawValue: false, value: 'srfparentkey' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof DocLibProductGridViewBase
	 */
    protected customViewParams: any = {
        'product': { isRawValue: false, value: 'srfparentkey' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocLibProductGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.doclib.views.productgridview.caption',
        srfTitle: 'entities.doclib.views.productgridview.title',
        srfSubTitle: 'entities.doclib.views.productgridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocLibProductGridViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_grid: { name: 'grid', type: 'GRID' },
        view_searchform: { name: 'searchform', type: 'SEARCHFORM' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof DocLibProductGridView
     */
    public toolBarModels: any = {
    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductGridViewBase
     */
	protected viewtag: string = '6a667f9ae1a5096ceac93a16d1586978';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductGridViewBase
     */ 
    protected viewName:string = "DocLibProductGridView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocLibProductGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocLibProductGridViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocLibProductGridViewBase
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
            searchform: this.$refs.searchform,
            keyPSDEField: 'doclib',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProductGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProductGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProductGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProductGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProductGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProductGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProductGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProductGridViewBase
     */
    public searchform_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof DocLibProductGridView
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
     * @memberof DocLibProductGridView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 表格行数据默认激活模式
     * 0 不激活
     * 1 单击激活
     * 2 双击激活
     *
     * @protected
     * @type {(0 | 1 | 2)}
     * @memberof DocLibProductGridViewBase
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}