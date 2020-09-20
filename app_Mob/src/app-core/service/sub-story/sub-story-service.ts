import { Http,Util } from '@/ibiz-core/utils';
import {SubStoryServiceBase} from './sub-story-service-base';


/**
 * 需求服务对象
 *
 * @export
 * @class SubStoryService
 * @extends {SubStoryServiceBase}
 */
export class SubStoryService extends SubStoryServiceBase {

    /**
     * Creates an instance of  SubStoryService.
     * 
     * @param {*} [opts={}]
     * @memberof  SubStoryService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default SubStoryService;