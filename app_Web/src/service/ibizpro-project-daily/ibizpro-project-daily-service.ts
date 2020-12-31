import { Http } from '@/utils';
import { Util } from '@/utils';
import IbizproProjectDailyServiceBase from './ibizpro-project-daily-service-base';


/**
 * 项目日报服务对象
 *
 * @export
 * @class IbizproProjectDailyService
 * @extends {IbizproProjectDailyServiceBase}
 */
export default class IbizproProjectDailyService extends IbizproProjectDailyServiceBase {

    /**
     * Creates an instance of  IbizproProjectDailyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProjectDailyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}