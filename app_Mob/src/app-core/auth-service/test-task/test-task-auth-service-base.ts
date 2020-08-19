import { AuthService } from '@ibiz-core/auth-service/auth-service-base';


/**
 * 测试版本权限服务对象基类
 *
 * @export
 * @class TestTaskAuthServiceBase
 * @extends {AuthService}
 */
export default class TestTaskAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  TestTaskAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TestTaskAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof TestTaskAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}