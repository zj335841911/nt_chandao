import AuthService from '../auth-service';

/**
 * 产品生命周期权限服务对象基类
 *
 * @export
 * @class ProductLifeAuthServiceBase
 * @extends {AuthService}
 */
export default class ProductLifeAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  ProductLifeAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductLifeAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof ProductLifeAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}