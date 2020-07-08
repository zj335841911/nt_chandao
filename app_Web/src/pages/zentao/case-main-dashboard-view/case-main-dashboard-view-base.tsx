import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import PortalViewEngine from '@engine/view/portal-view-engine';

/**
 * 功能测试视图基类
 *
 * @export
 * @class CaseMainDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class CaseMainDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CaseMainDashboardViewBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof CaseMainDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof CaseMainDashboardViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof CaseMainDashboardViewBase
     */
    protected appEntityService: CaseService = new CaseService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof CaseMainDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof CaseMainDashboardViewBase
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
     * @memberof CaseMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.case.views.maindashboardview.caption',
        srfTitle: 'entities.case.views.maindashboardview.title',
        srfSubTitle: 'entities.case.views.maindashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof CaseMainDashboardViewBase
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
	protected viewtag: string = '6f78b25e86923ab600a2141d50fe49fd';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof CaseMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof CaseMainDashboardViewBase
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
     * @memberof CaseMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}