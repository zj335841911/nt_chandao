
import { Subject } from 'rxjs';
import { GridView9Base } from '@/studio-core';
import CaseStepService from '@/service/case-step/case-step-service';
import CaseStepAuthService from '@/authservice/case-step/case-step-auth-service';
import GridView9Engine from '@engine/view/grid-view9-engine';
import CaseStepUIService from '@/uiservice/case-step/case-step-ui-service';
import CodeListService from "@service/app/codelist-service";


/**
 * 用例步骤表格视图视图基类
 *
 * @export
 * @class CaseStepGridView9Base
 * @extends {GridView9Base}
 */
export class CaseStepGridView9Base extends GridView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CaseStepGridView9Base
     */
    protected appDeName: string = 'casestep';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof CaseStepGridView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof CaseStepGridView9Base
     */
    protected appDeMajor: string = 'expect';

    /**
     * 实体服务对象
     *
     * @type {CaseStepService}
     * @memberof CaseStepGridView9Base
     */
    protected appEntityService: CaseStepService = new CaseStepService;

    /**
     * 实体权限服务对象
     *
     * @type CaseStepUIService
     * @memberof CaseStepGridView9Base
     */
    public appUIService: CaseStepUIService = new CaseStepUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof CaseStepGridView9Base
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof CaseStepGridView9Base
     */
    protected model: any = {
        srfCaption: 'entities.casestep.views.gridview9.caption',
        srfTitle: 'entities.casestep.views.gridview9.title',
        srfSubTitle: 'entities.casestep.views.gridview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof CaseStepGridView9Base
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
	protected viewtag: string = '41bfd828761fc42ef9a7acdd4f4babcf';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof CaseStepGridView9Base
     */
    public engine: GridView9Engine = new GridView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof CaseStepGridView9Base
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
            keyPSDEField: 'casestep',
            majorPSDEField: 'expect',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepGridView9Base
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepGridView9Base
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepGridView9Base
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepGridView9Base
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepGridView9Base
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
     * @memberof CaseStepGridView9
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
     * @memberof CaseStepGridView9
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof CaseStepGridView9Base
     */
    protected isGridSingleSelect: boolean = true;
}