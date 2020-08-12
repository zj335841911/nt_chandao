import AuthService from '../auth-service';

/**
 * 套件用例权限服务对象基类
 *
 * @export
 * @class SuiteCaseAuthServiceBase
 * @extends {AuthService}
 */
export default class SuiteCaseAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  SuiteCaseAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  SuiteCaseAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof SuiteCaseAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}