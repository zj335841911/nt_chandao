<template>
    <div ref='form' class="app-form todo-form ">
                

<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.group1.visible" 
    :uiActionGroup="detailsModel.group1.uiActionGroup" 
    :caption="$t('todo.mobnew_form.details.group1')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='name' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="name_item"  
    :itemValue="this.data.name" 
    v-show="detailsModel.name.visible" 
    :itemRules="this.rules.name" 
    :caption="$t('todo.mobnew_form.details.name')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.name.disabled"
    :error="detailsModel.name.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-input"  
        type="text"  
    :value="data.name"
    unit=""
    :disabled="detailsModel.name.disabled" 
    @change="($event)=>this.data.name = $event" />
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
    :caption="$t('todo.mobnew_form.details.pri')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.pri.disabled"
    :error="detailsModel.pri.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Pri"
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
    name='date' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="date_item"  
    :itemValue="this.data.date" 
    v-show="detailsModel.date.visible" 
    :itemRules="this.rules.date" 
    :caption="$t('todo.mobnew_form.details.date')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.date.disabled"
    :error="detailsModel.date.error" 
    :isEmptyCaption="false">
        <app-mob-datetime-picker 
    displayFormat="YYYY-MM-DD"
    class="app-form-item-datetime" 
    :value="data.date" 
    :disabled="detailsModel.date.disabled"
    @change="($event)=>this.data.date = $event"/>
</app-form-item>



<app-form-item 
    name='begin' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="begin_item"  
    :itemValue="this.data.begin" 
    v-show="detailsModel.begin.visible" 
    :itemRules="this.rules.begin" 
    :caption="$t('todo.mobnew_form.details.begin')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.begin.disabled"
    :error="detailsModel.begin.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="BeginendDropList"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.begin.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.begin"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.begin = $event" />
</app-form-item>



<app-form-item 
    name='end' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="end_item"  
    :itemValue="this.data.end" 
    v-show="detailsModel.end.visible" 
    :itemRules="this.rules.end" 
    :caption="$t('todo.mobnew_form.details.end')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.end.disabled"
    :error="detailsModel.end.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="BeginendDropList"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.end.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.end"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.end = $event" />
</app-form-item>



<app-form-item 
    name='private' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="private_item"  
    :itemValue="this.data.private" 
    v-show="detailsModel.private.visible" 
    :itemRules="this.rules.private" 
    :caption="$t('todo.mobnew_form.details.private')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.private.disabled"
    :error="detailsModel.private.error" 
    :isEmptyCaption="false">
        <app-mob-radio-list 
    style="width: 100%;" 
    type="static" 
    tag="YesNo"
    :value="data.private"  
    :disabled="detailsModel.private.disabled" 
    @change="($event)=>this.data.private = $event"/>

</app-form-item>



<app-form-item 
    name='desc' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="desc_item"  
    :itemValue="this.data.desc" 
    v-show="detailsModel.desc.visible" 
    :itemRules="this.rules.desc" 
    :caption="$t('todo.mobnew_form.details.desc')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.desc.disabled"
    :error="detailsModel.desc.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState"  :value="data.desc" @change="(val) =>{this.data.desc =val}" :disabled="detailsModel.desc.disabled" :data="JSON.stringify(this.data)"  name="desc" :uploadparams='{objecttype:"todo",version:"editor"}' :exportparams='{objecttype:"todo",version:"editor"}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>

</app-form-item>



<app-form-item 
    name='status' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="status_item"  
    :itemValue="this.data.status" 
    v-show="detailsModel.status.visible" 
    :itemRules="this.rules.status" 
    :caption="$t('todo.mobnew_form.details.status')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.status.disabled"
    :error="detailsModel.status.error" 
    :isEmptyCaption="false">
        <app-mob-department-personnel
  name="status"
  :value='data.status'
  valueitem=""
  url="/sysorganizations/{deptId}/sysemployees/picker"
  
  :multiple="false"
  filter="srforgid"
  :fillmap="{'id':'','label':'status'}"
  :disabled="detailsModel.status.disabled"
  :data="data"
  :context="context"
    tag='Todo__status' codelistType='STATIC'
  @formitemvaluechange="onFormItemValueChange">
