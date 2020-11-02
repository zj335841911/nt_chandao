import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import MainProjectNewService from './main-project-new-form-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {MainProjectNewEditFormBase}
 */
export class MainProjectNewEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainProjectNewEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {MainProjectNewService}
     * @memberof MainProjectNewEditFormBase
     */
    public service: MainProjectNewService = new MainProjectNewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof MainProjectNewEditFormBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainProjectNewEditFormBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainProjectNewEditFormBase
     */
    protected appDeLogicName: string = '需求';

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof MainProjectNewBase
     */  
    public appUIService:StoryUIService = new StoryUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainProjectNewEditFormBase
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
        product: null,
        module: null,
        prodoctname: null,
        branch: null,
        modulename: null,
        plan: null,
        source: null,
        sourcenote: null,
        assignedto: null,
        neednotreview: null,
        reviewedby: null,
        project: null,
        title: null,
        pri: null,
        estimate: null,
        spec: null,
        verify: null,
        files: null,
        mailto: null,
        keywords: null,
        id: null,
        story:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainProjectNewEditFormBase
     */
    public rules():any{
        return {
        title: [
            { required: this.detailsModel.title.required, type: 'string', message: '需求名称 值不能为空', trigger: 'change' },
            { required: this.detailsModel.title.required, type: 'string', message: '需求名称 值不能为空', trigger: 'blur' },
        ],
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainProjectNewBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainProjectNewEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '需求基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.mainprojectnew_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srfupdatedate: new FormItemModel({ caption: '最后修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        product: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        module: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'module', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        prodoctname: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'prodoctname', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        branch: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'branch', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        modulename: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        plan: new FormItemModel({ caption: '计划', detailType: 'FORMITEM', name: 'plan', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        source: new FormItemModel({ caption: '需求来源', detailType: 'FORMITEM', name: 'source', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        sourcenote: new FormItemModel({ caption: '来源备注', detailType: 'FORMITEM', name: 'sourcenote', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        assignedto: new FormItemModel({ caption: '由谁评审', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        neednotreview: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'neednotreview', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        reviewedby: new FormItemModel({ caption: '由谁评审', detailType: 'FORMITEM', name: 'reviewedby', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        project: new FormItemModel({ caption: '项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        title: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:true, disabled: false, enableCond: 3 }),

        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        estimate: new FormItemModel({ caption: '预计', detailType: 'FORMITEM', name: 'estimate', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        spec: new FormItemModel({ caption: '需求描述', detailType: 'FORMITEM', name: 'spec', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        verify: new FormItemModel({ caption: '验收标准', detailType: 'FORMITEM', name: 'verify', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        files: new FormItemModel({ caption: '附件', detailType: 'FORMITEM', name: 'files', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        keywords: new FormItemModel({ caption: '关键词', detailType: 'FORMITEM', name: 'keywords', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, required:false, disabled: false, enableCond: 0 }),

    };

    /**
     * 新建默认值
     * @memberof MainProjectNewEditFormBase
     */
    public createDefault(){                    
        if (this.data.hasOwnProperty('neednotreview')) {
            this.data['neednotreview'] = '1';
        }
        if (this.data.hasOwnProperty('project')) {
            this.data['project'] = this.viewparams['project'];
        }
    }
}