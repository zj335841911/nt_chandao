import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import DashboardInfoService from './dashboard-info-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {DashboardInfoEditFormBase}
 */
export class DashboardInfoEditFormBase extends EditFormControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {DashboardInfoService}
     * @memberof DashboardInfoEditFormBase
     */
    public service: DashboardInfoService = new DashboardInfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof DashboardInfoEditFormBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DashboardInfo
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
        po: null,
        rd: null,
        qd: null,
        linename: null,
        createdby: null,
        createddate: null,
        acl: null,
        id: null,
        product:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DashboardInfo
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
            { required: false, type: 'string', message: '名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '名称 值不能为空', trigger: 'blur' },
        ],
        po: [
            { required: false, type: 'string', message: '产品 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品 值不能为空', trigger: 'blur' },
        ],
        rd: [
            { required: false, type: 'string', message: '发布 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '发布 值不能为空', trigger: 'blur' },
        ],
        qd: [
            { required: false, type: 'string', message: '测试 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '测试 值不能为空', trigger: 'blur' },
        ],
        linename: [
            { required: false, type: 'string', message: '产品线 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品线 值不能为空', trigger: 'blur' },
        ],
        createdby: [
            { required: false, type: 'string', message: '创建人 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '创建人 值不能为空', trigger: 'blur' },
        ],
        createddate: [
            { required: false, type: 'string', message: '创建日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '创建日期 值不能为空', trigger: 'blur' },
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
     * @memberof DashboardInfo
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '产品基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.product.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '负责人', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.product.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel3: new FormGroupPanelModel({ caption: '产品信息', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.product.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel4: new FormGroupPanelModel({ caption: '其他信息', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.product.dashboardinfo_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '产品名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        name: new FormItemModel({ caption: '名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        po: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'po', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        rd: new FormItemModel({ caption: '发布', detailType: 'FORMITEM', name: 'rd', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        qd: new FormItemModel({ caption: '测试', detailType: 'FORMITEM', name: 'qd', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        linename: new FormItemModel({ caption: '产品线', detailType: 'FORMITEM', name: 'linename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        createdby: new FormItemModel({ caption: '创建人', detailType: 'FORMITEM', name: 'createdby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        createddate: new FormItemModel({ caption: '创建日期', detailType: 'FORMITEM', name: 'createddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        acl: new FormItemModel({ caption: '访问控制', detailType: 'FORMITEM', name: 'acl', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 }),

    };

    /**
     * 重置表单项值
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof DashboardInfo
     */
    public resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
    }

    /**
     * 表单逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof DashboardInfo
     */
    public formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                





















    }

    /**
     * 表单加载完成
     *
     * @public
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof DashboardInfo
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
     * @memberof DashboardInfo
     */
    public groupUIActionClick($event: any): void {
        if (!$event) {
            return;
        }
        const item: any = $event.item;
    }
}