import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProductModuleService from '@/service/product-module/product-module-service';
import MainService from './main-form-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


/**
 * form部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MainEditFormBase}
 */
export class MainEditFormBase extends MainControlBase {

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
     * @type {ProductModuleService}
     * @memberof MainEditFormBase
     */
    public appEntityService: ProductModuleService = new ProductModuleService({ $store: this.$store });

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
        rootname: null,
        branch: null,
        parentname: null,
        name: null,
        short: null,
        order: null,
        id: null,
        root: null,
        parent: null,
        productmodule:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main
     */
    public rules: any = {
        srforikey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { type: 'number', message: 'id 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: 'id 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: 'id 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'id 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { type: 'string', message: '名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '名称 值不能为空', trigger: 'blur' },
        ],
        srftempmode: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfuf: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfdeid: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfsourcekey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        rootname: [
            { type: 'string', message: '所属产品 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '所属产品 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '所属产品 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属产品 值不能为空', trigger: 'blur' },
        ],
        branch: [
            { type: 'number', message: '平台 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '平台 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '平台 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '平台 值不能为空', trigger: 'blur' },
        ],
        parentname: [
            { type: 'string', message: '上级模块 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '上级模块 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '上级模块 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '上级模块 值不能为空', trigger: 'blur' },
        ],
        name: [
            { type: 'string', message: '名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '名称 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: '名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '名称 值不能为空', trigger: 'blur' },
        ],
        short: [
            { type: 'string', message: '简称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '简称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '简称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '简称 值不能为空', trigger: 'blur' },
        ],
        order: [
            { type: 'number', message: '排序值 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '排序值 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '排序值 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '排序值 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: 'id 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: 'id 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: 'id 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'id 值不能为空', trigger: 'blur' },
        ],
        root: [
            { type: 'number', message: '产品 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '产品 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '产品 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '产品 值不能为空', trigger: 'blur' },
        ],
        parent: [
            { type: 'number', message: 'id 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: 'id 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: 'id 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'id 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Main
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '产品模块基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productmodule.main_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        rootname: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'rootname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        branch: new FormItemModel({ caption: '平台', detailType: 'FORMITEM', name: 'branch', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        parentname: new FormItemModel({ caption: '上级模块', detailType: 'FORMITEM', name: 'parentname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        name: new FormItemModel({ caption: '名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        short: new FormItemModel({ caption: '简称', detailType: 'FORMITEM', name: 'short', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        order: new FormItemModel({ caption: '排序值', detailType: 'FORMITEM', name: 'order', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        root: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'root', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        parent: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'parent', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.srforikey')
    public onSrforikeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srforikey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfkey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.srfkey')
    public onSrfkeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfkey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfmajortext 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.srfmajortext')
    public onSrfmajortextChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfmajortext', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srftempmode 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.srftempmode')
    public onSrftempmodeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srftempmode', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfuf 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.srfuf')
    public onSrfufChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfuf', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfdeid 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.srfdeid')
    public onSrfdeidChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfdeid', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfsourcekey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.srfsourcekey')
    public onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 rootname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.rootname')
    public onRootnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'rootname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 branch 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.branch')
    public onBranchChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'branch', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 parentname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.parentname')
    public onParentnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'parentname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 name 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.name')
    public onNameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'name', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 short 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.short')
    public onShortChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'short', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 order 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.order')
    public onOrderChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'order', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.id')
    public onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 root 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.root')
    public onRootChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'root', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 parent 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.parent')
    public onParentChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'parent', newVal: newVal, oldVal: oldVal });
    }


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
        if(data.productmodule){
            Object.assign(this.context,{productmodule:data.productmodule})
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

    /**
     * 拷贝内容
     *
     * @param {*} [arg={}]
     * @memberof Main
     */
    public copy(srfkey: string): void {
        const copyData = this.$store.getters.getCopyData(srfkey);
        copyData.srfkey = this.$util.createUUID();
        copyData.productmodule = copyData.srfkey;
        copyData.id = copyData.srfkey;
        Object.assign(this.context,{productmodule:copyData.productmodule})
        this.data = copyData;
        this.$nextTick(() => {
          this.formState.next({ type: 'load', data: copyData });
          this.data.srfuf = '0';
          this.setFormEnableCond(this.data);
        });
    }

    /**
     * 新建默认值
     * @memberof Main
     */
    public createDefault(){                    
    }

    /**
     * 更新默认值
     * @memberof Main
     */
    public updateDefault(){                    
    }
    
}