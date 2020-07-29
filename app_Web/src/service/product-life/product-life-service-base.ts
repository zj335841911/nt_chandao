import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 产品生命周期服务对象基类
 *
 * @export
 * @class ProductLifeServiceBase
 * @extends {EntityServie}
 */
export default class ProductLifeServiceBase extends EntityService {

    /**
     * Creates an instance of  ProductLifeServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductLifeServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProductLifeServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='productlife';
        this.APPDEKEY = 'productlifeid';
        this.APPDENAME = 'productlives';
        this.APPDETEXT = 'productlifename';
        this.APPNAME = 'web';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * FetchGetRoadmap接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductLifeServiceBase
     */
    public async FetchGetRoadmap(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/productlives/fetchgetroadmap`,tempData,isloading);
    }

    /**
     * FetchRoadMapYear接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductLifeServiceBase
     */
    public async FetchRoadMapYear(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/productlives/fetchroadmapyear`,tempData,isloading);
    }

    /**
     * FetchGetRoadmapS接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductLifeServiceBase
     */
    public async FetchGetRoadmapS(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/productlives/fetchgetroadmaps`,tempData,isloading);
    }

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductLifeServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().get(`/productlives/${context.productlife}/select`,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductLifeServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/productlives/select`,tempData,isloading);
    }
}