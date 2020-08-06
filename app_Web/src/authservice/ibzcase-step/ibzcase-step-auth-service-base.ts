import AuthService from '../auth-service';

/**
 * 用例步骤权限服务对象基类
 *
 * @export
 * @class IBZCaseStepAuthServiceBase
 * @extends {AuthService}
 */
export default class IBZCaseStepAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  IBZCaseStepAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZCaseStepAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof IBZCaseStepAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}