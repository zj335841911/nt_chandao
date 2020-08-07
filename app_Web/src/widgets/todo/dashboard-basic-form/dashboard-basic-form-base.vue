<template>
    <i-form :model="this.data" class='app-form info-form-mode' ref='form'  id='form' style="">
    <input style="display:none;" />
    <row >
            
<i-col v-show="detailsModel.grouppanel1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.todo.dashboardbasic_form.details.grouppanel1')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.pri.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='pri' :itemRules="this.rules.pri" class='' :caption="$t('entities.todo.dashboardbasic_form.details.pri')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.pri.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='pri'
:value="data.pri" tag='Pri' codelistType='STATIC' style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.status.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='status' :itemRules="this.rules.status" class='' :caption="$t('entities.todo.dashboardbasic_form.details.status')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.status.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='status'
:value="data.status" tag='TypeAll' codelistType='STATIC' style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.type.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='type' :itemRules="this.rules.type" class='' :caption="$t('entities.todo.dashboardbasic_form.details.type')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.type.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='type'
:value="data.type" tag='Type' codelistType='STATIC' style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.account.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='account' :itemRules="this.rules.account" class='' :caption="$t('entities.todo.dashboardbasic_form.details.account')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.account.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='account'
:value="data.account" tag='UserRealName' codelistType='DYNAMIC' renderMode="STR" valueSeparator="," textSeparator="," style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.date.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='date' :itemRules="this.rules.date" class='' :caption="$t('entities.todo.dashboardbasic_form.details.date')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.date.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='date'
:value="data.date" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.begin.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 7, offset: 0 }">
    <app-form-item name='begin' :itemRules="this.rules.begin" class='' :caption="$t('entities.todo.dashboardbasic_form.details.begin')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.begin.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='begin'
:value="data.begin" tag='BeginendDropList' codelistType='STATIC' style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.end.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 4, offset: 0 }">
    <app-form-item name='end' :itemRules="this.rules.end" class='' :caption="$t('entities.todo.dashboardbasic_form.details.end')" uiStyle="DEFAULT" :labelWidth="26" :isShowCaption="true" :error="detailsModel.end.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='end'
:value="data.end" tag='BeginendDropList' codelistType='STATIC' style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.assignedto.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='assignedto' :itemRules="this.rules.assignedto" class='' :caption="$t('entities.todo.dashboardbasic_form.details.assignedto')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.assignedto.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='assignedto'
:value="data.assignedto" tag='UserRealName' codelistType='DYNAMIC' renderMode="STR" valueSeparator="," textSeparator="," style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.assigneddate.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='assigneddate' :itemRules="this.rules.assigneddate" class='' :caption="$t('entities.todo.dashboardbasic_form.details.assigneddate')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.assigneddate.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='assigneddate'
:value="data.assigneddate" style=""></app-span>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel2.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.todo.dashboardbasic_form.details.grouppanel2')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.date1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 9, offset: 0 }">
    <app-form-item name='date1' :itemRules="this.rules.date1" class='' :caption="$t('entities.todo.dashboardbasic_form.details.date1')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.date1.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='date1'
:value="data.date1" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.config_end.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 5, offset: 0 }">
    <app-form-item name='config_end' :itemRules="this.rules.config_end" class='' :caption="$t('entities.todo.dashboardbasic_form.details.config_end')" uiStyle="DEFAULT" :labelWidth="25" :isShowCaption="true" :error="detailsModel.config_end.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='config_end'
