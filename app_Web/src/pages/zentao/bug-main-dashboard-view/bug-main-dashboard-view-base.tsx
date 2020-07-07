import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import PortalViewEngine from '@engine/view/portal-view-engine';

/**
 * Bug数据看板视图视图基类
 *
 * @export
 * @class BugMainDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class BugMainDashboardViewBase extends DashboardViewBase {

    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugMainDashboardViewBase
     */
    protected appDeName: string = 'bug';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugMainDashboardViewBase
     */
    protected appEntityService: BugService = new BugService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof BugMainDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BugMainDashboardViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'bug' },
        'SRFPARENTKEY': { isRawValue: false, value: 'bug' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.maindashboardview.caption',
        srfTitle: 'entities.bug.views.maindashboardview.title',
        srfSubTitle: 'entities.bug.views.maindashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugMainDashboardViewBase
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
	protected viewtag: string = '1540523a668e920d831510cfbec2c5e2';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugMainDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}