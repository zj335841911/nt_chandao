import { Http,Util } from '@/utils';
import EmployEeloadServiceBase from './employ-eeload-service-base';


/**
 * 员工负载表服务对象
 *
 * @export
 * @class EmployEeloadService
 * @extends {EmployEeloadServiceBase}
 */
export default class EmployEeloadService extends EmployEeloadServiceBase {

    /**
     * Creates an instance of  EmployEeloadService.
     * 
     * @param {*} [opts={}]
     * @memberof  EmployEeloadService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}