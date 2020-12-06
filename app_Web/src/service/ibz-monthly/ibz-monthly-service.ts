import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzMonthlyServiceBase from './ibz-monthly-service-base';


/**
 * 月报服务对象
 *
 * @export
 * @class IbzMonthlyService
 * @extends {IbzMonthlyServiceBase}
 */
export default class IbzMonthlyService extends IbzMonthlyServiceBase {

    /**
     * Creates an instance of  IbzMonthlyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzMonthlyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}