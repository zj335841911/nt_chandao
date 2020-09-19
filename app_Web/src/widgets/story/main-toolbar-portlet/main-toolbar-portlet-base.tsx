import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import MainToolbarService from './main-toolbar-portlet-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet3部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MainToolbarPortletBase}
 */
export class MainToolbarPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainToolbarPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {MainToolbarService}
     * @memberof MainToolbarPortletBase
     */
    public service: MainToolbarService = new MainToolbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof MainToolbarPortletBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainToolbarPortletBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainToolbarPortletBase
     */
    protected appDeLogicName: string = '需求';

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof MainToolbarBase
     */  
    public appUIService:StoryUIService = new StoryUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_u797d4ad_click(params: any = {}, tag?: any, $event?: any) {
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
    public dashboard_sysportlet3_u60e659f_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ActiviteDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_u65218c9_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ChangeStoryDetailDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_u09da395_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ReviewStoryDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_u92abbe0_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_AssignToDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_uf8a8e0c_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_CloseStoryDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_ub9b8ba7_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_SubStoryCz(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_u2eccee8_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_OpenBaseInfoC(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_uab5fac9_click(params: any = {}, tag?: any, $event?: any) {
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
     * @memberof StoryMainView_LinkBase
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
     * @memberof MainToolbar
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof MainToolbar
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof MainToolbarBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet3_u797d4ad_click",
        text: "返回",
        iconcls: "fa fa-sign-out",
        icon: "",
        noprivdisplaymode: 2,
        actiontarget:'',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_u60e659f_click",
        text: "激活",
        iconcls: "fa fa-magic",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_ACTIVE_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_u65218c9_click",
        text: "变更",
        iconcls: "fa fa-exchange",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_CHANGED_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_u09da395_click",
        text: "评审",
        iconcls: "fa fa-search",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_REVIEW_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_u92abbe0_click",
        text: "指派",
        iconcls: "fa fa-hand-o-right",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_ASS_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_uf8a8e0c_click",
        text: "关闭",
        iconcls: "fa fa-power-off",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_CLOSED_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_ub9b8ba7_click",
        text: "需求细分",
        iconcls: "iconfont studio-icon-subnets",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_XQXF_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_u2eccee8_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_EDIT_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_uab5fac9_click",
        text: "删除",
        iconcls: "fa fa-remove",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_DELETE_BUT',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof MainToolbarBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet3_u797d4ad_click')){
            this.dashboard_sysportlet3_u797d4ad_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u60e659f_click')){
            this.dashboard_sysportlet3_u60e659f_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u65218c9_click')){
            this.dashboard_sysportlet3_u65218c9_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u09da395_click')){
            this.dashboard_sysportlet3_u09da395_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u92abbe0_click')){
            this.dashboard_sysportlet3_u92abbe0_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_uf8a8e0c_click')){
            this.dashboard_sysportlet3_uf8a8e0c_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_ub9b8ba7_click')){
            this.dashboard_sysportlet3_ub9b8ba7_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u2eccee8_click')){
            this.dashboard_sysportlet3_u2eccee8_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_uab5fac9_click')){
            this.dashboard_sysportlet3_uab5fac9_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof MainToolbarBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainToolbarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainToolbarBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof MainToolbarBase
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
     * @memberof MainToolbarBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainToolbarBase
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
     * @memberof MainToolbarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainToolbarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
