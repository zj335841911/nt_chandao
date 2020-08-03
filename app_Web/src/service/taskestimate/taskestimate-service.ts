import { Http,Util } from '@/utils';
import TaskestimateServiceBase from './taskestimate-service-base';


/**
 * 任务预计服务对象
 *
 * @export
 * @class TaskestimateService
 * @extends {TaskestimateServiceBase}
 */
export default class TaskestimateService extends TaskestimateServiceBase {

    /**
     * Creates an instance of  TaskestimateService.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskestimateService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}