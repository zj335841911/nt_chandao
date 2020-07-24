import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import MainService from './main-form-service';
import TodoUIService from '@/uiservice/todo/todo-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {MainEditFormBase}
 */
export class MainEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {MainService}
     * @memberof MainEditFormBase
     */
    public service: MainService = new MainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof MainEditFormBase
     */
    public appEntityService: TodoService = new TodoService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeName: string = 'todo';

    /**
     * 界面UI服务对象
     *
     * @type {TodoUIService}
     * @memberof MainEditFormBase
     */  
    public appUIService:TodoUIService = new TodoUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainEditFormBase
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
        date_disable: null,
        cycle_enable: null,
        idvalue: null,
        formitem3: null,
        formitem4: null,
        formitem5: null,
        formitem2: null,
        formitem: null,
        type: null,
        pri: null,
        task: null,
        story: null,
        bug: null,
        name: null,
        formitem1: null,
        status: null,
        formitem6: null,
        formitem7: null,
        formitemex1: null,
        formitem10: null,
        private: null,
        id: null,
        todo:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public rules: any = {
        task: [
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'blur' },
        ],
        story: [
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'blur' },
        ],
        bug: [
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'blur' },
        ],
        name: [
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public detailsModel: any = {
        tabpage1: new FormTabPageModel({ caption: '天', detailType: 'TABPAGE', name: 'tabpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        tabpage2: new FormTabPageModel({ caption: '周', detailType: 'TABPAGE', name: 'tabpage2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        tabpage3: new FormTabPageModel({ caption: '月', detailType: 'TABPAGE', name: 'tabpage3', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        tabpanel1: new FormTabPanelModel({ caption: '', detailType: 'TABPANEL', name: 'tabpanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, tabPages: [{ name: 'tabpage1', index: 0, visible: true }, { name: 'tabpage2', index: 1, visible: true }, { name: 'tabpage3', index: 2, visible: true }] }),

        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.todo.main_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: '', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.todo.main_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '添加待办', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        date: new FormItemModel({ caption: '日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        date_disable: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'date_disable', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        cycle_enable: new FormItemModel({ caption: '周期', detailType: 'FORMITEM', name: 'cycle_enable', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        idvalue: new FormItemModel({ caption: '关联编号', detailType: 'FORMITEM', name: 'idvalue', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem3: new FormItemModel({ caption: '周期间隔(天)', detailType: 'FORMITEM', name: 'formitem3', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem4: new FormItemModel({ caption: '周期间隔', detailType: 'FORMITEM', name: 'formitem4', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem5: new FormItemModel({ caption: '周期间隔', detailType: 'FORMITEM', name: 'formitem5', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem2: new FormItemModel({ caption: '提前生成待办(天)', detailType: 'FORMITEM', name: 'formitem2', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem: new FormItemModel({ caption: '过期时间', detailType: 'FORMITEM', name: 'formitem', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        type: new FormItemModel({ caption: '类型', detailType: 'FORMITEM', name: 'type', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        task: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'task', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        story: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'story', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        bug: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'bug', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'name', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem1: new FormItemModel({ caption: '描述', detailType: 'FORMITEM', name: 'formitem1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        status: new FormItemModel({ caption: '状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem6: new FormItemModel({ caption: '开始', detailType: 'FORMITEM', name: 'formitem6', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem7: new FormItemModel({ caption: '结束', detailType: 'FORMITEM', name: 'formitem7', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitemex1: new FormItemModel({ caption: '起止时间', detailType: 'FORMITEM', name: 'formitemex1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem10: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitem10', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        private: new FormItemModel({ caption: '私人事务', detailType: 'FORMITEM', name: 'private', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

    };

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof MainEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): Promise<void> {
                




        if (Object.is(name, '') || Object.is(name, 'cycle_enable')) {
            let ret = false;
            const _cycle_enable = this.data.cycle_enable;
            if (this.$verify.testCond(_cycle_enable, 'EQ', '1')) {
                ret = true;
            }
            this.detailsModel.grouppanel1.setVisible(ret);
        }










        if (Object.is(name, '') || Object.is(name, 'date_disable')) {
            let ret = false;
            const _date_disable = this.data.date_disable;
            if (this.$verify.testCond(_date_disable, 'NOTEQ', 'on')) {
                ret = true;
            }
            this.detailsModel.date.setDisabled(!ret);
        }








        if (Object.is(name, '') || Object.is(name, 'cycle_enable')) {
            let ret = false;
            const _cycle_enable = this.data.cycle_enable;
            if (this.$verify.testCond(_cycle_enable, 'EQ', '1')) {
                ret = true;
            }
            this.detailsModel.formitem.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'cycle_enable')) {
            let ret = false;
            const _cycle_enable = this.data.cycle_enable;
            if (this.$verify.testCond(_cycle_enable, 'NOTEQ', '1')) {
                ret = true;
            }
            this.detailsModel.type.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'type')) {
            let ret = true;
            const _type = this.data.type;
            if (this.$verify.testCond(_type, 'NOTEQ', 'task')) {
                ret = false;
            }
            this.rules.task.some((rule: any) => {
                if (rule.hasOwnProperty('required')) {
                    rule.required = ret;
                }
                return false;
            });
        }
        if (Object.is(name, '') || Object.is(name, 'type')) {
            let ret = false;
            const _type = this.data.type;
            if (this.$verify.testCond(_type, 'EQ', 'task')) {
                ret = true;
            }
            this.detailsModel.task.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'type')) {
            let ret = true;
            const _type = this.data.type;
            if (this.$verify.testCond(_type, 'NOTEQ', 'story')) {
                ret = false;
            }
            this.rules.story.some((rule: any) => {
                if (rule.hasOwnProperty('required')) {
                    rule.required = ret;
                }
                return false;
            });
        }
        if (Object.is(name, '') || Object.is(name, 'type')) {
            let ret = false;
            const _type = this.data.type;
            if (this.$verify.testCond(_type, 'EQ', 'story')) {
                ret = true;
            }
            this.detailsModel.story.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'type')) {
            let ret = true;
            const _type = this.data.type;
            if (this.$verify.testCond(_type, 'NOTEQ', 'bug')) {
                ret = false;
            }
            this.rules.bug.some((rule: any) => {
                if (rule.hasOwnProperty('required')) {
                    rule.required = ret;
                }
                return false;
            });
        }
        if (Object.is(name, '') || Object.is(name, 'type')) {
            let ret = false;
            const _type = this.data.type;
            if (this.$verify.testCond(_type, 'EQ', 'bug')) {
                ret = true;
            }
            this.detailsModel.bug.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'type')) {
            let ret = true;
            const _type = this.data.type;
            if (this.$verify.testCond(_type, 'NOTEQ', 'custom')) {
                ret = false;
            }
            this.rules.name.some((rule: any) => {
                if (rule.hasOwnProperty('required')) {
                    rule.required = ret;
                }
                return false;
            });
        }
        if (Object.is(name, '') || Object.is(name, 'type')) {
            let ret = false;
            const _type = this.data.type;
            if (this.$verify.testCond(_type, 'EQ', 'custom') || this.$verify.testCond(_type, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.name.setVisible(ret);
        }









    }
}