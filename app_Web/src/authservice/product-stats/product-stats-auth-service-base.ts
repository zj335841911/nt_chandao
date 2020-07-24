import AuthService from '../auth-service';

/**
 * 产品统计权限服务对象基类
 *
 * @export
 * @class ProductStatsAuthServiceBase
 * @extends {AuthService}
 */
export default class ProductStatsAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  ProductStatsAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductStatsAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof ProductStatsAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}