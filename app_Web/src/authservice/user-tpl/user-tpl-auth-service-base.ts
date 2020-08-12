import AuthService from '../auth-service';

/**
 * 用户模板权限服务对象基类
 *
 * @export
 * @class UserTplAuthServiceBase
 * @extends {AuthService}
 */
export default class UserTplAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  UserTplAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  UserTplAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof UserTplAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}