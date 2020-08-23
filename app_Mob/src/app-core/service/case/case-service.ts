import { Http,Util } from '@/ibiz-core/utils';
import {CaseServiceBase} from './case-service-base';


/**
 * 测试用例服务对象
 *
 * @export
 * @class CaseService
 * @extends {CaseServiceBase}
 */
export class CaseService extends CaseServiceBase {

    /**
     * Creates an instance of  CaseService.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default CaseService;