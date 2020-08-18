import { Http,Util } from '@/ibiz-core/utils';
import {StoryServiceBase} from './story-service-base';


/**
 * 需求服务对象
 *
 * @export
 * @class StoryService
 * @extends {StoryServiceBase}
 */
export class StoryService extends StoryServiceBase {

    /**
     * Creates an instance of  StoryService.
     * 
     * @param {*} [opts={}]
     * @memberof  StoryService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default StoryService;