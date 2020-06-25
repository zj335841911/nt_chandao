import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProductStatsService from '@/service/product-stats/product-stats-service';
import TestMain2Service from './test-main2-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


/**
 * form部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TestMain2EditFormBase}
 */
export class TestMain2EditFormBase extends MainControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {TestMain2Service}
     * @memberof TestMain2EditFormBase
     */
    public service: TestMain2Service = new TestMain2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductStatsService}
     * @memberof TestMain2EditFormBase
     */
    public appEntityService: ProductStatsService = new ProductStatsService({ $store: this.$store });

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof TestMain2
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        custom1: null,
        custom2: null,
        formitemex1: null,
        assigntomebugcnt: null,
        custom3: null,
        custom4: null,
        formitemex2: null,
        activebugcnt: null,
        custom5: null,
        custom6: null,
        formitemex3: null,
        unconfirmbugcnt: null,
        custom7: null,
        custom8: null,
        formitemex4: null,
        notclosedbugcnt: null,
        id: null,
        productstats:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof TestMain2
     */
    public rules: any = {
        srforikey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { type: 'number', message: '产品编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '产品编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '产品编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '产品编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { type: 'string', message: '产品名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '产品名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'blur' },
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
        custom1: [
            { type: 'number', message: '所有Bug数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所有Bug数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所有Bug数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所有Bug数 值不能为空', trigger: 'blur' },
        ],
        custom2: [
            { type: 'number', message: '指派给我的Bug数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '指派给我的Bug数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '指派给我的Bug数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '指派给我的Bug数 值不能为空', trigger: 'blur' },
        ],
        formitemex1: [
            { type: 'string', message: '所有 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '所有 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '所有 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所有 值不能为空', trigger: 'blur' },
        ],
        assigntomebugcnt: [
            { type: 'number', message: '指派给我 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '指派给我 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '指派给我 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '指派给我 值不能为空', trigger: 'blur' },
        ],
        custom3: [
            { type: 'number', message: '所有Bug数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所有Bug数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所有Bug数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所有Bug数 值不能为空', trigger: 'blur' },
        ],
        custom4: [
            { type: 'number', message: '未解决Bug数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未解决Bug数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未解决Bug数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未解决Bug数 值不能为空', trigger: 'blur' },
        ],
        formitemex2: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        activebugcnt: [
            { type: 'number', message: '未解决 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未解决 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未解决 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未解决 值不能为空', trigger: 'blur' },
        ],
        custom5: [
            { type: 'number', message: '所有Bug数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所有Bug数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所有Bug数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所有Bug数 值不能为空', trigger: 'blur' },
        ],
        custom6: [
            { type: 'number', message: '未确认Bug数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未确认Bug数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未确认Bug数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未确认Bug数 值不能为空', trigger: 'blur' },
        ],
        formitemex3: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        unconfirmbugcnt: [
            { type: 'number', message: '未确认 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未确认 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未确认 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未确认 值不能为空', trigger: 'blur' },
        ],
        custom7: [
            { type: 'number', message: '所有Bug数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所有Bug数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所有Bug数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所有Bug数 值不能为空', trigger: 'blur' },
        ],
        custom8: [
            { type: 'number', message: '未关闭Bug数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未关闭Bug数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未关闭Bug数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未关闭Bug数 值不能为空', trigger: 'blur' },
        ],
        formitemex4: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        notclosedbugcnt: [
            { type: 'number', message: '未关闭 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未关闭 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未关闭 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未关闭 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: '产品编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '产品编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '产品编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '产品编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof TestMain2
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '产品统计基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.testmain2_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.testmain2_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.testmain2_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '产品编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '产品名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom1: new FormItemModel({ caption: '所有Bug数', detailType: 'FORMITEM', name: 'custom1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom2: new FormItemModel({ caption: '指派给我的Bug数', detailType: 'FORMITEM', name: 'custom2', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex1: new FormItemModel({ caption: '所有', detailType: 'FORMITEM', name: 'formitemex1', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        assigntomebugcnt: new FormItemModel({ caption: '指派给我', detailType: 'FORMITEM', name: 'assigntomebugcnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom3: new FormItemModel({ caption: '所有Bug数', detailType: 'FORMITEM', name: 'custom3', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom4: new FormItemModel({ caption: '未解决Bug数', detailType: 'FORMITEM', name: 'custom4', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex2: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex2', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        activebugcnt: new FormItemModel({ caption: '未解决', detailType: 'FORMITEM', name: 'activebugcnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom5: new FormItemModel({ caption: '所有Bug数', detailType: 'FORMITEM', name: 'custom5', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom6: new FormItemModel({ caption: '未确认Bug数', detailType: 'FORMITEM', name: 'custom6', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex3: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex3', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        unconfirmbugcnt: new FormItemModel({ caption: '未确认', detailType: 'FORMITEM', name: 'unconfirmbugcnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom7: new FormItemModel({ caption: '所有Bug数', detailType: 'FORMITEM', name: 'custom7', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom8: new FormItemModel({ caption: '未关闭Bug数', detailType: 'FORMITEM', name: 'custom8', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex4: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex4', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        notclosedbugcnt: new FormItemModel({ caption: '未关闭', detailType: 'FORMITEM', name: 'notclosedbugcnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '产品编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
    };

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
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
     * @memberof TestMain2
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
     * @memberof TestMain2
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
     * @memberof TestMain2
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
     * @memberof TestMain2
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
     * @memberof TestMain2
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
     * @memberof TestMain2
     */
    @Watch('data.srfsourcekey')
    public onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom1 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.custom1')
    public onCustom1Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom1', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom2 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.custom2')
    public onCustom2Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom2', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitemex1 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.formitemex1')
    public onFormitemex1Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex1', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assigntomebugcnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.assigntomebugcnt')
    public onAssigntomebugcntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assigntomebugcnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom3 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.custom3')
    public onCustom3Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom3', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom4 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.custom4')
    public onCustom4Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom4', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitemex2 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.formitemex2')
    public onFormitemex2Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex2', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 activebugcnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.activebugcnt')
    public onActivebugcntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'activebugcnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom5 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.custom5')
    public onCustom5Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom5', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom6 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.custom6')
    public onCustom6Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom6', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitemex3 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.formitemex3')
    public onFormitemex3Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex3', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 unconfirmbugcnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.unconfirmbugcnt')
    public onUnconfirmbugcntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'unconfirmbugcnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom7 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.custom7')
    public onCustom7Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom7', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom8 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.custom8')
    public onCustom8Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom8', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitemex4 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.formitemex4')
    public onFormitemex4Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex4', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 notclosedbugcnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
     */
    @Watch('data.notclosedbugcnt')
    public onNotclosedbugcntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'notclosedbugcnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TestMain2
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
     * @memberof TestMain2
     */
    public resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
    }

    /**
     * 表单逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof TestMain2
     */
    public formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                




























    }

    /**
     * 表单加载完成
     *
     * @public
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof TestMain2
     */
    public onFormLoad(data: any = {},action:string): void {
        if(Object.is(action,"save") || Object.is(action,"autoSave") || Object.is(action,"submit"))
        // 更新context的实体主键
        if(data.productstats){
            Object.assign(this.context,{productstats:data.productstats})
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
     * @memberof TestMain2
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
     * @memberof TestMain2
     */
    public copy(srfkey: string): void {
        const copyData = this.$store.getters.getCopyData(srfkey);
        copyData.srfkey = this.$util.createUUID();
        copyData.productstats = copyData.srfkey;
        copyData.id = copyData.srfkey;
        Object.assign(this.context,{productstats:copyData.productstats})
        this.data = copyData;
        this.$nextTick(() => {
          this.formState.next({ type: 'load', data: copyData });
          this.data.srfuf = '0';
          this.setFormEnableCond(this.data);
        });
    }

    /**
     * 新建默认值
     * @memberof TestMain2
     */
    public createDefault(){                    
    }

    /**
     * 更新默认值
     * @memberof TestMain2
     */
    public updateDefault(){                    
    }
    
}