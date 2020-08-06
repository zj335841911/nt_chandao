import { Http,Util } from '@/utils';
import BugServiceBase from './bug-service-base';


/**
 * Bug服务对象
 *
 * @export
 * @class BugService
 * @extends {BugServiceBase}
 */
export default class BugService extends BugServiceBase {

    /**
     * Creates an instance of  BugService.
     * 
     * @param {*} [opts={}]
     * @memberof  BugService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}