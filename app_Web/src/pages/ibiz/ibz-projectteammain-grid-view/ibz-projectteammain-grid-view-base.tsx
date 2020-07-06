
import { Subject } from 'rxjs';
import { GridViewBase } from '@/studio-core';
import ProjectTeamService from '@/service/project-team/project-team-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import ProjectTeamUIService from '@/uiservice/project-team/project-team-ui-service';
import CodeListService from "@service/app/codelist-service";


/**
 * 项目团队表格视图视图基类
 *
 * @export
 * @class IBZ_PROJECTTEAMMainGridViewBase
 * @extends {GridViewBase}
 */
export class IBZ_PROJECTTEAMMainGridViewBase extends GridViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProjectTeamService}
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    protected appEntityService: ProjectTeamService = new ProjectTeamService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.projectteam.views.maingridview.caption',
        srfTitle: 'entities.projectteam.views.maingridview.title',
        srfSubTitle: 'entities.projectteam.views.maingridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_grid: { name: 'grid', type: 'GRID' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof IBZ_PROJECTTEAMMainGridView
     */
    public toolBarModels: any = {
        deuiaction1_managermember: { name: 'deuiaction1_managermember', caption: '团队管理','isShowCaption':true,'isShowIcon':true, tooltip: '团队管理', iconcls: 'fa fa-users', icon: '', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'ManagerMember', target: 'NONE' }, class: '' },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '231eecf4805f0b378601ea1a7912077f';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
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
            keyPSDEField: 'projectteam',
            majorPSDEField: 'account',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction1_managermember')) {
            this.toolbar_deuiaction1_managermember_click(null, '', $event2);
        }
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZ_PROJECTTEAMMainGridViewBase
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
    public toolbar_deuiaction1_managermember_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:ProjectTeamUIService  = new ProjectTeamUIService();
        curUIService.ProjectTeam_ManagerMember(datas,contextJO, paramJO,  $event, xData,this,"ProjectTeam");
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IBZ_PROJECTTEAMMainGridView
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
     * @memberof IBZ_PROJECTTEAMMainGridView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


}