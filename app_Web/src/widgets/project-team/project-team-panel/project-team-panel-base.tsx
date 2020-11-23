import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import ProjectTeamService from '@/service/project-team/project-team-service';
import ProjectTeamService from './project-team-panel-service';
import ProjectTeamUIService from '@/uiservice/project-team/project-team-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import ProjectTeamModel from './project-team-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * list_itempanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {ProjectTeamPanelBase}
 */
export class ProjectTeamPanelBase extends PanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamPanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {ProjectTeamService}
     * @memberof ProjectTeamPanelBase
     */
    public service: ProjectTeamService = new ProjectTeamService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectTeamService}
     * @memberof ProjectTeamPanelBase
     */
    public appEntityService: ProjectTeamService = new ProjectTeamService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamPanelBase
     */
    protected appDeName: string = 'projectteam';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamPanelBase
     */
    protected appDeLogicName: string = '项目团队';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectTeamUIService}
     * @memberof ProjectTeamBase
     */  
    public appUIService: ProjectTeamUIService = new ProjectTeamUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public list_itempanel_button1_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProjectTeamUIService  = new ProjectTeamUIService();
        curUIService.ProjectTeam_RemoveMember(datas,contextJO, paramJO,  $event, xData,this,"ProjectTeam");
    }


    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ProjectTeam
     */
    public detailsModel: any = {
        account: new PanelFieldModel({ caption: '用户名', itemType: 'FIELD',visible: true, disabled: false, name: 'account', panel: this })
,
        role: new PanelFieldModel({ caption: '角色', itemType: 'FIELD',visible: true, disabled: false, name: 'role', panel: this })
,
        join: new PanelFieldModel({ caption: '加盟日', itemType: 'FIELD',visible: true, disabled: false, name: 'join', panel: this })
,
        consumed: new PanelFieldModel({ caption: '消耗', itemType: 'FIELD',visible: true, disabled: false, name: 'consumed', panel: this })
,
        left: new PanelFieldModel({ caption: '剩余工时', itemType: 'FIELD',visible: true, disabled: false, name: 'left', panel: this })
,
        estimate: new PanelFieldModel({ caption: '最迟预计', itemType: 'FIELD',visible: true, disabled: false, name: 'estimate', panel: this })
,
        button1: new PanelButtonModel({ caption: '移除', itemType: 'BUTTON',visible: true, disabled: false, name: 'button1', panel: this, uiaction: { type: 'DEUIACTION', tag: 'RemoveMember',actiontarget: 'SINGLEKEY',noprivdisplaymode:1,dataaccaction:'SRFUR__PROJT_TM_BUT',visible: true,disabled: false} })
,
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container1', panel: this })
,
    };

    /**
     * 面板逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof ProjectTeam
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                








    }

    /**
     * 数据模型对象
     *
     * @type {ProjectTeamModel}
     * @memberof ProjectTeam
     */
    public dataModel: ProjectTeamModel = new ProjectTeamModel();

    /**
     * 界面行为标识数组
     *
     * @type {Array<any>}
     * @memberof ProjectTeam
     */
    public actionList:Array<any> = ['RemoveMember'];

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof ProjectTeam
     */
    public uiAction(row: any, tag: any, $event: any) {
        if(Object.is('RemoveMember', tag)) {
            this.list_itempanel_button1_click(row, tag, $event);
        }
    }
}