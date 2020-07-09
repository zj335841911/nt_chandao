import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import DashboardBugLifeService from './dashboard-bug-life-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {DashboardBugLifeEditFormBase}
 */
export class DashboardBugLifeEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DashboardBugLifeEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {DashboardBugLifeService}
     * @memberof DashboardBugLifeEditFormBase
     */
    public service: DashboardBugLifeService = new DashboardBugLifeService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof DashboardBugLifeEditFormBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DashboardBugLifeEditFormBase
     */
    protected appDeName: string = 'bug';

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DashboardBugLifeEditFormBase
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
        openedby: null,
        openedbuild: null,
        resolvedby: null,
        resolvedbuild: null,
        resolution: null,
        closedby: null,
        lasteditedby: null,
        linkbug: null,
        id: null,
        bug:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DashboardBugLifeEditFormBase
     */
    public rules: any = {
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DashboardBugLifeEditFormBase
     */
    public detailsModel: any = {
        buggroup1: new FormGroupPanelModel({ caption: 'Bug基本信息', detailType: 'GROUPPANEL', name: 'buggroup1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.bug.dashboardbuglife_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: 'Bug的一生', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.bug.dashboardbuglife_form', extractMode: 'ITEM', details: [] } }),

        formpage2: new FormPageModel({ caption: '其他相关', detailType: 'FORMPAGE', name: 'formpage2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srfupdatedate: new FormItemModel({ caption: '修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: 'Bug编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: 'Bug标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        openedby: new FormItemModel({ caption: '由谁创建', detailType: 'FORMITEM', name: 'openedby', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        openedbuild: new FormItemModel({ caption: '影响版本', detailType: 'FORMITEM', name: 'openedbuild', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        resolvedby: new FormItemModel({ caption: '由谁解决', detailType: 'FORMITEM', name: 'resolvedby', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        resolvedbuild: new FormItemModel({ caption: '解决版本', detailType: 'FORMITEM', name: 'resolvedbuild', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        resolution: new FormItemModel({ caption: '解决方案', detailType: 'FORMITEM', name: 'resolution', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        closedby: new FormItemModel({ caption: '由谁关闭', detailType: 'FORMITEM', name: 'closedby', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        lasteditedby: new FormItemModel({ caption: '最后修改者', detailType: 'FORMITEM', name: 'lasteditedby', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        linkbug: new FormItemModel({ caption: '相关Bug', detailType: 'FORMITEM', name: 'linkbug', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: 'Bug编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        form: new FormTabPanelModel({ caption: 'form', detailType: 'TABPANEL', name: 'form', visible: true, isShowCaption: true, form: this, tabPages: [{ name: 'formpage1', index: 0, visible: true }, { name: 'formpage2', index: 1, visible: true }] }),
    };
}