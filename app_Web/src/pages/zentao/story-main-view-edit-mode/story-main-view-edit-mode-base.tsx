import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import PortalViewEngine from '@engine/view/portal-view-engine';

/**
 * 需求数据看板视图视图基类
 *
 * @export
 * @class StoryMainView_EditModeBase
 * @extends {DashboardViewBase}
 */
export class StoryMainView_EditModeBase extends DashboardViewBase {

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryMainView_EditModeBase
     */
    protected appEntityService: StoryService = new StoryService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof StoryMainView_EditModeBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof StoryMainView_EditModeBase
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
     * @memberof StoryMainView_EditModeBase
     */
    protected model: any = {
        srfCaption: 'entities.story.views.mainview_editmode.caption',
        srfTitle: 'entities.story.views.mainview_editmode.title',
        srfSubTitle: 'entities.story.views.mainview_editmode.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof StoryMainView_EditModeBase
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
	protected viewtag: string = '7e14015af219d302f7d81ff40cdcc418';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof StoryMainView_EditModeBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof StoryMainView_EditModeBase
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
     * @memberof StoryMainView_EditModeBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}