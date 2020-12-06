import { Http,Util } from '@/ibiz-core/utils';
import {IbzMonthlyServiceBase} from './ibz-monthly-service-base';


/**
 * 月报服务对象
 *
 * @export
 * @class IbzMonthlyService
 * @extends {IbzMonthlyServiceBase}
 */
export class IbzMonthlyService extends IbzMonthlyServiceBase {

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
// 默认导出
export default IbzMonthlyService;