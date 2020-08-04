import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskEstimateService from './task-estimate-form-service';
import TaskUIService from '@/uiservice/task/task-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {TaskEstimateEditFormBase}
 */
export class TaskEstimateEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {TaskEstimateService}
     * @memberof TaskEstimateEditFormBase
     */
    public service: TaskEstimateService = new TaskEstimateService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskEstimateEditFormBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateEditFormBase
     */
    protected appDeName: string = 'task';
    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof TaskEstimateEditFormBase
     */  
    public appUIService:TaskUIService = new TaskUIService(this.$store);


    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof TaskEstimateEditFormBase
     */
    protected drCount: number = 1;

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof TaskEstimateEditFormBase
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
        id: null,
        name: null,
        task:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof TaskEstimateEditFormBase
     */
    public rules: any = {
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof TaskEstimateBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof TaskEstimateEditFormBase
     */
    public detailsModel: any = {
        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srfupdatedate: new FormItemModel({ caption: '最后修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        name: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

    };
}