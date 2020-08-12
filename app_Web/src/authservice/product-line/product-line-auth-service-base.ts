import AuthService from '../auth-service';

/**
 * 产品线权限服务对象基类
 *
 * @export
 * @class ProductLineAuthServiceBase
 * @extends {AuthService}
 */
export default class ProductLineAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  ProductLineAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductLineAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof ProductLineAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}