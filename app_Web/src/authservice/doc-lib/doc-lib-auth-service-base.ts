import AuthService from '../auth-service';

/**
 * 文档库权限服务对象基类
 *
 * @export
 * @class DocLibAuthServiceBase
 * @extends {AuthService}
 */
export default class DocLibAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  DocLibAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  DocLibAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof DocLibAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}