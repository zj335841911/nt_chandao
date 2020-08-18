import { Http,Util } from '@/ibiz-core/utils';
import {TaskServiceBase} from './task-service-base';


/**
 * 任务服务对象
 *
 * @export
 * @class TaskService
 * @extends {TaskServiceBase}
 */
export class TaskService extends TaskServiceBase {

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
// 默认导出
export default TaskService;