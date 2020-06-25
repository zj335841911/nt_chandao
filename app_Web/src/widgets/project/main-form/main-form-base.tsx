import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import MainService from './main-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


/**
 * form部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MainEditFormBase}
 */
export class MainEditFormBase extends MainControlBase {

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
     * @type {ProjectService}
     * @memberof MainEditFormBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof Main
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        name: null,
        code: null,
        begin: null,
        end: null,
        formitemex1: null,
        days: null,
        team: null,
        type: null,
        srfarray: null,
        products: null,
        branchs: null,
        plans: null,
        formitemex2: null,
        desc: null,
        acl: null,
        id: null,
        project:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main
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
        name: [
            { type: 'string', message: '项目名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目名称 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: '项目名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '项目名称 值不能为空', trigger: 'blur' },
        ],
        code: [
            { type: 'string', message: '项目代号 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目代号 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: '项目代号 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '项目代号 值不能为空', trigger: 'blur' },
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
        formitemex1: [
            { type: 'string', message: '项目周期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目周期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目周期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目周期 值不能为空', trigger: 'blur' },
        ],
        days: [
            { type: 'number', message: '可用工作日 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '可用工作日 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '可用工作日 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '可用工作日 值不能为空', trigger: 'blur' },
        ],
        team: [
            { type: 'string', message: '团队名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '团队名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '团队名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '团队名称 值不能为空', trigger: 'blur' },
        ],
        type: [
            { type: 'string', message: '项目类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目类型 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目类型 值不能为空', trigger: 'blur' },
        ],
        srfarray: [
            { type: 'string', message: '关联数据数组 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '关联数据数组 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '关联数据数组 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关联数据数组 值不能为空', trigger: 'blur' },
        ],
        products: [
            { type: 'string', message: '关联产品集合 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '关联产品集合 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '关联产品集合 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关联产品集合 值不能为空', trigger: 'blur' },
        ],
        branchs: [
            { type: 'string', message: '关联产品平台集合 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '关联产品平台集合 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '关联产品平台集合 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关联产品平台集合 值不能为空', trigger: 'blur' },
        ],
        plans: [
            { type: 'string', message: '关联产品产品计划 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '关联产品产品计划 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '关联产品产品计划 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关联产品产品计划 值不能为空', trigger: 'blur' },
        ],
        formitemex2: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { type: 'string', message: '项目描述 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目描述 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目描述 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目描述 值不能为空', trigger: 'blur' },
        ],
        acl: [
            { type: 'string', message: '访问控制 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '访问控制 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '访问控制 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '访问控制 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: '项目编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '项目编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Main
     */
    public detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.main_form', extractMode: 'ITEM', details: [] } })
, 
        group1: new FormGroupPanelModel({ caption: 'project基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.main_form', extractMode: 'ITEM', details: [] } })
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
        name: new FormItemModel({ caption: '项目名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        code: new FormItemModel({ caption: '项目代号', detailType: 'FORMITEM', name: 'code', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        begin: new FormItemModel({ caption: '开始时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        end: new FormItemModel({ caption: '结束日期', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex1: new FormItemModel({ caption: '项目周期', detailType: 'FORMITEM', name: 'formitemex1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        days: new FormItemModel({ caption: '可用工作日', detailType: 'FORMITEM', name: 'days', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        team: new FormItemModel({ caption: '团队名称', detailType: 'FORMITEM', name: 'team', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: '项目类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfarray: new FormItemModel({ caption: '关联数据数组', detailType: 'FORMITEM', name: 'srfarray', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        products: new FormItemModel({ caption: '关联产品集合', detailType: 'FORMITEM', name: 'products', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        branchs: new FormItemModel({ caption: '关联产品平台集合', detailType: 'FORMITEM', name: 'branchs', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        plans: new FormItemModel({ caption: '关联产品产品计划', detailType: 'FORMITEM', name: 'plans', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex2: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex2', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        desc: new FormItemModel({ caption: '项目描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        acl: new FormItemModel({ caption: '访问控制', detailType: 'FORMITEM', name: 'acl', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '项目编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
    };

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
     */
    @Watch('data.srfsourcekey')
    public onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 name 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.name')
    public onNameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'name', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 code 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.code')
    public onCodeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'code', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 begin 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
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
     * @memberof Main
     */
    @Watch('data.end')
    public onEndChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'end', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitemex1 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.formitemex1')
    public onFormitemex1Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex1', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 days 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.days')
    public onDaysChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'days', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 team 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.team')
    public onTeamChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'team', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.type')
    public onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfarray 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.srfarray')
    public onSrfarrayChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfarray', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 products 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.products')
    public onProductsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'products', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 branchs 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.branchs')
    public onBranchsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'branchs', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 plans 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.plans')
    public onPlansChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'plans', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitemex2 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.formitemex2')
    public onFormitemex2Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex2', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 desc 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.desc')
    public onDescChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'desc', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 acl 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.acl')
    public onAclChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'acl', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.id')
    public onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof Main
     */
    public resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
    }

    /**
     * 表单逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof Main
     */
    public formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                


























    }

    /**
     * 表单加载完成
     *
     * @public
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
     */
    public createDefault(){                    
    }

    /**
     * 更新默认值
     * @memberof Main
     */
    public updateDefault(){                    
    }
    
}