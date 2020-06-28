import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import TestSuiteService from '@/service/test-suite/test-suite-service';
import PortalViewEngine from '@engine/view/portal-view-engine';

/**
 * 测试套件数据看板视图视图基类
 *
 * @export
 * @class TestSuiteMainDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class TestSuiteMainDashboardViewBase extends DashboardViewBase {

    /**
     * 实体服务对象
     *
     * @type {TestSuiteService}
     * @memberof TestSuiteMainDashboardViewBase
     */
    protected appEntityService: TestSuiteService = new TestSuiteService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestSuiteMainDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestSuiteMainDashboardViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'testsuite' },
        'SRFPARENTKEY': { isRawValue: false, value: 'testsuite' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestSuiteMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testsuite.views.maindashboardview.caption',
        srfTitle: 'entities.testsuite.views.maindashboardview.title',
        srfSubTitle: 'entities.testsuite.views.maindashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestSuiteMainDashboardViewBase
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
	protected viewtag: string = 'c2e4200fb7c9760b4931b43561289980';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestSuiteMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestSuiteMainDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'testsuite',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestSuiteMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}