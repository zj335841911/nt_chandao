import AuthService from '../auth-service';

/**
 * 任务权限服务对象基类
 *
 * @export
 * @class SubTaskAuthServiceBase
 * @extends {AuthService}
 */
export default class SubTaskAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  SubTaskAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  SubTaskAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof SubTaskAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}