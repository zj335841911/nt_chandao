import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 用例库模块服务对象基类
 *
 * @export
 * @class IbzLibModuleServiceBase
 * @extends {EntityServie}
 */
export default class IbzLibModuleServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzLibModuleServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzLibModuleServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzLibModuleServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzlibmodule';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzlibmodules';
        this.APPDETEXT = 'name';
        this.APPNAME = 'web';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzLibModuleServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzlibmodules/${context.ibzlibmodule}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzLibModuleServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchRoot_NoBranch接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzLibModuleServiceBase
     */
    public async FetchRoot_NoBranch(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}