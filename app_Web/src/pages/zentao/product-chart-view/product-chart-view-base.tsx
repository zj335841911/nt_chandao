import { Subject } from 'rxjs';
import { ChartViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductAuthService from '@/authservice/product/product-auth-service';
import ChartViewEngine from '@engine/view/chart-view-engine';
import ProductUIService from '@/uiservice/product/product-ui-service';

/**
 * 产品图表视图视图基类
 *
 * @export
 * @class ProductChartViewBase
 * @extends {ChartViewBase}
 */
export class ProductChartViewBase extends ChartViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductChartViewBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductChartViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductChartViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductChartViewBase
     */
    protected appEntityService: ProductService = new ProductService;

    /**
     * 实体权限服务对象
     *
     * @type ProductUIService
     * @memberof ProductChartViewBase
     */
    public appUIService: ProductUIService = new ProductUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductChartViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductChartViewBase
	 */
    protected customViewParams: any = {
        'n_status_isnotnull': { isRawValue: true, value: '' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductChartViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.chartview.caption',
        srfTitle: 'entities.product.views.chartview.title',
        srfSubTitle: 'entities.product.views.chartview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductChartViewBase
     */
    protected containerModel: any = {
        view_chart: { name: 'chart', type: 'CHART' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '2a60d576ef50d63f5e967cef38bc8fed';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductChartViewBase
     */
    public engine: ChartViewEngine = new ChartViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductChartViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            chart: this.$refs.chart,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * chart 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductChartViewBase
     */
    public chart_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }

    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductChartViewBase
     */
    public chart_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }




}