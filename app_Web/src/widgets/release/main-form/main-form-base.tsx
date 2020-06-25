import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import ReleaseService from '@/service/release/release-service';
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
     * @type {ReleaseService}
     * @memberof MainEditFormBase
     */
    public appEntityService: ReleaseService = new ReleaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeName: string = 'release';

    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof MainEditFormBase
     */
    protected drCount: number = 0;

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
        productname: null,
        name: null,
        buildname: null,
        status: null,
        date: null,
        desc: null,
        id: null,
        product: null,
        build: null,
        release:null,
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
            { required: false, type: 'number', message: 'ID 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'ID 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { required: false, type: 'string', message: '发布名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '发布名称 值不能为空', trigger: 'blur' },
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
        productname: [
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'blur' },
        ],
        name: [
            { required: false, type: 'string', message: '发布名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '发布名称 值不能为空', trigger: 'blur' },
        ],
        buildname: [
            { required: false, type: 'string', message: '版本 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '版本 值不能为空', trigger: 'blur' },
        ],
        status: [
            { required: false, type: 'string', message: '状态 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '状态 值不能为空', trigger: 'blur' },
        ],
        date: [
            { required: false, type: 'string', message: '发布日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '发布日期 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { required: false, type: 'string', message: '描述 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '描述 值不能为空', trigger: 'blur' },
        ],
        id: [
            { required: false, type: 'number', message: 'ID 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'ID 值不能为空', trigger: 'blur' },
        ],
        product: [
            { required: false, type: 'number', message: '产品 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '产品 值不能为空', trigger: 'blur' },
        ],
        build: [
            { required: false, type: 'number', message: '版本 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '版本 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.release.main_form', extractMode: 'ITEM', details: [] } }),

        grouppanel1: new FormGroupPanelModel({ caption: '附件', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.release.main_form', extractMode: 'ITEM', details: [] } }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this }),

        grouppanel2: new FormGroupPanelModel({ caption: '历史记录', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.release.main_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: 'ID', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '发布名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        productname: new FormItemModel({ caption: '产品名称', detailType: 'FORMITEM', name: 'productname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '发布名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        buildname: new FormItemModel({ caption: '版本', detailType: 'FORMITEM', name: 'buildname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        status: new FormItemModel({ caption: '状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        date: new FormItemModel({ caption: '发布日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        desc: new FormItemModel({ caption: '描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: 'ID', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        product: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        build: new FormItemModel({ caption: '版本', detailType: 'FORMITEM', name: 'build', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

    };
}