<template>
    <div ref='form' class="app-form bug-form ">
                

<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.group1.visible" 
    :uiActionGroup="detailsModel.group1.uiActionGroup" 
    :caption="$t('bug.mobnewfrom_form.details.group1')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel1.visible" 
    :uiActionGroup="detailsModel.grouppanel1.uiActionGroup" 
    :caption="$t('bug.mobnewfrom_form.details.grouppanel1')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='productname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="productname_item"  
    :itemValue="this.data.productname" 
    v-show="detailsModel.productname.visible" 
    :itemRules="this.rules.productname" 
    :caption="$t('bug.mobnewfrom_form.details.productname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.productname.disabled"
    :error="detailsModel.productname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='productname' 
    deMajorField='name'
    deKeyField='productid'
    valueitem='' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :dataOverLoad="dataOverLoad"
    :navigateContext ='{ "page": "0" } '
    :navigateParam ='{ "size": "1000" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.productname.disabled"
    :service="service"
    :acParams="{ serviceName: 'product', interfaceName: 'FetchCurUer'}"
    :value="data.productname" 
    @change="($event)=>this.data.productname = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='branch' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="branch_item"  
    :itemValue="this.data.branch" 
    v-show="detailsModel.branch.visible" 
    :itemRules="this.rules.branch" 
    :caption="$t('bug.mobnewfrom_form.details.branch')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.branch.disabled"
    :error="detailsModel.branch.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="ProductBranch"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.branch.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.branch"  
    :navigateContext ='{ "product": "%product%" } '
    :navigateParam ='{ "product": "%product%" } '
    @change="($event)=>this.data.branch = $event" />
</app-form-item>



<app-form-item 
    name='modulename' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="modulename_item"  
    :itemValue="this.data.modulename" 
    v-show="detailsModel.modulename.visible" 
    :itemRules="this.rules.modulename" 
    :caption="$t('bug.mobnewfrom_form.details.modulename')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.modulename.disabled"
    :error="detailsModel.modulename.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='modulename' 
    deMajorField='name'
    deKeyField='moduleid'
    valueitem='' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :dataOverLoad="dataOverLoad"
    :navigateContext ='{ "n_branch_eq": "%branch%", "product": "%product%", "n_root_eq": "%product%", "branch": "%branch%" } '
    :navigateParam ='{ "product": "%product%", "branch": "%branch%", "n_root_eq": "%product%", "n_branch_eq": "%branch%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.modulename.disabled"
    :service="service"
    :acParams="{ serviceName: 'module', interfaceName: 'FetchBugModule'}"
    :value="data.modulename" 
    @change="($event)=>this.data.modulename = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='projectname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="projectname_item"  
    :itemValue="this.data.projectname" 
    v-show="detailsModel.projectname.visible" 
    :itemRules="this.rules.projectname" 
    :caption="$t('bug.mobnewfrom_form.details.projectname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.projectname.disabled"
    :error="detailsModel.projectname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='projectname' 
    deMajorField='name'
    deKeyField='projectid'
    valueitem='' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :dataOverLoad="dataOverLoad"
    :navigateContext ='{ "product": "%product%" } '
    :navigateParam ='{ "product": "%product%", "size": "1000" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.projectname.disabled"
    :service="service"
    :acParams="{ serviceName: 'project', interfaceName: 'FetchBugProject'}"
    :value="data.projectname" 
    @change="($event)=>this.data.projectname = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='openedbuild' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="openedbuild_item"  
    :itemValue="this.data.openedbuild" 
    v-show="detailsModel.openedbuild.visible" 
    :itemRules="this.rules.openedbuild" 
    :caption="$t('bug.mobnewfrom_form.details.openedbuild')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.openedbuild.disabled"
    :error="detailsModel.openedbuild.error" 
    :isEmptyCaption="false">
        <app-mob-check-list 
    type="dynamic"  
    tag="CurProductBuild"
    :disabled="detailsModel.openedbuild.disabled" 
    :data="data"
    :context="context"
    :viewparams="viewparams"
    :value="data.openedbuild"   
    :navigateContext ='{ "bugproduct": "%product%", "bugproject": "%project%" } '
    :navigateParam ='{ "bugproject": "%project%", "bugproduct": "%product%" } '
    @change="($event)=>this.data.openedbuild = $event"/>
</app-form-item>



<app-form-item 
    name='assignedto' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="assignedto_item"  
    :itemValue="this.data.assignedto" 
    v-show="detailsModel.assignedto.visible" 
    :itemRules="this.rules.assignedto" 
    :caption="$t('bug.mobnewfrom_form.details.assignedto')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.assignedto.disabled"
    :error="detailsModel.assignedto.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="BugUserRealName"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.assignedto.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.assignedto"  
    :navigateContext ='{ "project": "%project%" } '
    :navigateParam ='{ "project": "%project%" } '
    @change="($event)=>this.data.assignedto = $event" />
</app-form-item>



<app-form-item 
    name='deadline' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="deadline_item"  
    :itemValue="this.data.deadline" 
    v-show="detailsModel.deadline.visible" 
    :itemRules="this.rules.deadline" 
    :caption="$t('bug.mobnewfrom_form.details.deadline')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.deadline.disabled"
    :error="detailsModel.deadline.error" 
    :isEmptyCaption="false">
        <app-mob-datetime-picker 
    displayFormat="YYYY-MM-DD"
    class="app-form-item-datetime" 
    :value="data.deadline" 
    :disabled="detailsModel.deadline.disabled"
    @change="($event)=>this.data.deadline = $event"/>
</app-form-item>



<app-form-item 
    name='type' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="type_item"  
    :itemValue="this.data.type" 
    v-show="detailsModel.type.visible" 
    :itemRules="this.rules.type" 
    :caption="$t('bug.mobnewfrom_form.details.type')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.type.disabled"
    :error="detailsModel.type.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__type"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.type.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.type"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.type = $event" />
</app-form-item>



<app-form-item 
    name='os' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="os_item"  
    :itemValue="this.data.os" 
    v-show="detailsModel.os.visible" 
    :itemRules="this.rules.os" 
    :caption="$t('bug.mobnewfrom_form.details.os')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.os.disabled"
    :error="detailsModel.os.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__os"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.os.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.os"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.os = $event" />
</app-form-item>



<app-form-item 
    name='browser' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="browser_item"  
    :itemValue="this.data.browser" 
    v-show="detailsModel.browser.visible" 
    :itemRules="this.rules.browser" 
    :caption="$t('bug.mobnewfrom_form.details.browser')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.browser.disabled"
    :error="detailsModel.browser.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__browser"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.browser.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.browser"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.browser = $event" />
</app-form-item>


    
</app-form-group>



<app-form-item 
    name='title' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="title_item"  
    :itemValue="this.data.title" 
    v-show="detailsModel.title.visible" 
    :itemRules="this.rules.title" 
    :caption="$t('bug.mobnewfrom_form.details.title')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.title.disabled"
    :error="detailsModel.title.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-input"  
        type="text"  
    :value="data.title" 
    :disabled="detailsModel.title.disabled" 
    @change="($event)=>this.data.title = $event" />
</app-form-item>



<app-form-item 
    name='severity' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="severity_item"  
    :itemValue="this.data.severity" 
    v-show="detailsModel.severity.visible" 
    :itemRules="this.rules.severity" 
    :caption="$t('bug.mobnewfrom_form.details.severity')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.severity.disabled"
    :error="detailsModel.severity.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__severity"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.severity.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.severity"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.severity = $event" />
</app-form-item>



<app-form-item 
    name='pri' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="pri_item"  
    :itemValue="this.data.pri" 
    v-show="detailsModel.pri.visible" 
    :itemRules="this.rules.pri" 
    :caption="$t('bug.mobnewfrom_form.details.pri')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.pri.disabled"
    :error="detailsModel.pri.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Bug__pri"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.pri.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.pri"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.pri = $event" />
</app-form-item>



<app-form-item 
    name='steps' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="steps_item"  
    :itemValue="this.data.steps" 
    v-show="detailsModel.steps.visible" 
    :itemRules="this.rules.steps" 
    :caption="$t('bug.mobnewfrom_form.details.steps')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.steps.disabled"
    :error="detailsModel.steps.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState" :value="data.steps" @change="(val) =>{this.data.steps =val}" :disabled="detailsModel.steps.disabled" :data="JSON.stringify(this.data)"  name="steps" :uploadparams='{objecttype:"bug",version:"editor"}' :exportparams='{objecttype:"bug",version:"editor"}'  style=""/>

