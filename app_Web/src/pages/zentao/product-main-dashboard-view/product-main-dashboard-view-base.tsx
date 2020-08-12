import { Subject } from 'rxjs';
import { DashboardViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductAuthService from '@/authservice/product/product-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import ProductUIService from '@/uiservice/product/product-ui-service';

/**
 * 产品数据看板视图视图基类
 *
 * @export
 * @class ProductMainDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class ProductMainDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductMainDashboardViewBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductMainDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductMainDashboardViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductMainDashboardViewBase
     */
    protected appEntityService: ProductService = new ProductService;

    /**
     * 实体权限服务对象
     *
     * @type ProductUIService
     * @memberof ProductMainDashboardViewBase
     */
    public appUIService: ProductUIService = new ProductUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductMainDashboardViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.maindashboardview.caption',
        srfTitle: 'entities.product.views.maindashboardview.title',
        srfSubTitle: 'entities.product.views.maindashboardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductMainDashboardViewBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = 'bc36be2ee4a78e69c13665a8ad03ab6a';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductMainDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}