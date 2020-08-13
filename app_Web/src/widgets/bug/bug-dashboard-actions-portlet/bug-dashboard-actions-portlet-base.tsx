import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugDashboardActionsService from './bug-dashboard-actions-portlet-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet5部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {BugDashboardActionsPortletBase}
 */
export class BugDashboardActionsPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof BugDashboardActionsPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {BugDashboardActionsService}
     * @memberof BugDashboardActionsPortletBase
     */
    public service: BugDashboardActionsService = new BugDashboardActionsService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugDashboardActionsPortletBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugDashboardActionsPortletBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof BugDashboardActionsPortletBase
     */
    protected appDeLogicName: string = 'Bug';

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof BugDashboardActionsBase
     */  
    public appUIService:BugUIService = new BugUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u3f6a0e7_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u1d352f4_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_MainEdit(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u09d7603_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_CloseBug(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u84080b5_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_ResolveBug(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_ubef0a95_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_AssingToBug(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u279d3f0_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_ConfirmBug(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u1b279b1_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_Activation(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_uf577fc4_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_toStory(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_ucf86385_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_BuildUseCase(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u5cd6c83_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_delete(datas,contextJO, paramJO,  $event, xData,this,"Bug");
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
     * @memberof BugMainDashboardViewBase
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
     * @memberof BugDashboardActions
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof BugDashboardActions
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof BugDashboardActionsBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet5_u3f6a0e7_click",
        text: "返回",
        iconcls: "fa fa-sign-out",
        icon: "",
        noprivdisplaymode: 2,
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_u1d352f4_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        noprivdisplaymode: 2,
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_u09d7603_click",
        text: "关闭",
        iconcls: "fa fa-power-off",
        icon: "",
        noprivdisplaymode: 1,
        dataaccaction:'SRFUR__BUG_CLOSE_BUT',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_u84080b5_click",
        text: "解决",
        iconcls: "fa fa-check-square-o",
        icon: "",
        noprivdisplaymode: 1,
        dataaccaction:'SRFUR__BUG_RESOLVE_BUT',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_ubef0a95_click",
        text: "指派",
        iconcls: null,
        icon: null,
        noprivdisplaymode: 1,
        dataaccaction:'SRFUR__BUG_ASSIGNTO_BUT',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_u279d3f0_click",
        text: "确认",
        iconcls: "fa fa-eye",
        icon: "",
        noprivdisplaymode: 1,
        dataaccaction:'CONFIRM',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_u1b279b1_click",
        text: "激活",
        iconcls: null,
        icon: null,
        noprivdisplaymode: 1,
        dataaccaction:'SRFUR__BUG_ACTIVATE_BUT',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_uf577fc4_click",
        text: "提需求",
        iconcls: null,
        icon: null,
        noprivdisplaymode: 2,
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_ucf86385_click",
        text: "建用例",
        iconcls: null,
        icon: null,
        noprivdisplaymode: 1,
        dataaccaction:'SRFUR__BUG_CREATECASE_BUT',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_u5cd6c83_click",
        text: "删除",
        iconcls: null,
        icon: null,
        noprivdisplaymode: 2,
        visabled:true,
        disabled:false
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof BugDashboardActionsBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet5_u3f6a0e7_click')){
            this.dashboard_sysportlet5_u3f6a0e7_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u1d352f4_click')){
            this.dashboard_sysportlet5_u1d352f4_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u09d7603_click')){
            this.dashboard_sysportlet5_u09d7603_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u84080b5_click')){
            this.dashboard_sysportlet5_u84080b5_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_ubef0a95_click')){
            this.dashboard_sysportlet5_ubef0a95_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u279d3f0_click')){
            this.dashboard_sysportlet5_u279d3f0_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u1b279b1_click')){
            this.dashboard_sysportlet5_u1b279b1_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_uf577fc4_click')){
            this.dashboard_sysportlet5_uf577fc4_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_ucf86385_click')){
            this.dashboard_sysportlet5_ucf86385_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u5cd6c83_click')){
            this.dashboard_sysportlet5_u5cd6c83_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof BugDashboardActionsBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof BugDashboardActionsBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof BugDashboardActionsBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof BugDashboardActionsBase
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
     * @memberof BugDashboardActionsBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof BugDashboardActionsBase
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
     * @memberof BugDashboardActionsBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof BugDashboardActionsBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
