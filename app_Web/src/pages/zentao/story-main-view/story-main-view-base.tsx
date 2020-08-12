import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StoryAuthService from '@/authservice/story/story-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import StoryUIService from '@/uiservice/story/story-ui-service';

/**
 * 需求数据看板视图视图基类
 *
 * @export
 * @class StoryMainViewBase
 * @extends {DashboardViewBase}
 */
export class StoryMainViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryMainViewBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof StoryMainViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof StoryMainViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryMainViewBase
     */
    protected appEntityService: StoryService = new StoryService;

    /**
     * 实体权限服务对象
     *
     * @type StoryUIService
     * @memberof StoryMainViewBase
     */
    public appUIService: StoryUIService = new StoryUIService(this.$store);


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



    /**
     * 加载数据
     * 
     * @memberof StoryMainViewBase
     */
    public loadModel(){
        if(this.context.story){
            this.appEntityService.getDataInfo(JSON.parse(JSON.stringify(this.context)),{},false).then((response:any) =>{
                if (!response || response.status !== 200) {
                    return;
                }
                const { data: _data } = response;
                this.viewState.next({ tag: 'app-actionbar', action: 'loadmodel', data:_data});
                if (_data.title) {
                    Object.assign(this.model, { dataInfo: _data.title });
                    if(this.$tabPageExp){
                        let _this:any = this;
                        this.$tabPageExp.setCurPageCaption(_this.$t(this.model.srfTitle), _this.$t(this.model.srfTitle), _this.model.dataInfo);
                    }
                    if(this.$route){
                        this.$route.meta.info = this.model.dataInfo;
                    }
                    Object.assign(this.model, { srfTitle: `${this.$t(this.model.srfTitle)} - ${this.model.dataInfo}` });
                }
            })
        }
    }


}