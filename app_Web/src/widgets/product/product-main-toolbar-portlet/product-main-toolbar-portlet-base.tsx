import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductMainToolbarService from './product-main-toolbar-portlet-service';
import ProductUIService from '@/uiservice/product/product-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet5部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {ProductMainToolbarPortletBase}
 */
export class ProductMainToolbarPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductMainToolbarPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {ProductMainToolbarService}
     * @memberof ProductMainToolbarPortletBase
     */
    public service: ProductMainToolbarService = new ProductMainToolbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductMainToolbarPortletBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductMainToolbarPortletBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductMainToolbarPortletBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof ProductMainToolbarBase
     */  
    public appUIService:ProductUIService = new ProductUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_ua3abd8c_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_CloseProduct(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u993e8bf_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_OpenQuickCfgView(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u0828b1d_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_delete(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }

    /**
     * 长度
     *
     * @type {number}
     * @memberof ProductMainToolbar
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof ProductMainToolbar
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof ProductMainToolbarBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet5_ua3abd8c_click",
        text: "关闭",
        iconcls: "fa fa-power-off",
        icon: "",
        noprivdisplaymode:'2',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_u993e8bf_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        noprivdisplaymode:'1',
        dataaccaction:'SRFUR__PRODUCTEDIT',
        visabled:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_u0828b1d_click",
        text: "删除",
        iconcls: "fa fa-remove",
        icon: "",
        noprivdisplaymode:'2',
        visabled:true,
        disabled:false
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof ProductMainToolbarBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet5_ua3abd8c_click')){
            this.dashboard_sysportlet5_ua3abd8c_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u993e8bf_click')){
            this.dashboard_sysportlet5_u993e8bf_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u0828b1d_click')){
            this.dashboard_sysportlet5_u0828b1d_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ProductMainToolbarBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProductMainToolbarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProductMainToolbarBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof ProductMainToolbarBase
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
     * @memberof ProductMainToolbarBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProductMainToolbarBase
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
     * @memberof ProductMainToolbarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProductMainToolbarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
