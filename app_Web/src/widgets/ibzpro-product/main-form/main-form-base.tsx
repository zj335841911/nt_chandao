import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import IBZProProductService from '@/service/ibzpro-product/ibzpro-product-service';
import MainService from './main-form-service';
import IBZProProductUIService from '@/uiservice/ibzpro-product/ibzpro-product-ui-service';
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
     * @type {IBZProProductService}
     * @memberof MainEditFormBase
     */
    public appEntityService: IBZProProductService = new IBZProProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeName: string = 'ibzproproduct';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeLogicName: string = '产品（开发系统）';

    /**
     * 界面UI服务对象
     *
     * @type {IBZProProductUIService}
     * @memberof MainBase
     */  
    public appUIService:IBZProProductUIService = new IBZProProductUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainEditFormBase
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
        ibzpro_productname: null,
        productname: null,
        pssystype: null,
        pmsproduct: null,
        ibzpro_productid: null,
        psobjectid: null,
        createman: null,
        createdate: null,
        updateman: null,
        updatedate: null,
        ibzproproduct:null,
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
     * 属性值规则
     *
     * @type {*}
     * @memberof MainBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '产品（开发系统）基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzproproduct.main_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        group2: new FormGroupPanelModel({ caption: '操作信息', detailType: 'GROUPPANEL', name: 'group2', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzproproduct.main_form', extractMode: 'ITEM', details: [] } }),

        formpage2: new FormPageModel({ caption: '其它', detailType: 'FORMPAGE', name: 'formpage2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srfupdatedate: new FormItemModel({ caption: '更新时间', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '产品（开发系统）标识', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfmajortext: new FormItemModel({ caption: '产品（开发系统）名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        ibzpro_productname: new FormItemModel({ caption: '产品（开发系统）名称', detailType: 'FORMITEM', name: 'ibzpro_productname', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        productname: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'productname', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        pssystype: new FormItemModel({ caption: '生产体系类型', detailType: 'FORMITEM', name: 'pssystype', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        pmsproduct: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'pmsproduct', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        ibzpro_productid: new FormItemModel({ caption: '产品（开发系统）标识', detailType: 'FORMITEM', name: 'ibzpro_productid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        psobjectid: new FormItemModel({ caption: '生产对象标识', detailType: 'FORMITEM', name: 'psobjectid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        createman: new FormItemModel({ caption: '建立人', detailType: 'FORMITEM', name: 'createman', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        createdate: new FormItemModel({ caption: '建立时间', detailType: 'FORMITEM', name: 'createdate', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        updateman: new FormItemModel({ caption: '更新人', detailType: 'FORMITEM', name: 'updateman', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        updatedate: new FormItemModel({ caption: '更新时间', detailType: 'FORMITEM', name: 'updatedate', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        form: new FormTabPanelModel({ caption: 'form', detailType: 'TABPANEL', name: 'form', visible: true, isShowCaption: true, form: this, tabPages: [{ name: 'formpage1', index: 0, visible: true }, { name: 'formpage2', index: 1, visible: true }] }),
    };
}