import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 月报服务对象基类
 *
 * @export
 * @class IbzMonthlyServiceBase
 * @extends {EntityServie}
 */
export default class IbzMonthlyServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzMonthlyServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzMonthlyServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzMonthlyServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzmonthly';
        this.APPDEKEY = 'ibzmonthlyid';
        this.APPDENAME = 'ibzmonthlies';
        this.APPDETEXT = 'ibzmonthlyname';
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
     * @memberof IbzMonthlyServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzmonthlies/${context.ibzmonthly}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMonthlyServiceBase
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
     * @memberof IbzMonthlyServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibzmonthlies/searchdefault`,tempData,isloading);
    }
}