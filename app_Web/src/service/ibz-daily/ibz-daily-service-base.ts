import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 日报服务对象基类
 *
 * @export
 * @class IbzDailyServiceBase
 * @extends {EntityServie}
 */
export default class IbzDailyServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzDailyServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzDailyServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzDailyServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzdaily';
        this.APPDEKEY = 'ibzdailyid';
        this.APPDENAME = 'ibzdailies';
        this.APPDETEXT = 'ibzdailyname';
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
     * @memberof IbzDailyServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzdailies/${context.ibzdaily}/select`,isloading);
            
            return res;
    }

    /**
     * LinkCompleteTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzDailyServiceBase
     */
    public async LinkCompleteTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzDailyServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * searchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzDailyServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibzdailies/searchdefault`,tempData,isloading);
    }
}