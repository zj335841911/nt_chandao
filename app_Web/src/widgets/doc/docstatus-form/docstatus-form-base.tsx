import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import DocService from '@/service/doc/doc-service';
import DOCSTATUSService from './docstatus-form-service';
import DocUIService from '@/uiservice/doc/doc-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {DOCSTATUSEditFormBase}
 */
export class DOCSTATUSEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DOCSTATUSEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {DOCSTATUSService}
     * @memberof DOCSTATUSEditFormBase
     */
    public service: DOCSTATUSService = new DOCSTATUSService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocService}
     * @memberof DOCSTATUSEditFormBase
     */
    public appEntityService: DocService = new DocService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DOCSTATUSEditFormBase
     */
    protected appDeName: string = 'doc';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DOCSTATUSEditFormBase
     */
    protected appDeLogicName: string = '文档';

    /**
     * 界面UI服务对象
     *
     * @type {DocUIService}
     * @memberof DOCSTATUSBase
     */  
    public appUIService:DocUIService = new DocUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DOCSTATUSEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        alldoccnt1: null,
        recentupdatecnt: null,
        formitemex1: null,
        formitem3: null,
        formitem4: null,
        formitem: null,
        alldoccnt2: null,
        recentaddcnt: null,
        formitemex2: null,
        formitem1: null,
        alldoccnt3: null,
        mydoccnt: null,
        formitemex3: null,
        formitem2: null,
        formitemex4: null,
        id: null,
        doc:null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof DOCSTATUSEditFormBase
     */
    public majorMessageField: string = "";

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DOCSTATUSEditFormBase
     */
    public rules():any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DOCSTATUSBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DOCSTATUSEditFormBase
     */
    public detailsModel: any = {
        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.doc.docstatus_form', extractMode: 'ITEM', details: [] } }),

        grouppanel4: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.doc.docstatus_form', extractMode: 'ITEM', details: [] } }),

        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.doc.docstatus_form', extractMode: 'ITEM', details: [] } }),

        grouppanel5: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.doc.docstatus_form', extractMode: 'ITEM', details: [] } }),

        grouppanel6: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.doc.docstatus_form', extractMode: 'ITEM', details: [] } }),

        grouppanel7: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel7', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.doc.docstatus_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.doc.docstatus_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '文档编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '文档标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        alldoccnt1: new FormItemModel({ caption: '所有文档数量', detailType: 'FORMITEM', name: 'alldoccnt1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        recentupdatecnt: new FormItemModel({ caption: '最近更新数量', detailType: 'FORMITEM', name: 'recentupdatecnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        formitemex1: new FormItemModel({ caption: '所有', detailType: 'FORMITEM', name: 'formitemex1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        formitem3: new FormItemModel({ caption: '今日更新', detailType: 'FORMITEM', name: 'formitem3', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        formitem4: new FormItemModel({ caption: '最近更新', detailType: 'FORMITEM', name: 'formitem4', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        formitem: new FormItemModel({ caption: '最近添加', detailType: 'FORMITEM', name: 'formitem', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        alldoccnt2: new FormItemModel({ caption: '所有文档数量', detailType: 'FORMITEM', name: 'alldoccnt2', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        recentaddcnt: new FormItemModel({ caption: '最近添加数量', detailType: 'FORMITEM', name: 'recentaddcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        formitemex2: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex2', visible: true, isShowCaption: false, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        formitem1: new FormItemModel({ caption: '我的文档', detailType: 'FORMITEM', name: 'formitem1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        alldoccnt3: new FormItemModel({ caption: '所有文档数量', detailType: 'FORMITEM', name: 'alldoccnt3', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        mydoccnt: new FormItemModel({ caption: '我的文档数量', detailType: 'FORMITEM', name: 'mydoccnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        formitemex3: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex3', visible: true, isShowCaption: false, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        formitem2: new FormItemModel({ caption: '我的收藏', detailType: 'FORMITEM', name: 'formitem2', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        formitemex4: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex4', visible: true, isShowCaption: false, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '文档编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 0 }),

    };
}