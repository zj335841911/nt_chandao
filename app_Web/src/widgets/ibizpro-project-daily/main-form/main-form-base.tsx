import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import IbizproProjectDailyService from '@/service/ibizpro-project-daily/ibizpro-project-daily-service';
import MainService from './main-form-service';
import IbizproProjectDailyUIService from '@/uiservice/ibizpro-project-daily/ibizpro-project-daily-ui-service';
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
 * @extends {MainEditFormBase}
 */
export class MainEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {MainService}
     * @memberof MainEditFormBase
     */
    public service: MainService = new MainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbizproProjectDailyService}
     * @memberof MainEditFormBase
     */
    public appEntityService: IbizproProjectDailyService = new IbizproProjectDailyService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeName: string = 'ibizproprojectdaily';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeLogicName: string = '项目日报';

    /**
     * 界面UI服务对象
     *
     * @type {IbizproProjectDailyUIService}
     * @memberof MainBase
     */  
    public appUIService: IbizproProjectDailyUIService = new IbizproProjectDailyUIService(this.$store);


    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof MainEditFormBase
     */
    protected drCount: number = 10;
    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainEditFormBase
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
        projectname: null,
        pm: null,
        date: null,
        totalestimates: null,
        project: null,
        tasks: null,
        ibizpro_projectdailyid: null,
        ibizproprojectdaily: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public majorMessageField: string = '';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public detailsModel: any = {
        grouppanel11: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel11', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibizproprojectdaily.main_form', extractMode: 'ITEM', details: [] } }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel1: new FormGroupPanelModel({ caption: '设计', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibizproprojectdaily.main_form', extractMode: 'ITEM', details: [] } }),

        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel2: new FormGroupPanelModel({ caption: '开发', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibizproprojectdaily.main_form', extractMode: 'ITEM', details: [] } }),

        druipart3: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart3', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel3: new FormGroupPanelModel({ caption: '测试', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibizproprojectdaily.main_form', extractMode: 'ITEM', details: [] } }),

        druipart4: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart4', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel4: new FormGroupPanelModel({ caption: '研究', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibizproprojectdaily.main_form', extractMode: 'ITEM', details: [] } }),

        druipart5: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart5', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel5: new FormGroupPanelModel({ caption: '讨论', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibizproprojectdaily.main_form', extractMode: 'ITEM', details: [] } }),

        druipart6: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart6', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel6: new FormGroupPanelModel({ caption: '界面', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibizproprojectdaily.main_form', extractMode: 'ITEM', details: [] } }),

        druipart7: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart7', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel7: new FormGroupPanelModel({ caption: '事务', detailType: 'GROUPPANEL', name: 'grouppanel7', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibizproprojectdaily.main_form', extractMode: 'ITEM', details: [] } }),

        druipart8: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart8', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel8: new FormGroupPanelModel({ caption: '服务', detailType: 'GROUPPANEL', name: 'grouppanel8', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibizproprojectdaily.main_form', extractMode: 'ITEM', details: [] } }),

        druipart9: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart9', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel9: new FormGroupPanelModel({ caption: '其他', detailType: 'GROUPPANEL', name: 'grouppanel9', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibizproprojectdaily.main_form', extractMode: 'ITEM', details: [] } }),

        druipart10: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart10', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel10: new FormGroupPanelModel({ caption: '项目成员日报', detailType: 'GROUPPANEL', name: 'grouppanel10', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibizproprojectdaily.main_form', extractMode: 'ITEM', details: [] } }),

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
    caption: '项目日报标识', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfmajortext: new FormItemModel({
    caption: '项目日报名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        projectname: new FormItemModel({
    caption: '项目名称', detailType: 'FORMITEM', name: 'projectname', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        pm: new FormItemModel({
    caption: '项目负责人', detailType: 'FORMITEM', name: 'pm', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        date: new FormItemModel({
    caption: '日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        totalestimates: new FormItemModel({
    caption: '总工时', detailType: 'FORMITEM', name: 'totalestimates', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        project: new FormItemModel({
    caption: '项目编号', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        tasks: new FormItemModel({
    caption: '任务', detailType: 'FORMITEM', name: 'tasks', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        ibizpro_projectdailyid: new FormItemModel({
    caption: '项目日报标识', detailType: 'FORMITEM', name: 'ibizpro_projectdailyid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

    };

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof MainBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}