</app-mob-department-personnel>

</app-form-item>



<app-form-item 
    name='formitem7' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="formitem7_item"  
    :itemValue="this.data.formitem7" 
    v-show="detailsModel.formitem7.visible" 
    :itemRules="this.rules.formitem7" 
    :caption="$t('todo.mobnew_form.details.formitem7')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.formitem7.disabled"
    :error="detailsModel.formitem7.error" 
    :isEmptyCaption="false">
        <app-mob-color-picker
    v-model="data.formitem7"  
    @enter="onEnter($event)"
    :data="data"
    :disabled="detailsModel.formitem7.disabled"
    :formState="formState"
    color=""
    @colorChange="(val) => {onFormItemValueChange(val)}">
</app-mob-color-picker>
</app-form-item>



<app-form-item 
    name='formitem' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="formitem_item"  
    :itemValue="this.data.formitem" 
    v-show="detailsModel.formitem.visible" 
    :itemRules="this.rules.formitem" 
    :caption="$t('todo.mobnew_form.details.formitem')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.formitem.disabled"
    :error="detailsModel.formitem.error" 
    :isEmptyCaption="false">
        <app-mob-department-select :data="data" :disabled="detailsModel.formitem.disabled" :context="JSON.parse(JSON.stringify(context))" url="/sysorganizations/${orgid}/sysdepartments/picker" filter="srforgid"  :fillMap="{'id':'formitem5','label':'formitem'}" :multiple="true" style="" @select-change="onFormItemValueChange" ></app-mob-department-select>
</app-form-item>



<app-form-item 
    name='assignedtopk' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="assignedtopk_item"  
    :itemValue="this.data.assignedtopk" 
    v-show="detailsModel.assignedtopk.visible" 
    :itemRules="this.rules.assignedtopk" 
    :caption="$t('todo.mobnew_form.details.assignedtopk')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.assignedtopk.disabled"
    :error="detailsModel.assignedtopk.error" 
    :isEmptyCaption="false">
        <app-mob-department-select :data="data" :disabled="detailsModel.assignedtopk.disabled" :context="JSON.parse(JSON.stringify(context))" url="/sysorganizations/${orgid}/sysdepartments/picker" filter="srforgid"  :fillMap="{'id':'formitem5','label':'assignedtopk'}" :multiple="false" style="" @select-change="onFormItemValueChange" ></app-mob-department-select>
</app-form-item>



<app-form-item 
    name='formitem2' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="formitem2_item"  
    :itemValue="this.data.formitem2" 
    v-show="detailsModel.formitem2.visible" 
    :itemRules="this.rules.formitem2" 
    :caption="$t('todo.mobnew_form.details.formitem2')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.formitem2.disabled"
    :error="detailsModel.formitem2.error" 
    :isEmptyCaption="false">
        <app-mob-department-select :data="data" :disabled="detailsModel.formitem2.disabled" :context="JSON.parse(JSON.stringify(context))" url="/sysorganizations/${orgid}/sysdepartments/picker" filter="srforgid"  :fillMap="{'id':'formitem5','label':'formitem2'}" :multiple="true" style="" @select-change="onFormItemValueChange" ></app-mob-department-select>
</app-form-item>



