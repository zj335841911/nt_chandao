import { AuthService } from '@ibiz-core/auth-service/auth-service-base';


/**
 * 项目统计权限服务对象基类
 *
 * @export
 * @class ProjectStatsAuthServiceBase
 * @extends {AuthService}
 */
export default class ProjectStatsAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  ProjectStatsAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectStatsAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof ProjectStatsAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}