import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import MainInfoService from './main-info-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {MainInfoEditFormBase}
 */
export class MainInfoEditFormBase extends EditFormControlBase {

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
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoEditFormBase
     */
    protected appDeName: string = 'task';

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
        name: [
            { required: false, type: 'string', message: '任务名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务名称 值不能为空', trigger: 'blur' },
        ],
        projectname: [
            { required: false, type: 'string', message: '所属项目 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属项目 值不能为空', trigger: 'blur' },
        ],
        modulename: [
            { required: false, type: 'string', message: '所属模块 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属模块 值不能为空', trigger: 'blur' },
        ],
        storyname: [
            { required: false, type: 'string', message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        assignedto: [
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: false, type: 'string', message: '任务类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务类型 值不能为空', trigger: 'blur' },
        ],
        status: [
            { required: false, type: 'string', message: '任务状态 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务状态 值不能为空', trigger: 'blur' },
        ],
        pri: [
            { required: false, type: 'string', message: '优先级 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '优先级 值不能为空', trigger: 'blur' },
        ],
        mailto: [
            { required: false, type: 'string', message: '抄送给 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '抄送给 值不能为空', trigger: 'blur' },
        ],
        openedby: [
            { required: false, type: 'string', message: '由谁创建 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁创建 值不能为空', trigger: 'blur' },
        ],
        openeddate: [
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        finishedby: [
            { required: false, type: 'string', message: '由谁完成 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁完成 值不能为空', trigger: 'blur' },
        ],
        finisheddate: [
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        canceledby: [
            { required: false, type: 'string', message: '由谁取消 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁取消 值不能为空', trigger: 'blur' },
        ],
        canceleddate: [
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        closedby: [
            { required: false, type: 'string', message: '由谁关闭 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁关闭 值不能为空', trigger: 'blur' },
        ],
        closeddate: [
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        closedreason: [
            { required: false, type: 'string', message: '关闭原因 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关闭原因 值不能为空', trigger: 'blur' },
        ],
        lasteditedby: [
            { required: false, type: 'string', message: '最后修改 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '最后修改 值不能为空', trigger: 'blur' },
        ],
        lastediteddate: [
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        id: [
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
        ],
        story: [
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        project: [
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
        group1: new FormGroupPanelModel({ caption: 'task基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this }),

        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel5: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel4: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.maininfo_form', extractMode: 'ITEM', details: [] } }),

        formpage2: new FormPageModel({ caption: '任务的一生', detailType: 'FORMPAGE', name: 'formpage2', visible: true, isShowCaption: true, form: this }),

        srfupdatedate: new FormItemModel({ caption: '最后修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        projectname: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'projectname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        modulename: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        storyname: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'storyname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        assignedto: new FormItemModel({ caption: '指派给', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        type: new FormItemModel({ caption: '任务类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        status: new FormItemModel({ caption: '任务状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        openedby: new FormItemModel({ caption: '由谁创建', detailType: 'FORMITEM', name: 'openedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        openeddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'openeddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        finishedby: new FormItemModel({ caption: '由谁完成', detailType: 'FORMITEM', name: 'finishedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        finisheddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'finisheddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        canceledby: new FormItemModel({ caption: '由谁取消', detailType: 'FORMITEM', name: 'canceledby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        canceleddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'canceleddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        closedby: new FormItemModel({ caption: '由谁关闭', detailType: 'FORMITEM', name: 'closedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        closeddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'closeddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        closedreason: new FormItemModel({ caption: '关闭原因', detailType: 'FORMITEM', name: 'closedreason', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        lasteditedby: new FormItemModel({ caption: '最后修改', detailType: 'FORMITEM', name: 'lasteditedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        lastediteddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'lastediteddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        story: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'story', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        project: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        form: new FormTabPanelModel({ caption: 'form', detailType: 'TABPANEL', name: 'form', visible: true, isShowCaption: true, form: this, tabPages: [{ name: 'formpage1', index: 0, visible: true }, { name: 'formpage2', index: 1, visible: true }] }),
    };

    /**
     * 表单逻辑
     *
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
}