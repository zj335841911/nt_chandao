<template>
    <div class='porlet action-bar' :style="{}">
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
import TestTaskService from '@/service/test-task/test-task-service';
import ActionBarService from './action-bar-portlet-service';

import TestTaskUIService from '@/uiservice/test-task/test-task-ui-service';


@Component({
    components: {
      
    }
})
export default class TestTaskActionBarBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ActionBar
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ActionBar
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ActionBar
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ActionBar
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ActionBar
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ActionBar
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ActionBar
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {ActionBarService}
     * @memberof ActionBar
     */
    protected service: ActionBarService = new ActionBarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof ActionBar
     */
    protected appEntityService: TestTaskService = new TestTaskService({ $store: this.$store });
    

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet4_uff3ac3f_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet4_u7e8df99_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_Activite(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet4_udf94c25_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_Start(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet4_u403cfd0_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_Close(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet4_ufbd0009_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_Block(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
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
     * @memberof TestTaskMainDashboardViewBase
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
     * @memberof ActionBar
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof ActionBar
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
     * @memberof ActionBar
     */
    protected actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet4_uff3ac3f_click",
        actionName:"编辑界面_退出操作",
        },
        { viewlogicname:"dashboard_sysportlet4_u7e8df99_click",
        actionName:"激活",
        },
        { viewlogicname:"dashboard_sysportlet4_udf94c25_click",
        actionName:"开始",
        },
        { viewlogicname:"dashboard_sysportlet4_u403cfd0_click",
        actionName:"关闭",
        },
        { viewlogicname:"dashboard_sysportlet4_ufbd0009_click",
        actionName:"阻塞",
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof ActionBar
     */
    protected handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet4_uff3ac3f_click')){
            this.dashboard_sysportlet4_uff3ac3f_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_u7e8df99_click')){
            this.dashboard_sysportlet4_u7e8df99_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_udf94c25_click')){
            this.dashboard_sysportlet4_udf94c25_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_u403cfd0_click')){
            this.dashboard_sysportlet4_u403cfd0_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_ufbd0009_click')){
            this.dashboard_sysportlet4_ufbd0009_click(null);
        }
    }

    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ActionBar
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ActionBar
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ActionBar
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof ActionBar
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ActionBar
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
     * @memberof ActionBar
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ActionBar
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './action-bar-portlet.less';
</style>