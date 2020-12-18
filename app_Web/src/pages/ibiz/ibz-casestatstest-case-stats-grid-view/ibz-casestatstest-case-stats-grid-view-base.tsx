
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { GridViewBase } from '@/studio-core';
import IBZ_CASESTATSService from '@/service/ibz-casestats/ibz-casestats-service';
import IBZ_CASESTATSAuthService from '@/authservice/ibz-casestats/ibz-casestats-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import IBZ_CASESTATSUIService from '@/uiservice/ibz-casestats/ibz-casestats-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 测试用例统计表格视图视图基类
 *
 * @export
 * @class IBZ_CASESTATSTestCaseStatsGridViewBase
 * @extends {GridViewBase}
 */
export class IBZ_CASESTATSTestCaseStatsGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    protected appDeName: string = 'ibz_casestats';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IBZ_CASESTATSService}
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    protected appEntityService: IBZ_CASESTATSService = new IBZ_CASESTATSService;

    /**
     * 实体权限服务对象
     *
     * @type IBZ_CASESTATSUIService
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    public appUIService: IBZ_CASESTATSUIService = new IBZ_CASESTATSUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibz_casestats.views.testcasestatsgridview.caption',
        srfTitle: 'entities.ibz_casestats.views.testcasestatsgridview.title',
        srfSubTitle: 'entities.ibz_casestats.views.testcasestatsgridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    protected containerModel: any = {
        view_toolbar: {
            name: 'toolbar',
            type: 'TOOLBAR',
        },
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
     * 工具栏模型
     *
     * @type {*}
     * @memberof IBZ_CASESTATSTestCaseStatsGridView
     */
    public toolBarModels: any = {
        deuiaction7: { name: 'deuiaction7', caption: 'entities.ibz_casestats.testcasestatsgridviewtoolbar_toolbar.deuiaction7.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.ibz_casestats.testcasestatsgridviewtoolbar_toolbar.deuiaction7.tip', iconcls: 'fa fa-file-excel-o', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'ExportExcel', target: '' }, MaxRowCount: 1000, class: '' },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
	protected viewtag: string = 'bc06c199f827cebb36cfd2a5128e1bca';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */ 
    protected viewName: string = 'IBZ_CASESTATSTestCaseStatsGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
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
            keyPSDEField: 'ibz_casestats',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction7')) {
            this.toolbar_deuiaction7_click(null, '', $event2);
        }
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
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
    public toolbar_deuiaction7_click(params: any = {}, tag?: any, $event?: any) {
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
        this.ExportExcel(datas, contextJO,paramJO,  $event, xData,this,"IBZ_CASESTATS");
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IBZ_CASESTATSTestCaseStatsGridView
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
     * @memberof IBZ_CASESTATSTestCaseStatsGridView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 导出
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof IBZ_CASESTATSTestCaseStatsGridViewBase
     */
    public ExportExcel(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (!xData || !(xData.exportExcel instanceof Function) || !$event) {
            return ;
        }
        xData.exportExcel($event.exportparms);
    }
}