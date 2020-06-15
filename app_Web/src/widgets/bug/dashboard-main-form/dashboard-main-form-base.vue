<template>
    <i-form :model="this.data" class='app-form info-form-mode' ref='form'  id='bug_dashboardmain' style="">
    <input style="display:none;" />
    <row >
    <tabs :animated="false" size="small" name='dashboardmain' :value="detailsModel.form.activiedPage" 
        @on-click="detailsModel.form.clickPage($event)">
            <tab-pane v-show="detailsModel.formpage1.visible" name='formpage1' :index="0" tab='dashboardmain' class=''  
                :label="(h) =>{
                    return h('span',{
                        class:'caption'
                    },[
                    $t('entities.bug.dashboardmain_form.details.formpage1')
                    ])
                }">
                    
<div v-show="detailsModel.maingroup1.visible">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' :uiActionGroup="detailsModel.maingroup1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.bug.dashboardmain_form.details.maingroup1')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true" >    
    <row>
        <div v-show="detailsModel.title.visible">
    <app-form-item name='title' :itemRules="this.rules.title" class='' :caption="$t('entities.bug.dashboardmain_form.details.title')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.title.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='title' :value="data.title" :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.productname.visible">
    <app-form-item name='productname' :itemRules="this.rules.productname" class='' :caption="$t('entities.bug.dashboardmain_form.details.productname')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.productname.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-picker 
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :localContext ='{ }' 
  :localParam ='{ }' 
  :disabled="detailsModel.productname.disabled"
  name='productname'
  deMajorField='name'
  deKeyField='product'
  valueitem='product' 
  :value="data.productname"  
  editortype="linkonly" 
  :linkview="{ viewname: 'ProductMainTabExpView', title: $t('entities.product.views.maintabexpview.title'), deResParameters: [], parameters: [{ pathName: 'products', parameterName: 'product' }, { pathName: 'maintabexpview', parameterName: 'maintabexpview' } ], width: 0, height: 0, placement: '', isRedirectView: false }" 
  style=""  
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</div>
<div v-show="detailsModel.type.visible">
    <app-form-item name='type' :itemRules="this.rules.type" class='' :caption="$t('entities.bug.dashboardmain_form.details.type')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.type.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='type' :value="data.type" tag='Bug__type' codelistType='STATIC' :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.severity.visible">
    <app-form-item name='severity' :itemRules="this.rules.severity" class='' :caption="$t('entities.bug.dashboardmain_form.details.severity')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.severity.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='severity' :value="data.severity" tag='Bug__severity' codelistType='STATIC' :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.pri.visible">
    <app-form-item name='pri' :itemRules="this.rules.pri" class='' :caption="$t('entities.bug.dashboardmain_form.details.pri')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.pri.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='pri' :value="data.pri" tag='Bug__pri' codelistType='STATIC' :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.status.visible">
    <app-form-item name='status' :itemRules="this.rules.status" class='' :caption="$t('entities.bug.dashboardmain_form.details.status')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.status.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='status' :value="data.status" tag='Bug__status' codelistType='STATIC' :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.activatedcount.visible">
    <app-form-item name='activatedcount' :itemRules="this.rules.activatedcount" class='' :caption="$t('entities.bug.dashboardmain_form.details.activatedcount')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.activatedcount.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='activatedcount' :value="data.activatedcount" :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.activateddate.visible">
    <app-form-item name='activateddate' :itemRules="this.rules.activateddate" class='' :caption="$t('entities.bug.dashboardmain_form.details.activateddate')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.activateddate.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='activateddate' :value="data.activateddate" :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.confirmed.visible">
    <app-form-item name='confirmed' :itemRules="this.rules.confirmed" class='' :caption="$t('entities.bug.dashboardmain_form.details.confirmed')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.confirmed.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='confirmed' :value="data.confirmed" tag='YesNo2' codelistType='STATIC' :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.assignedto.visible">
    <app-form-item name='assignedto' :itemRules="this.rules.assignedto" class='' :caption="$t('entities.bug.dashboardmain_form.details.assignedto')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.assignedto.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='assignedto' :value="data.assignedto" :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.deadline.visible">
    <app-form-item name='deadline' :itemRules="this.rules.deadline" class='' :caption="$t('entities.bug.dashboardmain_form.details.deadline')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.deadline.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='deadline' :value="data.deadline" :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.os.visible">
    <app-form-item name='os' :itemRules="this.rules.os" class='' :caption="$t('entities.bug.dashboardmain_form.details.os')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.os.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='os' :value="data.os" tag='Bug__os' codelistType='STATIC' :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.browser.visible">
    <app-form-item name='browser' :itemRules="this.rules.browser" class='' :caption="$t('entities.bug.dashboardmain_form.details.browser')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.browser.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='browser' :value="data.browser" tag='Bug__browser' codelistType='STATIC' :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.keywords.visible">
    <app-form-item name='keywords' :itemRules="this.rules.keywords" class='' :caption="$t('entities.bug.dashboardmain_form.details.keywords')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.keywords.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='keywords' :value="data.keywords" :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
