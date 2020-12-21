
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { GridViewBase } from '@/studio-core';
import ProjectStatsService from '@/service/project-stats/project-stats-service';
import ProjectStatsAuthService from '@/authservice/project-stats/project-stats-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import ProjectStatsUIService from '@/uiservice/project-stats/project-stats-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 项目统计表格视图视图基类
 *
 * @export
 * @class ProjectStatsProjectStoryStageStatusGridViewBase
 * @extends {GridViewBase}
 */
export class ProjectStatsProjectStoryStageStatusGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    protected appDeName: string = 'projectstats';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {ProjectStatsService}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    protected appEntityService: ProjectStatsService = new ProjectStatsService;

    /**
     * 实体权限服务对象
     *
     * @type ProjectStatsUIService
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    public appUIService: ProjectStatsUIService = new ProjectStatsUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.projectstats.views.projectstorystagestatusgridview.caption',
        srfTitle: 'entities.projectstats.views.projectstorystagestatusgridview.title',
        srfSubTitle: 'entities.projectstats.views.projectstorystagestatusgridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    protected containerModel: any = {
        view_grid: {
            name: 'grid',
            type: 'GRID',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
	protected viewtag: string = '16ddc45f2ef8c888e3143d72c076b457';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */ 
    protected viewName: string = 'ProjectStatsProjectStoryStageStatusGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
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
            keyPSDEField: 'projectstats',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
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
     * @memberof ProjectStatsProjectStoryStageStatusGridView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
        const data: any = {};
        if(args[0].srfsourcekey){
            data.srfsourcekey = args[0].srfsourcekey;
        }
        if(fullargs && (fullargs as any).copymode) {
            Object.assign(data, { copymode: (fullargs as any).copymode });
        }
        let tempContext = JSON.parse(JSON.stringify(this.context));
        delete tempContext.projectstats;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'projectstats', parameterName: 'projectstats' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const _data: any = { w: (new Date().getTime()) };
            Object.assign(_data, data);
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, _data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProjectStatsProjectStoryStageStatusGridView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const localContext: any = null;
        const localViewParam: any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'projectstats', parameterName: 'projectstats' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    protected isGridSingleSelect: boolean = true;

    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    protected isExpandSearchForm: boolean = true;

    /**
     * 表格行数据默认激活模式
     * 0 不激活
     * 1 单击激活
     * 2 双击激活
     *
     * @protected
     * @type {(0 | 1 | 2)}
     * @memberof ProjectStatsProjectStoryStageStatusGridViewBase
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}