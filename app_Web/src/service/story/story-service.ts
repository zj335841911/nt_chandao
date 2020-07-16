import { Http,Util } from '@/utils';
import StoryServiceBase from './story-service-base';


/**
 * 需求服务对象
 *
 * @export
 * @class StoryService
 * @extends {StoryServiceBase}
 */
export default class StoryService extends StoryServiceBase {

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