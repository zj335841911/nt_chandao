import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
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
     * @type {ProjectService}
     * @memberof MainEditFormBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeName: string = 'project';

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainEditFormBase
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
     * @memberof MainEditFormBase
     */
    public rules: any = {
        srforikey: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { required: false, type: 'string', message: '项目名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目名称 值不能为空', trigger: 'blur' },
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
            { required: true, type: 'string', message: '项目名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '项目名称 值不能为空', trigger: 'blur' },
        ],
        code: [
            { required: true, type: 'string', message: '项目代号 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '项目代号 值不能为空', trigger: 'blur' },
        ],
        begin: [
            { required: false, type: 'string', message: '开始时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '开始时间 值不能为空', trigger: 'blur' },
        ],
        end: [
            { required: false, type: 'string', message: '结束日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '结束日期 值不能为空', trigger: 'blur' },
        ],
        formitemex1: [
            { required: false, type: 'string', message: '项目周期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目周期 值不能为空', trigger: 'blur' },
        ],
        days: [
            { required: false, type: 'number', message: '可用工作日 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '可用工作日 值不能为空', trigger: 'blur' },
        ],
        team: [
            { required: false, type: 'string', message: '团队名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '团队名称 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: false, type: 'string', message: '项目类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目类型 值不能为空', trigger: 'blur' },
        ],
        srfarray: [
            { required: false, type: 'string', message: '关联数据数组 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关联数据数组 值不能为空', trigger: 'blur' },
        ],
        products: [
            { required: false, type: 'string', message: '关联产品集合 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关联产品集合 值不能为空', trigger: 'blur' },
        ],
        branchs: [
            { required: false, type: 'string', message: '关联产品平台集合 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关联产品平台集合 值不能为空', trigger: 'blur' },
        ],
        plans: [
            { required: false, type: 'string', message: '关联产品产品计划 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关联产品产品计划 值不能为空', trigger: 'blur' },
        ],
        formitemex2: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { required: false, type: 'string', message: '项目描述 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目描述 值不能为空', trigger: 'blur' },
        ],
        acl: [
            { required: false, type: 'string', message: '访问控制 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '访问控制 值不能为空', trigger: 'blur' },
        ],
        id: [
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.main_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: 'project基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.main_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '项目编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '项目名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '项目名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        code: new FormItemModel({ caption: '项目代号', detailType: 'FORMITEM', name: 'code', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        begin: new FormItemModel({ caption: '开始时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        end: new FormItemModel({ caption: '结束日期', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        formitemex1: new FormItemModel({ caption: '项目周期', detailType: 'FORMITEM', name: 'formitemex1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        days: new FormItemModel({ caption: '可用工作日', detailType: 'FORMITEM', name: 'days', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        team: new FormItemModel({ caption: '团队名称', detailType: 'FORMITEM', name: 'team', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        type: new FormItemModel({ caption: '项目类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfarray: new FormItemModel({ caption: '关联数据数组', detailType: 'FORMITEM', name: 'srfarray', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        products: new FormItemModel({ caption: '关联产品集合', detailType: 'FORMITEM', name: 'products', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        branchs: new FormItemModel({ caption: '关联产品平台集合', detailType: 'FORMITEM', name: 'branchs', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        plans: new FormItemModel({ caption: '关联产品产品计划', detailType: 'FORMITEM', name: 'plans', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        formitemex2: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex2', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        desc: new FormItemModel({ caption: '项目描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        acl: new FormItemModel({ caption: '访问控制', detailType: 'FORMITEM', name: 'acl', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '项目编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

    };
}