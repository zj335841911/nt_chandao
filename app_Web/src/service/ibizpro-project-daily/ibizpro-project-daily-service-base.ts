import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 项目日报服务对象基类
 *
 * @export
 * @class IbizproProjectDailyServiceBase
 * @extends {EntityServie}
 */
export default class IbizproProjectDailyServiceBase extends EntityService {

    /**
     * Creates an instance of  IbizproProjectDailyServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProjectDailyServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbizproProjectDailyServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibizproprojectdaily';
        this.APPDEKEY = 'ibizproprojectdailyid';
        this.APPDENAME = 'ibizproprojectdailies';
        this.APPDETEXT = 'ibizproprojectdailyname';
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
     * @memberof IbizproProjectDailyServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibizproprojectdailies/${context.ibizproprojectdaily}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbizproProjectDailyServiceBase
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
     * @memberof IbizproProjectDailyServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibizproprojectdailies/searchdefault`,tempData,isloading);
    }
}