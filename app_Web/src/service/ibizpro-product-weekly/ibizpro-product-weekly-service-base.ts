import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 产品周报服务对象基类
 *
 * @export
 * @class IbizproProductWeeklyServiceBase
 * @extends {EntityServie}
 */
export default class IbizproProductWeeklyServiceBase extends EntityService {

    /**
     * Creates an instance of  IbizproProductWeeklyServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProductWeeklyServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbizproProductWeeklyServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibizproproductweekly';
        this.APPDEKEY = 'ibizpro_productweeklyid';
        this.APPDENAME = 'ibizproproductweeklies';
        this.APPDETEXT = 'ibizproproductweeklyname';
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
     * @memberof IbizproProductWeeklyServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibizproproductweeklies/${context.ibizproproductweekly}/select`,isloading);
            
            return res;
    }

    /**
     * SumProductWeekly接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbizproProductWeeklyServiceBase
     */
    public async SumProductWeekly(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbizproProductWeeklyServiceBase
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
     * @memberof IbizproProductWeeklyServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibizproproductweeklies/searchdefault`,tempData,isloading);
    }
}