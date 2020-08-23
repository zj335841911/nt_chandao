import { Http,Util } from '@/ibiz-core/utils';
import {IBZCaseStepServiceBase} from './ibzcase-step-service-base';


/**
 * 用例步骤服务对象
 *
 * @export
 * @class IBZCaseStepService
 * @extends {IBZCaseStepServiceBase}
 */
export class IBZCaseStepService extends IBZCaseStepServiceBase {

    /**
     * Creates an instance of  IBZCaseStepService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZCaseStepService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IBZCaseStepService;