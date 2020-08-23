import { Http,Util } from '@/ibiz-core/utils';
import {GetTODOTitleLogicBase} from './get-todotitle-logic-base';

/**
 * 获取待办名称
 *
 * @export
 * @class GetTODOTitleLogic
 */
export class GetTODOTitleLogic extends GetTODOTitleLogicBase{

    /**
     * Creates an instance of  GetTODOTitleLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetTODOTitleLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default GetTODOTitleLogic;
