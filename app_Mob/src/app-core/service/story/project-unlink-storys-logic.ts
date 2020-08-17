import { Http,Util } from '@/ibiz-core/utils';
import {ProjectUnlinkStorysLogicBase} from './project-unlink-storys-logic-base';

/**
 * projectUnlinkStorys
 *
 * @export
 * @class ProjectUnlinkStorysLogic
 */
export class ProjectUnlinkStorysLogic extends ProjectUnlinkStorysLogicBase{

    /**
     * Creates an instance of  ProjectUnlinkStorysLogic
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectUnlinkStorysLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default ProjectUnlinkStorysLogic;
