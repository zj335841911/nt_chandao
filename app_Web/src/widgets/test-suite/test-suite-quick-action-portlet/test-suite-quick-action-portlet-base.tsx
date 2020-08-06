import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import TestSuiteService from '@/service/test-suite/test-suite-service';
import TestSuiteQuickActionService from './test-suite-quick-action-portlet-service';
import TestSuiteUIService from '@/uiservice/test-suite/test-suite-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet4部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TestSuiteQuickActionPortletBase}
 */
export class TestSuiteQuickActionPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestSuiteQuickActionPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {TestSuiteQuickActionService}
     * @memberof TestSuiteQuickActionPortletBase
     */
    public service: TestSuiteQuickActionService = new TestSuiteQuickActionService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestSuiteService}
     * @memberof TestSuiteQuickActionPortletBase
     */
    public appEntityService: TestSuiteService = new TestSuiteService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestSuiteQuickActionPortletBase
     */
    protected appDeName: string = 'testsuite';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestSuiteQuickActionPortletBase
     */
    protected appDeLogicName: string = '测试套件';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_u21343aa_click(params: any = {}, tag?: any, $event?: any) {
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
    public dashboard_sysportlet4_ud269d16_click(params: any = {}, tag?: any, $event?: any) {
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
    public dashboard_sysportlet4_u35c5cd5_click(params: any = {}, tag?: any, $event?: any) {
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
     * @memberof TestSuiteQuickAction
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof TestSuiteQuickAction
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof TestSuiteQuickActionBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet4_u21343aa_click",
        text: "返回",
        iconcls: "fa fa-sign-out",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet4_ud269d16_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet4_u35c5cd5_click",
        text: "删除",
        iconcls: "fa fa-remove",
        icon: "",
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof TestSuiteQuickActionBase
     */
    public handleItemClick($event:any){
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
     * @memberof TestSuiteQuickActionBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TestSuiteQuickActionBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TestSuiteQuickActionBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof TestSuiteQuickActionBase
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
     * @memberof TestSuiteQuickActionBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TestSuiteQuickActionBase
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
     * @memberof TestSuiteQuickActionBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TestSuiteQuickActionBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
