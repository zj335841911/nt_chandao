import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
import TestReportAuthService from '@/authservice/test-report/test-report-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import TestReportUIService from '@/uiservice/test-report/test-report-ui-service';

/**
 * 测试报告数据看板视图视图基类
 *
 * @export
 * @class TestReportDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class TestReportDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestReportDashboardViewBase
     */
    protected appDeName: string = 'testreport';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestReportDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestReportDashboardViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {TestReportService}
     * @memberof TestReportDashboardViewBase
     */
    protected appEntityService: TestReportService = new TestReportService;

    /**
     * 实体权限服务对象
     *
     * @type TestReportUIService
     * @memberof TestReportDashboardViewBase
     */
    public appUIService: TestReportUIService = new TestReportUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestReportDashboardViewBase
	 */
    protected customViewNavContexts: any = {
        'SRFPARENTKEY': { isRawValue: false, value: 'srfparentkey' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestReportDashboardViewBase
	 */
    protected customViewParams: any = {
        'srfparentkey': { isRawValue: false, value: 'srfparentkey' }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof TestReportDashboardViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestReportDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testreport.views.dashboardview.caption',
        srfTitle: 'entities.testreport.views.dashboardview.title',
        srfSubTitle: 'entities.testreport.views.dashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestReportDashboardViewBase
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
	protected viewtag: string = '42aa867a5dbd04d53462fa69b0e43296';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestReportDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TestReportDashboardViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestReportDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'testreport',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}