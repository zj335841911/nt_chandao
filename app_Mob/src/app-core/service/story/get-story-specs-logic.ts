import { Http,Util } from '@/ibiz-core/utils';
import {GetStorySpecsLogicBase} from './get-story-specs-logic-base';

/**
 * GetStorySpecs
 *
 * @export
 * @class GetStorySpecsLogic
 */
export class GetStorySpecsLogic extends GetStorySpecsLogicBase{

    /**
     * Creates an instance of  GetStorySpecsLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetStorySpecsLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default GetStorySpecsLogic;
