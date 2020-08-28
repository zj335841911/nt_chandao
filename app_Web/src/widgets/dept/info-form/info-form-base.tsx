import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import DeptService from '@/service/dept/dept-service';
import InfoService from './info-form-service';
import DeptUIService from '@/uiservice/dept/dept-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {InfoEditFormBase}
 */
export class InfoEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof InfoEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {InfoService}
     * @memberof InfoEditFormBase
     */
    public service: InfoService = new InfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DeptService}
     * @memberof InfoEditFormBase
     */
    public appEntityService: DeptService = new DeptService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof InfoEditFormBase
     */
    protected appDeName: string = 'dept';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof InfoEditFormBase
     */
    protected appDeLogicName: string = '部门';

    /**
     * 界面UI服务对象
     *
     * @type {DeptUIService}
     * @memberof InfoBase
     */  
    public appUIService:DeptUIService = new DeptUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof InfoEditFormBase
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
        parentname: null,
        manager: null,
        id: null,
        dept:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof InfoEditFormBase
     */
    public rules: any = {
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof InfoBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof InfoEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.dept.info_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '部门名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '部门名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        parentname: new FormItemModel({ caption: '上级部门', detailType: 'FORMITEM', name: 'parentname', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        manager: new FormItemModel({ caption: '负责人', detailType: 'FORMITEM', name: 'manager', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

    };
}