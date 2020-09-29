import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 任务团队服务对象基类
 *
 * @export
 * @class IbztaskteamServiceBase
 * @extends {EntityServie}
 */
export class IbztaskteamServiceBase extends EntityService {

    /**
     * Creates an instance of  IbztaskteamServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbztaskteamServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbztaskteamServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibztaskteam';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibztaskteams';
        this.APPDETEXT = 'account';
        this.APPNAME = 'mob';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbztaskteamServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchDefault ---FETCH
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbztaskteamServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempDefault ---FETCHTEMP
    }
}