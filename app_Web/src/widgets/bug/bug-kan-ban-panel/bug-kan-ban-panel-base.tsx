import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugKanBanService from './bug-kan-ban-panel-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import BugKanBanModel from './bug-kan-ban-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * itemlayoutpanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {BugKanBanPanelBase}
 */
export class BugKanBanPanelBase extends PanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof BugKanBanPanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {BugKanBanService}
     * @memberof BugKanBanPanelBase
     */
    public service: BugKanBanService = new BugKanBanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugKanBanPanelBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugKanBanPanelBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof BugKanBanPanelBase
     */
    protected appDeLogicName: string = 'Bug';

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof BugKanBanBase
     */  
    public appUIService: BugUIService = new BugUIService(this.$store);

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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_AssingToBug(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }


    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof BugKanBan
     */
    public detailsModel: any = {
        name: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'name', panel: this })
,
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem1', panel: this })
,
        button1: new PanelButtonModel({ caption: '指派', itemType: 'BUTTON',visible: true, disabled: false, name: 'button1', panel: this, uiaction: { type: 'DEUIACTION', tag: 'AssingToBug',actiontarget: 'SINGLEKEY',noprivdisplaymode:1,dataaccaction:'SRFUR__BUG_ASSIGNTO_BUT',visible: true,disabled: false} })
,
        assignedto: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'assignedto', panel: this })
,
        deadline: new PanelFieldModel({ caption: '截止日期', itemType: 'FIELD',visible: true, disabled: false, name: 'deadline', panel: this })
,
        rawitem2: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: false, disabled: false, name: 'rawitem2', panel: this })
,
        container3: new PanelContainerModel({ caption: '动态内容', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container3', panel: this })
,
        container2: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container2', panel: this })
,
        product: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'product', panel: this })
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
        status: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'status', panel: this })
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
     * @memberof BugKanBan
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
     * @type {BugKanBanModel}
     * @memberof BugKanBan
     */
    public dataModel: BugKanBanModel = new BugKanBanModel();

    /**
     * 界面行为标识数组
     *
     * @type {Array<any>}
     * @memberof BugKanBan
     */
    public actionList:Array<any> = ['AssingToBug'];

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof BugKanBan
     */
    public uiAction(row: any, tag: any, $event: any) {
        if(Object.is('AssingToBug', tag)) {
            this.itemlayoutpanel_button1_click(row, tag, $event);
        }
    }
}