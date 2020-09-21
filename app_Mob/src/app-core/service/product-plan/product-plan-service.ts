import { Http,Util } from '@/ibiz-core/utils';
import {ProductPlanServiceBase} from './product-plan-service-base';


/**
 * 产品计划服务对象
 *
 * @export
 * @class ProductPlanService
 * @extends {ProductPlanServiceBase}
 */
export class ProductPlanService extends ProductPlanServiceBase {

    /**
     * Creates an instance of  ProductPlanService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductPlanService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default ProductPlanService;