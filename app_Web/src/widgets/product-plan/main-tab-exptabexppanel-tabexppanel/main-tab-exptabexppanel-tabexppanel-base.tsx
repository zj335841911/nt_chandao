import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import ProductPlanService from '@/service/product-plan/product-plan-service';
import MainTabExptabexppanelService from './main-tab-exptabexppanel-tabexppanel-service';
import ProductPlanUIService from '@/uiservice/product-plan/product-plan-ui-service';


/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {MainTabExptabexppanelTabexppanelBase}
 */
export class MainTabExptabexppanelTabexppanelBase extends TabExpPanelControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainTabExptabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {MainTabExptabexppanelService}
     * @memberof MainTabExptabexppanelTabexppanelBase
     */
    public service: MainTabExptabexppanelService = new MainTabExptabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductPlanService}
     * @memberof MainTabExptabexppanelTabexppanelBase
     */
    public appEntityService: ProductPlanService = new ProductPlanService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainTabExptabexppanelTabexppanelBase
     */
    protected appDeName: string = 'productplan';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainTabExptabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '产品计划';

    /**
     * 界面UI服务对象
     *
     * @type {ProductPlanUIService}
     * @memberof MainTabExptabexppanelBase
     */  
    public appUIService:ProductPlanUIService = new ProductPlanUIService(this.$store);
    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof MainTabExptabexppanel
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof MainTabExptabexppanel
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof MainTabExptabexppanel
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.productplan) {
            Object.assign(this.context, { srfparentdename: 'ProductPlan', srfparentkey: this.context.productplan });
        }
        super.ctrlCreated();
    }
}