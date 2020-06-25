import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
import MainService from './main-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {MainEditFormBase}
 */
export class MainEditFormBase extends EditFormControlBase {

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
     * @type {TestReportService}
     * @memberof MainEditFormBase
     */
    public appEntityService: TestReportService = new TestReportService({ $store: this.$store });

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
        begin: null,
        end: null,
        formitemex1: null,
        owner: null,
        members: null,
        projectname: null,
        report: null,
        id: null,
        project: null,
        testreport:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main
     */
    public rules: any = {
        srforikey: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { required: false, type: 'string', message: '标题 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '标题 值不能为空', trigger: 'blur' },
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
        begin: [
            { required: false, type: 'string', message: '开始时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '开始时间 值不能为空', trigger: 'blur' },
        ],
        end: [
            { required: false, type: 'string', message: '结束时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '结束时间 值不能为空', trigger: 'blur' },
        ],
        formitemex1: [
            { required: false, type: 'string', message: '起止时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '起止时间 值不能为空', trigger: 'blur' },
        ],
        owner: [
            { required: false, type: 'string', message: '负责人 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '负责人 值不能为空', trigger: 'blur' },
        ],
        members: [
            { required: false, type: 'string', message: '参与人员 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '参与人员 值不能为空', trigger: 'blur' },
        ],
        projectname: [
            { required: false, type: 'string', message: '所属项目 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属项目 值不能为空', trigger: 'blur' },
        ],
        report: [
            { required: false, type: 'string', message: '总结 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '总结 值不能为空', trigger: 'blur' },
        ],
        id: [
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
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
     * @memberof Main
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.testreport.main_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        begin: new FormItemModel({ caption: '开始时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        end: new FormItemModel({ caption: '结束时间', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        formitemex1: new FormItemModel({ caption: '起止时间', detailType: 'FORMITEM', name: 'formitemex1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        owner: new FormItemModel({ caption: '负责人', detailType: 'FORMITEM', name: 'owner', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        members: new FormItemModel({ caption: '参与人员', detailType: 'FORMITEM', name: 'members', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        projectname: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'projectname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        report: new FormItemModel({ caption: '总结', detailType: 'FORMITEM', name: 'report', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        project: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

    };

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
        if(data.testreport){
            Object.assign(this.context,{testreport:data.testreport})
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
}