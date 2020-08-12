import AuthService from '../auth-service';

/**
 * 待办事宜表权限服务对象基类
 *
 * @export
 * @class TodoAuthServiceBase
 * @extends {AuthService}
 */
export default class TodoAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  TodoAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TodoAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof TodoAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}