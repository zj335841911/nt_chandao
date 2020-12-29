import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 产品团队服务对象基类
 *
 * @export
 * @class PRODUCTTEAMServiceBase
 * @extends {EntityServie}
 */
export default class PRODUCTTEAMServiceBase extends EntityService {

    /**
     * Creates an instance of  PRODUCTTEAMServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  PRODUCTTEAMServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof PRODUCTTEAMServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='productteam';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'productteams';
        this.APPDETEXT = 'account';
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
     * @memberof PRODUCTTEAMServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/productteams/${context.productteam}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof PRODUCTTEAMServiceBase
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
     * @memberof PRODUCTTEAMServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/productteams/searchdefault`,tempData,isloading);
    }

    /**
     * FetchProductTeamInfo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof PRODUCTTEAMServiceBase
     */
    public async FetchProductTeamInfo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * searchProductTeamInfo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof PRODUCTTEAMServiceBase
     */
    public async searchProductTeamInfo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/productteams/searchproductteaminfo`,tempData,isloading);
    }
}