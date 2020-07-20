import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import ReviewService from './review-form-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {ReviewEditFormBase}
 */
export class ReviewEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ReviewEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {ReviewService}
     * @memberof ReviewEditFormBase
     */
    public service: ReviewService = new ReviewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof ReviewEditFormBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ReviewEditFormBase
     */
    protected appDeName: string = 'story';

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof ReviewEditFormBase
     */  
    public appUIService:StoryUIService = new StoryUIService(this.$store);


    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof ReviewEditFormBase
     */
    protected drCount: number = 1;

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof ReviewEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        title: null,
        revieweddate: null,
        result: null,
        pri: null,
        estimate: null,
        closedreason: null,
        assignedto: null,
        reviewedby: null,
        id: null,
        story:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ReviewEditFormBase
     */
    public rules: any = {
        result: [
            { required: true, type: 'string', message: '评审结果 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '评审结果 值不能为空', trigger: 'blur' },
        ],
        closedreason: [
            { required: true, type: 'string', message: '拒绝原因 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '拒绝原因 值不能为空', trigger: 'blur' },
        ],
        assignedto: [
            { required: true, type: 'string', message: '指派给 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '指派给 值不能为空', trigger: 'blur' },
        ],
        reviewedby: [
            { required: true, type: 'string', message: '由谁评审 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '由谁评审 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ReviewEditFormBase
     */
    public detailsModel: any = {
        grouppanel2: new FormGroupPanelModel({ caption: '评审通过', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.review_form', extractMode: 'ITEM', details: [] } }),

        grouppanel3: new FormGroupPanelModel({ caption: '拒绝', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.review_form', extractMode: 'ITEM', details: [] } }),

        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.review_form', extractMode: 'ITEM', details: [] } }),

        tabpage1: new FormTabPageModel({ caption: '影响项目', detailType: 'TABPAGE', name: 'tabpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        tabpage2: new FormTabPageModel({ caption: '影响Bug', detailType: 'TABPAGE', name: 'tabpage2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        tabpage3: new FormTabPageModel({ caption: '影响用例', detailType: 'TABPAGE', name: 'tabpage3', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        tabpanel1: new FormTabPanelModel({ caption: '', detailType: 'TABPANEL', name: 'tabpanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, tabPages: [{ name: 'tabpage1', index: 0, visible: true }, { name: 'tabpage2', index: 1, visible: true }, { name: 'tabpage3', index: 2, visible: true }] }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        group1: new FormGroupPanelModel({ caption: '需求基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.review_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        title: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        revieweddate: new FormItemModel({ caption: '评审时间', detailType: 'FORMITEM', name: 'revieweddate', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        result: new FormItemModel({ caption: '评审结果', detailType: 'FORMITEM', name: 'result', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        estimate: new FormItemModel({ caption: '预计工时', detailType: 'FORMITEM', name: 'estimate', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        closedreason: new FormItemModel({ caption: '拒绝原因', detailType: 'FORMITEM', name: 'closedreason', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        assignedto: new FormItemModel({ caption: '指派给', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        reviewedby: new FormItemModel({ caption: '由谁评审', detailType: 'FORMITEM', name: 'reviewedby', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

    };

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof ReviewEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): Promise<void> {
                
        if (Object.is(name, '') || Object.is(name, 'result')) {
            let ret = false;
            const _result = this.data.result;
            if (this.$verify.testCond(_result, 'EQ', 'pass')) {
                ret = true;
            }
            this.detailsModel.grouppanel2.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'result')) {
            let ret = false;
            const _result = this.data.result;
            if (this.$verify.testCond(_result, 'EQ', 'reject')) {
                ret = true;
            }
            this.detailsModel.grouppanel3.setVisible(ret);
        }

























    }
}