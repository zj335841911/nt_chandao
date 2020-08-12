import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import IbzMyTerritoryAuthService from '@/authservice/ibz-my-territory/ibz-my-territory-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';

/**
 * 首页视图基类
 *
 * @export
 * @class IbzMyTerritoryDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class IbzMyTerritoryDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryDashboardViewBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryDashboardViewBase
     */
    protected appDeMajor: string = 'realname';

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof IbzMyTerritoryDashboardViewBase
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService;

    /**
     * 实体权限服务对象
     *
     * @type IbzMyTerritoryUIService
     * @memberof IbzMyTerritoryDashboardViewBase
     */
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof IbzMyTerritoryDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzmyterritory.views.dashboardview.caption',
        srfTitle: 'entities.ibzmyterritory.views.dashboardview.title',
        srfSubTitle: 'entities.ibzmyterritory.views.dashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryDashboardViewBase
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
	protected viewtag: string = 'd8df5ca51341d33ccc19208dde3f2cce';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzMyTerritoryDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzMyTerritoryDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'ibzmyterritory',
            majorPSDEField: 'realname',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }



    /**
     * 加载数据
     * 
     * @memberof IbzMyTerritoryDashboardViewBase
     */
    public loadModel(){
        if(this.context.ibzmyterritory){
            this.appEntityService.getDataInfo(JSON.parse(JSON.stringify(this.context)),{},false).then((response:any) =>{
                if (!response || response.status !== 200) {
                    return;
                }
                const { data: _data } = response;
                this.viewState.next({ tag: 'app-actionbar', action: 'loadmodel', data:_data});
                if (_data.realname) {
                    Object.assign(this.model, { dataInfo: _data.realname });
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