<app-form-item 
    name='formitem1' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="formitem1_item"  
    :itemValue="this.data.formitem1" 
    v-show="detailsModel.formitem1.visible" 
    :itemRules="this.rules.formitem1" 
    :caption="$t('todo.mobnew_form.details.formitem1')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.formitem1.disabled"
    :error="detailsModel.formitem1.error" 
    :isEmptyCaption="false">
        <app-mob-department-select :data="data" :disabled="detailsModel.formitem1.disabled" :context="JSON.parse(JSON.stringify(context))" url="/sysorganizations/${orgid}/sysdepartments/picker" filter="srforgid"  :fillMap="{'id':'formitem5','label':'formitem1'}" :multiple="false" style="" @select-change="onFormItemValueChange" ></app-mob-department-select>
</app-form-item>



<app-form-item 
    name='account' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="account_item"  
    :itemValue="this.data.account" 
    v-show="detailsModel.account.visible" 
    :itemRules="this.rules.account" 
    :caption="$t('todo.mobnew_form.details.account')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.account.disabled"
    :error="detailsModel.account.error" 
    :isEmptyCaption="false">
        <app-mob-group-select
  name="account"
  :value='data.account'
  valueitem="desc"
  url="/sysorganizations/${selected-orgid}/sysemployees/picker"
  
  :multiple="false"
  filter="srforgid"
  :fillmap="{'id':'desc','label':'account'}"
  :disabled="detailsModel.account.disabled"
  :data="data"
  :context="context"
    tag='UserRealName' codelistType='DYNAMIC'
  @formitemvaluechange="onFormItemValueChange">
</app-mob-group-select>

</app-form-item>



<app-form-item 
    name='assignedby' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="assignedby_item"  
    :itemValue="this.data.assignedby" 
    v-show="detailsModel.assignedby.visible" 
    :itemRules="this.rules.assignedby" 
    :caption="$t('todo.mobnew_form.details.assignedby')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.assignedby.disabled"
    :error="detailsModel.assignedby.error" 
    :isEmptyCaption="false">
        <app-mob-group-select
  name="assignedby"
  :value='data.assignedby'
  valueitem="desc"
  url="/sysorganizations/${selected-orgid}/sysemployees/picker"
  
  :multiple="true"
  filter="srforgid"
  :fillmap="{'id':'desc','label':'assignedby'}"
  :disabled="detailsModel.assignedby.disabled"
  :data="data"
  :context="context"
    tag='UserRealName' codelistType='DYNAMIC'
  @formitemvaluechange="onFormItemValueChange">
</app-mob-group-select>

</app-form-item>



<app-form-item 
    name='assigneddate' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="assigneddate_item"  
    :itemValue="this.data.assigneddate" 
    v-show="detailsModel.assigneddate.visible" 
    :itemRules="this.rules.assigneddate" 
    :caption="$t('todo.mobnew_form.details.assigneddate')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.assigneddate.disabled"
    :error="detailsModel.assigneddate.error" 
    :isEmptyCaption="false">
        <app-mob-group-select
  name="assigneddate"
  :value='data.assigneddate'
  valueitem="desc"
  url="/sysorganizations/${selected-orgid}/sysemployees/picker"
  treeurl="/sysorganizations/${orgid}/suborg/picker"
  :multiple="false"
  filter="srforgid"
  :fillmap="{'id':'desc','label':'assigneddate'}"
  :disabled="detailsModel.assigneddate.disabled"
  :data="data"
  :context="context"
  
  @formitemvaluechange="onFormItemValueChange">
</app-mob-group-select>
</app-form-item>



<app-form-item 
    name='noticeusers' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="noticeusers_item"  
    :itemValue="this.data.noticeusers" 
    v-show="detailsModel.noticeusers.visible" 
    :itemRules="this.rules.noticeusers" 
    :caption="$t('todo.mobnew_form.details.noticeusers')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.noticeusers.disabled"
    :error="detailsModel.noticeusers.error" 
    :isEmptyCaption="false">
        <app-mob-group-select
  name="noticeusers"
  :value='data.noticeusers'
  valueitem="desc"
  url="/sysorganizations/${selected-orgid}/sysemployees/picker"
  treeurl="/sysorganizations/${orgid}/suborg/picker"
  :multiple="true"
  filter="srforgid"
  :fillmap="{'id':'desc','label':'noticeusers'}"
  :disabled="detailsModel.noticeusers.disabled"
  :data="data"
  :context="context"
  
  @formitemvaluechange="onFormItemValueChange">
