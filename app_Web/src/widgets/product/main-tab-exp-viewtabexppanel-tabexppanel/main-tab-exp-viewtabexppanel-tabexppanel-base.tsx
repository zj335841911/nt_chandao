import { Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { TabExpPanel } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import MainTabExpViewtabexppanelService from './main-tab-exp-viewtabexppanel-tabexppanel-service';


/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanel
 * @extends {MainTabExpViewtabexppanelTABEXPPANELBase}
 */
export class MainTabExpViewtabexppanelTABEXPPANELBase extends TabExpPanel {

    /**
     * 建构部件服务对象
     *
     * @type {MainTabExpViewtabexppanelService}
     * @memberof MainTabExpViewtabexppanel
     */
    public service: MainTabExpViewtabexppanelService = new MainTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof MainTabExpViewtabexppanel
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });
    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof MainTabExpViewtabexppanel
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
        tabviewpanel9:  false ,
        tabviewpanel5:  false ,
        tabviewpanel8:  false ,
        tabviewpanel7:  false ,
        tabviewpanel6:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanel
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof MainTabExpViewtabexppanel
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.product) {
            Object.assign(this.context, { srfparentdename: 'Product', srfparentkey: this.context.product });
        }
        super.ctrlCreated();
    }
}