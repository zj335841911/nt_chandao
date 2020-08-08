import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProductPlanService from '@/service/product-plan/product-plan-service';
import MainTabExptabviewpanel4Service from './main-tab-exptabviewpanel4-tabviewpanel-service';
import ProductPlanUIService from '@/uiservice/product-plan/product-plan-ui-service';


/**
 * tabviewpanel4部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MainTabExptabviewpanel4TabviewpanelBase}
 */
export class MainTabExptabviewpanel4TabviewpanelBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainTabExptabviewpanel4TabviewpanelBase
     */
    protected controlType: string = 'TABVIEWPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {MainTabExptabviewpanel4Service}
     * @memberof MainTabExptabviewpanel4TabviewpanelBase
     */
    public service: MainTabExptabviewpanel4Service = new MainTabExptabviewpanel4Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductPlanService}
     * @memberof MainTabExptabviewpanel4TabviewpanelBase
     */
    public appEntityService: ProductPlanService = new ProductPlanService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainTabExptabviewpanel4TabviewpanelBase
     */
    protected appDeName: string = 'productplan';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainTabExptabviewpanel4TabviewpanelBase
     */
    protected appDeLogicName: string = '产品计划';

    /**
     * 导航模式下项是否激活
     *
     * @type {*}
     * @memberof MainTabExptabviewpanel4
     */
    @Prop()
    public expActive!: any;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainTabExptabviewpanel4
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainTabExptabviewpanel4
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof MainTabExptabviewpanel4
     */
    public isActivied: boolean = true;

    /**
     * 局部上下文
     *
     * @type {*}
     * @memberof MainTabExptabviewpanel4
     */
    public localContext: any = null;

    /**
     * 局部视图参数
     *
     * @type {*}
     * @memberof MainTabExptabviewpanel4
     */
    public localViewParam: any = null;

    /**
     * 传入上下文
     *
     * @type {string}
     * @memberof TabExpViewtabviewpanel
     */
    public viewdata: string = JSON.stringify(this.context);

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof PickupViewpickupviewpanel
     */
    public viewparam: string = JSON.stringify(this.viewparams);

    /**
     * 视图面板过滤项
     *
     * @type {string}
     * @memberof MainTabExptabviewpanel4
     */
    public navfilter: string = "";
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MainTabExptabviewpanel4
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainTabExptabviewpanel4
     */    
    public afterCreated(){
        this.initNavParam();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.$forceUpdate();
                this.initNavParam();
            });
        }
    }

    /**
     * 初始化导航参数
     *
     * @memberof MainTabExptabviewpanel4
     */
    public initNavParam(){
        if(!Object.is(this.navfilter,"")){
            Object.assign(this.viewparams,{[this.navfilter]:this.context['majorentity']})
        }
        if(this.localContext && Object.keys(this.localContext).length >0){
            let _context:any = this.$util.computedNavData({},this.context,this.viewparams,this.localContext);
            Object.assign(this.context,_context);
        }
        if(this.localViewParam && Object.keys(this.localViewParam).length >0){
            let _param:any = this.$util.computedNavData({},this.context,this.viewparams,this.localViewParam);
            Object.assign(this.viewparams,_param);
        }
        this.viewdata =JSON.stringify(this.context);
        this.viewparam = JSON.stringify(this.viewparams);
    }

    /**
     * 视图数据变化
     *
     * @memberof  MainTabExptabviewpanel4
     */
    public viewDatasChange($event:any){
        this.$emit('viewpanelDatasChange',$event);
    }

    /**
     * vue 生命周期
     *
     * @memberof MainTabExptabviewpanel4
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainTabExptabviewpanel4
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }
}