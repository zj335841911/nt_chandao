import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, PanelControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StoryKanBanService from './story-kan-ban-panel-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
import { FormItemModel } from '@/model/form-detail';
import StoryKanBanModel from './story-kan-ban-panel-model';
import CodeListService from "@service/app/codelist-service";


/**
 * itemlayoutpanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {StoryKanBanPanelBase}
 */
export class StoryKanBanPanelBase extends PanelControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof StoryKanBanPanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {StoryKanBanService}
     * @memberof StoryKanBanPanelBase
     */
    public service: StoryKanBanService = new StoryKanBanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryKanBanPanelBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryKanBanPanelBase
     */
    protected appDeName: string = 'story';

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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ProjectUnlinkStory(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof StoryKanBan
     */
    public detailsModel: any = {
        title: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        rawitem1: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        status: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        estimate: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        rawitem2: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        button1: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container2: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container1: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        id: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container3: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
    };

    /**
     * 面板逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof StoryKanBan
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                










    }

    /**
     * 数据模型对象
     *
     * @type {StoryKanBanModel}
     * @memberof StoryKanBan
     */
    public dataModel: StoryKanBanModel = new StoryKanBanModel();

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof StoryKanBan
     */
    public async uiAction(row: any, tag: any, $event: any) {
        await this.computePanelData();
        if(Object.is('ProjectUnlinkStory', tag)) {
            this.itemlayoutpanel_button1_click(row, tag, $event);
        }
    }
}