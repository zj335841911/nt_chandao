import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import ProjectMGService from './project-mg-form-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {ProjectMGEditFormBase}
 */
export class ProjectMGEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProjectMGEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {ProjectMGService}
     * @memberof ProjectMGEditFormBase
     */
    public service: ProjectMGService = new ProjectMGService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectMGEditFormBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectMGEditFormBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectMGEditFormBase
     */
    protected appDeLogicName: string = '项目';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof ProjectMGBase
     */  
    public appUIService:ProjectUIService = new ProjectUIService(this.$store);

    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof ProjectMGEditFormBase
     */
    protected drCount: number = 1;

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof ProjectMGEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        dept: null,
        managemembers: null,
        id: null,
        project:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ProjectMGEditFormBase
     */
    public rules: any = {
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ProjectMGBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ProjectMGEditFormBase
     */
    public detailsModel: any = {
        rawitem1: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '项目编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '项目名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        dept: new FormItemModel({ caption: '选择部门', detailType: 'FORMITEM', name: 'dept', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        managemembers: new FormItemModel({ caption: '复制团队', detailType: 'FORMITEM', name: 'managemembers', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '项目编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

    };
}