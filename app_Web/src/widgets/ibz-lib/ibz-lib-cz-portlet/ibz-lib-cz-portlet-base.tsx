import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import IbzLibService from '@/service/ibz-lib/ibz-lib-service';
import IbzLibCzService from './ibz-lib-cz-portlet-service';
import IbzLibUIService from '@/uiservice/ibz-lib/ibz-lib-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet2部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {IbzLibCzPortletBase}
 */
export class IbzLibCzPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof IbzLibCzPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {IbzLibCzService}
     * @memberof IbzLibCzPortletBase
     */
    public service: IbzLibCzService = new IbzLibCzService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzLibService}
     * @memberof IbzLibCzPortletBase
     */
    public appEntityService: IbzLibService = new IbzLibService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibCzPortletBase
     */
    protected appDeName: string = 'ibzlib';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibCzPortletBase
     */
    protected appDeLogicName: string = '用例库';

    /**
     * 界面UI服务对象
     *
     * @type {IbzLibUIService}
     * @memberof IbzLibCzBase
     */  
    public appUIService:IbzLibUIService = new IbzLibUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_udc1b4e7_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"IbzLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u20ca129_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:IbzLibUIService  = new IbzLibUIService();
        curUIService.IbzLib_EditlibCz(datas,contextJO, paramJO,  $event, xData,this,"IbzLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet2_u6ea81fb_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:IbzLibUIService  = new IbzLibUIService();
        curUIService.IbzLib_DeleteCz(datas,contextJO, paramJO,  $event, xData,this,"IbzLib");
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
     * @memberof IbzLibOpenLibViewBase
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
     * @memberof IbzLibCz
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof IbzLibCz
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof IbzLibCzBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet2_udc1b4e7_click",
        text: "返回",
        iconcls: "fa fa-sign-out",
        icon: "",
        noprivdisplaymode: 2,
        actiontarget:'',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u20ca129_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__ADMIN',
        actiontarget:'SINGLEDATA',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet2_u6ea81fb_click",
        text: "删除",
        iconcls: "fa fa-remove",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__ADMIN',
        actiontarget:'SINGLEKEY',
        visabled:true,
        disabled:false
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof IbzLibCzBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet2_udc1b4e7_click')){
            this.dashboard_sysportlet2_udc1b4e7_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u20ca129_click')){
            this.dashboard_sysportlet2_u20ca129_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet2_u6ea81fb_click')){
            this.dashboard_sysportlet2_u6ea81fb_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof IbzLibCzBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof IbzLibCzBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof IbzLibCzBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof IbzLibCzBase
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
     * @memberof IbzLibCzBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof IbzLibCzBase
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
     * @memberof IbzLibCzBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof IbzLibCzBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
