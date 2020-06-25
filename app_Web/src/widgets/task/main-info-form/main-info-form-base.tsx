import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import MainInfoService from './main-info-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


/**
 * form部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MainInfoEditFormBase}
 */
export class MainInfoEditFormBase extends MainControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {MainInfoService}
     * @memberof MainInfoEditFormBase
     */
    public service: MainInfoService = new MainInfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof MainInfoEditFormBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainInfo
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
        name: null,
        projectname: null,
        modulename: null,
        storyname: null,
        assignedto: null,
        type: null,
        status: null,
        pri: null,
        mailto: null,
        openedby: null,
        openeddate: null,
        finishedby: null,
        finisheddate: null,
        canceledby: null,
        canceleddate: null,
        closedby: null,
        closeddate: null,
        closedreason: null,
        lasteditedby: null,
        lastediteddate: null,
        id: null,
        story: null,
        project: null,
        task:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainInfo
     */
    public rules: any = {
        srfupdatedate: [
            { type: 'string', message: '最后修改日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '最后修改日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '最后修改日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '最后修改日期 值不能为空', trigger: 'blur' },
        ],
        srforikey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { type: 'string', message: '任务名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '任务名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '任务名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务名称 值不能为空', trigger: 'blur' },
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
            { type: 'string', message: '任务名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '任务名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '任务名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务名称 值不能为空', trigger: 'blur' },
        ],
        projectname: [
            { type: 'string', message: '所属项目 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '所属项目 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '所属项目 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属项目 值不能为空', trigger: 'blur' },
        ],
        modulename: [
            { type: 'string', message: '所属模块 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '所属模块 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '所属模块 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属模块 值不能为空', trigger: 'blur' },
        ],
        storyname: [
            { type: 'string', message: '相关需求 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '相关需求 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        assignedto: [
            { type: 'string', message: '指派给 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '指派给 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'blur' },
        ],
        type: [
            { type: 'string', message: '任务类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '任务类型 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '任务类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务类型 值不能为空', trigger: 'blur' },
        ],
        status: [
            { type: 'string', message: '任务状态 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '任务状态 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '任务状态 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务状态 值不能为空', trigger: 'blur' },
        ],
        pri: [
            { type: 'string', message: '优先级 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '优先级 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '优先级 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '优先级 值不能为空', trigger: 'blur' },
        ],
        mailto: [
            { type: 'string', message: '抄送给 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '抄送给 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '抄送给 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '抄送给 值不能为空', trigger: 'blur' },
        ],
        openedby: [
            { type: 'string', message: '由谁创建 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '由谁创建 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '由谁创建 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁创建 值不能为空', trigger: 'blur' },
        ],
        openeddate: [
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        finishedby: [
            { type: 'string', message: '由谁完成 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '由谁完成 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '由谁完成 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁完成 值不能为空', trigger: 'blur' },
        ],
        finisheddate: [
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        canceledby: [
            { type: 'string', message: '由谁取消 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '由谁取消 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '由谁取消 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁取消 值不能为空', trigger: 'blur' },
        ],
        canceleddate: [
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        closedby: [
            { type: 'string', message: '由谁关闭 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '由谁关闭 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '由谁关闭 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁关闭 值不能为空', trigger: 'blur' },
        ],
        closeddate: [
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        closedreason: [
            { type: 'string', message: '关闭原因 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '关闭原因 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '关闭原因 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关闭原因 值不能为空', trigger: 'blur' },
        ],
        lasteditedby: [
            { type: 'string', message: '最后修改 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '最后修改 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '最后修改 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '最后修改 值不能为空', trigger: 'blur' },
        ],
        lastediteddate: [
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
        ],
        story: [
            { type: 'number', message: '相关需求 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '相关需求 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        project: [
            { type: 'number', message: '所属项目 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所属项目 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所属项目 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属项目 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainInfo
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: 'task基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel5: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel4: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } })
, 
        formpage2: new FormPageModel({ caption: '任务的一生', detailType: 'FORMPAGE', name: 'formpage2', visible: true, isShowCaption: true, form: this })
, 
        srfupdatedate: new FormItemModel({ caption: '最后修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        name: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        projectname: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'projectname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        modulename: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storyname: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'storyname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assignedto: new FormItemModel({ caption: '指派给', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: '任务类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        status: new FormItemModel({ caption: '任务状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        openedby: new FormItemModel({ caption: '由谁创建', detailType: 'FORMITEM', name: 'openedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        openeddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'openeddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        finishedby: new FormItemModel({ caption: '由谁完成', detailType: 'FORMITEM', name: 'finishedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        finisheddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'finisheddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        canceledby: new FormItemModel({ caption: '由谁取消', detailType: 'FORMITEM', name: 'canceledby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        canceleddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'canceleddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        closedby: new FormItemModel({ caption: '由谁关闭', detailType: 'FORMITEM', name: 'closedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        closeddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'closeddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        closedreason: new FormItemModel({ caption: '关闭原因', detailType: 'FORMITEM', name: 'closedreason', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        lasteditedby: new FormItemModel({ caption: '最后修改', detailType: 'FORMITEM', name: 'lasteditedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        lastediteddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'lastediteddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        story: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'story', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        project: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        form: new FormTabPanelModel({ caption: 'form', detailType: 'TABPANEL', name: 'form', visible: true, isShowCaption: true, form: this, tabPages: [{ name: 'formpage1', index: 0, visible: true }, { name: 'formpage2', index: 1, visible: true }] }),
    };

    /**
     * 监控表单属性 srfupdatedate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.srfupdatedate')
    public onSrfupdatedateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfupdatedate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
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
     * @memberof MainInfo
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
     * @memberof MainInfo
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
     * @memberof MainInfo
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
     * @memberof MainInfo
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
     * @memberof MainInfo
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
     * @memberof MainInfo
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
     * @memberof MainInfo
     */
    @Watch('data.name')
    public onNameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'name', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 projectname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.projectname')
    public onProjectnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'projectname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 modulename 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.modulename')
    public onModulenameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'modulename', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storyname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.storyname')
    public onStorynameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storyname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.assignedto')
    public onAssignedtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assignedto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
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
     * @memberof MainInfo
     */
    @Watch('data.status')
    public onStatusChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'status', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 pri 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.pri')
    public onPriChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'pri', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 mailto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.mailto')
    public onMailtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'mailto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 openedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.openedby')
    public onOpenedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'openedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 openeddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.openeddate')
    public onOpeneddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'openeddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 finishedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.finishedby')
    public onFinishedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'finishedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 finisheddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.finisheddate')
    public onFinisheddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'finisheddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 canceledby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.canceledby')
    public onCanceledbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'canceledby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 canceleddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.canceleddate')
    public onCanceleddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'canceleddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 closedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.closedby')
    public onClosedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'closedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 closeddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.closeddate')
    public onCloseddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'closeddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 closedreason 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.closedreason')
    public onClosedreasonChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'closedreason', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 lasteditedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.lasteditedby')
    public onLasteditedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'lasteditedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 lastediteddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.lastediteddate')
    public onLastediteddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'lastediteddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.id')
    public onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 story 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.story')
    public onStoryChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'story', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 project 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainInfo
     */
    @Watch('data.project')
    public onProjectChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'project', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MainInfo
     */
    public resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
    }

    /**
     * 表单逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MainInfo
     */
    public formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                


























        if (Object.is(name, '') || Object.is(name, 'openeddate')) {
            let ret = false;
            const _openeddate = this.data.openeddate;
            if (this.$verify.testCond(_openeddate, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.openeddate.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'finishedby')) {
            let ret = false;
            const _finishedby = this.data.finishedby;
            if (this.$verify.testCond(_finishedby, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.finisheddate.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'canceledby')) {
            let ret = false;
            const _canceledby = this.data.canceledby;
            if (this.$verify.testCond(_canceledby, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.canceleddate.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'closedby')) {
            let ret = false;
            const _closedby = this.data.closedby;
            if (this.$verify.testCond(_closedby, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.closeddate.setVisible(ret);
        }



        if (Object.is(name, '') || Object.is(name, 'lastediteddate')) {
            let ret = false;
            const _lastediteddate = this.data.lastediteddate;
            if (this.$verify.testCond(_lastediteddate, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.lastediteddate.setVisible(ret);
        }




    }

    /**
     * 表单加载完成
     *
     * @public
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof MainInfo
     */
    public onFormLoad(data: any = {},action:string): void {
        if(Object.is(action,"save") || Object.is(action,"autoSave") || Object.is(action,"submit"))
        // 更新context的实体主键
        if(data.task){
            Object.assign(this.context,{task:data.task})
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
     * @memberof MainInfo
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
     * @memberof MainInfo
     */
    public copy(srfkey: string): void {
        const copyData = this.$store.getters.getCopyData(srfkey);
        copyData.srfkey = this.$util.createUUID();
        copyData.task = copyData.srfkey;
        copyData.id = copyData.srfkey;
        Object.assign(this.context,{task:copyData.task})
        this.data = copyData;
        this.$nextTick(() => {
          this.formState.next({ type: 'load', data: copyData });
          this.data.srfuf = '0';
          this.setFormEnableCond(this.data);
        });
    }

    /**
     * 新建默认值
     * @memberof MainInfo
     */
    public createDefault(){                    
    }

    /**
     * 更新默认值
     * @memberof MainInfo
     */
    public updateDefault(){                    
    }
    
}