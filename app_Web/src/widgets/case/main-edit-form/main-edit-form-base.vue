<template>
    <i-form :model="this.data" class='app-form' ref='form'  id='form' style="">
    <input style="display:none;" />
    <row >
            
<i-col v-show="detailsModel.grouppanel1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 14, offset: 1 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.case.mainedit_form.details.grouppanel1')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.title.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='title' :itemRules="this.rules.title" class='' :caption="$t('entities.case.mainedit_form.details.title')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.title.error" :isEmptyCaption="false" labelPos="TOP">
    <input-box v-model="data.title"  @enter="onEnter($event)"   unit=""  :disabled="detailsModel.title.disabled" type='text'  style=""></input-box>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.precondition.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='precondition' :itemRules="this.rules.precondition" class='' :caption="$t('entities.case.mainedit_form.details.precondition')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.precondition.error" :isEmptyCaption="false" labelPos="TOP">
    <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type">
    <textarea class="ivu-input" v-model="data.precondition" :disabled="detailsModel.precondition.disabled" style=""></textarea>
</div>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel5.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel5.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.case.mainedit_form.details.grouppanel5')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.druipart1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-druipart
    
    :formState="formState"
    paramItem='case' 
    :parentdata='{"srfparentdefname":"CASE","srfparentdename":"ZT_CASE","SRFPARENTTYPE":"DER1N","srfparentmode":"DER1N_ZT_CASESTEP_ZT_CASE_CASE","SRFDER1NID":"DER1N_ZT_CASESTEP_ZT_CASE_CASE"}'
    :parameters="[
        { pathName: 'cases', parameterName: 'case' },
    ]"
    :context="context"
    :viewparams="viewparams"
    parameterName='case'
    parentName="Case"  
    refviewtype='DEGRIDVIEW9' 
    refreshitems='' 
    :ignorefieldvaluechange="ignorefieldvaluechange"
    viewname='case-step-main-grid-view9-edit-mode' 
    :data="JSON.stringify(this.data)" 
    @drdatasaved="drdatasaved($event)"
    style=";overflow: auto;">
</app-form-druipart>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.comment.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='comment' :itemRules="this.rules.comment" class='' :caption="$t('entities.case.mainedit_form.details.comment')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.comment.error" :isEmptyCaption="false" labelPos="TOP">
    <app-rich-text-editor :formState="formState" :value="data.comment" @change="(val) =>{this.data.comment =val}" :disabled="detailsModel.comment.disabled"  name="comment" style=""></app-rich-text-editor>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.files.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='files' :itemRules="this.rules.files" class='' :caption="$t('entities.case.mainedit_form.details.files')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.files.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-file-upload :formState="formState" :ignorefieldvaluechange="ignorefieldvaluechange" @formitemvaluechange="onFormItemValueChange" :data="JSON.stringify(this.data)" name='files' :value="data.files" :disabled="detailsModel.files.disabled" uploadparams='{objecttype:"case",objectid:"%id%"}' exportparams='{objecttype:"case",objectid:"%id%"}' :customparams="{}" style="overflow: auto;"></app-file-upload>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel6.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel6.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.case.mainedit_form.details.grouppanel6')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.druipart2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-druipart
    
    :formState="formState"
    paramItem='case' 
    :parentdata='{"srfparentdename":"ZT_CASE","SRFPARENTTYPE":"CUSTOM"}'
    :parameters="[
    ]"
    :context="context"
    :viewparams="viewparams"
    parameterName='case'
    parentName="Case"  
    refviewtype='DELISTVIEW' 
    refreshitems='' 
    :ignorefieldvaluechange="ignorefieldvaluechange"
    viewname='action-history-list-view' 
    :data="JSON.stringify(this.data)" 
    @drdatasaved="drdatasaved($event)"
    style=";overflow: auto;">
</app-form-druipart>

</i-col>
    
    </row>
