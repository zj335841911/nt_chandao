import AuthService from '../auth-service';

/**
 * 我的地盘权限服务对象基类
 *
 * @export
 * @class IbzMyTerritoryAuthServiceBase
 * @extends {AuthService}
 */
export default class IbzMyTerritoryAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  IbzMyTerritoryAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzMyTerritoryAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof IbzMyTerritoryAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}