</app-form-item>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel2.visible" 
    :uiActionGroup="detailsModel.grouppanel2.uiActionGroup" 
    :caption="$t('bug.mobnewfrom_form.details.grouppanel2')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='storyname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="storyname_item"  
    :itemValue="this.data.storyname" 
    v-show="detailsModel.storyname.visible" 
    :itemRules="this.rules.storyname" 
    :caption="$t('bug.mobnewfrom_form.details.storyname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.storyname.disabled"
    :error="detailsModel.storyname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='storyname' 
    deMajorField='title'
    deKeyField='storyid'
    valueitem='' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :dataOverLoad="dataOverLoad"
    :navigateContext ='{ "n_module_eq": "%module%" } '
    :navigateParam ='{ "n_module_eq": "%module%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.storyname.disabled"
    :service="service"
    :acParams="{ serviceName: 'story', interfaceName: 'FetchDefault'}"
    :value="data.storyname" 
    @change="($event)=>this.data.storyname = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='taskname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="taskname_item"  
    :itemValue="this.data.taskname" 
    v-show="detailsModel.taskname.visible" 
    :itemRules="this.rules.taskname" 
    :caption="$t('bug.mobnewfrom_form.details.taskname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.taskname.disabled"
    :error="detailsModel.taskname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='taskname' 
    deMajorField='name'
    deKeyField='taskid'
    valueitem='' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :dataOverLoad="dataOverLoad"
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.taskname.disabled"
    :service="service"
    :acParams="{ serviceName: 'task', interfaceName: 'FetchDefault'}"
    :value="data.taskname" 
    @change="($event)=>this.data.taskname = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='mailto' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="mailto_item"  
    :itemValue="this.data.mailto" 
    v-show="detailsModel.mailto.visible" 
    :itemRules="this.rules.mailto" 
    :caption="$t('bug.mobnewfrom_form.details.mailto')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.mailto.disabled"
    :error="detailsModel.mailto.error" 
    :isEmptyCaption="false">
        <app-mob-check-list 
    orMode="str"
    valueSeparator=","
    textSeparator=","
    type="dynamic"  
    tag="UserRealName"
    :disabled="detailsModel.mailto.disabled" 
    :data="data"
    :context="context"
    :viewparams="viewparams"
    :value="data.mailto"   
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.mailto = $event"/>
</app-form-item>



<app-form-item 
    name='keywords' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="keywords_item"  
    :itemValue="this.data.keywords" 
    v-show="detailsModel.keywords.visible" 
    :itemRules="this.rules.keywords" 
    :caption="$t('bug.mobnewfrom_form.details.keywords')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.keywords.disabled"
    :error="detailsModel.keywords.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-input"  
        type="text"  
    :value="data.keywords" 
    :disabled="detailsModel.keywords.disabled" 
    @change="($event)=>this.data.keywords = $event" />
</app-form-item>


    
</app-form-group>


    
</app-form-group>




    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import BugService from '@/app-core/service/bug/bug-service';
import MobNewFROMService from '@/app-core/ctrl-service/bug/mob-new-from-form-service';

import BugUIService from '@/ui-service/bug/bug-ui-action';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {  Util } from '@/ibiz-core/utils';


