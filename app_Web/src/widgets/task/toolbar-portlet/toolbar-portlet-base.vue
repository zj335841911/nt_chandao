<template>
    <div class='porlet toolbar' :style="{}">
        <div class="portlet-widthout-title">
            <app-actionbar :items="actionBarModelData" @itemClick="handleItemClick"></app-actionbar>
        </div>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import TaskService from '@/service/task/task-service';
import ToolbarService from './toolbar-portlet-service';

import TaskUIService from '@/uiservice/task/task-ui-service';


@Component({
    components: {
      
    }
})
export default class TaskToolbarBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Toolbar
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Toolbar
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Toolbar
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Toolbar
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Toolbar
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Toolbar
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Toolbar
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {ToolbarService}
     * @memberof Toolbar
     */
    protected service: ToolbarService = new ToolbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof Toolbar
     */
    protected appEntityService: TaskService = new TaskService({ $store: this.$store });
    

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet2_udf09ee0_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_u6450522_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        Object.assign(paramJO,{});
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
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
    protected dashboard_sysportlet2_ua266741_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_uff762b3_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_ua1183cb_click(params: any = {}, tag?: any, $event?: any) {
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
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_StartTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet2_ueb9fc78_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_ub4d331e_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_u87e46cc_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_ue3e1dd6_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_u10fc642_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_ua25395e_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_u6c059c5_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_uf7c7e04_click(params: any = {}, tag?: any, $event?: any) {
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
    protected Exit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        this.closeView(args);
        if(window.parent){
            window.parent.postMessage([{ ...args }],'*');
        }
    }


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof Toolbar
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof Toolbar
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
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof Toolbar
     */
    protected actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet2_udf09ee0_click",
        actionName:"编辑界面_退出操作",
        },
        { viewlogicname:"dashboard_sysportlet2_u6450522_click",
        actionName:"批量新建子任务",
        },
        { viewlogicname:"dashboard_sysportlet2_ua266741_click",
        actionName:"指派任务",
        },
        { viewlogicname:"dashboard_sysportlet2_uff762b3_click",
        actionName:"转交任务",
        },
        { viewlogicname:"dashboard_sysportlet2_ua1183cb_click",
        actionName:"开始任务",
        },
        { viewlogicname:"dashboard_sysportlet2_ueb9fc78_click",
        actionName:"工时",
        },
        { viewlogicname:"dashboard_sysportlet2_ub4d331e_click",
        actionName:"暂停任务",
        },
        { viewlogicname:"dashboard_sysportlet2_u87e46cc_click",
        actionName:"激活",
        },
        { viewlogicname:"dashboard_sysportlet2_ue3e1dd6_click",
        actionName:"完成任务",
        },
        { viewlogicname:"dashboard_sysportlet2_u10fc642_click",
        actionName:"取消任务",
        },
        { viewlogicname:"dashboard_sysportlet2_ua25395e_click",
        actionName:"关闭任务",
        },
        { viewlogicname:"dashboard_sysportlet2_u6c059c5_click",
        actionName:"主信息编辑",
        },
        { viewlogicname:"dashboard_sysportlet2_uf7c7e04_click",
        actionName:"删除",
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof Toolbar
     */
    protected handleItemClick($event:any){
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
        if(Object.is($event,'dashboard_sysportlet2_ua1183cb_click')){
            this.dashboard_sysportlet2_ua1183cb_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_ueb9fc78_click')){
            this.dashboard_sysportlet2_ueb9fc78_click(null);
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
        if(Object.is($event,'dashboard_sysportlet2_ua25395e_click')){
            this.dashboard_sysportlet2_ua25395e_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u6c059c5_click')){
            this.dashboard_sysportlet2_u6c059c5_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_uf7c7e04_click')){
            this.dashboard_sysportlet2_uf7c7e04_click(null);
        }
    }

    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof Toolbar
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof Toolbar
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Toolbar
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof Toolbar
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Toolbar
     */    
    protected afterCreated(){
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
     * @memberof Toolbar
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Toolbar
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './toolbar-portlet.less';
</style>