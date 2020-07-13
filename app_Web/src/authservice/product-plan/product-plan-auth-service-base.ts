import AuthService from '../auth-service';

/**
 * 产品计划权限服务对象基类
 *
 * @export
 * @class ProductPlanAuthServiceBase
 * @extends {AuthService}
 */
export default class ProductPlanAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  ProductPlanAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductPlanAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof ProductPlanAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}