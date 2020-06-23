import { Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { TabExpPanel } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import TestTabExpViewtabexppanelService from './test-tab-exp-viewtabexppanel-tabexppanel-service';


/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanel
 * @extends {TestTabExpViewtabexppanelBase}
 */
export class TestTabExpViewtabexppanelBase extends TabExpPanel {

    /**
     * 建构部件服务对象
     *
     * @type {TestTabExpViewtabexppanelService}
     * @memberof TestTabExpViewtabexppanel
     */
    public service: TestTabExpViewtabexppanelService = new TestTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof TestTabExpViewtabexppanel
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });
    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof TestTabExpViewtabexppanel
     */
    protected isInit: any = {
        tabviewpanel2:  true ,
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
        tabviewpanel5:  false ,
        tabviewpanel6:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof TestTabExpViewtabexppanel
     */
    protected activatedTabViewPanel: string = 'tabviewpanel2';

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof TestTabExpViewtabexppanel
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.product) {
            Object.assign(this.context, { srfparentdename: 'Product', srfparentkey: this.context.product });
        }
        super.ctrlCreated();
    }
}