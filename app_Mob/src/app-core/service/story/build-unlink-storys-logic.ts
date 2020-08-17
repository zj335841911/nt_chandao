import { Http,Util } from '@/ibiz-core/utils';
import {BuildUnlinkStorysLogicBase} from './build-unlink-storys-logic-base';

/**
 * buildUnlinkStorys
 *
 * @export
 * @class BuildUnlinkStorysLogic
 */
export class BuildUnlinkStorysLogic extends BuildUnlinkStorysLogicBase{

    /**
     * Creates an instance of  BuildUnlinkStorysLogic
     * 
     * @param {*} [opts={}]
     * @memberof  BuildUnlinkStorysLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default BuildUnlinkStorysLogic;
