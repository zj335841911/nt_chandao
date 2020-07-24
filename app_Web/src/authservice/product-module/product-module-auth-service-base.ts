import AuthService from '../auth-service';

/**
 * 需求模块权限服务对象基类
 *
 * @export
 * @class ProductModuleAuthServiceBase
 * @extends {AuthService}
 */
export default class ProductModuleAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  ProductModuleAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductModuleAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof ProductModuleAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}