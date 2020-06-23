import { Http,Util } from '@/utils';
import CaseServiceBase from './case-service-base';


/**
 * 测试用例服务对象
 *
 * @export
 * @class CaseService
 * @extends {CaseServiceBase}
 */
export default class CaseService extends CaseServiceBase {

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