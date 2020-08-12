import AuthService from '../auth-service';

/**
 * 文档权限服务对象基类
 *
 * @export
 * @class IBzDocAuthServiceBase
 * @extends {AuthService}
 */
export default class IBzDocAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  IBzDocAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBzDocAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof IBzDocAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}