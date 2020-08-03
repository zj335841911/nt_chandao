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
    public dashboard_sysportlet2_u6450522_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Task_NewSubTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ua266741_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Task_AssignTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_uff762b3_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Task_Forward(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ub4d331e_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Task_PauseTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u87e46cc_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Task_Activation(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ue3e1dd6_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Task_DoneTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u10fc642_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Task_CancelTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u6c059c5_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Task_MainEdit(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_ua25395e_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.Task_CloseTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_uc22aaa2_click(params: any = {}, tag?: any, $event?: any) {
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
        this.RemoveAndExit(datas, contextJO,paramJO,  $event, xData,this,"Task");
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
     * 删除
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof TaskMainDashboardViewBase
     */
    public RemoveAndExit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (xData && xData.removeAndExit instanceof Function) {
            xData.removeAndExit().then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                if(window.parent){
                    window.parent.postMessage([{ ...response.data }],'*');
                }
            });
        } else if (_this.removeAndExit && _this.removeAndExit instanceof Function) {
            _this.removeAndExit().then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                if(window.parent){
                    window.parent.postMessage([{ ...response.data }],'*');
                }
            });
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
        },
        { viewlogicname:"dashboard_sysportlet2_u6450522_click",
        text: "子任务",
        iconcls: "iconfont studio-icon-subnets",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet2_ua266741_click",
        text: "指派",
        iconcls: null,
        icon: null,
        },
        { viewlogicname:"dashboard_sysportlet2_uff762b3_click",
        text: "转交",
        iconcls: null,
        icon: null,
        },
        { viewlogicname:"dashboard_sysportlet2_ub4d331e_click",
        text: "暂停",
        iconcls: "fa fa-circle-o",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet2_u87e46cc_click",
        text: "激活",
        iconcls: null,
        icon: null,
        },
        { viewlogicname:"dashboard_sysportlet2_ue3e1dd6_click",
        text: "完成",
        iconcls: "fa fa-check-square-o",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet2_u10fc642_click",
        text: "取消",
        iconcls: "fa fa-ban",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet2_u6c059c5_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet2_ua25395e_click",
        text: "关闭",
        iconcls: "fa fa-power-off",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet2_uc22aaa2_click",
        text: "删除",
        iconcls: "fa fa-remove",
        icon: "",
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
        if(Object.is($event,'dashboard_sysportlet2_u6450522_click')){
            this.dashboard_sysportlet2_u6450522_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ua266741_click')){
            this.dashboard_sysportlet2_ua266741_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_uff762b3_click')){
            this.dashboard_sysportlet2_uff762b3_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ub4d331e_click')){
            this.dashboard_sysportlet2_ub4d331e_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u87e46cc_click')){
            this.dashboard_sysportlet2_u87e46cc_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ue3e1dd6_click')){
            this.dashboard_sysportlet2_ue3e1dd6_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u10fc642_click')){
            this.dashboard_sysportlet2_u10fc642_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u6c059c5_click')){
            this.dashboard_sysportlet2_u6c059c5_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ua25395e_click')){
            this.dashboard_sysportlet2_ua25395e_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_uc22aaa2_click')){
            this.dashboard_sysportlet2_uc22aaa2_click(null);
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
