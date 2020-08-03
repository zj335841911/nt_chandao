import AuthService from '../auth-service';

/**
 * 任务预计权限服务对象基类
 *
 * @export
 * @class IBZTaskestimateAuthServiceBase
 * @extends {AuthService}
 */
export default class IBZTaskestimateAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  IBZTaskestimateAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZTaskestimateAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof IBZTaskestimateAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}