import { Http } from '@/utils';
import { Util } from '@/utils';
import IbizproProjectMonthlyServiceBase from './ibizpro-project-monthly-service-base';


/**
 * 项目月报服务对象
 *
 * @export
 * @class IbizproProjectMonthlyService
 * @extends {IbizproProjectMonthlyServiceBase}
 */
export default class IbizproProjectMonthlyService extends IbizproProjectMonthlyServiceBase {

    /**
     * Creates an instance of  IbizproProjectMonthlyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProjectMonthlyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}