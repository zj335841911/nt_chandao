import { AuthService } from '@ibiz-core/auth-service/auth-service-base';


/**
 * 产品权限服务对象基类
 *
 * @export
 * @class ProductAuthServiceBase
 * @extends {AuthService}
 */
export default class ProductAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  ProductAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof ProductAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}