import AuthService from '../auth-service';

/**
 * 动态数据看板权限服务对象基类
 *
 * @export
 * @class DynaDashboardAuthServiceBase
 * @extends {AuthService}
 */
export default class DynaDashboardAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  DynaDashboardAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  DynaDashboardAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof DynaDashboardAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}