import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import PortalViewEngine from '@engine/view/portal-view-engine';

/**
 * 测试版本数据看板视图视图基类
 *
 * @export
 * @class TestTaskMainDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class TestTaskMainDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestTaskMainDashboardViewBase
     */
    protected appDeName: string = 'testtask';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestTaskMainDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestTaskMainDashboardViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof TestTaskMainDashboardViewBase
     */
    protected appEntityService: TestTaskService = new TestTaskService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestTaskMainDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestTaskMainDashboardViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'testtask' },
        'SRFPARENTKEY': { isRawValue: false, value: 'testtask' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestTaskMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testtask.views.maindashboardview.caption',
        srfTitle: 'entities.testtask.views.maindashboardview.title',
        srfSubTitle: 'entities.testtask.views.maindashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestTaskMainDashboardViewBase
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
	protected viewtag: string = '7cba1f165fc6b4948ce752d3c3b68a34';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestTaskMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestTaskMainDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'testtask',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestTaskMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}