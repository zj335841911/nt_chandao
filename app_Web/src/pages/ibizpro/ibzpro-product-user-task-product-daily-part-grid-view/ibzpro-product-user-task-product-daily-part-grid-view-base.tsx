
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { GridView9Base } from '@/studio-core';
import IbzproProductUserTaskService from '@/service/ibzpro-product-user-task/ibzpro-product-user-task-service';
import IbzproProductUserTaskAuthService from '@/authservice/ibzpro-product-user-task/ibzpro-product-user-task-auth-service';
import GridView9Engine from '@engine/view/grid-view9-engine';
import IbzproProductUserTaskUIService from '@/uiservice/ibzpro-product-user-task/ibzpro-product-user-task-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 产品汇报用户任务表格视图视图基类
 *
 * @export
 * @class IbzproProductUserTaskProductDailyPartGridViewBase
 * @extends {GridView9Base}
 */
export class IbzproProductUserTaskProductDailyPartGridViewBase extends GridView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    protected appDeName: string = 'ibzproproductusertask';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    protected appDeMajor: string = 'id';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IbzproProductUserTaskService}
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    protected appEntityService: IbzproProductUserTaskService = new IbzproProductUserTaskService;

    /**
     * 实体权限服务对象
     *
     * @type IbzproProductUserTaskUIService
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    public appUIService: IbzproProductUserTaskUIService = new IbzproProductUserTaskUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzproproductusertask.views.productdailypartgridview.caption',
        srfTitle: 'entities.ibzproproductusertask.views.productdailypartgridview.title',
        srfSubTitle: 'entities.ibzproproductusertask.views.productdailypartgridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
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
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
	protected viewtag: string = 'f24328f024ca560f1d741035e0e2ffd8';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */ 
    protected viewName: string = 'IbzproProductUserTaskProductDailyPartGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    public engine: GridView9Engine = new GridView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
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
            keyPSDEField: 'ibzproproductusertask',
            majorPSDEField: 'id',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
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
     * @memberof IbzproProductUserTaskProductDailyPartGridView
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
     * @memberof IbzproProductUserTaskProductDailyPartGridView
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
     * @memberof IbzproProductUserTaskProductDailyPartGridViewBase
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}