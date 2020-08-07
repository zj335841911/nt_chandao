<template>
    <i-form :model="this.data" class='app-form info-form-mode' ref='form'  id='form' style="">
    <input style="display:none;" />
    <row >
            
<i-col v-show="detailsModel.group1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.group1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.project.dashboardinfo_form.details.group1')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.id.visible" :style="{'width':'35px !important'}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='id' :itemRules="this.rules.id" class='project-id' :caption="$t('entities.project.dashboardinfo_form.details.id')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.id.error" :isEmptyCaption="false" labelPos="NONE">
    <app-span   name='id'
:value="data.id" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.code.visible" :style="{}"  :lg="{ span: 6, offset: 0 }" :xl="{ span: 9, offset: 0 }">
    <app-form-item name='code' :itemRules="this.rules.code" class='project-code' :caption="$t('entities.project.dashboardinfo_form.details.code')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.code.error" :isEmptyCaption="false" labelPos="NONE">
    <app-span   name='code'
:value="data.code" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.name.visible" :style="{}"  :lg="{ span: 16, offset: 0 }" :xl="{ span: 13, offset: 0 }">
    <app-form-item name='name' :itemRules="this.rules.name" class='project-name' :caption="$t('entities.project.dashboardinfo_form.details.name')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.name.error" :isEmptyCaption="false" labelPos="NONE">
    <app-span   name='name'
:value="data.name" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.desc.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='desc' :itemRules="this.rules.desc" class='' :caption="$t('entities.project.dashboardinfo_form.details.desc')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.desc.error" :isEmptyCaption="false" labelPos="NONE">
    <app-rich-text-editor :formState="formState" :value="data.desc" @change="(val) =>{this.data.desc =val}" :disabled="detailsModel.desc.disabled"  name="desc" style=""></app-rich-text-editor>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.type.visible" :style="{}"  :lg="{ span: 6, offset: 0 }" :xl="{ span: 6, offset: 0 }">
    <app-form-item name='type' :itemRules="this.rules.type" class='project-type' :caption="$t('entities.project.dashboardinfo_form.details.type')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.type.error" :isEmptyCaption="false" labelPos="NONE">
    <app-span   name='type'
:value="data.type" tag='Project__type' codelistType='STATIC' style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.status.visible" :style="{}"  :lg="{ span: 6, offset: 0 }" :xl="{ span: 6, offset: 0 }">
    <app-form-item name='status' :itemRules="this.rules.status" class='project-status' :caption="$t('entities.project.dashboardinfo_form.details.status')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.status.error" :isEmptyCaption="false" labelPos="NONE">
    <app-span   name='status'
:value="data.status" tag='Project__status' codelistType='STATIC' style=""></app-span>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel6.visible" :style="{'height': '220px !important',}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel6.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.project.dashboardinfo_form.details.grouppanel6')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.druipart1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-druipart
    
    :formState="formState"
    paramItem='project' 
    :parentdata='{"srfparentdename":"ZT_PROJECT","SRFPARENTTYPE":"CUSTOM"}'
    :parameters="[
    ]"
    :context="context"
    :viewparams="viewparams"
    parameterName='project'
    parentName="Project"  
    refviewtype='DEGRIDVIEW9' 
    refreshitems='' 
    :ignorefieldvaluechange="ignorefieldvaluechange"
    viewname='product-project-grid-view9' 
    :data="JSON.stringify(this.data)" 
    @drdatasaved="drdatasaved($event)"
    style=";overflow: auto;">
</app-form-druipart>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel7.visible" :style="{'height': '220px !important',}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel7.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.project.dashboardinfo_form.details.grouppanel7')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.druipart2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-druipart
    
    :formState="formState"
    paramItem='project' 
    :parentdata='{"srfparentdename":"ZT_PROJECT","SRFPARENTTYPE":"CUSTOM"}'
    :parameters="[
        { pathName: 'products', parameterName: 'product' },
    ]"
    :context="context"
    :viewparams="viewparams"
    parameterName='project'
    parentName="Project"  
    refviewtype='DEGRIDVIEW9' 
    refreshitems='' 
    :ignorefieldvaluechange="ignorefieldvaluechange"
    viewname='product-plan-project-grid-view9' 
    :data="JSON.stringify(this.data)" 
    @drdatasaved="drdatasaved($event)"
    style=";overflow: auto;">
