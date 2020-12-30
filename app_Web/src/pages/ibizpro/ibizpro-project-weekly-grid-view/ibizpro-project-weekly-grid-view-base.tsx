
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { GridViewBase } from '@/studio-core';
import IbizproProjectWeeklyService from '@/service/ibizpro-project-weekly/ibizpro-project-weekly-service';
import IbizproProjectWeeklyAuthService from '@/authservice/ibizpro-project-weekly/ibizpro-project-weekly-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import IbizproProjectWeeklyUIService from '@/uiservice/ibizpro-project-weekly/ibizpro-project-weekly-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 项目周报表格视图视图基类
 *
 * @export
 * @class IbizproProjectWeeklyGridViewBase
 * @extends {GridViewBase}
 */
export class IbizproProjectWeeklyGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    protected appDeName: string = 'ibizproprojectweekly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    protected appDeKey: string = 'ibzpro_projectweeklyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    protected appDeMajor: string = 'ibzpro_projectweeklyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectWeeklyGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IbizproProjectWeeklyService}
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    protected appEntityService: IbizproProjectWeeklyService = new IbizproProjectWeeklyService;

    /**
     * 实体权限服务对象
     *
     * @type IbizproProjectWeeklyUIService
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    public appUIService: IbizproProjectWeeklyUIService = new IbizproProjectWeeklyUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizproprojectweekly.views.gridview.caption',
        srfTitle: 'entities.ibizproprojectweekly.views.gridview.title',
        srfSubTitle: 'entities.ibizproprojectweekly.views.gridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbizproProjectWeeklyGridViewBase
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
     * @memberof IbizproProjectWeeklyGridViewBase
     */
	protected viewtag: string = '19b354cc6d7f358e9e205a17283fda3b';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectWeeklyGridViewBase
     */ 
    protected viewName: string = 'IbizproProjectWeeklyGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbizproProjectWeeklyGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbizproProjectWeeklyGridViewBase
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
            keyPSDEField: 'ibizproprojectweekly',
            majorPSDEField: 'projectweeklyname',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectWeeklyGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectWeeklyGridViewBase
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
     * @memberof IbizproProjectWeeklyGridView
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
        delete tempContext.ibizproprojectweekly;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibizproprojectweeklies', parameterName: 'ibizproprojectweekly' },
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
     * @memberof IbizproProjectWeeklyGridView
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
            { pathName: 'ibizproprojectweeklies', parameterName: 'ibizproprojectweekly' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }


}