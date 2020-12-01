import { Http,Util } from '@/ibiz-core/utils';
import {IbzWeeklyServiceBase} from './ibz-weekly-service-base';


/**
 * 周报服务对象
 *
 * @export
 * @class IbzWeeklyService
 * @extends {IbzWeeklyServiceBase}
 */
export class IbzWeeklyService extends IbzWeeklyServiceBase {

    /**
     * Creates an instance of  IbzWeeklyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzWeeklyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IbzWeeklyService;