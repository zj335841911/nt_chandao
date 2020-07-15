import AuthService from '../auth-service';

/**
 * 用例步骤权限服务对象基类
 *
 * @export
 * @class CaseStepAuthServiceBase
 * @extends {AuthService}
 */
export default class CaseStepAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  CaseStepAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseStepAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof CaseStepAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}