import { Http,Util } from '@/utils';
import SubProductPlanServiceBase from './sub-product-plan-service-base';


/**
 * 产品计划服务对象
 *
 * @export
 * @class SubProductPlanService
 * @extends {SubProductPlanServiceBase}
 */
export default class SubProductPlanService extends SubProductPlanServiceBase {

    /**
     * Creates an instance of  SubProductPlanService.
     * 
     * @param {*} [opts={}]
     * @memberof  SubProductPlanService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}