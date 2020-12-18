import AuthService from '../auth-service';

/**
 * 测试用例统计权限服务对象基类
 *
 * @export
 * @class IBZ_CASESTATSAuthServiceBase
 * @extends {AuthService}
 */
export default class IBZ_CASESTATSAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  IBZ_CASESTATSAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZ_CASESTATSAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof IBZ_CASESTATSAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        let copyDefaultOPPrivs:any = JSON.parse(JSON.stringify(curDefaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        // 统一资源优先
        Object.keys(curDefaultOPPrivs).forEach((name:string) => {
            if(this.sysOPPrivsMap.get(name) && copyDefaultOPPrivs[name] === 0){
                curDefaultOPPrivs[name] = copyDefaultOPPrivs[name];
            }
        });
        return curDefaultOPPrivs;
    }

}