import { Http,Util } from '@/ibiz-core/utils';
import {GetModuleBranchLogicBase} from './get-module-branch-logic-base';

/**
 * 获取模块的平台
 *
 * @export
 * @class GetModuleBranchLogic
 */
export class GetModuleBranchLogic extends GetModuleBranchLogicBase{

    /**
     * Creates an instance of  GetModuleBranchLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetModuleBranchLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default GetModuleBranchLogic;