</app-mob-group-select>

</app-form-item>



<app-form-item 
    name='formitem3' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="formitem3_item"  
    :itemValue="this.data.formitem3" 
    v-show="detailsModel.formitem3.visible" 
    :itemRules="this.rules.formitem3" 
    :caption="$t('todo.mobnew_form.details.formitem3')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.formitem3.disabled"
    :error="detailsModel.formitem3.error" 
    :isEmptyCaption="false">
        <app-mob-org-select :data="data" :disabled="detailsModel.formitem3.disabled" :context="JSON.parse(JSON.stringify(context))" :fillMap="{'id':'','label':'formitem3'}" url="/sysorganizations/${orgid}/suborg/picker" filter="srforgid" :multiple="false" style="" @select-change="onFormItemValueChange" ></app-mob-org-select>
</app-form-item>



<app-form-item 
    name='formitem4' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="formitem4_item"  
    :itemValue="this.data.formitem4" 
    v-show="detailsModel.formitem4.visible" 
    :itemRules="this.rules.formitem4" 
    :caption="$t('todo.mobnew_form.details.formitem4')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.formitem4.disabled"
    :error="detailsModel.formitem4.error" 
    :isEmptyCaption="false">
        <app-mob-org-select :data="data" :disabled="detailsModel.formitem4.disabled" :context="JSON.parse(JSON.stringify(context))" :fillMap="{'id':'','label':'formitem4'}" url="/sysorganizations/${orgid}/suborg/picker" filter="srforgid" :multiple="true" style="" @select-change="onFormItemValueChange" ></app-mob-org-select>
</app-form-item>



<app-form-item 
    name='formitem5' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="formitem5_item"  
    :itemValue="this.data.formitem5" 
    v-show="detailsModel.formitem5.visible" 
    :itemRules="this.rules.formitem5" 
    :caption="$t('todo.mobnew_form.details.formitem5')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.formitem5.disabled"
    :error="detailsModel.formitem5.error" 
    :isEmptyCaption="false">
        <app-mob-org-select :data="data" :disabled="detailsModel.formitem5.disabled" :context="JSON.parse(JSON.stringify(context))" :fillMap="{'id':'','label':'formitem5'}" url="/sysorganizations/alls/suborg/picker" filter="srforgid" :multiple="false" style="" @select-change="onFormItemValueChange" ></app-mob-org-select>
</app-form-item>



<app-form-item 
    name='formitem6' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="formitem6_item"  
    :itemValue="this.data.formitem6" 
    v-show="detailsModel.formitem6.visible" 
    :itemRules="this.rules.formitem6" 
    :caption="$t('todo.mobnew_form.details.formitem6')"  
    :labelWidth="130"  
    :isShowCaption="true"
    :disabled="detailsModel.formitem6.disabled"
    :error="detailsModel.formitem6.error" 
    :isEmptyCaption="false">
        <app-mob-org-select :data="data" :disabled="detailsModel.formitem6.disabled" :context="JSON.parse(JSON.stringify(context))" :fillMap="{'id':'','label':'formitem6'}" url="/sysorganizations/alls/suborg/picker" filter="srforgid" :multiple="true" style="" @select-change="onFormItemValueChange" ></app-mob-org-select>
</app-form-item>


    
</app-form-group>




    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import TodoService from '@/app-core/service/todo/todo-service';
import MobNewService from '@/app-core/ctrl-service/todo/mob-new-form-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import TodoUIService from '@/ui-service/todo/todo-ui-action';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {  Util } from '@/ibiz-core/utils';


