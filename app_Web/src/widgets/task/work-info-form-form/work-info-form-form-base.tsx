import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import WorkInfoFormService from './work-info-form-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {WorkInfoFormEditFormBase}
 */
export class WorkInfoFormEditFormBase extends EditFormControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {WorkInfoFormService}
     * @memberof WorkInfoFormEditFormBase
     */
    public service: WorkInfoFormService = new WorkInfoFormService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof WorkInfoFormEditFormBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof WorkInfoFormEditFormBase
     */
    protected appDeName: string = 'task';

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof WorkInfoForm
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
        estimate: null,
        consumed: null,
        left: null,
        eststarted: null,
        realstarted: null,
        deadline: null,
        id: null,
        task:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof WorkInfoForm
     */
    public rules: any = {
        srfupdatedate: [
            { required: false, type: 'string', message: '最后修改日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '最后修改日期 值不能为空', trigger: 'blur' },
        ],
        srforikey: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { required: false, type: 'string', message: '任务名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务名称 值不能为空', trigger: 'blur' },
        ],
        srftempmode: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfuf: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfdeid: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfsourcekey: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        estimate: [
            { required: false, type: 'number', message: '最初预计 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '最初预计 值不能为空', trigger: 'blur' },
        ],
        consumed: [
            { required: false, type: 'number', message: '总计消耗 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '总计消耗 值不能为空', trigger: 'blur' },
        ],
        left: [
            { required: false, type: 'number', message: '预计剩余 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '预计剩余 值不能为空', trigger: 'blur' },
        ],
        eststarted: [
            { required: false, type: 'string', message: '预计开始 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '预计开始 值不能为空', trigger: 'blur' },
        ],
        realstarted: [
            { required: false, type: 'string', message: '实际开始 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '实际开始 值不能为空', trigger: 'blur' },
        ],
        deadline: [
            { required: false, type: 'string', message: '截止日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '截止日期 值不能为空', trigger: 'blur' },
        ],
        id: [
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof WorkInfoForm
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '工时信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.workinfoform_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this }),

        srfupdatedate: new FormItemModel({ caption: '最后修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        estimate: new FormItemModel({ caption: '最初预计', detailType: 'FORMITEM', name: 'estimate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        consumed: new FormItemModel({ caption: '总计消耗', detailType: 'FORMITEM', name: 'consumed', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        left: new FormItemModel({ caption: '预计剩余', detailType: 'FORMITEM', name: 'left', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        eststarted: new FormItemModel({ caption: '预计开始', detailType: 'FORMITEM', name: 'eststarted', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        realstarted: new FormItemModel({ caption: '实际开始', detailType: 'FORMITEM', name: 'realstarted', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        deadline: new FormItemModel({ caption: '截止日期', detailType: 'FORMITEM', name: 'deadline', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

    };
}