<template>
    <i-form :model="this.data" class='app-form' ref='form'  id='form' style="">
    <input style="display:none;" />
    <row >
            
<i-col v-show="detailsModel.group1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.group1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.todo.main_form.details.group1')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.date.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 10, offset: 0 }">
    <app-form-item name='date' :itemRules="this.rules.date" class='' :caption="$t('entities.todo.main_form.details.date')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.date.error" :isEmptyCaption="false" labelPos="LEFT">
    <date-picker type="date" :transfer="true" format="yyyy-MM-dd" placeholder="请选择时间..." :value="data.date" :disabled="detailsModel.date.disabled" style="min-width: 150px; width:100px;" @on-change="(val1, val2) => { this.data.date = val1 }"></date-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.date_disable.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 3, offset: 0 }">
    <app-form-item name='date_disable' :itemRules="this.rules.date_disable" class='' :caption="$t('entities.todo.main_form.details.date_disable')" uiStyle="DEFAULT" :labelWidth="2" :isShowCaption="true" :error="detailsModel.date_disable.error" :isEmptyCaption="true" labelPos="LEFT">
    <app-checkbox-list v-model="data.date_disable" :disabled="detailsModel.date_disable.disabled"  tag='Date_disable' codelistType='STATIC'   mode="" name="date_disable" style=""></app-checkbox-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.cycle_enable.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 3, offset: 0 }">
    <app-form-item name='cycle_enable' :itemRules="this.rules.cycle_enable" class='' :caption="$t('entities.todo.main_form.details.cycle_enable')" uiStyle="DEFAULT" :labelWidth="2" :isShowCaption="true" :error="detailsModel.cycle_enable.error" :isEmptyCaption="true" labelPos="LEFT">
    <app-checkbox-list v-model="data.cycle_enable" :disabled="detailsModel.cycle_enable.disabled"  tag='Cycle_enable' codelistType='STATIC'   mode="" name="cycle_enable" style=""></app-checkbox-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.todo.main_form.details.grouppanel1')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.config_type.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 16, offset: 0 }">
    <app-form-item name='config_type' :itemRules="this.rules.config_type" class='' :caption="$t('entities.todo.main_form.details.config_type')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.config_type.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-radio-group v-model="data.config_type"  :disabled="detailsModel.config_type.disabled"  name="config_type" tag='CycleType' codelistType='STATIC'  style=""></app-radio-group>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel3.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel3.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.todo.main_form.details.grouppanel3')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.formitem3.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 6, offset: 0 }">
    <app-form-item name='formitem3' :itemRules="this.rules.formitem3" class='' :caption="$t('entities.todo.main_form.details.formitem3')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.formitem3.error" :isEmptyCaption="true" labelPos="LEFT">
    <input-box 
  v-model="data.formitem3"  
  @enter="onEnter($event)"  
  unit="天"
  :disabled="detailsModel.formitem3.disabled" 
  type='number' 
   
  style="">
</input-box>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.formitem4.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 24, offset: 0 }">
    <app-form-item name='formitem4' :itemRules="this.rules.formitem4" class='' :caption="$t('entities.todo.main_form.details.formitem4')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.formitem4.error" :isEmptyCaption="true" labelPos="LEFT">
    <app-checkbox-list v-model="data.formitem4" :disabled="detailsModel.formitem4.disabled"  tag='CodeList46' codelistType='STATIC'   mode="" name="formitem4" style=""></app-checkbox-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.formitem5.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 24, offset: 0 }">
    <app-form-item name='formitem5' :itemRules="this.rules.formitem5" class='' :caption="$t('entities.todo.main_form.details.formitem5')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.formitem5.error" :isEmptyCaption="true" labelPos="LEFT">
    <app-checkbox-list v-model="data.formitem5" :disabled="detailsModel.formitem5.disabled"  tag='CodeList47' codelistType='STATIC'   mode="" name="formitem5" style=""></app-checkbox-list>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.formitem2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 6, offset: 0 }">
    <app-form-item name='formitem2' :itemRules="this.rules.formitem2" class='' :caption="$t('entities.todo.main_form.details.formitem2')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.formitem2.error" :isEmptyCaption="false" labelPos="LEFT">
    <input-box 
  v-model="data.formitem2"  
  @enter="onEnter($event)"  
  unit=""
  :disabled="detailsModel.formitem2.disabled" 
  type='number' 
   
  style="">
