import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 汇报服务对象基类
 *
 * @export
 * @class IbzReportlyServiceBase
 * @extends {EntityServie}
 */
export default class IbzReportlyServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzReportlyServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzReportlyServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzReportlyServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzreportly';
        this.APPDEKEY = 'ibzreportlyid';
        this.APPDENAME = 'ibzreportlies';
        this.APPDETEXT = 'ibzreportlyname';
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
     * @memberof IbzReportlyServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzreportlies/${context.ibzreportly}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzReportlyServiceBase
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
     * @memberof IbzReportlyServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibzreportlies/searchdefault`,tempData,isloading);
    }
}