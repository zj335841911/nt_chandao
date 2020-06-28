import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import PortalViewEngine from '@engine/view/portal-view-engine';

/**
 * 需求数据看板视图视图基类
 *
 * @export
 * @class StoryMainViewBase
 * @extends {DashboardViewBase}
 */
export class StoryMainViewBase extends DashboardViewBase {

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryMainViewBase
     */
    protected appEntityService: StoryService = new StoryService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof StoryMainViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof StoryMainViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'story' },
        'SRFPARENTKEY': { isRawValue: false, value: 'story' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof StoryMainViewBase
     */
    protected model: any = {
        srfCaption: 'entities.story.views.mainview.caption',
        srfTitle: 'entities.story.views.mainview.title',
        srfSubTitle: 'entities.story.views.mainview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof StoryMainViewBase
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
	protected viewtag: string = '3f2ca3e560d9082bb56fbf7667a57a66';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof StoryMainViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof StoryMainViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'story',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMainViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}