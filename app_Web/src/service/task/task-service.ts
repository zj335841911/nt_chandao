import { Http,Util } from '@/utils';
import TaskServiceBase from './task-service-base';


/**
 * 任务服务对象
 *
 * @export
 * @class TaskService
 * @extends {TaskServiceBase}
 */
export default class TaskService extends TaskServiceBase {

    /**
     * Creates an instance of  TaskService.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}