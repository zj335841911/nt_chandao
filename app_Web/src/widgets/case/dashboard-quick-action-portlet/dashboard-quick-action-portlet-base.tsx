import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import DashboardQuickActionService from './dashboard-quick-action-portlet-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet4部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {DashboardQuickActionPortletBase}
 */
export class DashboardQuickActionPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DashboardQuickActionPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {DashboardQuickActionService}
     * @memberof DashboardQuickActionPortletBase
     */
    public service: DashboardQuickActionService = new DashboardQuickActionService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof DashboardQuickActionPortletBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DashboardQuickActionPortletBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DashboardQuickActionPortletBase
     */
    protected appDeLogicName: string = '测试用例';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_u947bac5_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_u4c22fea_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:CaseUIService  = new CaseUIService();
        curUIService.Case_MainEdit(datas,contextJO, paramJO,  $event, xData,this,"Case");
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
     * @memberof CaseMainDashboardViewBase
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
     * @memberof CaseMainDashboardViewBase
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
     * @memberof DashboardQuickAction
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof DashboardQuickAction
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof DashboardQuickActionBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet4_u947bac5_click",
        text: "返回",
        iconcls: "fa fa-sign-out",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet4_u4c22fea_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof DashboardQuickActionBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet4_u947bac5_click')){
            this.dashboard_sysportlet4_u947bac5_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_u4c22fea_click')){
            this.dashboard_sysportlet4_u4c22fea_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof DashboardQuickActionBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof DashboardQuickActionBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof DashboardQuickActionBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof DashboardQuickActionBase
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
     * @memberof DashboardQuickActionBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof DashboardQuickActionBase
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
     * @memberof DashboardQuickActionBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof DashboardQuickActionBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
