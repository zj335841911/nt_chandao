import AuthService from '../auth-service';

/**
 * 测试运行权限服务对象基类
 *
 * @export
 * @class TestRunAuthServiceBase
 * @extends {AuthService}
 */
export default class TestRunAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  TestRunAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TestRunAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof TestRunAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}