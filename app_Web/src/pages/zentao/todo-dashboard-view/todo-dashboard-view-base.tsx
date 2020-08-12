import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import TodoAuthService from '@/authservice/todo/todo-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import TodoUIService from '@/uiservice/todo/todo-ui-service';

/**
 * 待办事宜表数据看板视图视图基类
 *
 * @export
 * @class TodoDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class TodoDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TodoDashboardViewBase
     */
    protected appDeName: string = 'todo';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TodoDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TodoDashboardViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof TodoDashboardViewBase
     */
    protected appEntityService: TodoService = new TodoService;

    /**
     * 实体权限服务对象
     *
     * @type TodoUIService
     * @memberof TodoDashboardViewBase
     */
    public appUIService: TodoUIService = new TodoUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TodoDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TodoDashboardViewBase
	 */
    protected customViewNavContexts: any = {
        'NAME': { isRawValue: false, value: 'name' },
        'ASSIGNEDTO': { isRawValue: false, value: 'assignedto' },
        'DESC': { isRawValue: false, value: 'desc' },
        'OBJECTTYPE': { isRawValue: true, value: 'todo' },
        'SRFPARENTKEY': { isRawValue: false, value: 'todo' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TodoDashboardViewBase
	 */
    protected customViewParams: any = {
        'assignedto': { isRawValue: false, value: 'assignedto' },
        'desc': { isRawValue: false, value: 'desc' },
        'name': { isRawValue: false, value: 'name' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TodoDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.todo.views.dashboardview.caption',
        srfTitle: 'entities.todo.views.dashboardview.title',
        srfSubTitle: 'entities.todo.views.dashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TodoDashboardViewBase
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
	protected viewtag: string = 'ebf37bf3881bb27c09db9bbe5d0b0f77';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TodoDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TodoDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'todo',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TodoDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}