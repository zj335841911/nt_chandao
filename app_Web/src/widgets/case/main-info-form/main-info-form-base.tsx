import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import MainInfoService from './main-info-form-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
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
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainInfoEditFormBase
     */
    protected controlType: string = 'FORM';

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
     * @type {CaseService}
     * @memberof MainInfoEditFormBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoEditFormBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoEditFormBase
     */
    protected appDeLogicName: string = '测试用例';
    /**
     * 界面UI服务对象
     *
     * @type {CaseUIService}
     * @memberof MainInfoEditFormBase
     */  
    public appUIService:CaseUIService = new CaseUIService(this.$store);


    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof MainInfoEditFormBase
     */
    protected drCount: number = 1;

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainInfoEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        id: null,
        title: null,
        version: null,
        precondition: null,
        case:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainInfoEditFormBase
     */
    public rules: any = {
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainInfoBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainInfoEditFormBase
     */
    public detailsModel: any = {
        druipart1: new FormDRUIPartModel({ caption: '用例步骤', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        group1: new FormGroupPanelModel({ caption: '测试用例基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.case.maininfo_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '用例编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '用例标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        title: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        version: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'version', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        precondition: new FormItemModel({ caption: '前置条件', detailType: 'FORMITEM', name: 'precondition', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

    };

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof MainInfoEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): Promise<void> {
                













        if (Object.is(name, '') || Object.is(name, 'precondition')) {
            let ret = false;
            const _precondition = this.data.precondition;
            if (this.$verify.testCond(_precondition, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.precondition.setVisible(ret);
        }

    }
}