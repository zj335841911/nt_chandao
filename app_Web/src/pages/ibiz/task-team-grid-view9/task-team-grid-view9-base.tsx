
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridView9Base } from '@/studio-core';
import IBZTaskTeamService from '@/service/ibztask-team/ibztask-team-service';
import IBZTaskTeamAuthService from '@/authservice/ibztask-team/ibztask-team-auth-service';
import GridView9Engine from '@engine/view/grid-view9-engine';
import IBZTaskTeamUIService from '@/uiservice/ibztask-team/ibztask-team-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 团队视图基类
 *
 * @export
 * @class TaskTeamGridView9Base
 * @extends {GridView9Base}
 */
export class TaskTeamGridView9Base extends GridView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9Base
     */
    protected appDeName: string = 'ibztaskteam';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9Base
     */
    protected appDeMajor: string = 'account';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9Base
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IBZTaskTeamService}
     * @memberof TaskTeamGridView9Base
     */
    protected appEntityService: IBZTaskTeamService = new IBZTaskTeamService;

    /**
     * 实体权限服务对象
     *
     * @type IBZTaskTeamUIService
     * @memberof TaskTeamGridView9Base
     */
    public appUIService: IBZTaskTeamUIService = new IBZTaskTeamUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskTeamGridView9Base
	 */
    protected customViewNavContexts: any = {
        'PROJECT': {
            isRawValue: false,
            value: 'project',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskTeamGridView9Base
	 */
    protected customViewParams: any = {
        'project': {
            isRawValue: false,
            value: 'project',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskTeamGridView9Base
     */
    protected model: any = {
        srfCaption: 'entities.ibztaskteam.views.gridview9.caption',
        srfTitle: 'entities.ibztaskteam.views.gridview9.title',
        srfSubTitle: 'entities.ibztaskteam.views.gridview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskTeamGridView9Base
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
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof TaskTeamGridView9
     */
    public toolBarModels: any = {
        deuiaction2: { name: 'deuiaction2', caption: 'entities.ibztaskteam.gridview9toolbar_toolbar.deuiaction2.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.ibztaskteam.gridview9toolbar_toolbar.deuiaction2.tip', iconcls: 'fa fa-plus', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__UNIVERSALCREATE', uiaction: { tag: 'NewRow', target: '', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9Base
     */
	protected viewtag: string = 'd1339f33d3d82d7b6993e510b20fddbe';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9Base
     */ 
    protected viewName: string = 'TaskTeamGridView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskTeamGridView9Base
     */
    public engine: GridView9Engine = new GridView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskTeamGridView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskTeamGridView9Base
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
            keyPSDEField: 'ibztaskteam',
            majorPSDEField: 'account',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamGridView9Base
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
     * @memberof TaskTeamGridView9Base
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamGridView9Base
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamGridView9Base
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamGridView9Base
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamGridView9Base
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
        this.NewRow(datas, contextJO,paramJO,  $event, xData,this,"IBZTaskTeam");
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TaskTeamGridView9
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
     * @memberof TaskTeamGridView9
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
     * @memberof TaskTeamGridView9Base
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
     * @memberof TaskTeamGridView9Base
     */
    protected isGridSingleSelect: boolean = true;

    /**
     * 表格行数据默认激活模式
     * 0 不激活
     * 1 单击激活
     * 2 双击激活
     *
     * @protected
     * @type {(0 | 1 | 2)}
     * @memberof TaskTeamGridView9Base
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}