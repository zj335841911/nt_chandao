import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 我的地盘服务对象基类
 *
 * @export
 * @class IbzMyTerritoryServiceBase
 * @extends {EntityServie}
 */
export default class IbzMyTerritoryServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzMyTerritoryServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzMyTerritoryServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzMyTerritoryServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzmyterritory';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzmyterritories';
        this.APPDETEXT = 'realname';
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
     * @memberof IbzMyTerritoryServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().get(`/ibzmyterritories/${context.ibzmyterritory}/select`,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/ibzmyterritories/select`,tempData,isloading);
    }

    /**
     * FetchWelcome接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async FetchWelcome(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/ibzmyterritories/select`,tempData,isloading);
    }
}