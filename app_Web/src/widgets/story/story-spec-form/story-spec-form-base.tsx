import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StorySpecService from './story-spec-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {StorySpecEditFormBase}
 */
export class StorySpecEditFormBase extends EditFormControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {StorySpecService}
     * @memberof StorySpecEditFormBase
     */
    public service: StorySpecService = new StorySpecService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StorySpecEditFormBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof StorySpec
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        parent: null,
        version: null,
        spec: null,
        verify: null,
        id: null,
        story:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof StorySpec
     */
    public rules: any = {
        srforikey: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { required: false, type: 'string', message: '需求名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '需求名称 值不能为空', trigger: 'blur' },
        ],
        srftempmode: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfuf: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfdeid: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfsourcekey: [
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        parent: [
            { required: false, type: 'number', message: '父需求 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '父需求 值不能为空', trigger: 'blur' },
        ],
        version: [
            { required: false, type: 'number', message: '版本# 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '版本# 值不能为空', trigger: 'blur' },
        ],
        spec: [
            { required: false, type: 'string', message: '需求描述 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '需求描述 值不能为空', trigger: 'blur' },
        ],
        verify: [
            { required: false, type: 'string', message: '验收标准 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '验收标准 值不能为空', trigger: 'blur' },
        ],
        id: [
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof StorySpec
     */
    public detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '需求描述', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.story.storyspec_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '验收标准', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.story.storyspec_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: '需求描述信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.story.storyspec_form', extractMode: 'ITEM', details: [] } }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: false, isShowCaption: true, form: this }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        parent: new FormItemModel({ caption: '父需求', detailType: 'FORMITEM', name: 'parent', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        version: new FormItemModel({ caption: '版本#', detailType: 'FORMITEM', name: 'version', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        spec: new FormItemModel({ caption: '需求描述', detailType: 'FORMITEM', name: 'spec', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 }),

        verify: new FormItemModel({ caption: '验收标准', detailType: 'FORMITEM', name: 'verify', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

    };

    /**
     * 重置表单项值
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof StorySpec
     */
    public resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
    }

    /**
     * 表单逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof StorySpec
     */
    public formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                



        if (Object.is(name, '') || Object.is(name, 'parent')) {
            let ret = false;
            const _parent = this.data.parent;
            if (this.$verify.testCond(_parent, 'EQ', '-1')) {
                ret = true;
            }
            this.detailsModel.druipart1.setVisible(ret);
        }














    }

    /**
     * 表单加载完成
     *
     * @public
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof StorySpec
     */
    public onFormLoad(data: any = {},action:string): void {
        if(Object.is(action,"save") || Object.is(action,"autoSave") || Object.is(action,"submit"))
        // 更新context的实体主键
        if(data.story){
            Object.assign(this.context,{story:data.story})
        }
        this.setFormEnableCond(data);
        this.fillForm(data,action);
        this.oldData = {};
        Object.assign(this.oldData, JSON.parse(JSON.stringify(this.data)));
        this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
        this.formLogic({ name: '', newVal: null, oldVal: null });
    }


    /**
     * 分组界面行为事件
     *
     * @param {*} $event
     * @memberof StorySpec
     */
    public groupUIActionClick($event: any): void {
        if (!$event) {
            return;
        }
        const item: any = $event.item;
    }
}