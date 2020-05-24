import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 操作历史服务对象基类
 *
 * @export
 * @class HistoryServiceBase
 * @extends {EntityServie}
 */
export default class HistoryServiceBase extends EntityService {

    /**
     * Creates an instance of  HistoryServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  HistoryServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof HistoryServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='history';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'histories';
        this.APPDETEXT = 'diff';
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
     * @memberof HistoryServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.action && context.history){
            return Http.getInstance().get(`/actions/${context.action}/histories/${context.history}/select`,isloading);
        }
            return Http.getInstance().get(`/histories/${context.history}/select`,isloading);
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof HistoryServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.action && context.history){
            return Http.getInstance().put(`/actions/${context.action}/histories/${context.history}`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/histories/${context.history}`,data,isloading);
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof HistoryServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.action && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/actions/${context.action}/histories`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/histories`,data,isloading);
        return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof HistoryServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.action && context.history){
            return Http.getInstance().get(`/actions/${context.action}/histories/${context.history}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/histories/${context.history}`,isloading);
            return res;

    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof HistoryServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.action && context.history){
            return Http.getInstance().post(`/actions/${context.action}/histories/${context.history}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/histories/${context.history}/checkkey`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof HistoryServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.action && context.history){
            return Http.getInstance().post(`/actions/${context.action}/histories/${context.history}/save`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/histories/${context.history}/save`,data,isloading);
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof HistoryServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.action && context.history){
            return Http.getInstance().delete(`/actions/${context.action}/histories/${context.history}`,isloading);
        }
            return Http.getInstance().delete(`/histories/${context.history}`,isloading);

    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof HistoryServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.action && true){
            return Http.getInstance().get(`/actions/${context.action}/histories/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/histories/getdraft`,isloading);
        res.data.history = data.history;
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof HistoryServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.action && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/actions/${context.action}/histories/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/histories/fetchdefault`,tempData,isloading);
    }
}