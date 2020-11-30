import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import IbzDailyService from '@/service/ibz-daily/ibz-daily-service';
import DailyEditService from './daily-edit-form-service';
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
 * @extends {DailyEditEditFormBase}
 */
export class DailyEditEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DailyEditEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {DailyEditService}
     * @memberof DailyEditEditFormBase
     */
    public service: DailyEditService = new DailyEditService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzDailyService}
     * @memberof DailyEditEditFormBase
     */
    public appEntityService: IbzDailyService = new IbzDailyService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DailyEditEditFormBase
     */
    protected appDeName: string = 'ibzdaily';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DailyEditEditFormBase
     */
    protected appDeLogicName: string = '日报';

    /**
     * 界面UI服务对象
     *
     * @type {IbzDailyUIService}
     * @memberof DailyEditBase
     */  
    public appUIService: IbzDailyUIService = new IbzDailyUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DailyEditEditFormBase
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
        worktoday: null,
        planstomorrow: null,
        todaytask: null,
        tomorrowplanstask: null,
        comment: null,
        mailto: null,
        reportto: null,
        createman: null,
        createdate: null,
        updateman: null,
        updatedate: null,
        ibz_dailyid: null,
        ibzdaily: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof DailyEditEditFormBase
     */
    public majorMessageField: string = 'ibz_dailyname';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DailyEditEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DailyEditBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DailyEditEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '日报基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzdaily.dailyedit_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        group2: new FormGroupPanelModel({ caption: '操作信息', detailType: 'GROUPPANEL', name: 'group2', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzdaily.dailyedit_form', extractMode: 'ITEM', details: [] } }),

        formpage2: new FormPageModel({ caption: '其它', detailType: 'FORMPAGE', name: 'formpage2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

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
    caption: '日报名称', detailType: 'FORMITEM', name: 'ibz_dailyname', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        todaytask: new FormItemModel({
    caption: '完成任务', detailType: 'FORMITEM', name: 'todaytask', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        tomorrowplanstask: new FormItemModel({
    caption: '明日计划任务', detailType: 'FORMITEM', name: 'tomorrowplanstask', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        comment: new FormItemModel({
    caption: '其他事项', detailType: 'FORMITEM', name: 'comment', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        mailto: new FormItemModel({
    caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        reportto: new FormItemModel({
    caption: '汇报给', detailType: 'FORMITEM', name: 'reportto', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        createman: new FormItemModel({
    caption: '建立人', detailType: 'FORMITEM', name: 'createman', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        createdate: new FormItemModel({
    caption: '建立时间', detailType: 'FORMITEM', name: 'createdate', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        updateman: new FormItemModel({
    caption: '更新人', detailType: 'FORMITEM', name: 'updateman', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        updatedate: new FormItemModel({
    caption: '更新时间', detailType: 'FORMITEM', name: 'updatedate', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        form: new FormTabPanelModel({
            caption: 'form',
            detailType: 'TABPANEL',
            name: 'form',
            visible: true,
            isShowCaption: true,
            form: this,
            tabPages: [
                {
                    name: 'formpage1',
                    index: 0,
                    visible: true,
                },
                {
                    name: 'formpage2',
                    index: 1,
                    visible: true,
                },
            ]
        }),
    };

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof DailyEditBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}