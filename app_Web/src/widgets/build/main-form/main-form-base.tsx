import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import BuildService from '@/service/build/build-service';
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
     * @type {BuildService}
     * @memberof MainEditFormBase
     */
    public appEntityService: BuildService = new BuildService({ $store: this.$store });

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
        productname: null,
        name: null,
        builder: null,
        date: null,
        scmpath: null,
        filepath: null,
        desc: null,
        id: null,
        product: null,
        build:null,
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
            { type: 'string', message: '名称编号 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '名称编号 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '名称编号 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '名称编号 值不能为空', trigger: 'blur' },
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
        productname: [
            { type: 'string', message: '产品 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '产品 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '产品 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品 值不能为空', trigger: 'blur' },
        ],
        name: [
            { type: 'string', message: '名称编号 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '名称编号 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '名称编号 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '名称编号 值不能为空', trigger: 'blur' },
        ],
        builder: [
            { type: 'string', message: '构建者 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '构建者 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '构建者 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '构建者 值不能为空', trigger: 'blur' },
        ],
        date: [
            { type: 'string', message: '打包日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '打包日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '打包日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '打包日期 值不能为空', trigger: 'blur' },
        ],
        scmpath: [
            { type: 'string', message: '源代码地址 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '源代码地址 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '源代码地址 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '源代码地址 值不能为空', trigger: 'blur' },
        ],
        filepath: [
            { type: 'string', message: '下载地址 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '下载地址 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '下载地址 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '下载地址 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { type: 'string', message: '描述 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '描述 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '描述 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '描述 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: 'id 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: 'id 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: 'id 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'id 值不能为空', trigger: 'blur' },
        ],
        product: [
            { type: 'number', message: '产品 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '产品 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '产品 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '产品 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Main
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.build.main_form', extractMode: 'ITEM', details: [] } })
, 
        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '历史记录', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.build.main_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '名称编号', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        productname: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'productname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        name: new FormItemModel({ caption: '名称编号', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        builder: new FormItemModel({ caption: '构建者', detailType: 'FORMITEM', name: 'builder', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        date: new FormItemModel({ caption: '打包日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        scmpath: new FormItemModel({ caption: '源代码地址', detailType: 'FORMITEM', name: 'scmpath', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        filepath: new FormItemModel({ caption: '下载地址', detailType: 'FORMITEM', name: 'filepath', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        desc: new FormItemModel({ caption: '描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        product: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
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
     * 监控表单属性 productname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.productname')
    public onProductnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'productname', newVal: newVal, oldVal: oldVal });
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
     * 监控表单属性 builder 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.builder')
    public onBuilderChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'builder', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 date 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.date')
    public onDateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'date', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 scmpath 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.scmpath')
    public onScmpathChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'scmpath', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 filepath 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.filepath')
    public onFilepathChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'filepath', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 desc 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.desc')
    public onDescChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'desc', newVal: newVal, oldVal: oldVal });
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
     * 监控表单属性 product 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.product')
    public onProductChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'product', newVal: newVal, oldVal: oldVal });
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
        if(data.build){
            Object.assign(this.context,{build:data.build})
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
        copyData.build = copyData.srfkey;
        copyData.id = copyData.srfkey;
        Object.assign(this.context,{build:copyData.build})
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