@Component({
    components: { }
})
export default class MobNewBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MobNew
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MobNew
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MobNew
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobNew
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobNew
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MobNew
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MobNew
     */
    protected getControlType(): string {
        return 'FORM'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MobNew
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobNewBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args);
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {MobNewService}
     * @memberof MobNew
     */
    protected service: MobNewService = new MobNewService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof MobNew
     */
    protected appEntityService: TodoService = new TodoService();

    /**
     * 界面UI服务对象
     *
     * @type {TodoUIService}
     * @memberof MobNewBase
     */  
    public deUIService:TodoUIService = new TodoUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MobNew
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 工作流审批意见控件绑定值
     *
     * @memberof MobNew
     */
    @Prop() srfwfmemo?: string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MobNew
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MobNew
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof MobNew
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MobNew
     */
    @Prop({ default: true }) protected showBusyIndicator!: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof MobNew
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof MobNew
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MobNew
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MobNew
     */
    @Prop() protected removeAction!: string;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof YDDTBJ
     */
    @Prop({ default: false }) protected isautoload?: boolean;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof MobNew
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MobNew
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobNew
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobNew
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof MobNew
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof MobNew
     */
    protected formState: Subject<any> = new Subject();


    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MobNewBase
     */
    public appStateEvent: Subscription | undefined;

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof MobNew
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof MobNew
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof MobNew
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof MobNew
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MobNew
     */
    protected data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        name: null,
        pri: null,
        date: null,
        begin: null,
        end: null,
        type: null,
        bug: null,
        idvalue: null,
        task: null,
        config_type: null,
        cycle: null,
        story: null,
        private: null,
        desc: null,
        status: null,
        formitem7: null,
        formitem: null,
        assignedtopk: null,
        formitem2: null,
        formitem1: null,
        account: null,
        assignedby: null,
        assigneddate: null,
        noticeusers: null,
        formitem3: null,
        formitem4: null,
        formitem5: null,
        formitem6: null,
        id: null,
        todo: null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof MobNew
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof MobNew
      */
    protected drcounter: number = 0;

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof MobNew
      */
    protected saveState:any ;

    /**
      * 异常信息缓存
      *
      * @type {any}
      * @memberof MobNew
      */
    public errorCache :any = {};

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobNew
     */
    protected rules: any = {
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobNewBase
     */
    public deRules:any = {
    };

    /**
     * 校验属性值规则
     *
     * @public
     * @param {{ name: string }} { name }
     * @memberof MobNewFormBase
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
                this.errorCache[item.deName] = item.ruleInfo;
            }
            // 数值范围
            if(item.type == 'VALUERANGE2'){
                startOp( !this.$verify.checkFieldValueRangeRule(dataValue,item.minValue,item.isIncludeMinValue,item.maxValue,item.isIncludeMaxValue,item.ruleInfo,item.isKeyCond));
                this.errorCache[item.deName] = item.ruleInfo;
                falg.infoMessage = item.ruleInfo;
            }
            // 正则式
            if (item.type == "REGEX") {
                startOp(!this.$verify.checkFieldRegExRule(dataValue,item.regExCode,item.ruleInfo,item.isKeyCond));
                this.errorCache[item.deName] = item.ruleInfo;
                falg.infoMessage = item.ruleInfo;
            }
            // 长度
            if (item.type == "STRINGLENGTH") {
                startOp(!this.$verify.checkFieldStringLengthRule(dataValue,item.minValue,item.isIncludeMinValue,item.maxValue,item.isIncludeMaxValue,item.ruleInfo,item.isKeyCond)); 
                this.errorCache[item.deName] = item.ruleInfo;
                falg.infoMessage = item.ruleInfo;
            }
            // 系统值规则
            if(item.type == "SYSVALUERULE") {
                startOp(!this.$verify.checkFieldSysValueRule(dataValue,item.sysRule.regExCode,item.ruleInfo,item.isKeyCond));
                this.errorCache[item.deName] = item.ruleInfo;
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
     * @memberof MobNew
     */
    protected detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '待办事宜表基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'todo.mobnew_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        name: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        date: new FormItemModel({ caption: '日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        begin: new FormItemModel({ caption: '开始', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        end: new FormItemModel({ caption: '结束', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: '类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        bug: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'bug', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        idvalue: new FormItemModel({ caption: '关联编号', detailType: 'FORMITEM', name: 'idvalue', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        task: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'task', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        config_type: new FormItemModel({ caption: '周期类型', detailType: 'FORMITEM', name: 'config_type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        cycle: new FormItemModel({ caption: '周期', detailType: 'FORMITEM', name: 'cycle', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        story: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'story', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        private: new FormItemModel({ caption: '私人事务', detailType: 'FORMITEM', name: 'private', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        desc: new FormItemModel({ caption: '描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        status: new FormItemModel({ caption: '人员', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem7: new FormItemModel({ caption: '显色选择', detailType: 'FORMITEM', name: 'formitem7', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem: new FormItemModel({ caption: '【多选】部门（指定单位及其下级单位的所有部门多选)', detailType: 'FORMITEM', name: 'formitem', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assignedtopk: new FormItemModel({ caption: '【单选】部门（指定单位及其下级单位的所有部门）', detailType: 'FORMITEM', name: 'assignedtopk', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem2: new FormItemModel({ caption: '【多选】部门（指定单位内的部门多选）', detailType: 'FORMITEM', name: 'formitem2', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem1: new FormItemModel({ caption: '【单选】部门（指定单位内的部门单选）', detailType: 'FORMITEM', name: 'formitem1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        account: new FormItemModel({ caption: '【单选】指定单位内人员', detailType: 'FORMITEM', name: 'account', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assignedby: new FormItemModel({ caption: '【多选】指定单位内人员', detailType: 'FORMITEM', name: 'assignedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assigneddate: new FormItemModel({ caption: '【单选】指定单位及下级人员', detailType: 'FORMITEM', name: 'assigneddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        noticeusers: new FormItemModel({ caption: '【多选】指定单位及下级人员', detailType: 'FORMITEM', name: 'noticeusers', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem3: new FormItemModel({ caption: '【单选】单位（仅含指定单位及其下级单位单选）', detailType: 'FORMITEM', name: 'formitem3', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem4: new FormItemModel({ caption: '【多选】单位（仅含指定单位及其下级单位多选）', detailType: 'FORMITEM', name: 'formitem4', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem5: new FormItemModel({ caption: '【单选】单位（全部单位单选）', detailType: 'FORMITEM', name: 'formitem5', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem6: new FormItemModel({ caption: '【多选】单位（全部单位多选）', detailType: 'FORMITEM', name: 'formitem6', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
    };

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 name 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.name')
    onNameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'name', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 pri 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.pri')
    onPriChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'pri', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 date 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.date')
    onDateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'date', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 begin 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.begin')
    onBeginChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'begin', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 end 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.end')
    onEndChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'end', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.type')
    onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 bug 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.bug')
    onBugChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'bug', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 idvalue 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.idvalue')
    onIdvalueChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'idvalue', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 task 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.task')
    onTaskChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'task', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 config_type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.config_type')
    onConfig_typeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'config_type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 cycle 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.cycle')
    onCycleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'cycle', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 story 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.story')
    onStoryChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'story', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 private 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.private')
    onPrivateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'private', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 desc 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.desc')
    onDescChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'desc', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 status 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.status')
    onStatusChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'status', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem7 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.formitem7')
    onFormitem7Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem7', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.formitem')
    onFormitemChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedtopk 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.assignedtopk')
    onAssignedtopkChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assignedtopk', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem2 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.formitem2')
    onFormitem2Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem2', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem1 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.formitem1')
    onFormitem1Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem1', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 account 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.account')
    onAccountChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'account', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.assignedby')
    onAssignedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assignedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assigneddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.assigneddate')
    onAssigneddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assigneddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 noticeusers 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.noticeusers')
    onNoticeusersChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'noticeusers', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem3 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.formitem3')
    onFormitem3Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem3', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem4 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.formitem4')
    onFormitem4Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem4', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem5 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.formitem5')
    onFormitem5Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem5', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem6 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
     */
    @Watch('data.formitem6')
    onFormitem6Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem6', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
     */
    private async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }){
                









        if (Object.is(name, '') || Object.is(name, 'type')) {
            let ret = false;
            const _type = this.data.type;
            if (this.$verify.testCond(_type, 'EQ', 'custom')) {
                ret = true;
            }
            this.detailsModel.name.setDisabled(!ret);
        }





























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
            if(!property || !this.rules[property]){
                resolve(true);
            }
            Util.validateItem(property,data,this.rules[property]).then(()=>{
                this.detailsModel[property].setError("");
                resolve(true);
            }).catch(({ errors, fields }) => {
                const {field , message } = errors[0];
                let _message :any = (this.$t(`todo.mobnew_form.details.${field}`) as string) +' '+ this.$t(`app.form.rules.${message}`);
                this.detailsModel[property].setError(this.errorCache[property]?this.errorCache[property]: _message);
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * 获取全部值
     *
     * @returns {*}
     * @memberof MobNew
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MobNew
     */    
    protected afterCreated(){
        if(this.isautoload){
            this.autoLoad({srfkey:this.context.todo});
        }
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
        if(AppCenterService && AppCenterService.getMessageCenter()){
            this.appStateEvent = AppCenterService.getMessageCenter().subscribe(({ name, action, data }) =>{
                if(!Object.is(name,"Todo")){
                    return;
                }
                if(Object.is(action,'appRefresh') && data.appRefreshAction && this.context.todo){
                    this.refresh([data]);
                }
            })
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MobNew
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MobNew
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if (this.dataChangEvent) {
            this.dataChangEvent.unsubscribe();
        }
        if(this.appStateEvent){
            this.appStateEvent.unsubscribe();
        }
    }

    /**
     * 拷贝内容
     *
     * @param {*} [arg={}]
     * @memberof @memberof MobNew
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
            if(data.todo){
                Object.assign(this.context, { todo: data.todo });
            }
            this.resetDraftFormStates();
            this.onFormLoad(data, 'loadDraft');
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
     * 自动保存
     *
     * @protected
     * @param {*} [opt={}]
     * @returns {Promise<any>}
     * @memberof MobNew
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
     * @memberof MobNew
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
        Object.assign(this.viewparams,{ name: arg.name});
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
            AppCenterService.notifyMessage({name:"Todo",action:'appRefresh',data:Object.assign(data,{appRefreshAction:action===this.createAction?false:true})});
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
            AppCenterService.notifyMessage({name:"Todo",action:'appRefresh',data:data});
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
     * @memberof MobNew
     */
    protected async wfstart(data: any): Promise<any> {
        const _this: any = this;
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams);
        let response: any = await this.service.wfstart(_this.WFStartAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            AppCenterService.notifyMessage({name:"Todo",action:'appRefresh',data:data});
            return response
        } else if (response && response.status !== 401) {
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
     * @memberof MobNew
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
            AppCenterService.notifyMessage({name:"Todo",action:'appRefresh',data:data});
            return response        
        } else if (response && response.status !== 401) {
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
     * @memberof MobNew
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
            AppCenterService.notifyMessage({name:"Todo",action:'appRefresh',data:data});
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
     * @memberof MobNew
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobNew
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
     * @memberof MobNew
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
     * @memberof MobNew
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
    * @memberof MobNew
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
     * @memberof MobNew
     */
    public createDefault(){                    
    }

        /**
     * 更新默认值
     * @memberof MobNewBase
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
@import './mob-new-form.less';
</style>