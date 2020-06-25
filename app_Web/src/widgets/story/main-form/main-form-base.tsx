import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
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
     * @type {StoryService}
     * @memberof MainEditFormBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeName: string = 'story';

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
        title: null,
        prodoctname: null,
        modulename: null,
        plan: null,
        source: null,
        sourcenote: null,
        status: null,
        stage: null,
        pri: null,
        estimate: null,
        keywords: null,
        mailto: null,
        openedby: null,
        openeddate: null,
        assignedto: null,
        assigneddate: null,
        reviewedby: null,
        revieweddate: null,
        closedby: null,
        closeddate: null,
        closedreason: null,
        lasteditedby: null,
        lastediteddate: null,
        id: null,
        product: null,
        story:null,
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
            { required: false, type: 'string', message: '需求名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '需求名称 值不能为空', trigger: 'blur' },
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
        title: [
            { required: false, type: 'string', message: '需求名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '需求名称 值不能为空', trigger: 'blur' },
        ],
        prodoctname: [
            { required: false, type: 'string', message: '所属产品 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属产品 值不能为空', trigger: 'blur' },
        ],
        modulename: [
            { required: false, type: 'string', message: '所属模块 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属模块 值不能为空', trigger: 'blur' },
        ],
        plan: [
            { required: false, type: 'string', message: '所属计划 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属计划 值不能为空', trigger: 'blur' },
        ],
        source: [
            { required: false, type: 'string', message: '需求来源 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '需求来源 值不能为空', trigger: 'blur' },
        ],
        sourcenote: [
            { required: false, type: 'string', message: '来源备注 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '来源备注 值不能为空', trigger: 'blur' },
        ],
        status: [
            { required: false, type: 'string', message: '当前状态 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '当前状态 值不能为空', trigger: 'blur' },
        ],
        stage: [
            { required: false, type: 'string', message: '所处阶段 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所处阶段 值不能为空', trigger: 'blur' },
        ],
        pri: [
            { required: false, type: 'string', message: '优先级 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '优先级 值不能为空', trigger: 'blur' },
        ],
        estimate: [
            { required: false, type: 'number', message: '预计工时 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '预计工时 值不能为空', trigger: 'blur' },
        ],
        keywords: [
            { required: false, type: 'string', message: '关键词 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关键词 值不能为空', trigger: 'blur' },
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
        assignedto: [
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'blur' },
        ],
        assigneddate: [
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        reviewedby: [
            { required: false, type: 'string', message: '由谁评审 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁评审 值不能为空', trigger: 'blur' },
        ],
        revieweddate: [
            { required: false, type: 'string', message: '评审时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '评审时间 值不能为空', trigger: 'blur' },
        ],
        closedby: [
            { required: false, type: 'string', message: '由谁关闭 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁关闭 值不能为空', trigger: 'blur' },
        ],
        closeddate: [
            { required: false, type: 'string', message: '关闭日期	 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关闭日期	 值不能为空', trigger: 'blur' },
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
        product: [
            { required: false, type: 'number', message: '所属产品 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属产品 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Main
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: 'story基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.story.main_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this }),

        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.story.main_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.story.main_form', extractMode: 'ITEM', details: [] } }),

        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.story.main_form', extractMode: 'ITEM', details: [] } }),

        group2: new FormGroupPanelModel({ caption: '操作信息', detailType: 'GROUPPANEL', name: 'group2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.story.main_form', extractMode: 'ITEM', details: [] } }),

        formpage2: new FormPageModel({ caption: '需求的一生', detailType: 'FORMPAGE', name: 'formpage2', visible: true, isShowCaption: true, form: this }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        title: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        prodoctname: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'prodoctname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        modulename: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        plan: new FormItemModel({ caption: '所属计划', detailType: 'FORMITEM', name: 'plan', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        source: new FormItemModel({ caption: '需求来源', detailType: 'FORMITEM', name: 'source', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        sourcenote: new FormItemModel({ caption: '来源备注', detailType: 'FORMITEM', name: 'sourcenote', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        status: new FormItemModel({ caption: '当前状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        stage: new FormItemModel({ caption: '所处阶段', detailType: 'FORMITEM', name: 'stage', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        estimate: new FormItemModel({ caption: '预计工时', detailType: 'FORMITEM', name: 'estimate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        keywords: new FormItemModel({ caption: '关键词', detailType: 'FORMITEM', name: 'keywords', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        openedby: new FormItemModel({ caption: '由谁创建', detailType: 'FORMITEM', name: 'openedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        openeddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'openeddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        assignedto: new FormItemModel({ caption: '指派给', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        assigneddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'assigneddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        reviewedby: new FormItemModel({ caption: '由谁评审', detailType: 'FORMITEM', name: 'reviewedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        revieweddate: new FormItemModel({ caption: '评审时间', detailType: 'FORMITEM', name: 'revieweddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        closedby: new FormItemModel({ caption: '由谁关闭', detailType: 'FORMITEM', name: 'closedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        closeddate: new FormItemModel({ caption: '关闭日期	', detailType: 'FORMITEM', name: 'closeddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        closedreason: new FormItemModel({ caption: '关闭原因', detailType: 'FORMITEM', name: 'closedreason', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        lasteditedby: new FormItemModel({ caption: '最后修改', detailType: 'FORMITEM', name: 'lasteditedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        lastediteddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'lastediteddate', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        product: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        form: new FormTabPanelModel({ caption: 'form', detailType: 'TABPANEL', name: 'form', visible: true, isShowCaption: true, form: this, tabPages: [{ name: 'formpage1', index: 0, visible: true }, { name: 'formpage2', index: 1, visible: true }] }),
    };

    /**
     * 表单逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof Main
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


        if (Object.is(name, '') || Object.is(name, 'assigneddate')) {
            let ret = false;
            const _assigneddate = this.data.assigneddate;
            if (this.$verify.testCond(_assigneddate, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.assigneddate.setVisible(ret);
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