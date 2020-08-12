import AuthService from '../auth-service';

/**
 * 任务模块权限服务对象基类
 *
 * @export
 * @class ProjectModuleAuthServiceBase
 * @extends {AuthService}
 */
export default class ProjectModuleAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  ProjectModuleAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectModuleAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof ProjectModuleAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}