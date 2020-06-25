import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProjectStatsService from '@/service/project-stats/project-stats-service';
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
     * @type {ProjectStatsService}
     * @memberof MainEditFormBase
     */
    public appEntityService: ProjectStatsService = new ProjectStatsService({ $store: this.$store });

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
        custom7: null,
        custom8: null,
        formitemex4: null,
        totalestimate: null,
        totalconsumed: null,
        totalleft: null,
        taskcnt: null,
        custom1: null,
        custom2: null,
        formitemex1: null,
        undonetaskcnt: null,
        storycnt: null,
        custom3: null,
        custom4: null,
        formitemex2: null,
        unclosedstorycnt: null,
        bugcnt: null,
        custom5: null,
        custom6: null,
        formitemex3: null,
        activebugcnt: null,
        id: null,
        projectstats:null,
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
        custom7: [
            { type: 'number', message: '任务最初预计总工时 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '任务最初预计总工时 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '任务最初预计总工时 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '任务最初预计总工时 值不能为空', trigger: 'blur' },
        ],
        custom8: [
            { type: 'number', message: '任务消耗总工时 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '任务消耗总工时 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '任务消耗总工时 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '任务消耗总工时 值不能为空', trigger: 'blur' },
        ],
        formitemex4: [
            { type: 'string', message: '已完成 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '已完成 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '已完成 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '已完成 值不能为空', trigger: 'blur' },
        ],
        totalestimate: [
            { type: 'number', message: '预计 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '预计 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '预计 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '预计 值不能为空', trigger: 'blur' },
        ],
        totalconsumed: [
            { type: 'number', message: '消耗 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '消耗 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '消耗 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '消耗 值不能为空', trigger: 'blur' },
        ],
        totalleft: [
            { type: 'number', message: '剩余 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '剩余 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '剩余 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '剩余 值不能为空', trigger: 'blur' },
        ],
        taskcnt: [
            { type: 'number', message: '总任务 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '总任务 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '总任务 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '总任务 值不能为空', trigger: 'blur' },
        ],
        custom1: [
            { type: 'number', message: '任务总数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '任务总数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '任务总数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '任务总数 值不能为空', trigger: 'blur' },
        ],
        custom2: [
            { type: 'number', message: '未完成任务总数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未完成任务总数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未完成任务总数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未完成任务总数 值不能为空', trigger: 'blur' },
        ],
        formitemex1: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        undonetaskcnt: [
            { type: 'number', message: '未完成 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未完成 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未完成 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未完成 值不能为空', trigger: 'blur' },
        ],
        storycnt: [
            { type: 'number', message: '总需求 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '总需求 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '总需求 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '总需求 值不能为空', trigger: 'blur' },
        ],
        custom3: [
            { type: 'number', message: '需求总数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '需求总数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '需求总数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '需求总数 值不能为空', trigger: 'blur' },
        ],
        custom4: [
            { type: 'number', message: '未关闭需求总数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未关闭需求总数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未关闭需求总数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未关闭需求总数 值不能为空', trigger: 'blur' },
        ],
        formitemex2: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        unclosedstorycnt: [
            { type: 'number', message: '未关闭 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未关闭 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未关闭 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未关闭 值不能为空', trigger: 'blur' },
        ],
        bugcnt: [
            { type: 'number', message: '所有 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所有 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所有 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所有 值不能为空', trigger: 'blur' },
        ],
        custom5: [
            { type: 'number', message: 'Bug总数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: 'Bug总数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: 'Bug总数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'Bug总数 值不能为空', trigger: 'blur' },
        ],
        custom6: [
            { type: 'number', message: '未关闭Bug总数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未关闭Bug总数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未关闭Bug总数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未关闭Bug总数 值不能为空', trigger: 'blur' },
        ],
        formitemex3: [
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
        grouppanel6: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel5: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel4: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '任务统计', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '需求统计', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel3: new FormGroupPanelModel({ caption: 'bug统计', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } })
, 
        group1: new FormGroupPanelModel({ caption: '项目统计基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } })
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
        custom7: new FormItemModel({ caption: '任务最初预计总工时', detailType: 'FORMITEM', name: 'custom7', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom8: new FormItemModel({ caption: '任务消耗总工时', detailType: 'FORMITEM', name: 'custom8', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex4: new FormItemModel({ caption: '已完成', detailType: 'FORMITEM', name: 'formitemex4', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        totalestimate: new FormItemModel({ caption: '预计', detailType: 'FORMITEM', name: 'totalestimate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        totalconsumed: new FormItemModel({ caption: '消耗', detailType: 'FORMITEM', name: 'totalconsumed', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        totalleft: new FormItemModel({ caption: '剩余', detailType: 'FORMITEM', name: 'totalleft', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        taskcnt: new FormItemModel({ caption: '总任务', detailType: 'FORMITEM', name: 'taskcnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom1: new FormItemModel({ caption: '任务总数', detailType: 'FORMITEM', name: 'custom1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom2: new FormItemModel({ caption: '未完成任务总数', detailType: 'FORMITEM', name: 'custom2', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex1: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        undonetaskcnt: new FormItemModel({ caption: '未完成', detailType: 'FORMITEM', name: 'undonetaskcnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storycnt: new FormItemModel({ caption: '总需求', detailType: 'FORMITEM', name: 'storycnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom3: new FormItemModel({ caption: '需求总数', detailType: 'FORMITEM', name: 'custom3', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom4: new FormItemModel({ caption: '未关闭需求总数', detailType: 'FORMITEM', name: 'custom4', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex2: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex2', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        unclosedstorycnt: new FormItemModel({ caption: '未关闭', detailType: 'FORMITEM', name: 'unclosedstorycnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        bugcnt: new FormItemModel({ caption: '所有', detailType: 'FORMITEM', name: 'bugcnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom5: new FormItemModel({ caption: 'Bug总数', detailType: 'FORMITEM', name: 'custom5', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom6: new FormItemModel({ caption: '未关闭Bug总数', detailType: 'FORMITEM', name: 'custom6', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex3: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex3', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        activebugcnt: new FormItemModel({ caption: '未解决', detailType: 'FORMITEM', name: 'activebugcnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
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
     * 监控表单属性 custom7 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
     */
    @Watch('data.formitemex4')
    public onFormitemex4Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex4', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 totalestimate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.totalestimate')
    public onTotalestimateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'totalestimate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 totalconsumed 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.totalconsumed')
    public onTotalconsumedChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'totalconsumed', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 totalleft 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.totalleft')
    public onTotalleftChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'totalleft', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 taskcnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.taskcnt')
    public onTaskcntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'taskcnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom1 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
     */
    @Watch('data.formitemex1')
    public onFormitemex1Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex1', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 undonetaskcnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.undonetaskcnt')
    public onUndonetaskcntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'undonetaskcnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storycnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.storycnt')
    public onStorycntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storycnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom3 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
     */
    @Watch('data.formitemex2')
    public onFormitemex2Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex2', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 unclosedstorycnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.unclosedstorycnt')
    public onUnclosedstorycntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'unclosedstorycnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 bugcnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.bugcnt')
    public onBugcntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'bugcnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom5 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
     */
    @Watch('data.formitemex3')
    public onFormitemex3Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex3', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 activebugcnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.activebugcnt')
    public onActivebugcntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'activebugcnt', newVal: newVal, oldVal: oldVal });
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
        if(data.projectstats){
            Object.assign(this.context,{projectstats:data.projectstats})
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
        copyData.projectstats = copyData.srfkey;
        copyData.id = copyData.srfkey;
        Object.assign(this.context,{projectstats:copyData.projectstats})
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