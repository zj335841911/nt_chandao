import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, PanelControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskKanBanService from './task-kan-ban-panel-service';
import TaskUIService from '@/uiservice/task/task-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import TaskKanBanModel from './task-kan-ban-panel-model';
import CodeListService from "@service/app/codelist-service";
import { ViewTool } from '@/utils';


/**
 * itemlayoutpanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {TaskKanBanPanelBase}
 */
export class TaskKanBanPanelBase extends PanelControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TaskKanBanPanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {TaskKanBanService}
     * @memberof TaskKanBanPanelBase
     */
    public service: TaskKanBanService = new TaskKanBanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskKanBanPanelBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskKanBanPanelBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TaskKanBanPanelBase
     */
    protected appDeLogicName: string = '任务';

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof TaskKanBanBase
     */  
    public appUIService:TaskUIService = new TaskUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public itemlayoutpanel_button1_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_AssignTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof TaskKanBan
     */
    public detailsModel: any = {
        name: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'name', panel: this })
,
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem1', panel: this })
,
        button1: new PanelButtonModel({ caption: '指派', itemType: 'BUTTON',visible: true, disabled: false, name: 'button1', panel: this, uiaction: { type: 'DEUIACTION', tag: 'AssignTask',actiontarget: 'SINGLEKEY',noprivdisplaymode:1,dataaccaction:'SRFUR__TASK_ASSIGN_BUT',visabled: true,disabled: false} })
,
        assignedto: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'assignedto', panel: this })
,
        deadline: new PanelFieldModel({ caption: '截止日期', itemType: 'FIELD',visible: true, disabled: false, name: 'deadline', panel: this })
,
        rawitem2: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: false, disabled: false, name: 'rawitem2', panel: this })
,
        container4: new PanelContainerModel({ caption: '动态内容', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container4', panel: this })
,
        container2: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container2', panel: this })
,
        estimate: new PanelFieldModel({ caption: 'h', itemType: 'FIELD',visible: true, disabled: false, name: 'estimate', panel: this })
,
        rawitem3: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem3', panel: this })
,
        container3: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container3', panel: this })
,
        project: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'project', panel: this })
,
        module: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'module', panel: this })
,
        srfkey: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'srfkey', panel: this })
,
        story: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'story', panel: this })
,
        pri: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'pri', panel: this })
,
        desc: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'desc', panel: this })
,
        mailto: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'mailto', panel: this })
,
        parent: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'parent', panel: this })
,
        eststarted: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'eststarted', panel: this })
,
        consumed: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'consumed', panel: this })
,
        color: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'color', panel: this })
,
        container5: new PanelContainerModel({ caption: '隐藏项', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container5', panel: this })
,
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container1', panel: this })
,
    };

    /**
     * 面板逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof TaskKanBan
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                





        if (Object.is(name, '') || Object.is(name, 'deadline')) {
            let ret = false;
            const _deadline = this.data.deadline;
            if (this.$verify.testCond(_deadline, 'LT', '%SRFCURDATA%')) {
                ret = true;
            }
            this.detailsModel.rawitem2.setVisible(ret);
        }



















    }

    /**
     * 数据模型对象
     *
     * @type {TaskKanBanModel}
     * @memberof TaskKanBan
     */
    public dataModel: TaskKanBanModel = new TaskKanBanModel();

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof TaskKanBan
     */
    public uiAction(row: any, tag: any, $event: any) {
        if(Object.is('AssignTask', tag)) {
            this.itemlayoutpanel_button1_click(row, tag, $event);
        }
    }
}