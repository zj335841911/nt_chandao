import AuthService from '../auth-service';

/**
 * 测试报告权限服务对象基类
 *
 * @export
 * @class TestReportAuthServiceBase
 * @extends {AuthService}
 */
export default class TestReportAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  TestReportAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TestReportAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof TestReportAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}