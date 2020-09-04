import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 需求模块服务对象基类
 *
 * @export
 * @class IBZProStoryModuleServiceBase
 * @extends {EntityServie}
 */
export default class IBZProStoryModuleServiceBase extends EntityService {

    /**
     * Creates an instance of  IBZProStoryModuleServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZProStoryModuleServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IBZProStoryModuleServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzprostorymodule';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzprostorymodules';
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
     * @memberof IBZProStoryModuleServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzprostorymodules/${context.ibzprostorymodule}/select`,isloading);
            
            return res;
    }

    /**
     * SyncFromIBIZ接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZProStoryModuleServiceBase
     */
    public async SyncFromIBIZ(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZProStoryModuleServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}