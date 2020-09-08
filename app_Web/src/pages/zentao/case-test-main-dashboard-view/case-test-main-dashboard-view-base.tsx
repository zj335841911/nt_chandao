import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import CaseAuthService from '@/authservice/case/case-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import CaseUIService from '@/uiservice/case/case-ui-service';

/**
 * 功能测试视图基类
 *
 * @export
 * @class CaseTestMainDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class CaseTestMainDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CaseTestMainDashboardViewBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof CaseTestMainDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof CaseTestMainDashboardViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof CaseTestMainDashboardViewBase
     */
    protected appEntityService: CaseService = new CaseService;

    /**
     * 实体权限服务对象
     *
     * @type CaseUIService
     * @memberof CaseTestMainDashboardViewBase
     */
    public appUIService: CaseUIService = new CaseUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof CaseTestMainDashboardViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'case' },
        'SRFPARENTKEY': { isRawValue: false, value: 'case' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof CaseTestMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.case.views.testmaindashboardview.caption',
        srfTitle: 'entities.case.views.testmaindashboardview.title',
        srfSubTitle: 'entities.case.views.testmaindashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof CaseTestMainDashboardViewBase
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
	protected viewtag: string = '454743e1c8070362a873d0d4fe35740b';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof CaseTestMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof CaseTestMainDashboardViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof CaseTestMainDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'case',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseTestMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}