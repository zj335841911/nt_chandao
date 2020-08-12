import AuthService from '../auth-service';

/**
 * 群组权限服务对象基类
 *
 * @export
 * @class GroupAuthServiceBase
 * @extends {AuthService}
 */
export default class GroupAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  GroupAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GroupAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof GroupAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}