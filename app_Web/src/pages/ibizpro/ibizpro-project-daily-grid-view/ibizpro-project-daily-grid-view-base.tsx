
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { GridViewBase } from '@/studio-core';
import IbizproProjectDailyService from '@/service/ibizpro-project-daily/ibizpro-project-daily-service';
import IbizproProjectDailyAuthService from '@/authservice/ibizpro-project-daily/ibizpro-project-daily-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import IbizproProjectDailyUIService from '@/uiservice/ibizpro-project-daily/ibizpro-project-daily-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 项目日报表格视图视图基类
 *
 * @export
 * @class IbizproProjectDailyGridViewBase
 * @extends {GridViewBase}
 */
export class IbizproProjectDailyGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectDailyGridViewBase
     */
    protected appDeName: string = 'ibizproprojectdaily';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectDailyGridViewBase
     */
    protected appDeKey: string = 'ibizpro_projectdailyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectDailyGridViewBase
     */
    protected appDeMajor: string = 'ibizpro_projectdailyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectDailyGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IbizproProjectDailyService}
     * @memberof IbizproProjectDailyGridViewBase
     */
    protected appEntityService: IbizproProjectDailyService = new IbizproProjectDailyService;

    /**
     * 实体权限服务对象
     *
     * @type IbizproProjectDailyUIService
     * @memberof IbizproProjectDailyGridViewBase
     */
    public appUIService: IbizproProjectDailyUIService = new IbizproProjectDailyUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof IbizproProjectDailyGridViewBase
	 */
    protected customViewParams: any = {
        'n_pm_eq': {
            isRawValue: false,
            value: 'srfloginname',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbizproProjectDailyGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizproprojectdaily.views.gridview.caption',
        srfTitle: 'entities.ibizproprojectdaily.views.gridview.title',
        srfSubTitle: 'entities.ibizproprojectdaily.views.gridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbizproProjectDailyGridViewBase
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
     * @memberof IbizproProjectDailyGridView
     */
    public toolBarModels: any = {
        deuiaction1_manualcreatedaily: { name: 'deuiaction1_manualcreatedaily', caption: 'entities.ibizproprojectdaily.gridviewtoolbar_toolbar.deuiaction1_manualcreatedaily.caption', 'isShowCaption': false, 'isShowIcon': true, tooltip: 'entities.ibizproprojectdaily.gridviewtoolbar_toolbar.deuiaction1_manualcreatedaily.tip', iconcls: 'fa fa-plus', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'ManualCreateDaily', target: 'NONE', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectDailyGridViewBase
     */
	protected viewtag: string = 'ad54d5021cc21a2ec7eb02ac05cf402e';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectDailyGridViewBase
     */ 
    protected viewName: string = 'IbizproProjectDailyGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbizproProjectDailyGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbizproProjectDailyGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbizproProjectDailyGridViewBase
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
            keyPSDEField: 'ibizproprojectdaily',
            majorPSDEField: 'ibizproprojectdailyname',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyGridViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction1_manualcreatedaily')) {
            this.toolbar_deuiaction1_manualcreatedaily_click(null, '', $event2);
        }
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyGridViewBase
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
    public toolbar_deuiaction1_manualcreatedaily_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:IbizproProjectDailyUIService  = new IbizproProjectDailyUIService();
        curUIService.IbizproProjectDaily_ManualCreateDaily(datas,contextJO, paramJO,  $event, xData,this,"IbizproProjectDaily");
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IbizproProjectDailyGridView
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
        delete tempContext.ibizproprojectdaily;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibizproprojectdailies', parameterName: 'ibizproprojectdaily' },
        ];
        const _this: any = this;
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = this.$appdrawer.openDrawer(view, tempContext, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'ibizpro-project-daily-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.ibizproprojectdaily.views.editview.title'),
            placement: 'DRAWER_TOP',
        };
        openDrawer(view, data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IbizproProjectDailyGridView
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
            { pathName: 'ibizproprojectdailies', parameterName: 'ibizproprojectdaily' },
        ];
        const _this: any = this;
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = this.$appdrawer.openDrawer(view, tempContext, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'ibizpro-project-daily-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.ibizproprojectdaily.views.editview.title'),
            placement: 'DRAWER_TOP',
        };
        openDrawer(view, data);
    }


}