import { Http } from '@/utils';
import { Util } from '@/utils';
import IbizproProductDailyServiceBase from './ibizpro-product-daily-service-base';


/**
 * 产品日报服务对象
 *
 * @export
 * @class IbizproProductDailyService
 * @extends {IbizproProductDailyServiceBase}
 */
export default class IbizproProductDailyService extends IbizproProductDailyServiceBase {

    /**
     * Creates an instance of  IbizproProductDailyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProductDailyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}