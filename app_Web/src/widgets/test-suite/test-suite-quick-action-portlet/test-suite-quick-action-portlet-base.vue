<template>
    <div class='porlet test-suite-quick-action' :style="{}">
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
import TestSuiteService from '@/service/test-suite/test-suite-service';
import TestSuiteQuickActionService from './test-suite-quick-action-portlet-service';

import TestSuiteUIService from '@/uiservice/test-suite/test-suite-ui-service';


@Component({
    components: {
      
    }
})
export default class TestSuiteTestSuiteQuickActionBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof TestSuiteQuickAction
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof TestSuiteQuickAction
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TestSuiteQuickAction
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TestSuiteQuickAction
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof TestSuiteQuickAction
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof TestSuiteQuickAction
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TestSuiteQuickAction
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {TestSuiteQuickActionService}
     * @memberof TestSuiteQuickAction
     */
    protected service: TestSuiteQuickActionService = new TestSuiteQuickActionService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestSuiteService}
     * @memberof TestSuiteQuickAction
     */
    protected appEntityService: TestSuiteService = new TestSuiteService({ $store: this.$store });
    

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet4_u21343aa_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"TestSuite");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet4_ud269d16_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestSuiteUIService  = new TestSuiteUIService();
        curUIService.TestSuite_Editsuite(datas,contextJO, paramJO,  $event, xData,this,"TestSuite");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet4_u35c5cd5_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestSuiteUIService  = new TestSuiteUIService();
        curUIService.TestSuite_Delete(datas,contextJO, paramJO,  $event, xData,this,"TestSuite");
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
     * @memberof TestSuiteMainDashboardViewBase
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
     * @memberof TestSuiteQuickAction
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof TestSuiteQuickAction
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
     * @memberof TestSuiteQuickAction
     */
    protected actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet4_u21343aa_click",
        actionName:"编辑界面_退出操作",
        },
        { viewlogicname:"dashboard_sysportlet4_ud269d16_click",
        actionName:"编辑",
        },
        { viewlogicname:"dashboard_sysportlet4_u35c5cd5_click",
        actionName:"删除",
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof TestSuiteQuickAction
     */
    protected handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet4_u21343aa_click')){
            this.dashboard_sysportlet4_u21343aa_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_ud269d16_click')){
            this.dashboard_sysportlet4_ud269d16_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_u35c5cd5_click')){
            this.dashboard_sysportlet4_u35c5cd5_click(null);
        }
    }

    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof TestSuiteQuickAction
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TestSuiteQuickAction
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TestSuiteQuickAction
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof TestSuiteQuickAction
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TestSuiteQuickAction
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
     * @memberof TestSuiteQuickAction
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TestSuiteQuickAction
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './test-suite-quick-action-portlet.less';
</style>