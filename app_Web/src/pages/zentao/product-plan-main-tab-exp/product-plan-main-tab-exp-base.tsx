import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import ProductPlanService from '@/service/product-plan/product-plan-service';
import ProductPlanAuthService from '@/authservice/product-plan/product-plan-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import ProductPlanUIService from '@/uiservice/product-plan/product-plan-ui-service';

/**
 * 计划视图基类
 *
 * @export
 * @class ProductPlanMainTabExpBase
 * @extends {TabExpViewBase}
 */
export class ProductPlanMainTabExpBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductPlanMainTabExpBase
     */
    protected appDeName: string = 'productplan';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductPlanMainTabExpBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductPlanMainTabExpBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {ProductPlanService}
     * @memberof ProductPlanMainTabExpBase
     */
    protected appEntityService: ProductPlanService = new ProductPlanService;

    /**
     * 实体权限服务对象
     *
     * @type ProductPlanUIService
     * @memberof ProductPlanMainTabExpBase
     */
    public appUIService: ProductPlanUIService = new ProductPlanUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductPlanMainTabExpBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductPlanMainTabExpBase
     */
    protected model: any = {
        srfCaption: 'entities.productplan.views.maintabexp.caption',
        srfTitle: 'entities.productplan.views.maintabexp.title',
        srfSubTitle: 'entities.productplan.views.maintabexp.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductPlanMainTabExpBase
     */
    protected containerModel: any = {
        view_tabexppanel: { name: 'tabexppanel', type: 'TABEXPPANEL' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '08ca1b1e6234a0d038e1fbf52478ea7f';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductPlanMainTabExpBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductPlanMainTabExpBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'productplan',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }


}