
import { Subject } from 'rxjs';
import { GridViewBase } from '@/studio-core';
import TaskEstimateService from '@/service/task-estimate/task-estimate-service';
import TaskEstimateAuthService from '@/authservice/task-estimate/task-estimate-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import TaskEstimateUIService from '@/uiservice/task-estimate/task-estimate-ui-service';
import CodeListService from "@service/app/codelist-service";


/**
 * taskestimate表格视图视图基类
 *
 * @export
 * @class TaskEstimateGridViewBase
 * @extends {GridViewBase}
 */
export class TaskEstimateGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateGridViewBase
     */
    protected appDeName: string = 'taskestimate';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateGridViewBase
     */
    protected appDeMajor: string = 'id';

    /**
     * 实体服务对象
     *
     * @type {TaskEstimateService}
     * @memberof TaskEstimateGridViewBase
     */
    protected appEntityService: TaskEstimateService = new TaskEstimateService;

    /**
     * 实体权限服务对象
     *
     * @type TaskEstimateUIService
     * @memberof TaskEstimateGridViewBase
     */
    public appUIService: TaskEstimateUIService = new TaskEstimateUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TaskEstimateGridViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskEstimateGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.taskestimate.views.gridview.caption',
        srfTitle: 'entities.taskestimate.views.gridview.title',
        srfSubTitle: 'entities.taskestimate.views.gridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskEstimateGridViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_grid: { name: 'grid', type: 'GRID' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof TaskEstimateGridView
     */
    public toolBarModels: any = {
        deuiaction2: { name: 'deuiaction2', caption: '新建行', 'isShowCaption': true, 'isShowIcon': true, tooltip: '新建行', iconcls: 'fa fa-plus', icon: '', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'NewRow', target: '', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '69fa6ad7cf2e6502d04d18f025f24bb7';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskEstimateGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskEstimateGridViewBase
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
            keyPSDEField: 'taskestimate',
            majorPSDEField: 'id',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateGridViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction2')) {
            this.toolbar_deuiaction2_click(null, '', $event2);
        }
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
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
        this.NewRow(datas, contextJO,paramJO,  $event, xData,this,"TaskEstimate");
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TaskEstimateGridView
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
     * @memberof TaskEstimateGridView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 新建行
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof TaskEstimateGridViewBase
     */
    public NewRow(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        const data: any = {};
        if (_this.hasOwnProperty('newRow') && _this.newRow instanceof Function) {
            _this.newRow([{ ...data }], params, $event, xData);
        } else if(xData.newRow && xData.newRow instanceof Function) {
            xData.newRow([{ ...data }], params, $event, xData);
        }else{
            _this.$Notice.error({ title: '错误', desc: 'newRow 视图处理逻辑不存在，请添加!' });
        }
    }

    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof TaskEstimateGridViewBase
     */
    protected isGridSingleSelect: boolean = true;
}