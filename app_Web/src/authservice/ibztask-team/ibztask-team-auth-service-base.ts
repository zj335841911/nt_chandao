import AuthService from '../auth-service';

/**
 * 任务团队权限服务对象基类
 *
 * @export
 * @class IBZTaskTeamAuthServiceBase
 * @extends {AuthService}
 */
export default class IBZTaskTeamAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  IBZTaskTeamAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZTaskTeamAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof IBZTaskTeamAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}