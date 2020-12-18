
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { GridViewBase } from '@/studio-core';
import CompanyStatsService from '@/service/company-stats/company-stats-service';
import CompanyStatsAuthService from '@/authservice/company-stats/company-stats-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import CompanyStatsUIService from '@/uiservice/company-stats/company-stats-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 公司动态汇总表格视图视图基类
 *
 * @export
 * @class CompanyStatsCompanyDynamicStatsGridViewBase
 * @extends {GridViewBase}
 */
export class CompanyStatsCompanyDynamicStatsGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    protected appDeName: string = 'companystats';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    protected appDeMajor: string = 'comment';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {CompanyStatsService}
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    protected appEntityService: CompanyStatsService = new CompanyStatsService;

    /**
     * 实体权限服务对象
     *
     * @type CompanyStatsUIService
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    public appUIService: CompanyStatsUIService = new CompanyStatsUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.companystats.views.companydynamicstatsgridview.caption',
        srfTitle: 'entities.companystats.views.companydynamicstatsgridview.title',
        srfSubTitle: 'entities.companystats.views.companydynamicstatsgridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    protected containerModel: any = {
        view_grid: {
            name: 'grid',
            type: 'GRID',
        },
        view_searchform: {
            name: 'searchform',
            type: 'SEARCHFORM',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
	protected viewtag: string = '59c85c1053657b4fea02d5bd53e305d8';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */ 
    protected viewName: string = 'CompanyStatsCompanyDynamicStatsGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            opendata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.opendata(args, fullargs, params, $event, xData);
            },
            newdata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.newdata(args, fullargs, params, $event, xData);
            },
            grid: this.$refs.grid,
            searchform: this.$refs.searchform,
            keyPSDEField: 'companystats',
            majorPSDEField: 'comment',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CompanyStatsCompanyDynamicStatsGridViewBase
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
     * @memberof CompanyStatsCompanyDynamicStatsGridView
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
     * @memberof CompanyStatsCompanyDynamicStatsGridView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


}