import { AuthService } from '@ibiz-core/auth-service/auth-service-base';


/**
 * 任务团队权限服务对象基类
 *
 * @export
 * @class TaskTeamAuthServiceBase
 * @extends {AuthService}
 */
export default class TaskTeamAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  TaskTeamAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskTeamAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof TaskTeamAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}