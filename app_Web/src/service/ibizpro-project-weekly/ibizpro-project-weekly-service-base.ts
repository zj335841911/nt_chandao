import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 项目周报服务对象基类
 *
 * @export
 * @class IbizproProjectWeeklyServiceBase
 * @extends {EntityServie}
 */
export default class IbizproProjectWeeklyServiceBase extends EntityService {

    /**
     * Creates an instance of  IbizproProjectWeeklyServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProjectWeeklyServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbizproProjectWeeklyServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibizproprojectweekly';
        this.APPDEKEY = 'projectweeklyid';
        this.APPDENAME = 'ibizproprojectweeklies';
        this.APPDETEXT = 'projectweeklyname';
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
     * @memberof IbizproProjectWeeklyServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibizproprojectweeklies/${context.ibizproprojectweekly}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbizproProjectWeeklyServiceBase
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
     * @memberof IbizproProjectWeeklyServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibizproprojectweeklies/searchdefault`,tempData,isloading);
    }
}