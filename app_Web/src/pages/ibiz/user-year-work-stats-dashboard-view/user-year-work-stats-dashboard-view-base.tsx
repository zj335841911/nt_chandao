import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import UserYearWorkStatsAuthService from '@/authservice/user-year-work-stats/user-year-work-stats-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import UserYearWorkStatsUIService from '@/uiservice/user-year-work-stats/user-year-work-stats-ui-service';

/**
 * 用户年度工作内容统计数据看板视图视图基类
 *
 * @export
 * @class UserYearWorkStatsDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class UserYearWorkStatsDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsDashboardViewBase
     */
    protected appDeName: string = 'useryearworkstats';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsDashboardViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof UserYearWorkStatsDashboardViewBase
     */
    protected appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService;

    /**
     * 实体权限服务对象
     *
     * @type UserYearWorkStatsUIService
     * @memberof UserYearWorkStatsDashboardViewBase
     */
    public appUIService: UserYearWorkStatsUIService = new UserYearWorkStatsUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof UserYearWorkStatsDashboardViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof UserYearWorkStatsDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.useryearworkstats.views.dashboardview.caption',
        srfTitle: 'entities.useryearworkstats.views.dashboardview.title',
        srfSubTitle: 'entities.useryearworkstats.views.dashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof UserYearWorkStatsDashboardViewBase
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
	protected viewtag: string = 'a300309f336ad917bb9fae375cd5620a';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof UserYearWorkStatsDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof UserYearWorkStatsDashboardViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof UserYearWorkStatsDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'useryearworkstats',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserYearWorkStatsDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}