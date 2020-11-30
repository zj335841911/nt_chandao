import { Http } from '@/utils';
import { Util } from '@/utils';
import IBZWEEKLYServiceBase from './ibzweekly-service-base';


/**
 * 周报服务对象
 *
 * @export
 * @class IBZWEEKLYService
 * @extends {IBZWEEKLYServiceBase}
 */
export default class IBZWEEKLYService extends IBZWEEKLYServiceBase {

    /**
     * Creates an instance of  IBZWEEKLYService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZWEEKLYService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}