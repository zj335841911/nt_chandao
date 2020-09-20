import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { ViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductAuthService from '@/authservice/product/product-auth-service';
import HtmlViewEngine from '@engine/view/html-view-engine';
import ProductUIService from '@/uiservice/product/product-ui-service';

/**
 * iBiz软件生产管理视图基类
 *
 * @export
 * @class ProductHtmlViewBase
 * @extends {ViewBase}
 */
export class ProductHtmlViewBase extends ViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductHtmlViewBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductHtmlViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductHtmlViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductHtmlViewBase
     */
    protected appEntityService: ProductService = new ProductService;

    /**
     * 实体权限服务对象
     *
     * @type ProductUIService
     * @memberof ProductHtmlViewBase
     */
    public appUIService: ProductUIService = new ProductUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductHtmlViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.htmlview.caption',
        srfTitle: 'entities.product.views.htmlview.title',
        srfSubTitle: 'entities.product.views.htmlview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductHtmlViewBase
     */
    protected containerModel: any = {
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '0846a45e5ffdd4d8f857575cfa955dce';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductHtmlViewBase
     */
    public engine: HtmlViewEngine = new HtmlViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductHtmlViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductHtmlViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }


}