:value="data.config_end" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.config_day.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='config_day' :itemRules="this.rules.config_day" class='' :caption="$t('entities.todo.dashboardbasic_form.details.config_day')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.config_day.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='config_day'
:value="data.config_day" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.config_week.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='config_week' :itemRules="this.rules.config_week" class='' :caption="$t('entities.todo.dashboardbasic_form.details.config_week')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.config_week.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='config_week'
:value="data.config_week" tag='CodeList46' codelistType='STATIC' style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.config_month.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='config_month' :itemRules="this.rules.config_month" class='' :caption="$t('entities.todo.dashboardbasic_form.details.config_month')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.config_month.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='config_month'
:value="data.config_month" tag='CodeList47' codelistType='STATIC' style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.config_beforedays.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='config_beforedays' :itemRules="this.rules.config_beforedays" class='' :caption="$t('entities.todo.dashboardbasic_form.details.config_beforedays')" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :error="detailsModel.config_beforedays.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='config_beforedays'
:value="data.config_beforedays" style=""></app-span>
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
import DashboardBasicService from './dashboard-basic-form-service';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
    components: {
      
    }
})
export default class DashboardBasicBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof DashboardBasic
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof DashboardBasic
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof DashboardBasic
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof DashboardBasic
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof DashboardBasic
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof DashboardBasic
     */
    protected getControlType(): string {
        return 'FORM'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DashboardBasic
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {DashboardBasicService}
     * @memberof DashboardBasic
     */
    protected service: DashboardBasicService = new DashboardBasicService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof DashboardBasic
     */
    protected appEntityService: TodoService = new TodoService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof DashboardBasic
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof DashboardBasic
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof DashboardBasic
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof DashboardBasic
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof DashboardBasic
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof DashboardBasic
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof DashboardBasic
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof DashboardBasic
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof DashboardBasic
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof DashboardBasic
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof DashboardBasic
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof DashboardBasic
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof DashboardBasic
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof DashboardBasic
     */
    protected formState: Subject<any> = new Subject();

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof DashboardBasic
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof DashboardBasic
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof DashboardBasic
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof DashboardBasic
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DashboardBasic
     */
    protected data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        pri: null,
        status: null,
        type: null,
        account: null,
        date: null,
        begin: null,
        end: null,
        assignedto: null,
        assigneddate: null,
        config_type: null,
        date1: null,
        config_end: null,
        config_day: null,
        config_week: null,
        config_month: null,
        config_beforedays: null,
        id: null,
        todo:null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof DashboardBasic
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof DashboardBasic
      */
    protected drcounter: number = 0;

    /**
      * 需要等待关系界面保存时，第一次调用save参数的备份
      *
      * @type {number}
      * @memberof DashboardBasic
      */
    protected drsaveopt: any = {};

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof DashboardBasic
      */
    protected saveState:any ;

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof DashboardBasic
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
        pri: [
            { type: 'string', message: '优先级 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '优先级 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '优先级 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '优先级 值不能为空', trigger: 'blur' },
        ],
        status: [
            { type: 'string', message: '状态 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '状态 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '状态 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '状态 值不能为空', trigger: 'blur' },
        ],
        type: [
            { type: 'string', message: '类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '类型 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '类型 值不能为空', trigger: 'blur' },
        ],
        account: [
            { type: 'string', message: '所有者 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '所有者 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '所有者 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所有者 值不能为空', trigger: 'blur' },
        ],
        date: [
            { type: 'string', message: '日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '日期 值不能为空', trigger: 'blur' },
        ],
        begin: [
            { type: 'string', message: '起止时间 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '起止时间 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '起止时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '起止时间 值不能为空', trigger: 'blur' },
        ],
        end: [
            { type: 'string', message: '~ 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '~ 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '~ 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '~ 值不能为空', trigger: 'blur' },
        ],
        assignedto: [
            { type: 'string', message: '指派给 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '指派给 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'blur' },
        ],
        assigneddate: [
            { type: 'string', message: '指派日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '指派日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '指派日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '指派日期 值不能为空', trigger: 'blur' },
        ],
        config_type: [
            { type: 'string', message: '周期类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '周期类型 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '周期类型 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '周期类型 值不能为空', trigger: 'blur' },
        ],
        date1: [
            { type: 'string', message: '起止时间 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '起止时间 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '起止时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '起止时间 值不能为空', trigger: 'blur' },
        ],
        config_end: [
            { type: 'string', message: '~ 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '~ 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '~ 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '~ 值不能为空', trigger: 'blur' },
        ],
        config_day: [
            { type: 'number', message: '周期设置 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '周期设置 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '周期设置 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '周期设置 值不能为空', trigger: 'blur' },
        ],
        config_week: [
            { type: 'string', message: '周期设置 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '周期设置 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '周期设置 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '周期设置 值不能为空', trigger: 'blur' },
        ],
        config_month: [
            { type: 'string', message: '周期设置 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '周期设置 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '周期设置 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '周期设置 值不能为空', trigger: 'blur' },
        ],
        config_beforedays: [
            { type: 'number', message: '提前 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '提前 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '提前 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '提前 值不能为空', trigger: 'blur' },
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
     * @memberof DashboardBasic
     */
    protected detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.todo.dashboardbasic_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '周期', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: false, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.todo.dashboardbasic_form', extractMode: 'ITEM', details: [] } })
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
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        status: new FormItemModel({ caption: '状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: '类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        account: new FormItemModel({ caption: '所有者', detailType: 'FORMITEM', name: 'account', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        date: new FormItemModel({ caption: '日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        begin: new FormItemModel({ caption: '起止时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        end: new FormItemModel({ caption: '~', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assignedto: new FormItemModel({ caption: '指派给', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assigneddate: new FormItemModel({ caption: '指派日期', detailType: 'FORMITEM', name: 'assigneddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        config_type: new FormItemModel({ caption: '周期类型', detailType: 'FORMITEM', name: 'config_type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        date1: new FormItemModel({ caption: '起止时间', detailType: 'FORMITEM', name: 'date1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        config_end: new FormItemModel({ caption: '~', detailType: 'FORMITEM', name: 'config_end', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        config_day: new FormItemModel({ caption: '周期设置', detailType: 'FORMITEM', name: 'config_day', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        config_week: new FormItemModel({ caption: '周期设置', detailType: 'FORMITEM', name: 'config_week', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        config_month: new FormItemModel({ caption: '周期设置', detailType: 'FORMITEM', name: 'config_month', visible: false, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        config_beforedays: new FormItemModel({ caption: '提前', detailType: 'FORMITEM', name: 'config_beforedays', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
    };

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 pri 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    @Watch('data.status')
    onStatusChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'status', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
     */
    @Watch('data.type')
    onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 account 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
     */
    @Watch('data.account')
    onAccountChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'account', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 date 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    @Watch('data.end')
    onEndChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'end', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
     */
    @Watch('data.assignedto')
    onAssignedtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assignedto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assigneddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
     */
    @Watch('data.assigneddate')
    onAssigneddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assigneddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 config_type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
     */
    @Watch('data.config_type')
    onConfig_typeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'config_type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 date1 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
     */
    @Watch('data.date1')
    onDate1Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'date1', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 config_end 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
     */
    @Watch('data.config_end')
    onConfig_endChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'config_end', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 config_day 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
     */
    @Watch('data.config_day')
    onConfig_dayChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'config_day', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 config_week 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
     */
    @Watch('data.config_week')
    onConfig_weekChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'config_week', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 config_month 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
     */
    @Watch('data.config_month')
    onConfig_monthChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'config_month', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 config_beforedays 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
     */
    @Watch('data.config_beforedays')
    onConfig_beforedaysChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'config_beforedays', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    private formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                

        if (Object.is(name, '') || Object.is(name, 'type')) {
            let ret = false;
            const _type = this.data.type;
            if (this.$verify.testCond(_type, 'EQ', 'cycle')) {
                ret = true;
            }
            this.detailsModel.grouppanel2.setVisible(ret);
        }





















        if (Object.is(name, '') || Object.is(name, 'config_type')) {
            let ret = false;
            const _config_type = this.data.config_type;
            if (this.$verify.testCond(_config_type, 'EQ', 'day')) {
                ret = true;
            }
            this.detailsModel.config_day.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'config_type')) {
            let ret = false;
            const _config_type = this.data.config_type;
            if (this.$verify.testCond(_config_type, 'EQ', 'week')) {
                ret = true;
            }
            this.detailsModel.config_week.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'config_type')) {
            let ret = false;
            const _config_type = this.data.config_type;
            if (this.$verify.testCond(_config_type, 'EQ', 'month')) {
                ret = true;
            }
            this.detailsModel.config_month.setVisible(ret);
        }



    }

    /**
     * 表单值变化
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof DashboardBasic
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
     * @memberof @memberof DashboardBasic
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     *打印
     *@memberof @memberof DashboardBasic
     */
    protected print(){
        let _this:any = this;
        _this.$print({id:'form',popTitle:'看板基本信息'});
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    private load(opt: any = {}): void {
        if(!this.loadAction){
            this.$Notice.error({ title: '错误', desc: 'TodoBaseEditView9视图表单loadAction参数未配置' });
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
     * @memberof DashboardBasic
     */
    protected loadDraft(opt: any = {}): void {
        if(!this.loaddraftAction){
            this.$Notice.error({ title: '错误', desc: 'TodoBaseEditView9视图表单loaddraftAction参数未配置' });
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
     * @memberof DashboardBasic
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
            this.$Notice.error({ title: '错误', desc: 'TodoBaseEditView9视图表单'+actionName+'参数未配置' });
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
     * @memberof DashboardBasic
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
                this.$Notice.error({ title: '错误', desc: 'TodoBaseEditView9视图表单'+actionName+'参数未配置' });
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
                this.$Notice.error({ title: '错误', desc: 'TodoBaseEditView9视图表单removeAction参数未配置' });
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    protected async wfsubmit(data: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
        if(!this.WFSubmitAction){
            this.$Notice.error({ title: '错误', desc: 'TodoBaseEditView9视图表单WFSubmitAction参数未配置' });
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @param {any[]} args
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
     * @memberof DashboardBasic
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
    * @memberof DashboardBasic
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
     * @memberof DashboardBasic
     */
    public createDefault(){                    
    }

    
}
</script>

<style lang='less'>
@import './dashboard-basic-form.less';
</style>