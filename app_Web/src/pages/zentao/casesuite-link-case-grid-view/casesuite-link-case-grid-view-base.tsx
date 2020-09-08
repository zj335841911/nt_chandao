
import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { GridViewBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import CaseAuthService from '@/authservice/case/case-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import CaseUIService from '@/uiservice/case/case-ui-service';
import CodeListService from "@service/app/codelist-service";


/**
 * 测试用例表格视图（关联用例）视图基类
 *
 * @export
 * @class CasesuiteLinkCaseGridViewBase
 * @extends {GridViewBase}
 */
export class CasesuiteLinkCaseGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    protected appEntityService: CaseService = new CaseService;

    /**
     * 实体权限服务对象
     *
     * @type CaseUIService
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    public appUIService: CaseUIService = new CaseUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof CasesuiteLinkCaseGridViewBase
	 */
    protected customViewNavContexts: any = {
        'SUITE': { isRawValue: false, value: 'suite' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof CasesuiteLinkCaseGridViewBase
	 */
    protected customViewParams: any = {
        'suite': { isRawValue: false, value: 'suite' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.case.views.suitelinkcasegridview.caption',
        srfTitle: 'entities.case.views.suitelinkcasegridview.title',
        srfSubTitle: 'entities.case.views.suitelinkcasegridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof CasesuiteLinkCaseGridViewBase
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
     * @memberof CasesuiteLinkCaseGridView
     */
    public toolBarModels: any = {
        deuiaction1_suitelinkcase: { name: 'deuiaction1_suitelinkcase', caption: '保存', 'isShowCaption': true, 'isShowIcon': true, tooltip: '保存', iconcls: 'fa fa-link', icon: '', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TESTSU_LINKCASE_BUT', uiaction: { tag: 'suitelinkCase', target: 'MULTIKEY', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = 'e53ca619c1e2592cff68b05a9a64ff0f';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof CasesuiteLinkCaseGridViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof CasesuiteLinkCaseGridViewBase
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
            keyPSDEField: 'case',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction1_suitelinkcase')) {
            this.toolbar_deuiaction1_suitelinkcase_click(null, '', $event2);
        }
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CasesuiteLinkCaseGridViewBase
     */
    public searchform_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction1_suitelinkcase_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.grid;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:CaseUIService  = new CaseUIService();
        curUIService.Case_suitelinkCase(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof CasesuiteLinkCaseGridView
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
        delete tempContext.case;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        let deResParameters: any[] = [];
        if(tempContext.product && true){
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'cases', parameterName: 'case' },
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
     * @memberof CasesuiteLinkCaseGridView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const localContext: any = null;
        const localViewParam: any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        let deResParameters: any[] = [];
        if(tempContext.product && true){
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'cases', parameterName: 'case' },
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