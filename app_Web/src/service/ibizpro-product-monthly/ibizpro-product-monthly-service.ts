import { Http } from '@/utils';
import { Util } from '@/utils';
import IbizproProductMonthlyServiceBase from './ibizpro-product-monthly-service-base';


/**
 * 产品月报服务对象
 *
 * @export
 * @class IbizproProductMonthlyService
 * @extends {IbizproProductMonthlyServiceBase}
 */
export default class IbizproProductMonthlyService extends IbizproProductMonthlyServiceBase {

    /**
     * Creates an instance of  IbizproProductMonthlyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProductMonthlyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}