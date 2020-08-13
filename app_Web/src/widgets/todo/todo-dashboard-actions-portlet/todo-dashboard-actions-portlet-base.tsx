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
    public dashboard_sysportlet2_u54e15b4_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Todo_edit1(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ue607227_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Todo_delete(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u0459568_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Todo_assignTo(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u4d009c6_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Todo_finish(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ua103298_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Todo_activate(datas,contextJO, paramJO,  $event, xData,this,"Todo");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_uad9b866_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Todo_close(datas,contextJO, paramJO,  $event, xData,this,"Todo");
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
        noprivdisplaymode:'2',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u54e15b4_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        noprivdisplaymode:'1',
        dataaccaction:'UPDATE',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_ue607227_click",
        text: "删除",
        iconcls: "fa fa-trash",
        icon: "",
        noprivdisplaymode:'1',
        dataaccaction:'DELETE',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u0459568_click",
        text: "指派",
        iconcls: "fa fa-hand-o-right",
        icon: "",
        noprivdisplaymode:'1',
        dataaccaction:'ASSIGNTO',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u4d009c6_click",
        text: "完成",
        iconcls: "fa fa-check-square-o",
        icon: "",
        noprivdisplaymode:'1',
        dataaccaction:'FINISH',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_ua103298_click",
        text: "激活",
        iconcls: "fa fa-plane",
        icon: "",
        noprivdisplaymode:'1',
        dataaccaction:'ACTIVATE',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_uad9b866_click",
        text: "关闭",
        iconcls: "fa fa-close",
        icon: "",
        noprivdisplaymode:'1',
        dataaccaction:'CLOSE',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u1e6202a_click",
        text: "转Bug",
        iconcls: null,
        icon: null,
        noprivdisplaymode:'1',
        dataaccaction:'TOBUG',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u5b0a56a_click",
        text: "转任务",
        iconcls: null,
        icon: null,
        noprivdisplaymode:'1',
        dataaccaction:'TOTASK',
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
        if(Object.is($event,'dashboard_sysportlet2_u54e15b4_click')){
            this.dashboard_sysportlet2_u54e15b4_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ue607227_click')){
            this.dashboard_sysportlet2_ue607227_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u0459568_click')){
            this.dashboard_sysportlet2_u0459568_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u4d009c6_click')){
            this.dashboard_sysportlet2_u4d009c6_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ua103298_click')){
            this.dashboard_sysportlet2_ua103298_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_uad9b866_click')){
            this.dashboard_sysportlet2_uad9b866_click(null);
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
