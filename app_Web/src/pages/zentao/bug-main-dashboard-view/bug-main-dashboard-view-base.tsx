import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugAuthService from '@/authservice/bug/bug-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import BugUIService from '@/uiservice/bug/bug-ui-service';

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
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BugMainDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BugMainDashboardViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugMainDashboardViewBase
     */
    protected appEntityService: BugService = new BugService;

    /**
     * 实体权限服务对象
     *
     * @type BugUIService
     * @memberof BugMainDashboardViewBase
     */
    public appUIService: BugUIService = new BugUIService(this.$store);


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



    /**
     * 加载数据
     * 
     * @memberof BugMainDashboardViewBase
     */
    public loadModel(){
        if(this.context.bug){
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