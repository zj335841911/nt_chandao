<template>
    <div class='porlet main-toolbar' :style="{}">
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
import StoryService from '@/service/story/story-service';
import MainToolbarService from './main-toolbar-portlet-service';

import StoryUIService from '@/uiservice/story/story-ui-service';


@Component({
    components: {
      
    }
})
export default class StoryMainToolbarBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainToolbar
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainToolbar
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainToolbar
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainToolbar
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MainToolbar
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainToolbar
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MainToolbar
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {MainToolbarService}
     * @memberof MainToolbar
     */
    protected service: MainToolbarService = new MainToolbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof MainToolbar
     */
    protected appEntityService: StoryService = new StoryService({ $store: this.$store });
    

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet3_u797d4ad_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet3_u9faaee3_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ChangeStoryDetail(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet3_u5ad249a_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ReviewStory(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet3_u1159f16_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_AssignTo(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet3_u7e5d174_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_CloseStory(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet3_u77b985d_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_Activite(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet3_u80095ee_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_OpenBaseInfoEditView(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected dashboard_sysportlet3_uab5fac9_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_delete(datas,contextJO, paramJO,  $event, xData,this,"Story");
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
     * @memberof StoryMainViewBase
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
     * @memberof MainToolbar
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainToolbar
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
     * @memberof MainToolbar
     */
    protected actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet3_u797d4ad_click",
        actionName:"编辑界面_退出操作",
        },
        { viewlogicname:"dashboard_sysportlet3_u9faaee3_click",
        actionName:"变更需求",
        },
        { viewlogicname:"dashboard_sysportlet3_u5ad249a_click",
        actionName:"需求评审",
        },
        { viewlogicname:"dashboard_sysportlet3_u1159f16_click",
        actionName:"指派给",
        },
        { viewlogicname:"dashboard_sysportlet3_u7e5d174_click",
        actionName:"关闭需求",
        },
        { viewlogicname:"dashboard_sysportlet3_u77b985d_click",
        actionName:"需求激活",
        },
        { viewlogicname:"dashboard_sysportlet3_u80095ee_click",
        actionName:"打开需求基本信息编辑",
        },
        { viewlogicname:"dashboard_sysportlet3_uab5fac9_click",
        actionName:"删除",
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof MainToolbar
     */
    protected handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet3_u797d4ad_click')){
            this.dashboard_sysportlet3_u797d4ad_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u9faaee3_click')){
            this.dashboard_sysportlet3_u9faaee3_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u5ad249a_click')){
            this.dashboard_sysportlet3_u5ad249a_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u1159f16_click')){
            this.dashboard_sysportlet3_u1159f16_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u7e5d174_click')){
            this.dashboard_sysportlet3_u7e5d174_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u77b985d_click')){
            this.dashboard_sysportlet3_u77b985d_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u80095ee_click')){
            this.dashboard_sysportlet3_u80095ee_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_uab5fac9_click')){
            this.dashboard_sysportlet3_uab5fac9_click(null);
        }
    }

    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof MainToolbar
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainToolbar
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainToolbar
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MainToolbar
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainToolbar
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
     * @memberof MainToolbar
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainToolbar
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './main-toolbar-portlet.less';
</style>