<div v-show="detailsModel.mailto.visible">
    <app-form-item name='mailto' :itemRules="this.rules.mailto" class='' :caption="$t('entities.bug.dashboardmain_form.details.mailto')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.mailto.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-span name='mailto' :value="data.mailto" tag='UserRealName' codelistType='DYNAMIC' renderMode="STR" valueSeparator="," textSeparator="," :data="data" :context="context" :viewparams="viewparams" :localContext ='{ }'  :localParam ='{ }'  style=""></app-span>
</app-form-item>

</div>
    
    </row>
</app-form-group>

</div>


            </tab-pane> 
            <tab-pane v-show="detailsModel.formpage2.visible" name='formpage2' :index="1" tab='dashboardmain' class=''  
                :label="(h) =>{
                    return h('span',{
                        class:'caption'
                    },[
                    $t('entities.bug.dashboardmain_form.details.formpage2')
                    ])
                }">
                    
<div v-show="detailsModel.grouppanel1.visible">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' :uiActionGroup="detailsModel.grouppanel1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.bug.dashboardmain_form.details.grouppanel1')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true" >    
    <row>
        <div v-show="detailsModel.projectname.visible">
    <app-form-item name='projectname' :itemRules="this.rules.projectname" class='' :caption="$t('entities.bug.dashboardmain_form.details.projectname')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.projectname.error" :isEmptyCaption="false" labelPos="LEFT">
    
<app-picker 
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :localContext ='{ }' 
  :localParam ='{ }' 
  :disabled="detailsModel.projectname.disabled"
  name='projectname'
  deMajorField='name'
  deKeyField='project'
  valueitem='project' 
  :value="data.projectname"  
  editortype="linkonly" 
  :linkview="{ viewname: 'ProjectMainTabExpView', title: $t('entities.project.views.maintabexpview.title'), deResParameters: [], parameters: [{ pathName: 'projects', parameterName: 'project' }, { pathName: 'maintabexpview', parameterName: 'maintabexpview' } ], width: 0, height: 0, placement: '', isRedirectView: false }" 
  style=""  
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</div>
    
    </row>
</app-form-group>

</div>


            </tab-pane> 
    </tabs>
    </row>
