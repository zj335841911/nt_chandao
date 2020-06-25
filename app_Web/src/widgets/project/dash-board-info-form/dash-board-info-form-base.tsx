import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import DashBoardInfoService from './dash-board-info-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


/**
 * form部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {DashBoardInfoEditFormBase}
 */
export class DashBoardInfoEditFormBase extends MainControlBase {

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
     * 表单数据对象
     *
     * @type {*}
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    public rules: any = {
        srforikey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { type: 'number', message: '项目编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '项目编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { type: 'string', message: '项目名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目名称 值不能为空', trigger: 'blur' },
        ],
        srftempmode: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfuf: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfdeid: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfsourcekey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: '项目编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '项目编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'blur' },
        ],
        code: [
            { type: 'string', message: '项目代号 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目代号 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目代号 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目代号 值不能为空', trigger: 'blur' },
        ],
        name: [
            { type: 'string', message: '项目名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目名称 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { type: 'string', message: '项目描述 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目描述 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目描述 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目描述 值不能为空', trigger: 'blur' },
        ],
        type: [
            { type: 'string', message: '项目类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目类型 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目类型 值不能为空', trigger: 'blur' },
        ],
        status: [
            { type: 'string', message: '项目状态 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目状态 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目状态 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目状态 值不能为空', trigger: 'blur' },
        ],
        begin: [
            { type: 'string', message: '开始时间 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '开始时间 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '开始时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '开始时间 值不能为空', trigger: 'blur' },
        ],
        end: [
            { type: 'string', message: '结束日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '结束日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '结束日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '结束日期 值不能为空', trigger: 'blur' },
        ],
        days: [
            { type: 'number', message: '可用工作日 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '可用工作日 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '可用工作日 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '可用工作日 值不能为空', trigger: 'blur' },
        ],
        formitem: [
            { type: 'string', message: '预计 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '预计 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '预计 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '预计 值不能为空', trigger: 'blur' },
        ],
        formitem1: [
            { type: 'string', message: '消耗 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '消耗 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '消耗 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '消耗 值不能为空', trigger: 'blur' },
        ],
        formitem2: [
            { type: 'string', message: '剩余 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '剩余 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '剩余 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '剩余 值不能为空', trigger: 'blur' },
        ],
        formitem3: [
            { type: 'string', message: '需求 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '需求 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '需求 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '需求 值不能为空', trigger: 'blur' },
        ],
        formitem4: [
            { type: 'string', message: '任务 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '任务 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '任务 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务 值不能为空', trigger: 'blur' },
        ],
        formitem5: [
            { type: 'string', message: 'Bug 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: 'Bug 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: 'Bug 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: 'Bug 值不能为空', trigger: 'blur' },
        ],
        acl: [
            { type: 'string', message: '访问控制 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '访问控制 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '访问控制 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '访问控制 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DashBoardInfo
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: 'project基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this })
, 
        grouppanel6: new FormGroupPanelModel({ caption: '关联产品', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: true, isShowCaption: true, form: this })
, 
        grouppanel7: new FormGroupPanelModel({ caption: '关联计划', detailType: 'GROUPPANEL', name: 'grouppanel7', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '工时统计', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel4: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel5: new FormGroupPanelModel({ caption: '访问控制', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '项目编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '项目名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '项目编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 0 })
, 
        code: new FormItemModel({ caption: '项目代号', detailType: 'FORMITEM', name: 'code', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        name: new FormItemModel({ caption: '项目名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        desc: new FormItemModel({ caption: '项目描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: '项目类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        status: new FormItemModel({ caption: '项目状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        begin: new FormItemModel({ caption: '开始时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        end: new FormItemModel({ caption: '结束日期', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        days: new FormItemModel({ caption: '可用工作日', detailType: 'FORMITEM', name: 'days', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem: new FormItemModel({ caption: '预计', detailType: 'FORMITEM', name: 'formitem', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem1: new FormItemModel({ caption: '消耗', detailType: 'FORMITEM', name: 'formitem1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem2: new FormItemModel({ caption: '剩余', detailType: 'FORMITEM', name: 'formitem2', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem3: new FormItemModel({ caption: '需求', detailType: 'FORMITEM', name: 'formitem3', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem4: new FormItemModel({ caption: '任务', detailType: 'FORMITEM', name: 'formitem4', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem5: new FormItemModel({ caption: 'Bug', detailType: 'FORMITEM', name: 'formitem5', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        acl: new FormItemModel({ caption: '访问控制', detailType: 'FORMITEM', name: 'acl', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.srforikey')
    public onSrforikeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srforikey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfkey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.srfkey')
    public onSrfkeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfkey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfmajortext 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.srfmajortext')
    public onSrfmajortextChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfmajortext', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srftempmode 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.srftempmode')
    public onSrftempmodeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srftempmode', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfuf 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.srfuf')
    public onSrfufChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfuf', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfdeid 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.srfdeid')
    public onSrfdeidChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfdeid', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfsourcekey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.srfsourcekey')
    public onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.id')
    public onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 code 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.code')
    public onCodeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'code', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 name 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.name')
    public onNameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'name', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 desc 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.desc')
    public onDescChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'desc', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.type')
    public onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 status 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.status')
    public onStatusChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'status', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 begin 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.begin')
    public onBeginChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'begin', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 end 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.end')
    public onEndChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'end', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 days 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.days')
    public onDaysChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'days', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.formitem')
    public onFormitemChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem1 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.formitem1')
    public onFormitem1Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem1', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem2 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.formitem2')
    public onFormitem2Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem2', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem3 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.formitem3')
    public onFormitem3Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem3', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem4 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.formitem4')
    public onFormitem4Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem4', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem5 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.formitem5')
    public onFormitem5Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem5', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 acl 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.acl')
    public onAclChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'acl', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof DashBoardInfo
     */
    public resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
    }

    /**
     * 表单逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof DashBoardInfo
     */
    public formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                


































    }

    /**
     * 表单加载完成
     *
     * @public
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof DashBoardInfo
     */
    public onFormLoad(data: any = {},action:string): void {
        if(Object.is(action,"save") || Object.is(action,"autoSave") || Object.is(action,"submit"))
        // 更新context的实体主键
        if(data.project){
            Object.assign(this.context,{project:data.project})
        }
        this.setFormEnableCond(data);
        this.fillForm(data,action);
        this.oldData = {};
        Object.assign(this.oldData, JSON.parse(JSON.stringify(this.data)));
        this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
        this.formLogic({ name: '', newVal: null, oldVal: null });
    }


    /**
     * 分组界面行为事件
     *
     * @param {*} $event
     * @memberof DashBoardInfo
     */
    public groupUIActionClick($event: any): void {
        if (!$event) {
            return;
        }
        const item: any = $event.item;
    }

    /**
     * 拷贝内容
     *
     * @param {*} [arg={}]
     * @memberof DashBoardInfo
     */
    public copy(srfkey: string): void {
        const copyData = this.$store.getters.getCopyData(srfkey);
        copyData.srfkey = this.$util.createUUID();
        copyData.project = copyData.srfkey;
        copyData.id = copyData.srfkey;
        Object.assign(this.context,{project:copyData.project})
        this.data = copyData;
        this.$nextTick(() => {
          this.formState.next({ type: 'load', data: copyData });
          this.data.srfuf = '0';
          this.setFormEnableCond(this.data);
        });
    }

    /**
     * 新建默认值
     * @memberof DashBoardInfo
     */
    public createDefault(){                    
    }

    /**
     * 更新默认值
     * @memberof DashBoardInfo
     */
    public updateDefault(){                    
    }
    
}