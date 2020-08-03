import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import EditFormService from './edit-form-form-service';
import TodoUIService from '@/uiservice/todo/todo-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {EditFormEditFormBase}
 */
export class EditFormEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof EditFormEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {EditFormService}
     * @memberof EditFormEditFormBase
     */
    public service: EditFormService = new EditFormService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof EditFormEditFormBase
     */
    public appEntityService: TodoService = new TodoService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof EditFormEditFormBase
     */
    protected appDeName: string = 'todo';
    /**
     * 界面UI服务对象
     *
     * @type {TodoUIService}
     * @memberof EditFormEditFormBase
     */  
    public appUIService:TodoUIService = new TodoUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof EditFormEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        date: null,
        cycle: null,
        config_type: null,
        config_day: null,
        config_week: null,
        config_month: null,
        config_beforedays: null,
        formitem: null,
        config_end: null,
        type: null,
        pri: null,
        name: null,
        desc: null,
        status: null,
        begin: null,
        end: null,
        formitem10: null,
        private: null,
        id: null,
        todo:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof EditFormEditFormBase
     */
    public rules: any = {
        name: [
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof EditFormBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof EditFormEditFormBase
     */
    public detailsModel: any = {
        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.todo.editform_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '周期设置', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: false, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.todo.editform_form', extractMode: 'ITEM', details: [] } }),

        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.todo.editform_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: '编辑待办', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.todo.editform_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '添加待办', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        date: new FormItemModel({ caption: '日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        cycle: new FormItemModel({ caption: '周期', detailType: 'FORMITEM', name: 'cycle', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        config_type: new FormItemModel({ caption: '周期类型', detailType: 'FORMITEM', name: 'config_type', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        config_day: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'config_day', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        config_week: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'config_week', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        config_month: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'config_month', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        config_beforedays: new FormItemModel({ caption: '提前', detailType: 'FORMITEM', name: 'config_beforedays', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem: new FormItemModel({ caption: '天生成待办', detailType: 'FORMITEM', name: 'formitem', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        config_end: new FormItemModel({ caption: '过期时间', detailType: 'FORMITEM', name: 'config_end', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        type: new FormItemModel({ caption: '类型', detailType: 'FORMITEM', name: 'type', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        desc: new FormItemModel({ caption: '描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        status: new FormItemModel({ caption: '状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        begin: new FormItemModel({ caption: '起止时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        end: new FormItemModel({ caption: '~', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem10: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitem10', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        private: new FormItemModel({ caption: '私人事务', detailType: 'FORMITEM', name: 'private', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

    };

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof EditFormEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): Promise<void> {
                

        if (Object.is(name, '') || Object.is(name, 'type')) {
            let ret = false;
            const _type = this.data.type;
            if (this.$verify.testCond(_type, 'EQ', 'cycle')) {
                ret = true;
            }
            this.detailsModel.grouppanel2.setVisible(ret);
        }











        if (Object.is(name, '') || Object.is(name, 'date_disable')) {
            let ret = false;
            const _date_disable = this.data.date_disable;
            if (this.$verify.testCond(_date_disable, 'NOTEQ', '1')) {
                ret = true;
            }
            this.detailsModel.date.setDisabled(!ret);
        }



        if (Object.is(name, '') || Object.is(name, 'config_type')) {
            let ret = false;
            const _config_type = this.data.config_type;
            if (this.$verify.testCond(_config_type, 'EQ', 'day')) {
                ret = true;
            }
            this.detailsModel.config_day.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'config_type')) {
            let ret = false;
            const _config_type = this.data.config_type;
            if (this.$verify.testCond(_config_type, 'EQ', 'week')) {
                ret = true;
            }
            this.detailsModel.config_week.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'config_type')) {
            let ret = false;
            const _config_type = this.data.config_type;
            if (this.$verify.testCond(_config_type, 'EQ', 'month')) {
                ret = true;
            }
            this.detailsModel.config_month.setVisible(ret);
        }




        if (Object.is(name, '') || Object.is(name, 'cycle_enable')) {
            let ret = false;
            const _cycle_enable = this.data.cycle_enable;
            if (this.$verify.testCond(_cycle_enable, 'NOTEQ', '1')) {
                ret = true;
            }
            this.detailsModel.type.setVisible(ret);
        }





        if (Object.is(name, '') || Object.is(name, 'formitem10')) {
            let ret = false;
            const _formitem10 = this.data.formitem10;
            if (this.$verify.testCond(_formitem10, 'NOTEQ', 'on')) {
                ret = true;
            }
            this.detailsModel.begin.setDisabled(!ret);
        }

        if (Object.is(name, '') || Object.is(name, 'formitem10')) {
            let ret = false;
            const _formitem10 = this.data.formitem10;
            if (this.$verify.testCond(_formitem10, 'NOTEQ', 'on')) {
                ret = true;
            }
            this.detailsModel.end.setDisabled(!ret);
        }




    }
}