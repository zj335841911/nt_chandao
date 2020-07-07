import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import PortalViewEngine from '@engine/view/portal-view-engine';

/**
 * 项目数据看板视图视图基类
 *
 * @export
 * @class ProjectMainDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class ProjectMainDashboardViewBase extends DashboardViewBase {

    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectMainDashboardViewBase
     */
    protected appDeName: string = 'project';

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectMainDashboardViewBase
     */
    protected appEntityService: ProjectService = new ProjectService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectMainDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.project.views.maindashboardview.caption',
        srfTitle: 'entities.project.views.maindashboardview.title',
        srfSubTitle: 'entities.project.views.maindashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectMainDashboardViewBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '85ee867b09a2d6303c061d91374ec975';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectMainDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'project',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}