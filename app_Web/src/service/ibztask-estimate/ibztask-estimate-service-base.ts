import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 任务预计服务对象基类
 *
 * @export
 * @class IBZTaskEstimateServiceBase
 * @extends {EntityServie}
 */
export default class IBZTaskEstimateServiceBase extends EntityService {

    /**
     * Creates an instance of  IBZTaskEstimateServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZTaskEstimateServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IBZTaskEstimateServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibztaskestimate';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibztaskestimates';
        this.APPDETEXT = 'id';
        this.APPNAME = 'web';
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
     * @memberof IBZTaskEstimateServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZTaskEstimateServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}