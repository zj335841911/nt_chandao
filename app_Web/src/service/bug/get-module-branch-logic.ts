import { Http,Util } from '@/utils';
import GetModuleBranchLogicBase from './get-module-branch-logic-base';

/**
 * 获取模块的平台
 *
 * @export
 * @class GetModuleBranchLogic
 */
export default class GetModuleBranchLogic extends GetModuleBranchLogicBase{

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