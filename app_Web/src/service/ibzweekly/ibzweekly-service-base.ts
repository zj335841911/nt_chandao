import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 周报服务对象基类
 *
 * @export
 * @class IBZWEEKLYServiceBase
 * @extends {EntityServie}
 */
export default class IBZWEEKLYServiceBase extends EntityService {

    /**
     * Creates an instance of  IBZWEEKLYServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZWEEKLYServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IBZWEEKLYServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzweekly';
        this.APPDEKEY = 'ibzweeklyid';
        this.APPDENAME = 'ibzweeklies';
        this.APPDETEXT = 'ibzweeklyname';
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
     * @memberof IBZWEEKLYServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzweeklies/${context.ibzweekly}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZWEEKLYServiceBase
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
     * @memberof IBZWEEKLYServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibzweeklies/searchdefault`,tempData,isloading);
    }
}