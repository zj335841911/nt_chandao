import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import MainNewService from './main-new-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {MainNewEditFormBase}
 */
export class MainNewEditFormBase extends EditFormControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {MainNewService}
     * @memberof MainNewEditFormBase
     */
    public service: MainNewService = new MainNewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof MainNewEditFormBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainNewEditFormBase
     */
    protected appDeName: string = 'case';

    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof MainNewEditFormBase
     */
    protected drCount: number = 0;

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainNewEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        product: null,
        productname: null,
        module: null,
        modulename: null,
        type: null,
        story: null,
        storyname: null,
        title: null,
        pri: null,
        precondition: null,
        keywords: null,
        formitem1: null,
        id: null,
        case:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainNewEditFormBase
     */
    public rules: any = {
        srforikey: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, type: 'number', message: '用例编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '用例编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { required: false, type: 'string', message: '用例标题 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '用例标题 值不能为空', trigger: 'blur' },
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
        product: [
            { required: false, type: 'number', message: '所属产品 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属产品 值不能为空', trigger: 'blur' },
        ],
        productname: [
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'blur' },
        ],
        module: [
            { required: false, type: 'number', message: '所属模块 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属模块 值不能为空', trigger: 'blur' },
        ],
        modulename: [
            { required: false, type: 'string', message: '模块名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '模块名称 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: false, type: 'string', message: '用例类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '用例类型 值不能为空', trigger: 'blur' },
        ],
        story: [
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        storyname: [
            { required: false, type: 'string', message: '需求名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '需求名称 值不能为空', trigger: 'blur' },
        ],
        title: [
            { required: true, type: 'string', message: '用例标题 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '用例标题 值不能为空', trigger: 'blur' },
        ],
        pri: [
            { required: false, type: 'number', message: '优先级 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '优先级 值不能为空', trigger: 'blur' },
        ],
        precondition: [
            { required: false, type: 'string', message: '前置条件 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '前置条件 值不能为空', trigger: 'blur' },
        ],
        keywords: [
            { required: false, type: 'string', message: '关键词 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关键词 值不能为空', trigger: 'blur' },
        ],
        formitem1: [
            { required: false, type: 'string', message: '附件 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '附件 值不能为空', trigger: 'blur' },
        ],
        id: [
            { required: false, type: 'number', message: '用例编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '用例编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainNewEditFormBase
     */
    public detailsModel: any = {
        druipart1: new FormDRUIPartModel({ caption: '用例步骤', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this }),

        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.case.mainnew_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: '测试用例基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.case.mainnew_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '用例编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '用例标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        product: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        productname: new FormItemModel({ caption: '产品名称', detailType: 'FORMITEM', name: 'productname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        module: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'module', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        modulename: new FormItemModel({ caption: '模块名称', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        type: new FormItemModel({ caption: '用例类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        story: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'story', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        storyname: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'storyname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        title: new FormItemModel({ caption: '用例标题', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        precondition: new FormItemModel({ caption: '前置条件', detailType: 'FORMITEM', name: 'precondition', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        keywords: new FormItemModel({ caption: '关键词', detailType: 'FORMITEM', name: 'keywords', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        formitem1: new FormItemModel({ caption: '附件', detailType: 'FORMITEM', name: 'formitem1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '用例编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

    };
}