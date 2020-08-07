import AuthService from '../auth-service';

/**
 * 公司权限服务对象基类
 *
 * @export
 * @class CompanyAuthServiceBase
 * @extends {AuthService}
 */
export default class CompanyAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  CompanyAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  CompanyAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof CompanyAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}