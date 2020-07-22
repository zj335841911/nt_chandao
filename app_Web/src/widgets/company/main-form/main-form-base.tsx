import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import CompanyService from '@/service/company/company-service';
import MainService from './main-form-service';
import CompanyUIService from '@/uiservice/company/company-ui-service';
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
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected controlType: string = 'FORM';

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
     * @type {CompanyService}
     * @memberof MainEditFormBase
     */
    public appEntityService: CompanyService = new CompanyService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeName: string = 'company';

    /**
     * 界面UI服务对象
     *
     * @type {CompanyUIService}
     * @memberof MainEditFormBase
     */  
    public appUIService:CompanyUIService = new CompanyUIService(this.$store);


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
        phone: null,
        fax: null,
        address: null,
        zipcode: null,
        website: null,
        backyard: null,
        guest: null,
        id: null,
        company:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public rules: any = {
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: 'company基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.company.main_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '公司名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '公司名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        phone: new FormItemModel({ caption: '联系电话', detailType: 'FORMITEM', name: 'phone', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        fax: new FormItemModel({ caption: '传真', detailType: 'FORMITEM', name: 'fax', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        address: new FormItemModel({ caption: '通讯地址', detailType: 'FORMITEM', name: 'address', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        zipcode: new FormItemModel({ caption: '邮政编码', detailType: 'FORMITEM', name: 'zipcode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        website: new FormItemModel({ caption: '官网', detailType: 'FORMITEM', name: 'website', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        backyard: new FormItemModel({ caption: '内网', detailType: 'FORMITEM', name: 'backyard', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        guest: new FormItemModel({ caption: '匿名登陆', detailType: 'FORMITEM', name: 'guest', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

    };
}