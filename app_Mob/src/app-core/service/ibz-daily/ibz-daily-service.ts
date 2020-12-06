import { Http,Util } from '@/ibiz-core/utils';
import {IbzDailyServiceBase} from './ibz-daily-service-base';


/**
 * 日报服务对象
 *
 * @export
 * @class IbzDailyService
 * @extends {IbzDailyServiceBase}
 */
export class IbzDailyService extends IbzDailyServiceBase {

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
// 默认导出
export default IbzDailyService;