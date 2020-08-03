import { Http,Util } from '@/utils';
import IBZTaskestimateServiceBase from './ibztaskestimate-service-base';


/**
 * 任务预计服务对象
 *
 * @export
 * @class IBZTaskestimateService
 * @extends {IBZTaskestimateServiceBase}
 */
export default class IBZTaskestimateService extends IBZTaskestimateServiceBase {

    /**
     * Creates an instance of  IBZTaskestimateService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZTaskestimateService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}