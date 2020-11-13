import { Http } from '@/utils';
import { Util } from '@/utils';
import EmpLoyeeloadServiceBase from './emp-loyeeload-service-base';


/**
 * 员工负载表服务对象
 *
 * @export
 * @class EmpLoyeeloadService
 * @extends {EmpLoyeeloadServiceBase}
 */
export default class EmpLoyeeloadService extends EmpLoyeeloadServiceBase {

    /**
     * Creates an instance of  EmpLoyeeloadService.
     * 
     * @param {*} [opts={}]
     * @memberof  EmpLoyeeloadService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}