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
        formitem: null,
        type: null,
        pri: null,
        name: null,
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
     * @memberof MainEditFormBase
     */
    public rules: any = {
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
        group1: new FormGroupPanelModel({ caption: '添加待办', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.todo.main_form', extractMode: 'ITEM', details: [] } }),

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

        cycle_enable: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'cycle_enable', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem: new FormItemModel({ caption: '过期时间', detailType: 'FORMITEM', name: 'formitem', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        type: new FormItemModel({ caption: '类型', detailType: 'FORMITEM', name: 'type', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        status: new FormItemModel({ caption: '状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        begin: new FormItemModel({ caption: '起止时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        end: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: false, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

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
                









        if (Object.is(name, '') || Object.is(name, 'date_disable')) {
            let ret = false;
            const _date_disable = this.data.date_disable;
            if (this.$verify.testCond(_date_disable, 'NOTEQ', '1')) {
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




        if (Object.is(name, '') || Object.is(name, 'formitem10')) {
            let ret = false;
            const _formitem10 = this.data.formitem10;
            if (this.$verify.testCond(_formitem10, 'NOTEQ', '1')) {
                ret = true;
            }
            this.detailsModel.begin.setDisabled(!ret);
        }

        if (Object.is(name, '') || Object.is(name, 'formitem10')) {
            let ret = false;
            const _formitem10 = this.data.formitem10;
            if (this.$verify.testCond(_formitem10, 'NOTEQ', '1')) {
                ret = true;
            }
            this.detailsModel.end.setDisabled(!ret);
        }




    }
}