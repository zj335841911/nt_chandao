import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 用例库服务对象基类
 *
 * @export
 * @class IbzLibServiceBase
 * @extends {EntityServie}
 */
export default class IbzLibServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzLibServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzLibServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzLibServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzlib';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzlibs';
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
     * @memberof IbzLibServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzlibs/${context.ibzlib}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzLibServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}