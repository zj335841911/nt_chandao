import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import IbzDailyService from '@/service/ibz-daily/ibz-daily-service';
import DailyInfoCalendarService from './daily-info-calendar-form-service';
import IbzDailyUIService from '@/uiservice/ibz-daily/ibz-daily-ui-service';
import {
    FormButtonModel,
    FormPageModel,
    FormItemModel,
    FormDRUIPartModel,
    FormPartModel,
    FormGroupPanelModel,
    FormIFrameModel,
    FormRowItemModel,
    FormTabPageModel,
    FormTabPanelModel,
    FormUserControlModel,
} from '@/model/form-detail';

/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {DailyInfoCalendarEditFormBase}
 */
export class DailyInfoCalendarEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DailyInfoCalendarEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {DailyInfoCalendarService}
     * @memberof DailyInfoCalendarEditFormBase
     */
    public service: DailyInfoCalendarService = new DailyInfoCalendarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzDailyService}
     * @memberof DailyInfoCalendarEditFormBase
     */
    public appEntityService: IbzDailyService = new IbzDailyService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DailyInfoCalendarEditFormBase
     */
    protected appDeName: string = 'ibzdaily';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DailyInfoCalendarEditFormBase
     */
    protected appDeLogicName: string = '日报';

    /**
     * 界面UI服务对象
     *
     * @type {IbzDailyUIService}
     * @memberof DailyInfoCalendarBase
     */  
    public appUIService: IbzDailyUIService = new IbzDailyUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button1_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:IbzDailyUIService  = new IbzDailyUIService();
        curUIService.IbzDaily_Edit(datas,contextJO, paramJO,  $event, xData,this,"IbzDaily");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button2_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:IbzDailyUIService  = new IbzDailyUIService();
        curUIService.IbzDaily_submit(datas,contextJO, paramJO,  $event, xData,this,"IbzDaily");
    }


    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof DailyInfoCalendarEditFormBase
     */
    protected drCount: number = 1;
    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DailyInfoCalendarEditFormBase
     */
    public data: any = {
        srfupdatedate: null,
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        ibz_dailyname: null,
        ibz_dailyid: null,
        issubmit: null,
        worktoday: null,
        planstomorrow: null,
        ibzdaily: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof DailyInfoCalendarEditFormBase
     */
    public majorMessageField: string = 'ibz_dailyname';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DailyInfoCalendarEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DailyInfoCalendarBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DailyInfoCalendarEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '日报基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzdaily.dailyinfocalendar_form', extractMode: 'ITEM', details: [] } }),

        button1: new FormButtonModel({
    caption: '修改', detailType: 'BUTTON', name: 'button1', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'Edit',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 1,
        dataaccaction: 'SRFUR__DAILY_SUBMIT_BUT',
        visible: true,
        disabled: false,
        }
}),

        button2: new FormButtonModel({
    caption: '提交', detailType: 'BUTTON', name: 'button2', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'submit',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__DAILY_SUBMIT_BUT',
        visible: true,
        disabled: false,
        }
}),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srfupdatedate: new FormItemModel({
    caption: '更新时间', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srforikey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfkey: new FormItemModel({
    caption: '日报标识', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfmajortext: new FormItemModel({
    caption: '日报名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srftempmode: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfuf: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfdeid: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfsourcekey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        ibz_dailyname: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'ibz_dailyname', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        ibz_dailyid: new FormItemModel({
    caption: '日报标识', detailType: 'FORMITEM', name: 'ibz_dailyid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        issubmit: new FormItemModel({
    caption: '是否提交', detailType: 'FORMITEM', name: 'issubmit', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        worktoday: new FormItemModel({
    caption: '今日工作', detailType: 'FORMITEM', name: 'worktoday', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        planstomorrow: new FormItemModel({
    caption: '明日计划', detailType: 'FORMITEM', name: 'planstomorrow', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

    };

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof DailyInfoCalendarEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): Promise<void> {
                

        if (Object.is(name, '') || Object.is(name, 'issubmit')) {
            let ret = false;
            const _issubmit = this.data.issubmit;
            if (this.$verify.testCond(_issubmit, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.button1.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'issubmit')) {
            let ret = false;
            const _issubmit = this.data.issubmit;
            if (this.$verify.testCond(_issubmit, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.button2.setVisible(ret);
        }
















    }

	/**
	 * 表单 修改 事件
	 *
	 * @memberof @memberof DailyInfoCalendarEditFormBase
	 */
    public button1_click($event: any): void {
        this.form_button1_click(null, null, $event);

    }

	/**
	 * 表单 提交 事件
	 *
	 * @memberof @memberof DailyInfoCalendarEditFormBase
	 */
    public button2_click($event: any): void {
        this.form_button2_click(null, null, $event);

    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof DailyInfoCalendarBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}