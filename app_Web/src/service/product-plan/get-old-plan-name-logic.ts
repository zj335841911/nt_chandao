import { Http,Util } from '@/utils';
import GetOldPlanNameLogicBase from './get-old-plan-name-logic-base';

/**
 * 获取上一个计划的名称
 *
 * @export
 * @class GetOldPlanNameLogic
 */
export default class GetOldPlanNameLogic extends GetOldPlanNameLogicBase{

    /**
     * Creates an instance of  GetOldPlanNameLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetOldPlanNameLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}