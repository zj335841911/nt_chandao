import { Http,Util } from '@/utils';
import GetUserRoleLogicBase from './get-user-role-logic-base';

/**
 * 获取成员角色
 *
 * @export
 * @class GetUserRoleLogic
 */
export default class GetUserRoleLogic extends GetUserRoleLogicBase{

    /**
     * Creates an instance of  GetUserRoleLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetUserRoleLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}