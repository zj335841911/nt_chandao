import { AuthService } from '@ibiz-core/auth-service/auth-service-base';


/**
 * Bug权限服务对象基类
 *
 * @export
 * @class BugAuthServiceBase
 * @extends {AuthService}
 */
export default class BugAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  BugAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  BugAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof BugAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}