</input-box>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.formitem6.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 4, offset: 0 }">
    <app-form-item name='formitem6' :itemRules="this.rules.formitem6" class='' :caption="$t('entities.todo.main_form.details.formitem6')" uiStyle="DEFAULT" :labelWidth="90" :isShowCaption="true" :error="detailsModel.formitem6.error" :isEmptyCaption="false" labelPos="LEFT">
    <div style="">{{data.formitem6}}</div>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.formitem.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 16, offset: 0 }">
    <app-form-item name='formitem' :itemRules="this.rules.formitem" class='' :caption="$t('entities.todo.main_form.details.formitem')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.formitem.error" :isEmptyCaption="false" labelPos="LEFT">
    <date-picker type="date" :transfer="true" format="yyyy-MM-dd" placeholder="请选择时间..." :value="data.formitem" :disabled="detailsModel.formitem.disabled" style="min-width: 150px; width:100px;" @on-change="(val1, val2) => { this.data.formitem = val1 }"></date-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.type.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 16, offset: 0 }">
    <app-form-item name='type' :itemRules="this.rules.type" class='' :caption="$t('entities.todo.main_form.details.type')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.type.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.type" :data="data" :itemParam="{}" :disabled="detailsModel.type.disabled"  tag='Type' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.pri.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 16, offset: 0 }">
    <app-form-item name='pri' :itemRules="this.rules.pri" class='' :caption="$t('entities.todo.main_form.details.pri')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.pri.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.pri" :data="data" :itemParam="{}" :disabled="detailsModel.pri.disabled"  tag='Pri' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.task.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='task' :itemRules="this.rules.task" class='' :caption="$t('entities.todo.main_form.details.task')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.task.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-picker  
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :itemParam='{ }' 
  :disabled="detailsModel.task.disabled"
  name='task' 
  deMajorField='name'
  deKeyField='task'
  :service="service"
  :acParams="{ serviceName: 'TaskService', interfaceName: 'FetchDefault'}"
  valueitem='idvalue' 
  :value="data.task" 
  editortype="dropdown" 
  style="" 
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.story.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='story' :itemRules="this.rules.story" class='' :caption="$t('entities.todo.main_form.details.story')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.story.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-picker  
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :itemParam='{ }' 
  :disabled="detailsModel.story.disabled"
  name='story' 
  deMajorField='title'
  deKeyField='story'
  :service="service"
  :acParams="{ serviceName: 'StoryService', interfaceName: 'FetchDefault'}"
  valueitem='idvalue' 
  :value="data.story" 
  editortype="dropdown" 
  style="" 
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.bug.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='bug' :itemRules="this.rules.bug" class='' :caption="$t('entities.todo.main_form.details.bug')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.bug.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-picker  
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :itemParam='{ }' 
  :disabled="detailsModel.bug.disabled"
  name='bug' 
  deMajorField='title'
  deKeyField='bug'
  :service="service"
  :acParams="{ serviceName: 'BugService', interfaceName: 'FetchDefault'}"
  valueitem='idvalue' 
  :value="data.bug" 
  editortype="dropdown" 
  style="" 
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.name.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='name' :itemRules="this.rules.name" class='' :caption="$t('entities.todo.main_form.details.name')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.name.error" :isEmptyCaption="false" labelPos="LEFT">
    <input-box v-model="data.name"  @enter="onEnter($event)"   unit=""  :disabled="detailsModel.name.disabled" type='text'  style=""></input-box>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.formitem1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='formitem1' :itemRules="this.rules.formitem1" class='' :caption="$t('entities.todo.main_form.details.formitem1')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.formitem1.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-rich-text-editor :formState="formState" :value="data.formitem1" @change="(val) =>{this.data.formitem1 =val}" :disabled="detailsModel.formitem1.disabled"  name="formitem1" style=""></app-rich-text-editor>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.status.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 16, offset: 0 }">
    <app-form-item name='status' :itemRules="this.rules.status" class='' :caption="$t('entities.todo.main_form.details.status')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.status.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.status" :data="data" :itemParam="{}" :disabled="detailsModel.status.disabled"  tag='Todo__status' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel2.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.todo.main_form.details.grouppanel2')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.begin.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 10, offset: 0 }">
    <app-form-item name='begin' :itemRules="this.rules.begin" class='' :caption="$t('entities.todo.main_form.details.begin')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.begin.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.begin" :data="data" :itemParam="{}" :disabled="detailsModel.begin.disabled"  tag='BeginendDropList' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.end.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 6, offset: 0 }">
    <app-form-item name='end' :itemRules="this.rules.end" class='' :caption="$t('entities.todo.main_form.details.end')" uiStyle="DEFAULT" :labelWidth="10" :isShowCaption="true" :error="detailsModel.end.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.end" :data="data" :itemParam="{}" :disabled="detailsModel.end.disabled"  tag='BeginendDropList' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.formitem10.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 8, offset: 0 }">
    <app-form-item name='formitem10' :itemRules="this.rules.formitem10" class='' :caption="$t('entities.todo.main_form.details.formitem10')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.formitem10.error" :isEmptyCaption="true" labelPos="NONE">
    <app-checkbox-list v-model="data.formitem10" :disabled="detailsModel.formitem10.disabled"  tag='Beginend_disable' codelistType='STATIC'   mode="" name="formitem10" style=""></app-checkbox-list>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.private.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 12, offset: 0 }">
    <app-form-item name='private' :itemRules="this.rules.private" class='' :caption="$t('entities.todo.main_form.details.private')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.private.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-checkbox-list v-model="data.private" :disabled="detailsModel.private.disabled"  tag='Private_choose' codelistType='STATIC'   mode="" name="private" style=""></app-checkbox-list>
