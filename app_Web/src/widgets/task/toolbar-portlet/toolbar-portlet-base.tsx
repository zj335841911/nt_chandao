import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import ToolbarService from './toolbar-portlet-service';
import TaskUIService from '@/uiservice/task/task-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet2部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {ToolbarPortletBase}
 */
export class ToolbarPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ToolbarPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {ToolbarService}
     * @memberof ToolbarPortletBase
     */
    public service: ToolbarService = new ToolbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof ToolbarPortletBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ToolbarPortletBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ToolbarPortletBase
     */
    protected appDeLogicName: string = '任务';

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof ToolbarBase
     */  
    public appUIService:TaskUIService = new TaskUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_udf09ee0_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_uc67fdb2_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_NewSubTaskDash(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ueb80090_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_AssignTaskDash(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u2697b90_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_ForwardDash(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u0c66df9_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_StartTaskDash(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ueb9fc78_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_WorkHours(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u8c69bef_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_PauseTaskDash(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u4b8cbc4_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_ActivationDash(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u9a8a4de_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_DoneTaskDash(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ua6eebe5_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_CancelTaskDash(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u6b21184_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_MainEditDash(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u532db70_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_CloseTaskDash(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_uf7c7e04_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_delete(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 返回
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof TaskMainDashboardViewBase
     */
    public Exit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        this.closeView(args);
        if(window.parent){
            window.parent.postMessage([{ ...args }],'*');
        }
    }


    /**
     * 长度
     *
     * @type {number}
     * @memberof Toolbar
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof Toolbar
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof ToolbarBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet2_udf09ee0_click",
        text: "返回",
        iconcls: "fa fa-sign-out",
        icon: "",
        noprivdisplaymode: 2,
        actiontarget:'',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_uc67fdb2_click",
        text: "子任务",
        iconcls: "iconfont studio-icon-subnets",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TASK_SUBTASKS_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_ueb80090_click",
        text: "指派",
        iconcls: null,
        icon: null,
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TASK_ASSIGN_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u2697b90_click",
        text: "转交",
        iconcls: null,
        icon: null,
        noprivdisplaymode: 2,
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u0c66df9_click",
        text: "开始",
        iconcls: "fa fa-play-circle-o",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TASK_START_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_ueb9fc78_click",
        text: "工时",
        iconcls: null,
        icon: null,
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__CUTINTBEHAVIOR',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u8c69bef_click",
        text: "暂停",
        iconcls: "fa fa-circle-o",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TASK_PAUSE_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u4b8cbc4_click",
        text: "激活",
        iconcls: null,
        icon: null,
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TASK_ACTIVATION_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u9a8a4de_click",
        text: "完成",
        iconcls: "fa fa-check-square-o",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TASK_COMPLETE_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_ua6eebe5_click",
        text: "取消",
        iconcls: "fa fa-ban",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TASK_CANCEL_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u6b21184_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TASK_EDIT_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u532db70_click",
        text: "关闭",
        iconcls: "fa fa-power-off",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TASK_CLOSE_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_uf7c7e04_click",
        text: "删除",
        iconcls: null,
        icon: null,
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__CUTINTBEHAVIOR',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof ToolbarBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet2_udf09ee0_click')){
            this.dashboard_sysportlet2_udf09ee0_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_uc67fdb2_click')){
            this.dashboard_sysportlet2_uc67fdb2_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ueb80090_click')){
            this.dashboard_sysportlet2_ueb80090_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u2697b90_click')){
            this.dashboard_sysportlet2_u2697b90_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u0c66df9_click')){
            this.dashboard_sysportlet2_u0c66df9_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ueb9fc78_click')){
            this.dashboard_sysportlet2_ueb9fc78_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u8c69bef_click')){
            this.dashboard_sysportlet2_u8c69bef_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u4b8cbc4_click')){
            this.dashboard_sysportlet2_u4b8cbc4_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u9a8a4de_click')){
            this.dashboard_sysportlet2_u9a8a4de_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ua6eebe5_click')){
            this.dashboard_sysportlet2_ua6eebe5_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u6b21184_click')){
            this.dashboard_sysportlet2_u6b21184_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u532db70_click')){
            this.dashboard_sysportlet2_u532db70_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_uf7c7e04_click')){
            this.dashboard_sysportlet2_uf7c7e04_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ToolbarBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ToolbarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ToolbarBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof ToolbarBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return 'auto';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ToolbarBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ToolbarBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((_name: string) => {
                    this.viewState.next({ tag: _name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ToolbarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ToolbarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
