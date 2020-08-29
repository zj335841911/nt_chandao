import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import TodoDashboardActionsService from './todo-dashboard-actions-portlet-service';
import TodoUIService from '@/uiservice/todo/todo-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet2部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TodoDashboardActionsPortletBase}
 */
export class TodoDashboardActionsPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TodoDashboardActionsPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {TodoDashboardActionsService}
     * @memberof TodoDashboardActionsPortletBase
     */
    public service: TodoDashboardActionsService = new TodoDashboardActionsService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof TodoDashboardActionsPortletBase
     */
    public appEntityService: TodoService = new TodoService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TodoDashboardActionsPortletBase
     */
    protected appDeName: string = 'todo';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TodoDashboardActionsPortletBase
     */
    protected appDeLogicName: string = '待办事宜表';

    /**
     * 界面UI服务对象
     *
     * @type {TodoUIService}
     * @memberof TodoDashboardActionsBase
     */  
    public appUIService:TodoUIService = new TodoUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u6e9117d_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ua4b1799_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_edit1Cz(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ucdbdc4c_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_deleteCz(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u1453337_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_assignToCz(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ud54a71d_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_finishCz(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u04ff79f_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_activateCz(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ud97be75_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_closeCz(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u1e6202a_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_toBug(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u5b0a56a_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TodoUIService  = new TodoUIService();
        curUIService.Todo_toTask(datas,contextJO, paramJO,  $event, xData,this,"Todo");
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
     * @memberof TodoDashboardViewBase
     */
    public Exit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        this.closeView(args);
        if(window.parent){
            window.parent.postMessage([{ ...args }],'*');
        }
    }


    /**
     * 刷新
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof TodoDashboardViewBase
     */
    public Refresh(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (xData && xData.refresh && xData.refresh instanceof Function) {
            xData.refresh(args);
        } else if (_this.refresh && _this.refresh instanceof Function) {
            _this.refresh(args);
        }
    }

    /**
     * 长度
     *
     * @type {number}
     * @memberof TodoDashboardActions
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof TodoDashboardActions
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof TodoDashboardActionsBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet2_u6e9117d_click",
        text: "返回",
        iconcls: "fa fa-sign-out",
        icon: "",
        noprivdisplaymode: 2,
        actiontarget:'',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_ua4b1799_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'UPDATE',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_ucdbdc4c_click",
        text: "删除",
        iconcls: "fa fa-remove",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'DELETE',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u1453337_click",
        text: "指派",
        iconcls: "fa fa-hand-o-right",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'ASSIGNTO',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_ud54a71d_click",
        text: "完成",
        iconcls: "fa fa-check-square-o",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'FINISH',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u04ff79f_click",
        text: "激活",
        iconcls: "fa fa-magic",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'ACTIVATE',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_ud97be75_click",
        text: "关闭",
        iconcls: "fa fa-close",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'CLOSE',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u1e6202a_click",
        text: "转Bug",
        iconcls: "fa fa-bug",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'TOBUG',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u5b0a56a_click",
        text: "转任务",
        iconcls: "fa fa-tasks",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'TOTASK',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof TodoDashboardActionsBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet2_u6e9117d_click')){
            this.dashboard_sysportlet2_u6e9117d_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ua4b1799_click')){
            this.dashboard_sysportlet2_ua4b1799_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ucdbdc4c_click')){
            this.dashboard_sysportlet2_ucdbdc4c_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u1453337_click')){
            this.dashboard_sysportlet2_u1453337_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ud54a71d_click')){
            this.dashboard_sysportlet2_ud54a71d_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u04ff79f_click')){
            this.dashboard_sysportlet2_u04ff79f_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ud97be75_click')){
            this.dashboard_sysportlet2_ud97be75_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u1e6202a_click')){
            this.dashboard_sysportlet2_u1e6202a_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u5b0a56a_click')){
            this.dashboard_sysportlet2_u5b0a56a_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof TodoDashboardActionsBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TodoDashboardActionsBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TodoDashboardActionsBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof TodoDashboardActionsBase
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
     * @memberof TodoDashboardActionsBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TodoDashboardActionsBase
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
     * @memberof TodoDashboardActionsBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TodoDashboardActionsBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
