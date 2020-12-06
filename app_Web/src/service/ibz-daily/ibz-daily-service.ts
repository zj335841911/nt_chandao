import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzDailyServiceBase from './ibz-daily-service-base';


/**
 * 日报服务对象
 *
 * @export
 * @class IbzDailyService
 * @extends {IbzDailyServiceBase}
 */
export default class IbzDailyService extends IbzDailyServiceBase {

    /**
     * Creates an instance of  IbzDailyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzDailyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}