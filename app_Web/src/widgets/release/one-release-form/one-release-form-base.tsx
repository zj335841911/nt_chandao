import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import ReleaseService from '@/service/release/release-service';
import OneReleaseService from './one-release-form-service';
import ReleaseUIService from '@/uiservice/release/release-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {OneReleaseEditFormBase}
 */
export class OneReleaseEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof OneReleaseEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {OneReleaseService}
     * @memberof OneReleaseEditFormBase
     */
    public service: OneReleaseService = new OneReleaseService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ReleaseService}
     * @memberof OneReleaseEditFormBase
     */
    public appEntityService: ReleaseService = new ReleaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof OneReleaseEditFormBase
     */
    protected appDeName: string = 'release';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof OneReleaseEditFormBase
     */
    protected appDeLogicName: string = '发布';

    /**
     * 界面UI服务对象
     *
     * @type {ReleaseUIService}
     * @memberof OneReleaseBase
     */  
    public appUIService:ReleaseUIService = new ReleaseUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof OneReleaseEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        releasetype: null,
        backgroundid: null,
        frontapplication: null,
        sqlid: null,
        rebuild: null,
        product: null,
        id: null,
        release:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof OneReleaseEditFormBase
     */
    public rules: any = {
        releasetype: [
            { required: true, type: 'string', message: '运行模式 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '运行模式 值不能为空', trigger: 'blur' },
        ],
        backgroundid: [
            { required: true, type: 'string', message: '后台体系 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '后台体系 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof OneReleaseBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof OneReleaseEditFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: 'ID', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '发布名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        releasetype: new FormItemModel({ caption: '运行模式', detailType: 'FORMITEM', name: 'releasetype', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        backgroundid: new FormItemModel({ caption: '后台体系', detailType: 'FORMITEM', name: 'backgroundid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        frontapplication: new FormItemModel({ caption: '系统应用', detailType: 'FORMITEM', name: 'frontapplication', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        sqlid: new FormItemModel({ caption: '运行数据库', detailType: 'FORMITEM', name: 'sqlid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        rebuild: new FormItemModel({ caption: '重新构建', detailType: 'FORMITEM', name: 'rebuild', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        product: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: 'ID', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

    };
}