@Component({
    components: {
    }
})
export default class MobNewFROMBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MobNewFROM
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MobNewFROM
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MobNewFROM
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobNewFROM
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobNewFROM
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MobNewFROM
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MobNewFROM
     */
    protected getControlType(): string {
        return 'FORM'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MobNewFROM
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobNewFROMBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args)['data'];
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {MobNewFROMService}
     * @memberof MobNewFROM
     */
    protected service: MobNewFROMService = new MobNewFROMService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof MobNewFROM
     */
    protected appEntityService: BugService = new BugService();

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof MobNewFROMBase
     */  
    public deUIService:BugUIService = new BugUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MobNewFROM
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }

    /**
     * 加载完成
     *
     * @memberof MobNewFROM
     */
    public dataOverLoad:boolean = false;

    /**
     * 工作流审批意见控件绑定值
     *
     * @memberof MobNewFROM
     */
    @Prop() srfwfmemo?: string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MobNewFROM
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MobNewFROM
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof MobNewFROM
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MobNewFROM
     */
    @Prop({ default: true }) protected showBusyIndicator!: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof MobNewFROM
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof MobNewFROM
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MobNewFROM
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MobNewFROM
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof MobNewFROM
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MobNewFROM
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobNewFROM
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobNewFROM
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof MobNewFROM
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof MobNewFROM
     */
    protected formState: Subject<any> = new Subject();

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof MobNewFROM
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof MobNewFROM
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof MobNewFROM
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof MobNewFROM
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MobNewFROM
     */
    protected data: any = {
        srfupdatedate: null,
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        productname: null,
        branch: null,
        product: null,
        modulename: null,
        module: null,
        projectname: null,
        project: null,
        openedbuild: null,
        assignedto: null,
        deadline: null,
        type: null,
        os: null,
        browser: null,
        title: null,
        severity: null,
        pri: null,
        steps: null,
        storyname: null,
        taskname: null,
        mailto: null,
        keywords: null,
        id: null,
        bug: null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof MobNewFROM
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof MobNewFROM
      */
    protected drcounter: number = 0;

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof MobNewFROM
      */
    protected saveState:any ;

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobNewFROM
     */
    protected rules: any = {
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
        productname: [
            { type: 'string', message: '产品 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '产品 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '产品 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品 值不能为空', trigger: 'blur' },
        ],
        branch: [
            { type: 'number', message: '平台/分支 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '平台/分支 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '平台/分支 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '平台/分支 值不能为空', trigger: 'blur' },
        ],
        product: [
            { type: 'number', message: '所属产品 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所属产品 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所属产品 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属产品 值不能为空', trigger: 'blur' },
        ],
        modulename: [
            { type: 'string', message: '所属模块 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '所属模块 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '所属模块 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属模块 值不能为空', trigger: 'blur' },
        ],
        module: [
            { type: 'number', message: '所属模块 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所属模块 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所属模块 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属模块 值不能为空', trigger: 'blur' },
        ],
        projectname: [
            { type: 'string', message: '项目 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目 值不能为空', trigger: 'blur' },
        ],
        project: [
            { type: 'number', message: '所属项目 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所属项目 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所属项目 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属项目 值不能为空', trigger: 'blur' },
        ],
        openedbuild: [
            { type: 'string', message: '影响版本 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '影响版本 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: '影响版本 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '影响版本 值不能为空', trigger: 'blur' },
        ],
        assignedto: [
            { type: 'string', message: '指派给 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '指派给 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'blur' },
        ],
        deadline: [
            { type: 'string', message: '截止日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '截止日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '截止日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '截止日期 值不能为空', trigger: 'blur' },
        ],
        type: [
            { type: 'string', message: 'Bug类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: 'Bug类型 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: 'Bug类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: 'Bug类型 值不能为空', trigger: 'blur' },
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
        title: [
            { type: 'string', message: 'Bug标题 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: 'Bug标题 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: 'Bug标题 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: 'Bug标题 值不能为空', trigger: 'blur' },
        ],
        severity: [
            { type: 'number', message: '严重程度 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '严重程度 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '严重程度 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '严重程度 值不能为空', trigger: 'blur' },
        ],
        pri: [
            { type: 'number', message: '优先级 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '优先级 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '优先级 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '优先级 值不能为空', trigger: 'blur' },
        ],
        steps: [
            { type: 'string', message: '重现步骤 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '重现步骤 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '重现步骤 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '重现步骤 值不能为空', trigger: 'blur' },
        ],
        storyname: [
            { type: 'string', message: '相关需求 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '相关需求 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        taskname: [
            { type: 'string', message: '相关任务 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '相关任务 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '相关任务 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '相关任务 值不能为空', trigger: 'blur' },
        ],
        mailto: [
            { type: 'string', message: '抄送给 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '抄送给 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '抄送给 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '抄送给 值不能为空', trigger: 'blur' },
        ],
        keywords: [
            { type: 'string', message: '关键词 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '关键词 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '关键词 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关键词 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: 'Bug编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: 'Bug编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: 'Bug编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'Bug编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobNewFROMBase
     */
    public deRules:any = {
    };

    /**
     * 校验属性值规则
     *
     * @public
     * @param {{ name: string }} { name }
     * @memberof MobNewFROMBase
     */
    public verifyDeRules(name:string,rule:any = this.deRules,op:string = "AND") :{isPast:boolean,infoMessage:string}{
        let falg:any = {infoMessage:""};
        if(!rule[name]){
            return falg;
        }
        let opValue = op == 'AND'? true :false;
        let startOp = (val:boolean)=>{
            if(falg.isPast){
                if(opValue){
                    falg.isPast = falg && val;
                }else{
                    falg.isPast = falg || val;
                }
            }else{
                falg.isPast = val;
            }
        }
        rule[name].forEach((item:any) => {
            let dataValue = item.deName?this.data[this.service.getItemNameByDeName(item.deName)]:"";
            // 常规规则
            if(item.type == 'SIMPLE'){
                startOp(!this.$verify.checkFieldSimpleRule(dataValue,item.condOP,item.paramValue,item.ruleInfo,item.paramType,this.data,item.isKeyCond));
                falg.infoMessage = item.ruleInfo;
            }
            // 数值范围
            if(item.type == 'VALUERANGE2'){
                startOp( !this.$verify.checkFieldValueRangeRule(dataValue,item.minValue,item.isIncludeMinValue,item.maxValue,item.isIncludeMaxValue,item.ruleInfo,item.isKeyCond));
                falg.infoMessage = item.ruleInfo;
            }
            // 正则式
            if (item.type == "REGEX") {
                startOp(!this.$verify.checkFieldRegExRule(dataValue,item.regExCode,item.ruleInfo,item.isKeyCond));
                falg.infoMessage = item.ruleInfo;
            }
            // 长度
            if (item.type == "STRINGLENGTH") {
                startOp(!this.$verify.checkFieldStringLengthRule(dataValue,item.minValue,item.isIncludeMinValue,item.maxValue,item.isIncludeMaxValue,item.ruleInfo,item.isKeyCond)); 
                falg.infoMessage = item.ruleInfo;
            }
            // 系统值规则
            if(item.type == "SYSVALUERULE") {
                startOp(!this.$verify.checkFieldSysValueRule(dataValue,item.sysRule.regExCode,item.ruleInfo,item.isKeyCond));
                falg.infoMessage = item.ruleInfo;
            }
            // 分组
            if(item.type == 'GROUP'){
                falg = this.verifyDeRules('group',item)
                if(item.isNotMode){
                   falg.isPast = !falg.isPast;
                }
            }
            
        });
        if(!falg.hasOwnProperty("isPast")){
            falg.isPast = true;
        }
        return falg;
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MobNewFROM
     */
    protected detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'bug.mobnewfrom_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'bug.mobnewfrom_form', extractMode: 'ITEM', details: [] } })
, 
        group1: new FormGroupPanelModel({ caption: 'bug基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'bug.mobnewfrom_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
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
        productname: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'productname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        branch: new FormItemModel({ caption: '平台/分支', detailType: 'FORMITEM', name: 'branch', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        product: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        modulename: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        module: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'module', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        projectname: new FormItemModel({ caption: '项目', detailType: 'FORMITEM', name: 'projectname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        project: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        openedbuild: new FormItemModel({ caption: '影响版本', detailType: 'FORMITEM', name: 'openedbuild', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assignedto: new FormItemModel({ caption: '指派给', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        deadline: new FormItemModel({ caption: '截止日期', detailType: 'FORMITEM', name: 'deadline', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: 'Bug类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        os: new FormItemModel({ caption: '操作系统', detailType: 'FORMITEM', name: 'os', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        browser: new FormItemModel({ caption: '浏览器', detailType: 'FORMITEM', name: 'browser', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        title: new FormItemModel({ caption: 'Bug标题', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        severity: new FormItemModel({ caption: '严重程度', detailType: 'FORMITEM', name: 'severity', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        steps: new FormItemModel({ caption: '重现步骤', detailType: 'FORMITEM', name: 'steps', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storyname: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'storyname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        taskname: new FormItemModel({ caption: '相关任务', detailType: 'FORMITEM', name: 'taskname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        keywords: new FormItemModel({ caption: '关键词', detailType: 'FORMITEM', name: 'keywords', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: 'Bug编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
    };

    /**
     * 监控表单属性 srfupdatedate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
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
     * @memberof MobNewFROM
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
     * @memberof MobNewFROM
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
     * @memberof MobNewFROM
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
     * @memberof MobNewFROM
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
     * @memberof MobNewFROM
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
     * @memberof MobNewFROM
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
     * @memberof MobNewFROM
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 productname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.productname')
    onProductnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'productname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 branch 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.branch')
    onBranchChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'branch', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 product 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.product')
    onProductChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'product', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 modulename 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.modulename')
    onModulenameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'modulename', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 module 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.module')
    onModuleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'module', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 projectname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.projectname')
    onProjectnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'projectname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 project 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.project')
    onProjectChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'project', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 openedbuild 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.openedbuild')
    onOpenedbuildChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'openedbuild', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
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
     * @memberof MobNewFROM
     */
    @Watch('data.deadline')
    onDeadlineChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'deadline', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.type')
    onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 os 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
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
     * @memberof MobNewFROM
     */
    @Watch('data.browser')
    onBrowserChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'browser', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 title 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.title')
    onTitleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'title', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 severity 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
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
     * @memberof MobNewFROM
     */
    @Watch('data.pri')
    onPriChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'pri', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 steps 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.steps')
    onStepsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'steps', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storyname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.storyname')
    onStorynameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storyname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 taskname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.taskname')
    onTasknameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'taskname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 mailto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.mailto')
    onMailtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'mailto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 keywords 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.keywords')
    onKeywordsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'keywords', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFROM
     */
    @Watch('data.id')
    onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MobNewFROM
     */
    private resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (Object.is(name, 'productname')) {
            this.onFormItemValueChange({ name: 'branch', value: null });
        }
        if (Object.is(name, 'branch')) {
            this.onFormItemValueChange({ name: 'modulename', value: null });
        }
        if (Object.is(name, 'modulename')) {
            this.onFormItemValueChange({ name: 'storyname', value: null });
        }
        if (Object.is(name, 'projectname')) {
            this.onFormItemValueChange({ name: 'taskname', value: null });
        }
    }

    /**
      * 置空对象
      *
      * @param {any[]} args
      * @memberof EditForm
      */
    protected ResetData(_datas:any){
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
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MobNewFROM
     */
    private async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }){
                


































    }


    /**
     * 表单项校验逻辑
     *
     * @public
     * @param name 属性名
     * @memberof Main2Base
     */
    public validItem(property:string, data:any):Promise<any>{
        return new Promise((resolve, reject) => {
            Util.validateItem(property,data,this.rules[property]).then(()=>{
                this.detailsModel[property].setError("");
                resolve(true);
            }).catch(({ errors, fields }) => {
                this.detailsModel[property].setError(errors[0].message);
                resolve(false);
            });
        });
    }

    /**
     * 校验全部
     *
     * @public
     * @param {{ filter: string}} { filter}
     * @returns {void}
     * @memberof MobNewFROM
     */
    public async validAll(filter:string = "defult") {
        let validateState = true;
        let filterProperty = ""
        if(filter === 'new'){
            filterProperty= 'id'
        }
        for (let item of Object.keys(this.rules)) {
            if(!await this.validItem(item,this.data[item]) && item != filterProperty){
                validateState = false;
            }
        }
        return validateState
    }


    /**
     * 表单值变化
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof MobNewFROM
     */
    private formDataChange({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (this.ignorefieldvaluechange) {
            return;
        }
        this.validItem(name,this.data[name]);
        this.resetFormData({ name: name, newVal: newVal, oldVal: oldVal });
        this.formLogic({ name: name, newVal: newVal, oldVal: oldVal });
        this.dataChang.next(JSON.stringify(this.data));
    }

    /**
     * 表单加载完成
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof MobNewFROM
     */
    private onFormLoad(data: any = {},action:string): void {
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
     * @memberof MobNewFROM
     */
    protected fillForm(_datas: any = {},action:string): void {
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
     * @protected
     * @param {*} data
     * @memberof MobNewFROM
     */
    protected setFormEnableCond(data: any): void {
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
     * @private
     * @memberof MobNewFROM
     */
    private resetDraftFormStates(): void {
        const form: any = this.$refs.form;
        if (form) {
            // form.resetValidation();
        }
    }

    /**
     * 重置校验结果
     *
     * @memberof MobNewFROM
     */
    protected resetValidates(): void {
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
     * @memberof MobNewFROM
     */
    protected fillValidates(fieldErrors: any[]): void {
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
     * @memberof MobNewFROM
     */
    protected async formValidateStatus(): Promise<boolean> {
        const refArr: Array<string> = ['productname_item', 'branch_item', 'modulename_item', 'projectname_item', 'openedbuild_item', 'assignedto_item', 'deadline_item', 'type_item', 'os_item', 'browser_item', 'title_item', 'severity_item', 'pri_item', 'steps_item', 'storyname_item', 'taskname_item', 'mailto_item', 'keywords_item', ];
        let falg = true;
        for (let item = 0; item < refArr.length; item++) {
            const element = refArr[item];
            if (this.$refs[element] && (this.$refs[element] as any).validateRules &&  !await(this.$refs[element] as any).validateRules()) {
                falg = false;
            }
        }
        return falg;
    }

    /**
     * 获取全部值
     *
     * @returns {*}
     * @memberof MobNewFROM
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof MobNewFROM
     */
    protected onFormItemValueChange($event: { name: string, value: any }): void {
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
     * @memberof MobNewFROM
     */
    protected setDataItemValue(name: string, value: any): void {
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
     * @memberof MobNewFROM
     */
    protected groupUIActionClick($event: any): void {
        if (!$event) {
            return;
        }
        const item:any = $event.item;
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof MobNewFROM
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MobNewFROM
     */    
    protected afterCreated(){
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
                    this.loadDraft(data);
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
     * @memberof MobNewFROM
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MobNewFROM
     */
    protected afterDestroy() {
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
     * @memberof @memberof MobNewFROM
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof MobNewFROM
     */
    protected refresh(args: any[]): void {
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
     * @memberof MobNewFROM
     */
    protected autoLoad(arg: any = {}): void {
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
     * @private
     * @param {*} [opt={}]
     * @returns {Promise<any>}
     * @memberof MobNewFROM
     */
    private async load(opt: any = {}): Promise<any> {
        if (!this.loadAction) {
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+'loadAction'+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        const arg: any = { ...opt };
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.get(this.loadAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            const data = response.data;
            this.onFormLoad(data, 'load');
            this.$emit('load', data);
            this.$nextTick(() => {
                this.formState.next({ type: 'load', data: data });
            });
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 加载草稿
     *
     * @param {*} [opt={}]
     * @memberof MobNewFROM
     */
    protected async loadDraft(opt: any = {}): Promise<any> {
        if (!this.loaddraftAction) {
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+'loaddraftAction'+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        const arg: any = { ...opt } ;
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.loadDraft(this.loaddraftAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            const data = response.data;
            if(data.bug){
                Object.assign(this.context, { bug: data.bug });
            }
            this.resetDraftFormStates();
            this.onFormLoad(data, 'loadDraft');
            this.$emit('load', data);
            this.$nextTick(() => {
                this.formState.next({ type: 'load', data: data });
            });
            this.dataOverLoad = true;
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 自动保存
     *
     * @protected
     * @param {*} [opt={}]
     * @returns {Promise<any>}
     * @memberof MobNewFROM
     */
    protected async autoSave(opt: any = {}): Promise<any> {
        if (!await this.validAll()) {
            return Promise.reject();
        }
        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
        if (!action) {
            let actionName: any = Object.is(data.srfuf, '1') ? "updateAction" : "createAction";
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+actionName+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.add(action, { ...this.context }, arg, this.showBusyIndicator);
        if (response.status && response.status === 200) {
            const data = response.data;
            this.onFormLoad(data,'autoSave');
            this.$emit('save', data);
            this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
            this.$nextTick(() => {
                this.formState.next({ type: 'save', data: data });
            });
        } else if (response.status && response.status !== 401) {
            const { error: _data } = response;
            if (Object.is(_data.status, 'BAD_REQUEST') && _data.parameters && _data.parameters.fieldErrors) {
                this.resetValidates();
                this.fillValidates(_data.parameters.fieldErrors)
            }
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 保存
     *
     * @protected
     * @param {*} [opt={}]
     * @param {boolean} [showResultInfo]
     * @param {boolean} [isStateNext=true] 是否下发通知
     * @returns {Promise<any>}
     * @memberof MobNewFROM
     */
    protected async save(opt: any = {}, showResultInfo?: boolean, isStateNext: boolean = true): Promise<any> {
        showResultInfo = showResultInfo === undefined ? true : false;
        opt.saveEmit = opt.saveEmit === undefined ? true : false;

        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
        if (this.data.srfuf =='1'? !await this.validAll():!await this.validAll('new')) {
            this.$notice.error('值规则校验异常');
            return Promise.reject();
        }
        if (isStateNext) {
            this.drcounter = 0;
            if (this.drcounter !== 0) {
                this.formState.next({ type: 'beforesave', data: arg });//先通知关系界面保存
                this.saveState = Promise.resolve();
                return Promise.reject();
            }
        }
        
        if (!action) {
            let actionName: any = Object.is(data.srfuf, '1') ? "updateAction" : "createAction";
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+actionName+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        Object.assign(arg, this.viewparams);
        let response: any = null;
        if (Object.is(data.srfuf, '1')) {
            response = await this.service.update(action, { ...this.context }, arg, this.showBusyIndicator);
        } else {
            response = await this.service.add(action, { ...this.context }, arg, this.showBusyIndicator);
        }
        if (response && response.status === 200) {
            const data = response.data;
            this.onFormLoad(data, 'save');
            if(!opt.saveEmit){
                this.$emit('save', data);
            }                
            this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
            this.$nextTick(() => {
                this.formState.next({ type: 'save', data: data });
            });
            if (showResultInfo) {
                this.$notice.success((data.srfmajortext ? data.srfmajortext : '') + '&nbsp;'+ this.$t('app.message.savedSuccess'));
            }
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            if (Object.is(_data.status, 'BAD_REQUEST') && _data.parameters && _data.parameters.fieldErrors) {
                this.resetValidates();
                this.fillValidates(_data.parameters.fieldErrors)
            }
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 删除
     *
     * @private
     * @param {Array<any>} [opt=[]]
     * @param {boolean} [showResultInfo]
     * @returns {Promise<any>}
     * @memberof EditForm
     */
    private async remove(opt: Array<any> = [], showResultInfo?: boolean): Promise<any> {
        if (!this.removeAction) {
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+'removeAction'+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        const arg: any = opt[0];
        const _this: any = this;
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.delete(_this.removeAction, { ...this.context }, arg, showResultInfo);
        if (response && response.status === 200) {
            const data = response.data;
            this.$emit('remove', data);
            this.formState.next({ type: 'remove', data: data });
            this.data.ismodify = false;
            this.$notice.success((data.srfmajortext ? data.srfmajortext : '') + '&nbsp;'+ this.$t('app.message.deleteSccess'));
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 工作流启动
     *
     * @protected
     * @param {*} data
     * @returns {Promise<any>}
     * @memberof MobNewFROM
     */
    protected async wfstart(data: any): Promise<any> {
        const _this: any = this;
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams);
        let response: any = await this.service.wfstart(_this.WFStartAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            this.$notice.success('工作流启动成功');
        } else if (response && response.status !== 401) {
            this.$notice.error('工作流启动失败, ' + response.error.message);
        }
        return response;
    }

    /**
     * 工作流提交
     *
     * @protected
     * @param {*} data
     * @param {*} linkItem
     * @param {*} datas
     * @returns {Promise<any>}
     * @memberof MobNewFROM
     */
    protected async wfsubmit(data: any, linkItem: any, datas: any): Promise<any> {
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams, linkItem);
        // 强制补充srfwfmemo
        if (this.srfwfmemo) {
            Object.assign(datas, { srfwfmemo: this.srfwfmemo });
        }
        const response: any = await this.service.wfsubmit(this.currentAction, { ...this.context }, datas, this.showBusyIndicator, arg);
        if (response && response.status === 200) {
            this.$notice.success('工作流提交成功');
        } else if (response && response.status !== 401) {
            this.$notice.error('工作流提交失败, ' + response.error.message);
            return response;
        }
    }

    /**
     * 表单项更新
     *
     * @protected
     * @param {string} mode 界面行为名称
     * @param {*} [data={}] 请求数据
     * @param {string[]} updateDetails 更新项
     * @param {boolean} [showloading] 是否显示加载状态
     * @returns {Promise<any>}
     * @memberof MobNewFROM
     */
    protected async updateFormItems(mode: string, data: any = {}, updateDetails: string[], showloading?: boolean): Promise<any> {
        if (!mode || (mode && Object.is(mode, ''))) {
            return Promise.reject();
        }
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.frontLogic(mode, { ...this.context }, arg, showloading);
        if (response && response.status === 200) {
            const data = response.data;
            const _data: any = {};
            updateDetails.forEach((name: string) => {
                if (!data.hasOwnProperty(name)) {
                    return;
                }
                Object.assign(_data, { [name]: data[name] });
            });
            this.setFormEnableCond(_data);
            this.fillForm(_data, 'updateFormItem');
            this.formLogic({ name: '', newVal: null, oldVal: null });
            this.dataChang.next(JSON.stringify(this.data));
            this.$nextTick(() => {
                this.formState.next({ type: 'updateformitem', ufimode: arg.srfufimode, data: _data });
            });
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            if (Object.is(_data.status, 'BAD_REQUEST') && _data.parameters && _data.parameters.fieldErrors) {
                this.resetValidates();
                this.fillValidates(_data.parameters.fieldErrors)
            }
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 回车事件
     *
     * @param {*} $event
     * @memberof MobNewFROM
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobNewFROM
     */
    protected async saveAndExit(data: any[]): Promise<any> {
        const arg: any = { ...data[0] };
        this.currentAction = 'saveAndExit';
        const response: any = await this.save([arg]);
        if (response && response.status === 200) {
            this.closeView([{ ...response.data }]);
        }
        return response;
    }

    /**
     * 保存并新建
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobNewFROM
     */
    protected async saveAndNew(data: any[]): Promise<any> {
        let arg: any = { ...data[0] };
        this.currentAction = 'saveAndNew';
        const response: any = await this.save([arg]);
        if (response && response.status === 200) {
            this.ResetData(response.data);
            this.loadDraft({});
        }
        return response;
    }

    /**
     * 删除并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobNewFROM
     */
    protected async removeAndExit(data: any[]): Promise<any> {
        let arg: any = { ...data[0] };
        const response: any = await this.remove([arg]);
        if (response && response.status === 200) {
            this.closeView([{ ...response.data }]);
        }
        return response;
    }

    /**
    * 关系界面数据保存完成
    *
    * @param {any} $event
    * @memberof MobNewFROM
    */
    protected drdatasaved($event:any){
        let _this = this;
        this.drcounter--;
        if(this.drcounter > 0){
            return;
        }
        this.save({}, undefined, false).then((res) =>{
            //this.saveState(res);
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
     * @memberof MobNewFROM
     */
    public createDefault(){                    
                if (this.data.hasOwnProperty('module')) {
                    this.data['module'] = this.viewparams['productmodule'];
                }
    }

        /**
     * 更新默认值
     * @memberof MobNewFROMBase
     */
    public updateDefault(){                    
    }


    /**
     * 计算表单按钮权限状态
     *
     * @param {*} [data] 传入数据
     * @memberof EditorsBase
     */
    public computeButtonState(data:any){
        let targetData:any = this.transformData(data);
        if(this.detailsModel && Object.keys(this.detailsModel).length >0){
            Object.keys(this.detailsModel).forEach((name:any) =>{
                if(this.detailsModel[name] && this.detailsModel[name].uiaction && this.detailsModel[name].uiaction.dataaccaction && Object.is(this.detailsModel[name].detailType,"BUTTON")){
                    let tempUIAction:any = JSON.parse(JSON.stringify(this.detailsModel[name].uiaction));
                    this.$viewTool.calcActionItemAuthState(targetData,[tempUIAction],this.globaluiservice);
                    this.detailsModel[name].visible = tempUIAction.visabled;
                    this.detailsModel[name].disabled = tempUIAction.disabled;
                }
            })
        }
    }
}
</script>

<style lang='less'>
@import './mob-new-from-form.less';
</style>