</i-form>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import BugService from '@/service/bug/bug-service';
import DashboardMainService from './dashboard-main-form-service';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
    components: {
      
    }
})
export default class DashboardMainBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof DashboardMain
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof DashboardMain
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof DashboardMain
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof DashboardMain
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof DashboardMain
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof DashboardMain
     */
    public getControlType(): string {
        return 'FORM'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DashboardMain
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {DashboardMainService}
     * @memberof DashboardMain
     */
    public service: DashboardMainService = new DashboardMainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof DashboardMain
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof DashboardMain
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof DashboardMain
     */
    public counterRefresh(){
        const _this:any =this;
        if(_this.counterServiceArray && _this.counterServiceArray.length >0){
            _this.counterServiceArray.forEach((item:any) =>{
                if(item.refreshData && item.refreshData instanceof Function){
                    item.refreshData();
                }
            })
        }
    }


    /**
     * 工作流审批意见控件绑定值
     *
     * @memberof DashboardMain
     */
    public srfwfmemo:string = "";
    
    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof DashboardMain
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof DashboardMain
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof DashboardMain
     */
    @Prop({ default: false }) public autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof DashboardMain
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof DashboardMain
     */
    @Prop() public WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof DashboardMain
     */
    @Prop() public WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof DashboardMain
     */
    @Prop() public updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof DashboardMain
     */
    @Prop() public removeAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof DashboardMain
     */
    @Prop() public loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof DashboardMain
     */
    @Prop() public loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof DashboardMain
     */
    @Prop() public createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof DashboardMain
     */
    @Prop() public searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof DashboardMain
     */
    @Prop() public viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof DashboardMain
     */
    public formState: Subject<any> = new Subject();

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof DashboardMain
     */
    public ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @public
     * @type {Subject<any>}
     * @memberof DashboardMain
     */
    public dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof DashboardMain
     */
    public dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @public
     * @type {*}
     * @memberof DashboardMain
     */
    public oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DashboardMain
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
        title: null,
        productname: null,
        module: null,
        plan: null,
        type: null,
        severity: null,
        pri: null,
        status: null,
        activatedcount: null,
        activateddate: null,
        confirmed: null,
        assignedto: null,
        deadline: null,
        os: null,
        browser: null,
        keywords: null,
        mailto: null,
        project: null,
        projectname: null,
        story: null,
        task: null,
        id: null,
        bug:null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof DashboardMain
      */
    public currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof DashboardMain
      */
    public drcounter: number = 0;

    /**
      * 需要等待关系界面保存时，第一次调用save参数的备份
      *
      * @type {number}
      * @memberof DashboardMain
      */
    public drsaveopt: any = {};

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof DashboardMain
      */
    public saveState:any ;

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DashboardMain
     */
    public rules: any = {
        srfupdatedate: [
            { type: 'string', message: '修改日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '修改日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '修改日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '修改日期 值不能为空', trigger: 'blur' },
        ],
        srforikey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { type: 'number', message: 'Bug编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: 'Bug编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: 'Bug编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'Bug编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { type: 'string', message: 'Bug标题 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: 'Bug标题 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: 'Bug标题 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: 'Bug标题 值不能为空', trigger: 'blur' },
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
        product: [
            { type: 'number', message: '所属产品 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所属产品 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所属产品 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属产品 值不能为空', trigger: 'blur' },
        ],
        title: [
            { type: 'string', message: 'Bug标题 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: 'Bug标题 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: 'Bug标题 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: 'Bug标题 值不能为空', trigger: 'blur' },
        ],
        productname: [
            { type: 'string', message: '产品 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '产品 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '产品 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品 值不能为空', trigger: 'blur' },
        ],
        module: [
            { type: 'number', message: '所属模块 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所属模块 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所属模块 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属模块 值不能为空', trigger: 'blur' },
        ],
        plan: [
            { type: 'number', message: '所属计划 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所属计划 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所属计划 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属计划 值不能为空', trigger: 'blur' },
        ],
        type: [
            { type: 'string', message: 'Bug类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: 'Bug类型 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: 'Bug类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: 'Bug类型 值不能为空', trigger: 'blur' },
        ],
        severity: [
            { type: 'string', message: '严重程度 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '严重程度 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '严重程度 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '严重程度 值不能为空', trigger: 'blur' },
        ],
        pri: [
            { type: 'string', message: '优先级 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '优先级 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '优先级 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '优先级 值不能为空', trigger: 'blur' },
        ],
        status: [
            { type: 'string', message: 'Bug状态 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: 'Bug状态 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: 'Bug状态 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: 'Bug状态 值不能为空', trigger: 'blur' },
        ],
        activatedcount: [
            { type: 'number', message: '激活次数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '激活次数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '激活次数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '激活次数 值不能为空', trigger: 'blur' },
        ],
        activateddate: [
            { type: 'string', message: '激活日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '激活日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '激活日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '激活日期 值不能为空', trigger: 'blur' },
        ],
        confirmed: [
            { type: 'string', message: '是否确认 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '是否确认 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '是否确认 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '是否确认 值不能为空', trigger: 'blur' },
        ],
        assignedto: [
            { type: 'string', message: '当前指派 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '当前指派 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '当前指派 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '当前指派 值不能为空', trigger: 'blur' },
        ],
        deadline: [
            { type: 'string', message: '截止日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '截止日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '截止日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '截止日期 值不能为空', trigger: 'blur' },
        ],
        os: [
            { type: 'string', message: '操作系统 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '操作系统 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '操作系统 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '操作系统 值不能为空', trigger: 'blur' },
        ],
        browser: [
            { type: 'string', message: '浏览器 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '浏览器 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '浏览器 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '浏览器 值不能为空', trigger: 'blur' },
        ],
        keywords: [
            { type: 'string', message: '关键词 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '关键词 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '关键词 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关键词 值不能为空', trigger: 'blur' },
        ],
        mailto: [
            { type: 'string', message: '抄送给 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '抄送给 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '抄送给 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '抄送给 值不能为空', trigger: 'blur' },
        ],
        project: [
            { type: 'number', message: '所属项目 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所属项目 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所属项目 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属项目 值不能为空', trigger: 'blur' },
        ],
        projectname: [
            { type: 'string', message: '项目 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目 值不能为空', trigger: 'blur' },
        ],
        story: [
            { type: 'number', message: '相关需求 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '相关需求 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        task: [
            { type: 'number', message: '相关任务 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '相关任务 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '相关任务 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '相关任务 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: 'Bug编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: 'Bug编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: 'Bug编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'Bug编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DashboardMain
     */
    public detailsModel: any = {
        maingroup1: new FormGroupPanelModel({ caption: 'Bug基本信息', detailType: 'GROUPPANEL', name: 'maingroup1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.bug.dashboardmain_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.bug.dashboardmain_form', extractMode: 'ITEM', details: [] } })
, 
        formpage2: new FormPageModel({ caption: '项目/需求/任务', detailType: 'FORMPAGE', name: 'formpage2', visible: true, isShowCaption: true, form: this })
, 
        srfupdatedate: new FormItemModel({ caption: '修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: 'Bug编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: 'Bug标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        product: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        title: new FormItemModel({ caption: 'Bug标题', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        productname: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'productname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        module: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'module', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        plan: new FormItemModel({ caption: '所属计划', detailType: 'FORMITEM', name: 'plan', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: 'Bug类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        severity: new FormItemModel({ caption: '严重程度', detailType: 'FORMITEM', name: 'severity', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        status: new FormItemModel({ caption: 'Bug状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        activatedcount: new FormItemModel({ caption: '激活次数', detailType: 'FORMITEM', name: 'activatedcount', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        activateddate: new FormItemModel({ caption: '激活日期', detailType: 'FORMITEM', name: 'activateddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        confirmed: new FormItemModel({ caption: '是否确认', detailType: 'FORMITEM', name: 'confirmed', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assignedto: new FormItemModel({ caption: '当前指派', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        deadline: new FormItemModel({ caption: '截止日期', detailType: 'FORMITEM', name: 'deadline', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        os: new FormItemModel({ caption: '操作系统', detailType: 'FORMITEM', name: 'os', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        browser: new FormItemModel({ caption: '浏览器', detailType: 'FORMITEM', name: 'browser', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        keywords: new FormItemModel({ caption: '关键词', detailType: 'FORMITEM', name: 'keywords', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        project: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        projectname: new FormItemModel({ caption: '项目', detailType: 'FORMITEM', name: 'projectname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        story: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'story', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        task: new FormItemModel({ caption: '相关任务', detailType: 'FORMITEM', name: 'task', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: 'Bug编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        form: new FormTabPanelModel({ caption: 'form', detailType: 'TABPANEL', name: 'form', visible: true, isShowCaption: true, form: this, tabPages: [{ name: 'formpage1', index: 0, visible: true }, { name: 'formpage2', index: 1, visible: true }] }),
    };

    /**
     * 监控表单属性 srfupdatedate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.srfupdatedate')
    onSrfupdatedateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfupdatedate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.srforikey')
    onSrforikeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srforikey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfkey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.srfkey')
    onSrfkeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfkey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfmajortext 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.srfmajortext')
    onSrfmajortextChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfmajortext', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srftempmode 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.srftempmode')
    onSrftempmodeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srftempmode', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfuf 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.srfuf')
    onSrfufChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfuf', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfdeid 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.srfdeid')
    onSrfdeidChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfdeid', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfsourcekey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 product 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.product')
    onProductChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'product', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 title 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.title')
    onTitleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'title', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 productname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.productname')
    onProductnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'productname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 module 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.module')
    onModuleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'module', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 plan 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.plan')
    onPlanChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'plan', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.type')
    onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 severity 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.severity')
    onSeverityChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'severity', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 pri 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.pri')
    onPriChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'pri', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 status 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.status')
    onStatusChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'status', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 activatedcount 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.activatedcount')
    onActivatedcountChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'activatedcount', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 activateddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.activateddate')
    onActivateddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'activateddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 confirmed 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.confirmed')
    onConfirmedChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'confirmed', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.assignedto')
    onAssignedtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assignedto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 deadline 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.deadline')
    onDeadlineChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'deadline', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 os 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.os')
    onOsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'os', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 browser 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.browser')
    onBrowserChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'browser', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 keywords 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.keywords')
    onKeywordsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'keywords', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 mailto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.mailto')
    onMailtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'mailto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 project 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.project')
    onProjectChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'project', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 projectname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.projectname')
    onProjectnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'projectname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 story 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.story')
    onStoryChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'story', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 task 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.task')
    onTaskChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'task', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardMain
     */
    @Watch('data.id')
    onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof DashboardMain
     */
    public resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
    }

    /**
      * 置空对象
      *
      * @param {any[]} args
      * @memberof EditForm
      */
    public ResetData(_datas:any){
        if(Object.keys(_datas).length >0){
            Object.keys(_datas).forEach((name: string) => {
                if (this.data.hasOwnProperty(name)) {
                    this.data[name] = null;
                }
            });
        }
    }

    /**
     * 表单逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof DashboardMain
     */
    public formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                



































    }

    /**
     * 表单值变化
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof DashboardMain
     */
    public formDataChange({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (this.ignorefieldvaluechange) {
            return;
        }
        this.resetFormData({ name: name, newVal: newVal, oldVal: oldVal });
        this.formLogic({ name: name, newVal: newVal, oldVal: oldVal });
        this.dataChang.next(JSON.stringify(this.data));
    }

    /**
     * 表单加载完成
     *
     * @public
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof DashboardMain
     */
    public onFormLoad(data: any = {},action:string): void {
        if(Object.is(action,"save") || Object.is(action,"autoSave") || Object.is(action,"submit"))
        // 更新context的实体主键
        if(data.bug){
            Object.assign(this.context,{bug:data.bug})
        }
        this.setFormEnableCond(data);
        this.fillForm(data,action);
        this.oldData = {};
        Object.assign(this.oldData, JSON.parse(JSON.stringify(this.data)));
        this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
        this.formLogic({ name: '', newVal: null, oldVal: null });
    }

    /**
     * 值填充
     *
     * @param {*} [_datas={}]
     * @param {string} [action]
     * @memberof DashboardMain
     */
    public fillForm(_datas: any = {},action:string): void {
        this.ignorefieldvaluechange = true;
        Object.keys(_datas).forEach((name: string) => {
            if (this.data.hasOwnProperty(name)) {
                this.data[name] = _datas[name];
            }
        });
        if(Object.is(action,'loadDraft')){
            this.createDefault();
        }
        if(Object.is(action,'load')){
            this.updateDefault();
        }
        this.$nextTick(function () {
            this.ignorefieldvaluechange = false;
        })
    }

    /**
     * 设置表单项是否启用
     *
     * @public
     * @param {*} data
     * @memberof DashboardMain
     */
    public setFormEnableCond(data: any): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setEnableCond(data.srfuf);
        });
    }

    /**
     * 重置草稿表单状态
     *
     * @public
     * @memberof DashboardMain
     */
    public resetDraftFormStates(): void {
        const form: any = this.$refs.form;
        if (form) {
            form.resetFields();
        }
    }

    /**
     * 重置校验结果
     *
     * @memberof DashboardMain
     */
    public resetValidates(): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setError('');
        });
    }

    /**
     * 填充校验结果 （后台）
     *
     * @param {any[]} fieldErrors
     * @memberof DashboardMain
     */
    public fillValidates(fieldErrors: any[]): void {
        fieldErrors.forEach((error: any) => {
            const formItem: FormItemModel = this.detailsModel[error.field];
            if (!formItem) {
                return;
            }
            this.$nextTick(() => {
                formItem.setError(error.message);
            });
        });
    }

    /**
     * 表单校验状态
     *
     * @returns {boolean} 
     * @memberof DashboardMain
     */
    public formValidateStatus(): boolean {
        const form: any = this.$refs.form;
        let validatestate: boolean = true;
        form.validate((valid: boolean) => {
            validatestate = valid ? true : false;
        });
        return validatestate
    }

    /**
     * 获取全部值
     *
     * @returns {*}
     * @memberof DashboardMain
     */
    public getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof DashboardMain
     */
    public onFormItemValueChange($event: { name: string, value: any }): void {
        if (!$event) {
            return;
        }
        if (!$event.name || Object.is($event.name, '') || !this.data.hasOwnProperty($event.name)) {
            return;
        }
        this.data[$event.name] = $event.value;
    }

    /**
     * 设置数据项值
     *
     * @param {string} name
     * @param {*} value
     * @returns {void}
     * @memberof DashboardMain
     */
    public setDataItemValue(name: string, value: any): void {
        if (!name || Object.is(name, '') || !this.data.hasOwnProperty(name)) {
            return;
        }
        if (Object.is(this.data[name], value)) {
            return;
        }
        this.data[name] = value;
    }



    /**
     * 分组界面行为事件
     *
     * @param {*} $event
     * @memberof DashboardMain
     */
    public groupUIActionClick($event: any): void {
        if (!$event) {
            return;
        }
        const item:any = $event.item;
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof DashboardMain
     */
    public created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof DashboardMain
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('autoload', action)) {
                    this.autoLoad(data);
                }
                if (Object.is('load', action)) {
                    this.load(data);
                }
                if (Object.is('loaddraft', action)) {
                    if(this.context.srfsourcekey){
                        this.copy(this.context.srfsourcekey);
                    }else{
                        this.loadDraft(data);
                    }
                }
                if (Object.is('save', action)) {
                    this.save(data,data.showResultInfo);
                }
                if (Object.is('remove', action)) {
                    this.remove(data);
                }
                if (Object.is('saveandexit', action)) {
                    this.saveAndExit(data);
                }
                if (Object.is('saveandnew', action)) {
                    this.saveAndNew(data);
                }
                if (Object.is('removeandexit', action)) {
                    this.removeAndExit(data);
                }
                if (Object.is('refresh', action)) {
                    this.refresh(data);
                }
            });
        }
        this.dataChang
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            ).subscribe((data: any) => {
                if (this.autosave) {
                    this.autoSave();
                }
                const state = !Object.is(JSON.stringify(this.oldData), JSON.stringify(this.data)) ? true : false;
                this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: state });
            });
    }

    /**
     * vue 生命周期
     *
     * @memberof DashboardMain
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof DashboardMain
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if (this.dataChangEvent) {
            this.dataChangEvent.unsubscribe();
        }
    }

    /**
     * 拷贝内容
     *
     * @param {*} [arg={}]
     * @memberof @memberof DashboardMain
     */
    public copy(srfkey: string): void {
        let copyData = this.$store.getters.getCopyData(srfkey);
        copyData.srfkey = Util.createUUID();
        copyData.bug = copyData.srfkey;
        copyData.id = copyData.srfkey;
        Object.assign(this.context,{bug:copyData.bug})
        this.data = copyData;
        this.$nextTick(() => {
          this.formState.next({ type: 'load', data: copyData });
          this.data.srfuf = '0';
          this.setFormEnableCond(this.data);
        });
    }

    /**
     *打印
     *@memberof @memberof DashboardMain
     */
    public print(){
        let _this:any = this;
        _this.$print({id:'bug_dashboardmain',popTitle:'看板视图基本信息'});
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof DashboardMain
     */
    public refresh(args: any[]): void {
        let arg: any = {};
        Object.assign(arg,args[0]);
        if (this.data.srfkey && !Object.is(this.data.srfkey, '')) {
            Object.assign(arg, { srfkey: this.data.srfkey });
            this.load(arg);
            return;
        }
        if (this.data.srfkeys && !Object.is(this.data.srfkeys, '')) {
            Object.assign(arg, { srfkey: this.data.srfkeys });
            this.load(arg);
            return;
        }
    }

    /**
     * 自动加载
     *
     * @param {*} [arg={}]
     * @returns {void}
     * @memberof DashboardMain
     */
    public autoLoad(arg: any = {}): void {
        if (arg.srfkey && !Object.is(arg.srfkey, '')) {
            Object.assign(arg, { srfkey: arg.srfkey });
            this.load(arg);
            return;
        }
        if (arg.srfkeys && !Object.is(arg.srfkeys, '')) {
            Object.assign(arg, { srfkey: arg.srfkeys });
            this.load(arg);
            return;
        }
        this.loadDraft(arg);
    }

    /**
     * 加载
     *
     * @public
     * @param {*} [opt={}]
     * @memberof DashboardMain
     */
    public load(opt: any = {}): void {
        if(!this.loadAction){
            this.$Notice.error({ title: '错误', desc: 'BugDashboardMainEditView9视图表单loadAction参数未配置' });
            return;
        }
        const arg: any = { ...opt };
        let viewparamResult:any = Object.assign(arg,this.viewparams);
        const get: Promise<any> = this.service.get(this.loadAction,JSON.parse(JSON.stringify(this.context)),{viewparams:viewparamResult}, this.showBusyIndicator);
        get.then((response: any) => {
            if (response && response.status === 200) {
                const data = response.data;
                this.onFormLoad(data,'load');
                this.$emit('load', data);
                this.$nextTick(() => {
                    this.formState.next({ type: 'load', data: data });
                });
            }
        }).catch((response: any) => {
            if (response && response.status && response.data) {
                this.$Notice.error({ title: '错误', desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 加载草稿
     *
     * @param {*} [opt={}]
     * @memberof DashboardMain
     */
    public loadDraft(opt: any = {}): void {
        if(!this.loaddraftAction){
            this.$Notice.error({ title: '错误', desc: 'BugDashboardMainEditView9视图表单loaddraftAction参数未配置' });
            return;
        }
        const arg: any = { ...opt } ;
        let viewparamResult:any = Object.assign(arg,this.viewparams);
        let post: Promise<any> = this.service.loadDraft(this.loaddraftAction,JSON.parse(JSON.stringify(this.context)),{viewparams:viewparamResult}, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                }
                return;
            }

            const data = response.data;
            if(data.bug){
                Object.assign(this.context,{bug:data.bug})
            }
            this.resetDraftFormStates();
            this.onFormLoad(data,'loadDraft');
            this.$emit('load', data);
            this.$nextTick(() => {
                this.formState.next({ type: 'load', data: data });
            });
            setTimeout(() => {
                const form: any = this.$refs.form;
                if (form) {
                    form.fields.forEach((field: any) => {
                        field.validateMessage = "";
                        field.validateState = "";
                        field.validateStatus = false;
                    });
                }
            });
        }).catch((response: any) => {
            if (response && response.status  && response.data) {
                this.$Notice.error({ title: '错误', desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 自动保存
     *
     * @param {*} [opt={}]
     * @memberof DashboardMain
     */
    public autoSave(opt: any = {}): void {
        if (!this.formValidateStatus()) {
            return;
        }
        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
        if(!action){
            let actionName:any = Object.is(data.srfuf, '1')?"updateAction":"createAction";
            this.$Notice.error({ title: '错误', desc: 'BugDashboardMainEditView9视图表单'+actionName+'参数未配置' });
            return;
        }
        Object.assign(arg,{viewparams:this.viewparams});
        const post: Promise<any> = this.service.add(action, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                }
                return;
            }

            const data = response.data;
            this.onFormLoad(data,'autoSave');
            this.$emit('save', data);
            this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
            this.$nextTick(() => {
                this.formState.next({ type: 'save', data: data });
            });
        }).catch((response: any) => {
            if (response && response.status && response.data) {
                this.$Notice.error({ title: '错误', desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 保存
     *
     * @param {*} [opt={}]
     * @param {boolean} [showResultInfo] 
     * @param {boolean} [ifStateNext] formState是否下发通知
     * @returns {Promise<any>}
     * @memberof DashboardMain
     */
    public async save(opt: any = {}, showResultInfo?: boolean, ifStateNext: boolean = true): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            showResultInfo = showResultInfo === undefined ? true : false;
            if (!this.formValidateStatus()) {
                this.$Notice.error({ title: '错误', desc: '值规则校验异常' });
                return;
            }
            const arg: any = { ...opt };
            const data = this.getValues();
            Object.assign(arg, data);
            Object.assign(arg, this.context);
            if (ifStateNext) {
                this.drcounter = 0;
                if(this.drcounter !== 0){
                    this.drsaveopt = opt;
                    this.formState.next({ type: 'beforesave', data: arg });//先通知关系界面保存
                    this.saveState = resolve;
                    return;
                }
            }
            const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
            if(!action){
                let actionName:any = Object.is(data.srfuf, '1')?"updateAction":"createAction";
                this.$Notice.error({ title: '错误', desc: 'BugDashboardMainEditView9视图表单'+actionName+'参数未配置' });
                return;
            }
            Object.assign(arg,{viewparams:this.viewparams});
            const post: Promise<any> = Object.is(data.srfuf, '1')?this.service.update(action, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator):this.service.add(action,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
            post.then((response: any) => {
                if (!response.status || response.status !== 200) {
                    if (response.data) {
                        this.$Notice.error({ title: '错误', desc: response.data.message });
                    }
                    return;
                }

                const data = response.data;
                this.onFormLoad(data,'save');
                this.$emit('save', data);
                this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
                this.$nextTick(() => {
                    this.formState.next({ type: 'save', data: data });
                });
                if (showResultInfo) {
                    this.$Notice.success({ title: '', desc: (data.srfmajortext ? data.srfmajortext : '') + '&nbsp;保存成功！' });
                }
                resolve(response);
            }).catch((response: any) => {
                if (response && response.status  && response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            });
        })
    }

    /**
    * 删除
    *
    * @public
    * @param {*} [opt={}]
    * @memberof EditForm
    */
    public remove(opt:Array<any> = [],showResultInfo?: boolean): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if(!this.removeAction){
                this.$Notice.error({ title: '错误', desc: 'BugDashboardMainEditView9视图表单removeAction参数未配置' });
                return;
            }
            const arg: any = opt[0];
            const _this: any = this;
            Object.assign(arg,{viewparams:this.viewparams});
            this.service.delete(_this.removeAction, JSON.parse(JSON.stringify(this.context)),arg, showResultInfo).then((response: any) => {
                if (response) {
                    const data = response.data;
                    this.$emit('remove',data);
                    this.formState.next({ type: 'remove', data: data });
                    this.data.ismodify = false;
                    this.$Notice.success({ title: '', desc: (data.srfmajortext ? data.srfmajortext : '') + '&nbsp;删除成功！' });
                    resolve(response);
                }
            }).catch((error: any) => {
                const { data: _data } = error;
                this.$Notice.error({ title: _data.title, desc: _data.message });
                reject(error);
            });
        });
    }

    /**
     * 工作流启动
     *
     * @param {*} [data={}]
     * @param {*} [localdata={}]
     * @returns {Promise<any>}
     * @memberof DashboardMain
     */
    public async wfstart(data: any,localdata?:any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            const _this: any = this;
            const post: Promise<any> = _this.save({},false);
            post.then((response:any) =>{
                const arg:any = response.data;
                if(this.viewparams){
                    Object.assign(arg,{viewparams:this.viewparams});
                }
                const result: Promise<any> = this.service.wfstart(_this.WFStartAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator,localdata);
                result.then((response: any) => {
                    if (!response || response.status !== 200) {
                        if(response.data){
                            this.$Notice.error({ title: '', desc: '工作流启动失败, ' + response.data.message });
                        }
                        return;
                    }
                    this.$Notice.info({ title: '', desc: '工作流启动成功' });
                    resolve(response);
            }).catch((response: any) => {
                if (response && response.status && response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            });
            }).catch((response: any) => {
                    if (response && response.status && response.data) {
                        this.$Notice.error({ title: '错误', desc: response.data.message });
                        reject(response);
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: '错误', desc: '系统异常' });
                        reject(response);
                        return;
                    }
                    reject(response);
            })
        });
    }

    /**
     * 工作流提交
     *
     * @param {*} [data={}]
     * @param {*} [localdata={}]
     * @returns {Promise<any>}
     * @memberof DashboardMain
     */
    public async wfsubmit(data: any,localdata?:any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
        const _this: any = this;
        const arg: any = data[0];
        Object.assign(arg,{viewparams:this.viewparams});
        if (!arg.bug || Object.is(arg.bug, '')) {
            return;
        }
        const post: Promise<any> = Object.is(arg.srfuf, '1')?this.service.update(this.updateAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator):this.service.add(this.createAction,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
        post.then((response:any) =>{
                const arg:any = response.data;
                // 保存完成UI处理
                this.onFormLoad(arg,'save');
                this.$emit('save', arg);
                this.$nextTick(() => {
                    this.formState.next({ type: 'save', data: arg });
                });
                // 准备提交参数
                if(this.viewparams){
                    Object.assign(arg,{viewparams:this.viewparams});
                }
                // 强制补充srfwfmemo
                if(this.srfwfmemo){
                    Object.assign(arg,{srfwfmemo:this.srfwfmemo});
                }
                const result: Promise<any> = this.service.wfsubmit(_this.WFSubmitAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator,localdata);
                result.then((response: any) => {
                    if (!response || response.status !== 200) {
                        if(response.data){
                            this.$Notice.error({ title: '', desc: '工作流提交失败, ' + response.data.message });
                        }
                        return;
                    }
                    this.onFormLoad(arg,'submit');
                    this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
                    this.$Notice.info({ title: '', desc: '工作流提交成功' });
                    resolve(response);
            }).catch((response: any) => {
                if (response && response.status && response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            });
            }).catch((response: any) => {
                    if (response && response.status && response.data) {
                        this.$Notice.error({ title: '错误', desc: response.data.message });
                        reject(response);
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: '错误', desc: '系统异常' });
                        reject(response);
                        return;
                    }
                    reject(response);
            })
        })
    }

    /**
     * 表单项更新
     *
     * @param {string} mode 界面行为名称
     * @param {*} [data={}] 请求数据
     * @param {string[]} updateDetails 更新项
     * @param {boolean} [showloading] 是否显示加载状态
     * @returns {void}
     * @memberof DashboardMain
     */
    public updateFormItems(mode: string, data: any = {}, updateDetails: string[], showloading?: boolean): void {
        if (!mode || (mode && Object.is(mode, ''))) {
            return;
        }
        const arg: any = { ...data };
        Object.assign(arg,this.viewparams);
        const post: Promise<any> = this.service.frontLogic(mode,JSON.parse(JSON.stringify(this.context)),arg, showloading);
        post.then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({ title: '错误', desc: '表单项更新失败' });
                return;
            }
            const data = response.data;
            const _data: any = {};
            updateDetails.forEach((name: string) => {
                if (!data.hasOwnProperty(name)) {
                    return;
                }
                Object.assign(_data, { [name]: data[name] });
            });
            this.setFormEnableCond(_data);
            this.fillForm(_data,'updateFormItem');
            this.formLogic({ name: '', newVal: null, oldVal: null });
            this.dataChang.next(JSON.stringify(this.data));
            this.$nextTick(() => {
                this.formState.next({ type: 'updateformitem', ufimode: arg.srfufimode, data: _data });
            });
        }).catch((response: any) => {
            if (response && response.status && response.data) {
                this.$Notice.error({ title: '错误', desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 回车事件
     *
     * @param {*} $event
     * @memberof DashboardMain
     */
    public onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @param {any[]} args
     * @memberof DashboardMain
     */
    public saveAndExit(data:any[]):Promise<any>{
        let _this = this;
        return new Promise((resolve: any, reject: any) =>{
            let arg: any = {};
            if(data && data.length > 0){
                Object.assign(arg,data[0]);
            }
            _this.currentAction = "saveAndExit";
            _this.save([arg]).then((res) =>{
                if(res){
                    _this.closeView(res.data);
                }
                resolve(res);
            }).catch((error) =>{
                reject(error);
            })
        })
    }

    /**
     * 保存并新建
     *
     * @param {any[]} args
     * @memberof DashboardMain
     */
    public saveAndNew(data:any[]):Promise<any>{
        let _this = this;
        return new Promise((resolve: any, reject: any) =>{
            let arg: any = {};
            if(data && data.length > 0){
                Object.assign(arg,data[0]);
            }
            _this.currentAction = "saveAndNew";
            _this.save([arg]).then((res) =>{
                _this.ResetData(res);
                _this.loadDraft({});
            }).catch((error) =>{
                reject(error);
            })
        })
    }

    /**
     * 删除并退出
     *
     * @param {any[]} args
     * @memberof DashboardMain
     */
    public removeAndExit(data:any[]):Promise<any>{
        let _this = this;
        return new Promise((resolve: any, reject: any) =>{
            let arg: any = {};
            if(data && data.length > 0){
                Object.assign(arg,data[0]);
            }
            _this.remove([arg]).then((res) =>{
                if(res){
                  _this.closeView(res.data);
                }
                resolve(res);
            }).catch((error) =>{
                reject(error);
            })
        })
    }

    /**
    * 关系界面数据保存完成
    *
    * @param {any} $event
    * @memberof DashboardMain
    */
    public drdatasaved($event:any){
        let _this = this;
        this.drcounter--;
        if(this.drcounter > 0){
            return;
        }
        this.save(this.drsaveopt, undefined, false).then((res) =>{
            this.saveState(res);
            this.drsaveopt = {};
            if(Object.is(_this.currentAction, "saveAndNew")){
                _this.ResetData(res);
                _this.loadDraft({});
            }else if(Object.is(_this.currentAction, "saveAndExit")){
                if(res){
                    _this.closeView(res.data);
                }
            }
        });
    }

    /**
     * 新建默认值
     * @memberof DashboardMain
     */
    public createDefault(){                    
    }

    /**
     * 更新默认值
     * @memberof DashboardMain
     */
    public updateDefault(){                    
    }

    
}
</script>

<style lang='less'>
@import './dashboard-main-form.less';
</style>