</app-form-group>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel3.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 7, offset: 1 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel3.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.case.mainedit_form.details.grouppanel3')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.grouppanel2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel2.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.case.mainedit_form.details.grouppanel2')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.productname.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='productname' :itemRules="this.rules.productname" class='' :caption="$t('entities.case.mainedit_form.details.productname')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.productname.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-picker  
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :itemParam='{ }' 
  :disabled="detailsModel.productname.disabled"
  name='productname' 
  deMajorField='name'
  deKeyField='product'
  :service="service"
  :acParams="{ serviceName: 'ProductService', interfaceName: 'FetchDefault'}"
  valueitem='product' 
  :value="data.productname" 
  editortype="dropdown" 
  style="" 
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.modulename.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='modulename' :itemRules="this.rules.modulename" class='' :caption="$t('entities.case.mainedit_form.details.modulename')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.modulename.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-picker  
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :itemParam='{ }' 
  :disabled="detailsModel.modulename.disabled"
  name='modulename' 
  deMajorField='name'
  deKeyField='module'
  :service="service"
  :acParams="{ serviceName: 'ModuleService', interfaceName: 'FetchBugModule'}"
  valueitem='module' 
  :value="data.modulename" 
  editortype="dropdown" 
  style="" 
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.storyname.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='storyname' :itemRules="this.rules.storyname" class='' :caption="$t('entities.case.mainedit_form.details.storyname')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.storyname.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-picker  
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :itemParam='{ }' 
  :disabled="detailsModel.storyname.disabled"
  name='storyname' 
  deMajorField='title'
  deKeyField='story'
  :service="service"
  :acParams="{ serviceName: 'StoryService', interfaceName: 'FetchDefault'}"
  valueitem='story' 
  :value="data.storyname" 
  editortype="dropdown" 
  style="" 
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.type.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='type' :itemRules="this.rules.type" class='' :caption="$t('entities.case.mainedit_form.details.type')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.type.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.type" :data="data" :itemParam="{}" :disabled="detailsModel.type.disabled"  tag='Testcase__type' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.stage.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='stage' :itemRules="this.rules.stage" class='' :caption="$t('entities.case.mainedit_form.details.stage')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.stage.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-checkbox-list v-model="data.stage" :disabled="detailsModel.stage.disabled"  tag='Testcase__stage' codelistType='STATIC'   mode="" name="stage" style=""></app-checkbox-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.pri.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='pri' :itemRules="this.rules.pri" class='' :caption="$t('entities.case.mainedit_form.details.pri')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.pri.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.pri" :data="data" :itemParam="{}" :disabled="detailsModel.pri.disabled"  tag='Testcase__pri' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.status.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='status' :itemRules="this.rules.status" class='' :caption="$t('entities.case.mainedit_form.details.status')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.status.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.status" :data="data" :itemParam="{}" :disabled="detailsModel.status.disabled"  tag='Testcase__status' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.keywords.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='keywords' :itemRules="this.rules.keywords" class='' :caption="$t('entities.case.mainedit_form.details.keywords')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.keywords.error" :isEmptyCaption="false" labelPos="LEFT">
    <input-box v-model="data.keywords"  @enter="onEnter($event)"   unit=""  :disabled="detailsModel.keywords.disabled" type='text'  style=""></input-box>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.linkcase.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='linkcase' :itemRules="this.rules.linkcase" class='' :caption="$t('entities.case.mainedit_form.details.linkcase')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.linkcase.error" :isEmptyCaption="false" labelPos="LEFT">
    <input-box v-model="data.linkcase"  @enter="onEnter($event)"   unit=""  :disabled="detailsModel.linkcase.disabled" type='text'  style=""></input-box>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel4.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel4.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.case.mainedit_form.details.grouppanel4')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.openedby.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 8, offset: 0 }">
    <app-form-item name='openedby' :itemRules="this.rules.openedby" class='' :caption="$t('entities.case.mainedit_form.details.openedby')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.openedby.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='openedby'
:value="data.openedby" tag='UserRealName' codelistType='DYNAMIC' renderMode="STR" valueSeparator="," textSeparator="," style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.openeddate.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 16, offset: 0 }">
    <app-form-item name='openeddate' :itemRules="this.rules.openeddate" class='' :caption="$t('entities.case.mainedit_form.details.openeddate')" uiStyle="DEFAULT" :labelWidth="35" :isShowCaption="true" :error="detailsModel.openeddate.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='openeddate'
