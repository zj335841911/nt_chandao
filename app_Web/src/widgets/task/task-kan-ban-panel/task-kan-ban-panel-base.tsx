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
        name: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        rawitem1: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        button1: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        assignedto: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        deadline: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        rawitem2: new FormItemModel({ visible: false, disabled: false, enableCond: 3 }), 
        container4: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container2: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        estimate: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        rawitem3: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container3: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        project: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        module: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        srfkey: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        story: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        pri: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        desc: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        mailto: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        parent: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        eststarted: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        consumed: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        color: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container5: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container1: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
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