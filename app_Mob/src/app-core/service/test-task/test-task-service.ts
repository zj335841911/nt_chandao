import { Http,Util } from '@/ibiz-core/utils';
import {TestTaskServiceBase} from './test-task-service-base';


/**
 * 测试版本服务对象
 *
 * @export
 * @class TestTaskService
 * @extends {TestTaskServiceBase}
 */
export class TestTaskService extends TestTaskServiceBase {

    /**
     * Creates an instance of  TestTaskService.
     * 
     * @param {*} [opts={}]
     * @memberof  TestTaskService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default TestTaskService;