</app-form-item>

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
import TodoService from '@/service/todo/todo-service';
import MainService from './main-form-service';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
    components: {
      
    }
})
export default class MainBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Main
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Main
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Main
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Main
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Main
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Main
     */
    protected getControlType(): string {
        return 'FORM'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Main
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {MainService}
     * @memberof Main
     */
    protected service: MainService = new MainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof Main
     */
    protected appEntityService: TodoService = new TodoService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof Main
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof Main
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
     * @memberof Main
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Main
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof Main
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof Main
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof Main
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof Main
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof Main
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof Main
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof Main
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof Main
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof Main
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof Main
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof Main
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof Main
     */
    protected formState: Subject<any> = new Subject();

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof Main
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof Main
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof Main
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof Main
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof Main
     */
    protected data: any = {
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
        config_type: null,
        idvalue: null,
        formitem3: null,
        formitem4: null,
        formitem5: null,
        formitem2: null,
        formitem6: null,
        formitem: null,
        type: null,
        pri: null,
        task: null,
        story: null,
        bug: null,
        name: null,
        formitem1: null,
        status: null,
        begin: null,
        end: null,
        formitem10: null,
        private: null,
        id: null,
        todo:null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof Main
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof Main
      */
    protected drcounter: number = 0;

    /**
      * 需要等待关系界面保存时，第一次调用save参数的备份
      *
      * @type {number}
      * @memberof Main
      */
    protected drsaveopt: any = {};

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof Main
      */
    protected saveState:any ;

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main
     */
    protected rules: any = {
        srforikey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { type: 'string', message: '待办名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '待办名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '待办名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '待办名称 值不能为空', trigger: 'blur' },
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
        date: [
            { type: 'string', message: '日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '日期 值不能为空', trigger: 'blur' },
        ],
        date_disable: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        cycle_enable: [
            { type: 'number', message: ' 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: ' 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: ' 值不能为空', trigger: 'blur' },
        ],
        config_type: [
            { type: 'string', message: '周期类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '周期类型 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '周期类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '周期类型 值不能为空', trigger: 'blur' },
        ],
        idvalue: [
            { type: 'number', message: '关联编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '关联编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '关联编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '关联编号 值不能为空', trigger: 'blur' },
        ],
        formitem3: [
            { type: 'number', message: ' 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: ' 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: ' 值不能为空', trigger: 'blur' },
        ],
        formitem4: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        formitem5: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        formitem2: [
            { type: 'number', message: '提前 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '提前 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '提前 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '提前 值不能为空', trigger: 'blur' },
        ],
        formitem6: [
            { type: 'string', message: '天生成待办 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '天生成待办 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '天生成待办 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '天生成待办 值不能为空', trigger: 'blur' },
        ],
        formitem: [
            { type: 'string', message: '过期时间 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '过期时间 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '过期时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '过期时间 值不能为空', trigger: 'blur' },
        ],
        type: [
            { type: 'string', message: '类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '类型 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '类型 值不能为空', trigger: 'blur' },
        ],
        pri: [
            { type: 'number', message: '优先级 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '优先级 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '优先级 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '优先级 值不能为空', trigger: 'blur' },
        ],
        task: [
            { type: 'string', message: '待办名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '待办名称 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'blur' },
        ],
        story: [
            { type: 'string', message: '待办名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '待办名称 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'blur' },
        ],
        bug: [
            { type: 'string', message: '待办名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '待办名称 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'blur' },
        ],
        name: [
            { type: 'string', message: '待办名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '待办名称 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '待办名称 值不能为空', trigger: 'blur' },
        ],
        formitem1: [
            { type: 'string', message: '描述 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '描述 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '描述 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '描述 值不能为空', trigger: 'blur' },
        ],
        status: [
            { type: 'string', message: '状态 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '状态 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '状态 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '状态 值不能为空', trigger: 'blur' },
        ],
        begin: [
            { type: 'number', message: '起止时间 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '起止时间 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '起止时间 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '起止时间 值不能为空', trigger: 'blur' },
        ],
        end: [
            { type: 'number', message: '~ 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '~ 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '~ 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '~ 值不能为空', trigger: 'blur' },
        ],
        formitem10: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        private: [
            { type: 'number', message: '私人事务 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '私人事务 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '私人事务 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '私人事务 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'blur' },
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
    protected detailsModel: any = {
        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.todo.main_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '周期设置', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: false, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.todo.main_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.todo.main_form', extractMode: 'ITEM', details: [] } })
, 
        group1: new FormGroupPanelModel({ caption: '', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.todo.main_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '添加待办', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
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
        date: new FormItemModel({ caption: '日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        date_disable: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'date_disable', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        cycle_enable: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'cycle_enable', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        config_type: new FormItemModel({ caption: '周期类型', detailType: 'FORMITEM', name: 'config_type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        idvalue: new FormItemModel({ caption: '关联编号', detailType: 'FORMITEM', name: 'idvalue', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem3: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitem3', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem4: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitem4', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem5: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitem5', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem2: new FormItemModel({ caption: '提前', detailType: 'FORMITEM', name: 'formitem2', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem6: new FormItemModel({ caption: '天生成待办', detailType: 'FORMITEM', name: 'formitem6', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem: new FormItemModel({ caption: '过期时间', detailType: 'FORMITEM', name: 'formitem', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: '类型', detailType: 'FORMITEM', name: 'type', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        task: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'task', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        story: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'story', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        bug: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'bug', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        name: new FormItemModel({ caption: '待办名称', detailType: 'FORMITEM', name: 'name', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem1: new FormItemModel({ caption: '描述', detailType: 'FORMITEM', name: 'formitem1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        status: new FormItemModel({ caption: '状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        begin: new FormItemModel({ caption: '起止时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        end: new FormItemModel({ caption: '~', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem10: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitem10', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        private: new FormItemModel({ caption: '私人事务', detailType: 'FORMITEM', name: 'private', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
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
    onSrforikeyChange(newVal: any, oldVal: any) {
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
    onSrfkeyChange(newVal: any, oldVal: any) {
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
    onSrfmajortextChange(newVal: any, oldVal: any) {
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
    onSrftempmodeChange(newVal: any, oldVal: any) {
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
    onSrfufChange(newVal: any, oldVal: any) {
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
    onSrfdeidChange(newVal: any, oldVal: any) {
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
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 date 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.date')
    onDateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'date', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 date_disable 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.date_disable')
    onDate_disableChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'date_disable', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 cycle_enable 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.cycle_enable')
    onCycle_enableChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'cycle_enable', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 config_type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.config_type')
    onConfig_typeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'config_type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 idvalue 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.idvalue')
    onIdvalueChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'idvalue', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem3 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
     */
    @Watch('data.formitem5')
    onFormitem5Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem5', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem2 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.formitem2')
    onFormitem2Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem2', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem6 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.formitem6')
    onFormitem6Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem6', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.formitem')
    onFormitemChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.type')
    onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 pri 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.pri')
    onPriChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'pri', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 task 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.task')
    onTaskChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'task', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 story 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.story')
    onStoryChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'story', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 bug 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.bug')
    onBugChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'bug', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 name 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.name')
    onNameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'name', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem1 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.formitem1')
    onFormitem1Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem1', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 status 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.status')
    onStatusChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'status', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 begin 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
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
     * @memberof Main
     */
    @Watch('data.end')
    onEndChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'end', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem10 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.formitem10')
    onFormitem10Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem10', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 private 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
     */
    @Watch('data.private')
    onPrivateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'private', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
     */
    private formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                

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





        if (Object.is(name, '') || Object.is(name, 'config_type')) {
            let ret = false;
            const _config_type = this.data.config_type;
            if (this.$verify.testCond(_config_type, 'EQ', 'day')) {
                ret = true;
            }
            this.detailsModel.formitem3.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'config_type')) {
            let ret = false;
            const _config_type = this.data.config_type;
            if (this.$verify.testCond(_config_type, 'EQ', 'week')) {
                ret = true;
            }
            this.detailsModel.formitem4.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'config_type')) {
            let ret = false;
            const _config_type = this.data.config_type;
            if (this.$verify.testCond(_config_type, 'EQ', 'month')) {
                ret = true;
            }
            this.detailsModel.formitem5.setVisible(ret);
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
            if (this.$verify.testCond(_type, 'NOTEQ', 'custom') && this.$verify.testCond(_type, 'ISNOTNULL', '')) {
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



        if (Object.is(name, '') || Object.is(name, 'formitem10')) {
            let ret = false;
            const _formitem10 = this.data.formitem10;
            if (this.$verify.testCond(_formitem10, 'NOTEQ', 'on')) {
                ret = true;
            }
            this.detailsModel.begin.setDisabled(!ret);
        }

        if (Object.is(name, '') || Object.is(name, 'formitem10')) {
            let ret = false;
            const _formitem10 = this.data.formitem10;
            if (this.$verify.testCond(_formitem10, 'NOTEQ', 'on')) {
                ret = true;
            }
            this.detailsModel.end.setDisabled(!ret);
        }




    }

    /**
     * 表单值变化
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof Main
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
     * @memberof Main
     */
    private onFormLoad(data: any = {},action:string): void {
        if(Object.is(action,"save") || Object.is(action,"autoSave"))
        // 更新context的实体主键
        if(data.todo){
            Object.assign(this.context,{todo:data.todo})
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
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Main
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
     * @memberof Main
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Main
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
     * @memberof @memberof Main
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     *打印
     *@memberof @memberof Main
     */
    protected print(){
        let _this:any = this;
        _this.$print({id:'form',popTitle:'主编辑表单'});
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
     */
    private load(opt: any = {}): void {
        if(!this.loadAction){
            this.$Notice.error({ title: '错误', desc: 'TodoTodoCreateView视图表单loadAction参数未配置' });
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
     * @memberof Main
     */
    protected loadDraft(opt: any = {}): void {
        if(!this.loaddraftAction){
            this.$Notice.error({ title: '错误', desc: 'TodoTodoCreateView视图表单loaddraftAction参数未配置' });
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
            if(data.todo){
                Object.assign(this.context,{todo:data.todo})
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
     * @memberof Main
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
            this.$Notice.error({ title: '错误', desc: 'TodoTodoCreateView视图表单'+actionName+'参数未配置' });
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
     * @memberof Main
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
                this.$Notice.error({ title: '错误', desc: 'TodoTodoCreateView视图表单'+actionName+'参数未配置' });
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
                this.$Notice.error({ title: '错误', desc: 'TodoTodoCreateView视图表单removeAction参数未配置' });
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
     * @memberof Main
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
     * @memberof Main
     */
    protected async wfsubmit(data: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
        if(!this.WFSubmitAction){
            this.$Notice.error({ title: '错误', desc: 'TodoTodoCreateView视图表单WFSubmitAction参数未配置' });
            return;
        }
        const _this: any = this;
        const arg: any = data[0];
        Object.assign(arg,{viewparams:this.viewparams});
        if (!arg.todo || Object.is(arg.todo, '')) {
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
     * @memberof Main
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
     * @memberof Main
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @param {any[]} args
     * @memberof Main
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
     * @memberof Main
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
     * @memberof Main
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
    * @memberof Main
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
     * @memberof Main
     */
    public createDefault(){                    
        if (this.data.hasOwnProperty('status')) {
            this.data['status'] = 'wait';
        }
    }

    
}
</script>

<style lang='less'>
@import './main-form.less';
</style>