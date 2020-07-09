import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import DashBoardInfoService from './dash-board-info-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {DashBoardInfoEditFormBase}
 */
export class DashBoardInfoEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DashBoardInfoEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {DashBoardInfoService}
     * @memberof DashBoardInfoEditFormBase
     */
    public service: DashBoardInfoService = new DashBoardInfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof DashBoardInfoEditFormBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DashBoardInfoEditFormBase
     */
    protected appDeName: string = 'project';

    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof DashBoardInfoEditFormBase
     */
    protected drCount: number = 0;

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DashBoardInfoEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        id: null,
        code: null,
        name: null,
        desc: null,
        type: null,
        status: null,
        begin: null,
        end: null,
        days: null,
        formitem: null,
        formitem1: null,
        formitem2: null,
        formitem3: null,
        formitem4: null,
        formitem5: null,
        acl: null,
        project:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DashBoardInfoEditFormBase
     */
    public rules: any = {
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DashBoardInfoEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: 'project基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel6: new FormGroupPanelModel({ caption: '关联产品', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel7: new FormGroupPanelModel({ caption: '关联计划', detailType: 'GROUPPANEL', name: 'grouppanel7', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel1: new FormGroupPanelModel({ caption: '工时统计', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel4: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel5: new FormGroupPanelModel({ caption: '访问控制', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '项目编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '项目名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '项目编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        code: new FormItemModel({ caption: '项目代号', detailType: 'FORMITEM', name: 'code', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '项目名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        desc: new FormItemModel({ caption: '项目描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        type: new FormItemModel({ caption: '项目类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        status: new FormItemModel({ caption: '项目状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        begin: new FormItemModel({ caption: '开始时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        end: new FormItemModel({ caption: '结束日期', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        days: new FormItemModel({ caption: '可用工作日', detailType: 'FORMITEM', name: 'days', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem: new FormItemModel({ caption: '预计', detailType: 'FORMITEM', name: 'formitem', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem1: new FormItemModel({ caption: '消耗', detailType: 'FORMITEM', name: 'formitem1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem2: new FormItemModel({ caption: '剩余', detailType: 'FORMITEM', name: 'formitem2', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem3: new FormItemModel({ caption: '需求', detailType: 'FORMITEM', name: 'formitem3', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem4: new FormItemModel({ caption: '任务', detailType: 'FORMITEM', name: 'formitem4', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem5: new FormItemModel({ caption: 'Bug', detailType: 'FORMITEM', name: 'formitem5', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        acl: new FormItemModel({ caption: '访问控制', detailType: 'FORMITEM', name: 'acl', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

    };
}