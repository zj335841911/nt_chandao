
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { GridViewBase } from '@/studio-core';
import CaseStatsService from '@/service/case-stats/case-stats-service';
import CaseStatsAuthService from '@/authservice/case-stats/case-stats-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import CaseStatsUIService from '@/uiservice/case-stats/case-stats-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 测试用例统计表格视图视图基类
 *
 * @export
 * @class CaseStatsTestCaseStatsGridViewBase
 * @extends {GridViewBase}
 */
export class CaseStatsTestCaseStatsGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    protected appDeName: string = 'casestats';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {CaseStatsService}
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    protected appEntityService: CaseStatsService = new CaseStatsService;

    /**
     * 实体权限服务对象
     *
     * @type CaseStatsUIService
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    public appUIService: CaseStatsUIService = new CaseStatsUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.casestats.views.testcasestatsgridview.caption',
        srfTitle: 'entities.casestats.views.testcasestatsgridview.title',
        srfSubTitle: 'entities.casestats.views.testcasestatsgridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof CaseStatsTestCaseStatsGridViewBase
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
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
	protected viewtag: string = 'bc06c199f827cebb36cfd2a5128e1bca';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */ 
    protected viewName: string = 'CaseStatsTestCaseStatsGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof CaseStatsTestCaseStatsGridViewBase
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
            keyPSDEField: 'casestats',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStatsTestCaseStatsGridViewBase
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
     * @memberof CaseStatsTestCaseStatsGridView
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
     * @memberof CaseStatsTestCaseStatsGridView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    protected isGridSingleSelect: boolean = true;

    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof CaseStatsTestCaseStatsGridViewBase
     */
    protected isExpandSearchForm: boolean = true;
}