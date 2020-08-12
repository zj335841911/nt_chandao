import AuthService from '../auth-service';

/**
 * 测试用例权限服务对象基类
 *
 * @export
 * @class CaseAuthServiceBase
 * @extends {AuthService}
 */
export default class CaseAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  CaseAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof CaseAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}