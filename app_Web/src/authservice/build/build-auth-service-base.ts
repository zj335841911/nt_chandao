import AuthService from '../auth-service';

/**
 * 版本权限服务对象基类
 *
 * @export
 * @class BuildAuthServiceBase
 * @extends {AuthService}
 */
export default class BuildAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  BuildAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  BuildAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof BuildAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}