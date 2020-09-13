import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProductStatusChartMobBModel } from '@/app-core/ctrl-model/product/product-status-chart-mob-b-portlet-model';


/**
 * ProductStatusChartMobB 部件服务对象
 *
 * @export
 * @class ProductStatusChartMobBService
 * @extends {PortletServiceBase}
 */
export class ProductStatusChartMobBService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProductStatusChartMobBModel}
     * @memberof ControlServiceBase
     */
    protected model: ProductStatusChartMobBModel = new ProductStatusChartMobBModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStatusChartMobBService
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProductStatusChartMobBService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProductStatusChartMobBService;