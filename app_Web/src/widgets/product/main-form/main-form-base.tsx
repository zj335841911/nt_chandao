import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import MainService from './main-form-service';
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
     * 建构部件服务对象
     *
     * @type {MainService}
     * @memberof MainEditFormBase
     */
    public service: MainService = new MainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof MainEditFormBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof Main
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        name: null,
        code: null,
        line: null,
        linename: null,
        po: null,
        qd: null,
        rd: null,
        type: null,
        desc: null,
        acl: null,
        id: null,
        product:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main
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
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'blur' },
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
        name: [
            { required: true, type: 'string', message: '产品名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '产品名称 值不能为空', trigger: 'blur' },
        ],
        code: [
            { required: true, type: 'string', message: '产品代号 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '产品代号 值不能为空', trigger: 'blur' },
        ],
        line: [
            { required: false, type: 'number', message: '产品线 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '产品线 值不能为空', trigger: 'blur' },
        ],
        linename: [
            { required: false, type: 'string', message: '产品线 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品线 值不能为空', trigger: 'blur' },
        ],
        po: [
            { required: false, type: 'string', message: '产品负责人 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品负责人 值不能为空', trigger: 'blur' },
        ],
        qd: [
            { required: false, type: 'string', message: '测试负责人 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '测试负责人 值不能为空', trigger: 'blur' },
        ],
        rd: [
            { required: false, type: 'string', message: '发布负责人 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '发布负责人 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: false, type: 'string', message: '产品类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品类型 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { required: false, type: 'string', message: '产品描述	 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品描述	 值不能为空', trigger: 'blur' },
        ],
        acl: [
            { required: false, type: 'string', message: '访问控制 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '访问控制 值不能为空', trigger: 'blur' },
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
     * @memberof Main
     */
    public detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.product.main_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: 'product基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.product.main_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '产品名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '产品名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        code: new FormItemModel({ caption: '产品代号', detailType: 'FORMITEM', name: 'code', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        line: new FormItemModel({ caption: '产品线', detailType: 'FORMITEM', name: 'line', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        linename: new FormItemModel({ caption: '产品线', detailType: 'FORMITEM', name: 'linename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        po: new FormItemModel({ caption: '产品负责人', detailType: 'FORMITEM', name: 'po', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        qd: new FormItemModel({ caption: '测试负责人', detailType: 'FORMITEM', name: 'qd', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        rd: new FormItemModel({ caption: '发布负责人', detailType: 'FORMITEM', name: 'rd', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        type: new FormItemModel({ caption: '产品类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        desc: new FormItemModel({ caption: '产品描述	', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        acl: new FormItemModel({ caption: '访问控制', detailType: 'FORMITEM', name: 'acl', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

    };

    /**
     * 重置表单项值
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof Main
     */
    public resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
    }

    /**
     * 表单逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof Main
     */
    public formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                





















    }

    /**
     * 表单加载完成
     *
     * @public
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof Main
     */
    public onFormLoad(data: any = {},action:string): void {
        if(Object.is(action,"save") || Object.is(action,"autoSave") || Object.is(action,"submit"))
        // 更新context的实体主键
        if(data.product){
            Object.assign(this.context,{product:data.product})
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
     * @memberof Main
     */
    public groupUIActionClick($event: any): void {
        if (!$event) {
            return;
        }
        const item: any = $event.item;
    }
}