:value="data.openeddate" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.lasteditedby.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 8, offset: 0 }">
    <app-form-item name='lasteditedby' :itemRules="this.rules.lasteditedby" class='' :caption="$t('entities.case.mainedit_form.details.lasteditedby')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.lasteditedby.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='lasteditedby'
:value="data.lasteditedby" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.lastediteddate.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 16, offset: 0 }">
    <app-form-item name='lastediteddate' :itemRules="this.rules.lastediteddate" class='' :caption="$t('entities.case.mainedit_form.details.lastediteddate')" uiStyle="DEFAULT" :labelWidth="35" :isShowCaption="true" :error="detailsModel.lastediteddate.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='lastediteddate'
:value="data.lastediteddate" style=""></app-span>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
    
    </row>
</app-form-group>

</i-col>


    </row>
</i-form>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import CaseService from '@/service/case/case-service';
import MainEditService from './main-edit-form-service';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
    components: {
      
    }
})
export default class MainEditBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainEdit
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainEdit
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainEdit
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MainEdit
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainEdit
     */
    protected getControlType(): string {
        return 'FORM'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MainEdit
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {MainEditService}
     * @memberof MainEdit
     */
    protected service: MainEditService = new MainEditService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof MainEdit
     */
    protected appEntityService: CaseService = new CaseService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainEdit
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainEdit
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
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainEdit
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainEdit
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof MainEdit
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MainEdit
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof MainEdit
     */
    protected formState: Subject<any> = new Subject();

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof MainEdit
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof MainEdit
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof MainEdit
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof MainEdit
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainEdit
     */
    protected data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        title: null,
        precondition: null,
        comment: null,
        files: null,
        product: null,
        productname: null,
        module: null,
        modulename: null,
        story: null,
        storyname: null,
        type: null,
        stage: null,
        pri: null,
        status: null,
        keywords: null,
        linkcase: null,
        openedby: null,
        openeddate: null,
        lasteditedby: null,
        lastediteddate: null,
        id: null,
        case:null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof MainEdit
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof MainEdit
      */
    protected drcounter: number = 0;

    /**
      * 需要等待关系界面保存时，第一次调用save参数的备份
      *
      * @type {number}
      * @memberof MainEdit
      */
    protected drsaveopt: any = {};

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof MainEdit
      */
    protected saveState:any ;

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEdit
     */
    protected rules: any = {
        srforikey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { type: 'number', message: '用例编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '用例编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '用例编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '用例编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { type: 'string', message: '用例标题 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '用例标题 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '用例标题 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '用例标题 值不能为空', trigger: 'blur' },
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
        title: [
            { type: 'string', message: '用例标题 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '用例标题 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: '用例标题 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '用例标题 值不能为空', trigger: 'blur' },
        ],
        precondition: [
            { type: 'string', message: '前置条件 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '前置条件 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '前置条件 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '前置条件 值不能为空', trigger: 'blur' },
        ],
        comment: [
            { type: 'string', message: '备注 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '备注 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '备注 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '备注 值不能为空', trigger: 'blur' },
        ],
        files: [
            { type: 'string', message: '附件 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '附件 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '附件 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '附件 值不能为空', trigger: 'blur' },
        ],
        product: [
            { type: 'number', message: '所属产品 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所属产品 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所属产品 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属产品 值不能为空', trigger: 'blur' },
        ],
        productname: [
            { type: 'string', message: '产品名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '产品名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'blur' },
        ],
        module: [
            { type: 'number', message: '所属模块 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所属模块 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所属模块 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属模块 值不能为空', trigger: 'blur' },
        ],
        modulename: [
            { type: 'string', message: '模块名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '模块名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '模块名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '模块名称 值不能为空', trigger: 'blur' },
        ],
        story: [
            { type: 'number', message: '相关需求 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '相关需求 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        storyname: [
            { type: 'string', message: '需求名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '需求名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '需求名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '需求名称 值不能为空', trigger: 'blur' },
        ],
        type: [
            { type: 'string', message: '用例类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '用例类型 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '用例类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '用例类型 值不能为空', trigger: 'blur' },
        ],
        stage: [
            { type: 'string', message: '适用阶段 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '适用阶段 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '适用阶段 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '适用阶段 值不能为空', trigger: 'blur' },
        ],
        pri: [
            { type: 'number', message: '优先级 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '优先级 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '优先级 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '优先级 值不能为空', trigger: 'blur' },
        ],
        status: [
            { type: 'string', message: '用例状态 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '用例状态 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '用例状态 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '用例状态 值不能为空', trigger: 'blur' },
        ],
        keywords: [
            { type: 'string', message: '关键词 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '关键词 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '关键词 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关键词 值不能为空', trigger: 'blur' },
        ],
        linkcase: [
            { type: 'string', message: '相关用例 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '相关用例 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '相关用例 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '相关用例 值不能为空', trigger: 'blur' },
        ],
        openedby: [
            { type: 'string', message: '由谁创建 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '由谁创建 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '由谁创建 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁创建 值不能为空', trigger: 'blur' },
        ],
        openeddate: [
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        lasteditedby: [
            { type: 'string', message: '最后修改者 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '最后修改者 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '最后修改者 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '最后修改者 值不能为空', trigger: 'blur' },
        ],
        lastediteddate: [
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '于 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '于 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: '用例编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '用例编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '用例编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '用例编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainEdit
     */
    protected detailsModel: any = {
        druipart1: new FormDRUIPartModel({ caption: '用例步骤', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this })
, 
        grouppanel5: new FormGroupPanelModel({ caption: '用例步骤', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.case.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: true, isShowCaption: true, form: this })
, 
        grouppanel6: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.case.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.case.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.case.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel4: new FormGroupPanelModel({ caption: '创建编辑', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.case.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.case.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '用例编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '用例标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        title: new FormItemModel({ caption: '用例标题', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        precondition: new FormItemModel({ caption: '前置条件', detailType: 'FORMITEM', name: 'precondition', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        comment: new FormItemModel({ caption: '备注', detailType: 'FORMITEM', name: 'comment', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        files: new FormItemModel({ caption: '附件', detailType: 'FORMITEM', name: 'files', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        product: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        productname: new FormItemModel({ caption: '产品名称', detailType: 'FORMITEM', name: 'productname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        module: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'module', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        modulename: new FormItemModel({ caption: '模块名称', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        story: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'story', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storyname: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'storyname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: '用例类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        stage: new FormItemModel({ caption: '适用阶段', detailType: 'FORMITEM', name: 'stage', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        status: new FormItemModel({ caption: '用例状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        keywords: new FormItemModel({ caption: '关键词', detailType: 'FORMITEM', name: 'keywords', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        linkcase: new FormItemModel({ caption: '相关用例', detailType: 'FORMITEM', name: 'linkcase', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        openedby: new FormItemModel({ caption: '由谁创建', detailType: 'FORMITEM', name: 'openedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        openeddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'openeddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        lasteditedby: new FormItemModel({ caption: '最后修改者', detailType: 'FORMITEM', name: 'lasteditedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        lastediteddate: new FormItemModel({ caption: '于', detailType: 'FORMITEM', name: 'lastediteddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        id: new FormItemModel({ caption: '用例编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
    };

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
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
     * @memberof MainEdit
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
     * @memberof MainEdit
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
     * @memberof MainEdit
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
     * @memberof MainEdit
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
     * @memberof MainEdit
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
     * @memberof MainEdit
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 title 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.title')
    onTitleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'title', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 precondition 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.precondition')
    onPreconditionChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'precondition', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 comment 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.comment')
    onCommentChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'comment', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 files 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.files')
    onFilesChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'files', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 product 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.product')
    onProductChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'product', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 productname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
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
     * @memberof MainEdit
     */
    @Watch('data.module')
    onModuleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'module', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 modulename 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.modulename')
    onModulenameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'modulename', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 story 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.story')
    onStoryChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'story', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storyname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.storyname')
    onStorynameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storyname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.type')
    onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 stage 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.stage')
    onStageChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'stage', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 pri 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
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
     * @memberof MainEdit
     */
    @Watch('data.status')
    onStatusChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'status', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 keywords 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.keywords')
    onKeywordsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'keywords', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 linkcase 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.linkcase')
    onLinkcaseChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'linkcase', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 openedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.openedby')
    onOpenedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'openedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 openeddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.openeddate')
    onOpeneddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'openeddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 lasteditedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.lasteditedby')
    onLasteditedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'lasteditedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 lastediteddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.lastediteddate')
    onLastediteddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'lastediteddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
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
     * @memberof MainEdit
     */
    private resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
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
     * @memberof MainEdit
     */
    private formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                





































    }

    /**
     * 表单值变化
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof MainEdit
     */
    private formDataChange({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
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
     * @private
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof MainEdit
     */
    private onFormLoad(data: any = {},action:string): void {
        if(Object.is(action,"save") || Object.is(action,"autoSave"))
        // 更新context的实体主键
        if(data.case){
            Object.assign(this.context,{case:data.case})
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
     * @memberof MainEdit
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
        this.$nextTick(function () {
            this.ignorefieldvaluechange = false;
        })
    }

    /**
     * 设置表单项是否启用
     *
     * @protected
     * @param {*} data
     * @memberof MainEdit
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
     * @memberof MainEdit
     */
    private resetDraftFormStates(): void {
        const form: any = this.$refs.form;
        if (form) {
            form.resetFields();
        }
    }

    /**
     * 重置校验结果
     *
     * @memberof MainEdit
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
     * @memberof MainEdit
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
     * @memberof MainEdit
     */
    protected formValidateStatus(): boolean {
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
     * @memberof MainEdit
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof MainEdit
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
     * @memberof MainEdit
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
     * @memberof MainEdit
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
     * @memberof MainEdit
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainEdit
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
     * @memberof MainEdit
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainEdit
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
     * @memberof @memberof MainEdit
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     *打印
     *@memberof @memberof MainEdit
     */
    protected print(){
        let _this:any = this;
        _this.$print({id:'form',popTitle:'主信息编辑'});
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof MainEdit
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
     * @memberof MainEdit
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
     * @memberof MainEdit
     */
    private load(opt: any = {}): void {
        if(!this.loadAction){
            this.$Notice.error({ title: '错误', desc: 'CaseMainEditView视图表单loadAction参数未配置' });
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
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
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
     * @memberof MainEdit
     */
    protected loadDraft(opt: any = {}): void {
        if(!this.loaddraftAction){
            this.$Notice.error({ title: '错误', desc: 'CaseMainEditView视图表单loaddraftAction参数未配置' });
            return;
        }
        const arg: any = { ...opt } ;
        let viewparamResult:any = Object.assign(arg,this.viewparams);
        let post: Promise<any> = this.service.loadDraft(this.loaddraftAction,JSON.parse(JSON.stringify(this.context)),{viewparams:viewparamResult}, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: '错误', desc: response.errorMessage });
                }
                return;
            }

            const data = response.data;
            if(data.case){
                Object.assign(this.context,{case:data.case})
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
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
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
     * @memberof MainEdit
     */
    protected autoSave(opt: any = {}): void {
        if (!this.formValidateStatus()) {
            return;
        }
        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
        if(!action){
            let actionName:any = Object.is(data.srfuf, '1')?"updateAction":"createAction";
            this.$Notice.error({ title: '错误', desc: 'CaseMainEditView视图表单'+actionName+'参数未配置' });
            return;
        }
        Object.assign(arg,{viewparams:this.viewparams});
        const post: Promise<any> = this.service.add(action, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: '错误', desc: response.errorMessage });
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
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
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
     * @memberof MainEdit
     */
    protected async save(opt: any = {}, showResultInfo?: boolean, ifStateNext: boolean = true): Promise<any> {
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
                this.drcounter = 2;
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
                this.$Notice.error({ title: '错误', desc: 'CaseMainEditView视图表单'+actionName+'参数未配置' });
                return;
            }
            Object.assign(arg,{viewparams:this.viewparams});
            const post: Promise<any> = Object.is(data.srfuf, '1')?this.service.update(action, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator):this.service.add(action,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
            post.then((response: any) => {
                if (!response.status || response.status !== 200) {
                    if (response.errorMessage) {
                        this.$Notice.error({ title: '错误', desc: response.errorMessage });
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
                if (response && response.status) {
                    this.$Notice.error({ title: '错误', desc: response.message });
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
    * @private
    * @param {*} [opt={}]
    * @memberof EditForm
    */
    private remove(opt:Array<any> = [],showResultInfo?: boolean): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if(!this.removeAction){
                this.$Notice.error({ title: '错误', desc: 'CaseMainEditView视图表单removeAction参数未配置' });
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
     * @returns {Promise<any>}
     * @memberof MainEdit
     */
    protected async wfstart(data: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if(!this.WFStartAction){
                this.$Notice.error({ title: '错误', desc: 'WFCIDEditView视图表单WFStartAction参数未配置' });
                return;
            }
            const _this: any = this;
            const arg: any = data[0];
            Object.assign(arg,{viewparams:this.viewparams});
            const post: Promise<any> = Object.is(data.srfuf, '1')?this.service.update(this.updateAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator):this.service.add(this.createAction,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
            post.then((response:any) =>{
                const arg:any = response.data;
                if(this.viewparams){
                    Object.assign(arg,{viewparams:this.viewparams});
                }
                const result: Promise<any> = this.service.wfstart(_this.WFStartAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
                result.then((response: any) => {
                    if (!response || response.status !== 200) {
                        this.$Notice.error({ title: '', desc: '工作流启动失败, ' + response.info });
                        return;
                    }
                    this.$Notice.info({ title: '', desc: '工作流启动成功' });
                    resolve(response);
            }).catch((response: any) => {
                if (response && response.status) {
                    this.$Notice.error({ title: '错误', desc: response.message });
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
                    if (response && response.status) {
                        this.$Notice.error({ title: '错误', desc: response.message });
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
     * @returns {Promise<any>}
     * @memberof MainEdit
     */
    protected async wfsubmit(data: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
        if(!this.WFSubmitAction){
            this.$Notice.error({ title: '错误', desc: 'CaseMainEditView视图表单WFSubmitAction参数未配置' });
            return;
        }
        const _this: any = this;
        const arg: any = data[0];
        Object.assign(arg,{viewparams:this.viewparams});
        if (!arg.case || Object.is(arg.case, '')) {
            return;
        }
        const post: Promise<any> = Object.is(arg.srfuf, '1')?this.service.update(this.updateAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator):this.service.add(this.createAction,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
        post.then((response:any) =>{
                const arg:any = response.data;
                if(this.viewparams){
                    Object.assign(arg,{viewparams:this.viewparams});
                }
                const result: Promise<any> = this.service.wfsubmit(_this.WFSubmitAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
                result.then((response: any) => {
                    if (!response || response.status !== 200) {
                        this.$Notice.error({ title: '', desc: '工作流提交失败, ' + response.info });
                        return;
                    }
                    this.$Notice.info({ title: '', desc: '工作流提交成功' });
                    resolve(response);
            }).catch((response: any) => {
                if (response && response.status) {
                    this.$Notice.error({ title: '错误', desc: response.message });
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
                    if (response && response.status) {
                        this.$Notice.error({ title: '错误', desc: response.message });
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
     * @memberof MainEdit
     */
    protected updateFormItems(mode: string, data: any = {}, updateDetails: string[], showloading?: boolean): void {
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
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
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
     * @memberof MainEdit
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @param {any[]} args
     * @memberof MainEdit
     */
    protected saveAndExit(data:any[]):Promise<any>{
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
     * @memberof MainEdit
     */
    protected saveAndNew(data:any[]):Promise<any>{
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
     * @memberof MainEdit
     */
    protected removeAndExit(data:any[]):Promise<any>{
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
    * @memberof MainEdit
    */
    protected drdatasaved($event:any){
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
     * @memberof MainEdit
     */
    public createDefault(){                    
    }

    
}
</script>

<style lang='less'>
@import './main-edit-form.less';
</style>