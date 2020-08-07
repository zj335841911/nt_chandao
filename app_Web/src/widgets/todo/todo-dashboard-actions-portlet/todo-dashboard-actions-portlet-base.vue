<template>
    <div class='porlet todo-dashboard-actions' :style="{}">
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
import TodoService from '@/service/todo/todo-service';
import TodoDashboardActionsService from './todo-dashboard-actions-portlet-service';

import TodoUIService from '@/uiservice/todo/todo-ui-service';


@Component({
    components: {
      
    }
})
export default class TodoTodoDashboardActionsBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof TodoDashboardActions
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof TodoDashboardActions
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TodoDashboardActions
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TodoDashboardActions
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof TodoDashboardActions
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof TodoDashboardActions
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TodoDashboardActions
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {TodoDashboardActionsService}
     * @memberof TodoDashboardActions
     */
    protected service: TodoDashboardActionsService = new TodoDashboardActionsService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof TodoDashboardActions
     */
    protected appEntityService: TodoService = new TodoService({ $store: this.$store });
    

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet2_u6e9117d_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_u54e15b4_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_ue607227_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_u0459568_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_u4d009c6_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_ua103298_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_uad9b866_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_u1e6202a_click(params: any = {}, tag?: any, $event?: any) {
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
    protected dashboard_sysportlet2_u5b0a56a_click(params: any = {}, tag?: any, $event?: any) {
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
     * @memberof TodoDashboardActions
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof TodoDashboardActions
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
     * @memberof TodoDashboardActions
     */
    protected actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet2_u6e9117d_click",
        actionName:"编辑界面_退出操作",
        },
        { viewlogicname:"dashboard_sysportlet2_u54e15b4_click",
        actionName:"todo编辑",
        },
        { viewlogicname:"dashboard_sysportlet2_ue607227_click",
        actionName:"todo删除",
        },
        { viewlogicname:"dashboard_sysportlet2_u0459568_click",
        actionName:"todo指派",
        },
        { viewlogicname:"dashboard_sysportlet2_u4d009c6_click",
        actionName:"todo完成",
        },
        { viewlogicname:"dashboard_sysportlet2_ua103298_click",
        actionName:"todo激活",
        },
        { viewlogicname:"dashboard_sysportlet2_uad9b866_click",
        actionName:"todo关闭",
        },
        { viewlogicname:"dashboard_sysportlet2_u1e6202a_click",
        actionName:"转Bug",
        },
        { viewlogicname:"dashboard_sysportlet2_u5b0a56a_click",
        actionName:"转任务",
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof TodoDashboardActions
     */
    protected handleItemClick($event:any){
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
     * @memberof TodoDashboardActions
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TodoDashboardActions
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TodoDashboardActions
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof TodoDashboardActions
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TodoDashboardActions
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
     * @memberof TodoDashboardActions
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TodoDashboardActions
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './todo-dashboard-actions-portlet.less';
</style>