</app-form-druipart>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.project.dashboardinfo_form.details.grouppanel1')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.grouppanel2.visible" :style="{}"  :sm="{ span: 12, offset: 0 }" :md="{ span: 12, offset: 0 }" :lg="{ span: 12, offset: 0 }" :xl="{ span: 12, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel2.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.project.dashboardinfo_form.details.grouppanel2')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.begin.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='begin' :itemRules="this.rules.begin" class='' :caption="$t('entities.project.dashboardinfo_form.details.begin')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.begin.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='begin'
:value="data.begin" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.end.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='end' :itemRules="this.rules.end" class='' :caption="$t('entities.project.dashboardinfo_form.details.end')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.end.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='end'
:value="data.end" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.days.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='days' :itemRules="this.rules.days" class='' :caption="$t('entities.project.dashboardinfo_form.details.days')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.days.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='days'
:value="data.days" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.totalhours.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='totalhours' :itemRules="this.rules.totalhours" class='' :caption="$t('entities.project.dashboardinfo_form.details.totalhours')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.totalhours.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='totalhours'
:value="data.totalhours" style=""></app-span>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel3.visible" :style="{}"  :sm="{ span: 12, offset: 0 }" :md="{ span: 12, offset: 0 }" :lg="{ span: 12, offset: 0 }" :xl="{ span: 12, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel3.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.project.dashboardinfo_form.details.grouppanel3')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.formitem.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='formitem' :itemRules="this.rules.formitem" class='' :caption="$t('entities.project.dashboardinfo_form.details.formitem')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.formitem.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='formitem'
:value="data.formitem" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.formitem1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='formitem1' :itemRules="this.rules.formitem1" class='' :caption="$t('entities.project.dashboardinfo_form.details.formitem1')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.formitem1.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='formitem1'
:value="data.formitem1" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.formitem2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='formitem2' :itemRules="this.rules.formitem2" class='' :caption="$t('entities.project.dashboardinfo_form.details.formitem2')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.formitem2.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='formitem2'
:value="data.formitem2" style=""></app-span>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel4.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel4.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.project.dashboardinfo_form.details.grouppanel4')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.formitem3.visible" :style="{}"  :lg="{ span: 8, offset: 0 }" :xl="{ span: 8, offset: 0 }">
    <app-form-item name='formitem3' :itemRules="this.rules.formitem3" class='' :caption="$t('entities.project.dashboardinfo_form.details.formitem3')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.formitem3.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='formitem3'
:value="data.formitem3" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.formitem4.visible" :style="{}"  :lg="{ span: 8, offset: 0 }" :xl="{ span: 8, offset: 0 }">
    <app-form-item name='formitem4' :itemRules="this.rules.formitem4" class='' :caption="$t('entities.project.dashboardinfo_form.details.formitem4')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.formitem4.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='formitem4'
:value="data.formitem4" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.formitem5.visible" :style="{}"  :lg="{ span: 8, offset: 0 }" :xl="{ span: 8, offset: 0 }">
    <app-form-item name='formitem5' :itemRules="this.rules.formitem5" class='' :caption="$t('entities.project.dashboardinfo_form.details.formitem5')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.formitem5.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='formitem5'
:value="data.formitem5" style=""></app-span>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel5.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel5.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.project.dashboardinfo_form.details.grouppanel5')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.acl.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='acl' :itemRules="this.rules.acl" class='' :caption="$t('entities.project.dashboardinfo_form.details.acl')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.acl.error" :isEmptyCaption="false" labelPos="NONE">
    <app-span   name='acl'
:value="data.acl" tag='Project__acl' codelistType='STATIC' style=""></app-span>
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
import ProjectService from '@/service/project/project-service';
import DashBoardInfoService from './dash-board-info-form-service';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
    components: {
      
    }
})
export default class DashBoardInfoBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof DashBoardInfo
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof DashBoardInfo
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof DashBoardInfo
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof DashBoardInfo
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof DashBoardInfo
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof DashBoardInfo
     */
    protected getControlType(): string {
        return 'FORM'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DashBoardInfo
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {DashBoardInfoService}
     * @memberof DashBoardInfo
     */
    protected service: DashBoardInfoService = new DashBoardInfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof DashBoardInfo
     */
    protected appEntityService: ProjectService = new ProjectService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof DashBoardInfo
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof DashBoardInfo
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof DashBoardInfo
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof DashBoardInfo
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof DashBoardInfo
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof DashBoardInfo
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof DashBoardInfo
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof DashBoardInfo
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof DashBoardInfo
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof DashBoardInfo
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof DashBoardInfo
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof DashBoardInfo
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof DashBoardInfo
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof DashBoardInfo
     */
    protected formState: Subject<any> = new Subject();

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof DashBoardInfo
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof DashBoardInfo
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof DashBoardInfo
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof DashBoardInfo
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DashBoardInfo
     */
    protected data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        id: null,
        code: null,
        name: null,
        desc: null,
        type: null,
        status: null,
        begin: null,
        end: null,
        days: null,
        totalhours: null,
        formitem: null,
        formitem1: null,
        formitem2: null,
        formitem3: null,
        formitem4: null,
        formitem5: null,
        acl: null,
        project:null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof DashBoardInfo
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof DashBoardInfo
      */
    protected drcounter: number = 0;

    /**
      * 需要等待关系界面保存时，第一次调用save参数的备份
      *
      * @type {number}
      * @memberof DashBoardInfo
      */
    protected drsaveopt: any = {};

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof DashBoardInfo
      */
    protected saveState:any ;

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DashBoardInfo
     */
    protected rules: any = {
        srforikey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { type: 'number', message: '项目编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '项目编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { type: 'string', message: '项目名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目名称 值不能为空', trigger: 'blur' },
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
        id: [
            { type: 'number', message: '项目编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '项目编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '项目编号 值不能为空', trigger: 'blur' },
        ],
        code: [
            { type: 'string', message: '项目代号 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目代号 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目代号 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目代号 值不能为空', trigger: 'blur' },
        ],
        name: [
            { type: 'string', message: '项目名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目名称 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { type: 'string', message: '项目描述 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目描述 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目描述 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目描述 值不能为空', trigger: 'blur' },
        ],
        type: [
            { type: 'string', message: '项目类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目类型 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目类型 值不能为空', trigger: 'blur' },
        ],
        status: [
            { type: 'string', message: '项目状态 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '项目状态 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '项目状态 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '项目状态 值不能为空', trigger: 'blur' },
        ],
        begin: [
            { type: 'string', message: '开始时间 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '开始时间 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '开始时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '开始时间 值不能为空', trigger: 'blur' },
        ],
        end: [
            { type: 'string', message: '结束日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '结束日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '结束日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '结束日期 值不能为空', trigger: 'blur' },
        ],
        days: [
            { type: 'number', message: '可用工作日 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '可用工作日 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '可用工作日 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '可用工作日 值不能为空', trigger: 'blur' },
        ],
        totalhours: [
            { type: 'number', message: '可用工时 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '可用工时 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '可用工时 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '可用工时 值不能为空', trigger: 'blur' },
        ],
        formitem: [
            { type: 'number', message: '预计 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '预计 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '预计 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '预计 值不能为空', trigger: 'blur' },
        ],
        formitem1: [
            { type: 'number', message: '消耗 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '消耗 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '消耗 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '消耗 值不能为空', trigger: 'blur' },
        ],
        formitem2: [
            { type: 'number', message: '剩余 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '剩余 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '剩余 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '剩余 值不能为空', trigger: 'blur' },
        ],
        formitem3: [
            { type: 'number', message: '需求 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '需求 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '需求 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '需求 值不能为空', trigger: 'blur' },
        ],
        formitem4: [
            { type: 'number', message: '任务 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '任务 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '任务 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '任务 值不能为空', trigger: 'blur' },
        ],
        formitem5: [
            { type: 'number', message: 'Bug 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: 'Bug 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: 'Bug 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'Bug 值不能为空', trigger: 'blur' },
        ],
        acl: [
            { type: 'string', message: '访问控制 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '访问控制 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '访问控制 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '访问控制 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DashBoardInfo
     */
    protected detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: 'project基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this })
, 
        grouppanel6: new FormGroupPanelModel({ caption: '关联产品', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: true, isShowCaption: true, form: this })
, 
        grouppanel7: new FormGroupPanelModel({ caption: '关联计划', detailType: 'GROUPPANEL', name: 'grouppanel7', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '工时统计', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel4: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel5: new FormGroupPanelModel({ caption: '访问控制', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.project.dashboardinfo_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '项目编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '项目名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '项目编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 0 })
, 
        code: new FormItemModel({ caption: '项目代号', detailType: 'FORMITEM', name: 'code', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        name: new FormItemModel({ caption: '项目名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        desc: new FormItemModel({ caption: '项目描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: '项目类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        status: new FormItemModel({ caption: '项目状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        begin: new FormItemModel({ caption: '开始时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        end: new FormItemModel({ caption: '结束日期', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        days: new FormItemModel({ caption: '可用工作日', detailType: 'FORMITEM', name: 'days', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        totalhours: new FormItemModel({ caption: '可用工时', detailType: 'FORMITEM', name: 'totalhours', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem: new FormItemModel({ caption: '预计', detailType: 'FORMITEM', name: 'formitem', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem1: new FormItemModel({ caption: '消耗', detailType: 'FORMITEM', name: 'formitem1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem2: new FormItemModel({ caption: '剩余', detailType: 'FORMITEM', name: 'formitem2', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem3: new FormItemModel({ caption: '需求', detailType: 'FORMITEM', name: 'formitem3', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem4: new FormItemModel({ caption: '任务', detailType: 'FORMITEM', name: 'formitem4', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitem5: new FormItemModel({ caption: 'Bug', detailType: 'FORMITEM', name: 'formitem5', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        acl: new FormItemModel({ caption: '访问控制', detailType: 'FORMITEM', name: 'acl', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.id')
    onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 code 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.code')
    onCodeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'code', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 name 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.name')
    onNameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'name', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 desc 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.desc')
    onDescChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'desc', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.type')
    onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 status 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    @Watch('data.end')
    onEndChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'end', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 days 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.days')
    onDaysChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'days', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 totalhours 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.totalhours')
    onTotalhoursChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'totalhours', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.formitem')
    onFormitemChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem1 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.formitem1')
    onFormitem1Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem1', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem2 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.formitem2')
    onFormitem2Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem2', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitem3 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    @Watch('data.formitem5')
    onFormitem5Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitem5', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 acl 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashBoardInfo
     */
    @Watch('data.acl')
    onAclChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'acl', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    private formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                



































    }

    /**
     * 表单值变化
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    private onFormLoad(data: any = {},action:string): void {
        if(Object.is(action,"save") || Object.is(action,"autoSave"))
        // 更新context的实体主键
        if(data.project){
            Object.assign(this.context,{project:data.project})
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof DashBoardInfo
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
     * @memberof @memberof DashBoardInfo
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     *打印
     *@memberof @memberof DashBoardInfo
     */
    protected print(){
        let _this:any = this;
        _this.$print({id:'form',popTitle:'看板信息表单'});
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    private load(opt: any = {}): void {
        if(!this.loadAction){
            this.$Notice.error({ title: '错误', desc: 'ProjectDashboardInfoView视图表单loadAction参数未配置' });
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
     * @memberof DashBoardInfo
     */
    protected loadDraft(opt: any = {}): void {
        if(!this.loaddraftAction){
            this.$Notice.error({ title: '错误', desc: 'ProjectDashboardInfoView视图表单loaddraftAction参数未配置' });
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
            if(data.project){
                Object.assign(this.context,{project:data.project})
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
     * @memberof DashBoardInfo
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
            this.$Notice.error({ title: '错误', desc: 'ProjectDashboardInfoView视图表单'+actionName+'参数未配置' });
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
     * @memberof DashBoardInfo
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
                this.$Notice.error({ title: '错误', desc: 'ProjectDashboardInfoView视图表单'+actionName+'参数未配置' });
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
                this.$Notice.error({ title: '错误', desc: 'ProjectDashboardInfoView视图表单removeAction参数未配置' });
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    protected async wfsubmit(data: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
        if(!this.WFSubmitAction){
            this.$Notice.error({ title: '错误', desc: 'ProjectDashboardInfoView视图表单WFSubmitAction参数未配置' });
            return;
        }
        const _this: any = this;
        const arg: any = data[0];
        Object.assign(arg,{viewparams:this.viewparams});
        if (!arg.project || Object.is(arg.project, '')) {
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @param {any[]} args
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
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
    * @memberof DashBoardInfo
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
     * @memberof DashBoardInfo
     */
    public createDefault(){                    
    }

    
}
</script>

<style lang='less'>
@import './dash-board-info-form.less';
</style>