import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * 任务主数据看板视图视图基类
 *
 * @export
 * @class TaskMainDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class TaskMainDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskMainDashboardViewBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskMainDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskMainDashboardViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskMainDashboardViewBase
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof TaskMainDashboardViewBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TaskMainDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskMainDashboardViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'task' },
        'SRFPARENTKEY': { isRawValue: false, value: 'task' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.maindashboardview.caption',
        srfTitle: 'entities.task.views.maindashboardview.title',
        srfSubTitle: 'entities.task.views.maindashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskMainDashboardViewBase
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
	protected viewtag: string = '575fecad655143bbd28f17c581725a4e';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskMainDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }



    /**
     * 加载数据
     * 
     * @memberof TaskMainDashboardViewBase
     */
    public loadModel(){
        if(this.context.task){
            this.appEntityService.getDataInfo(JSON.parse(JSON.stringify(this.context)),{},false).then((response:any) =>{
                if (!response || response.status !== 200) {
                    return;
                }
                const { data: _data } = response;
                this.viewState.next({ tag: 'app-actionbar', action: 'loadmodel', data:_data});
                if (_data.name) {
                    Object.assign(this.model, { dataInfo: _data.name });
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