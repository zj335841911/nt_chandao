import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 测试用例服务对象基类
 *
 * @export
 * @class CaseServiceBase
 * @extends {EntityServie}
 */
export default class CaseServiceBase extends EntityService {

    /**
     * Creates an instance of  CaseServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof CaseServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='case';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'cases';
        this.APPDETEXT = 'title';
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
     * @memberof CaseServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/select`,isloading);
        }
            return Http.getInstance().get(`/cases/${context.case}/select`,isloading);
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            return Http.getInstance().get(`/products/${context.product}/cases/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/cases/getdraft`,isloading);
        res.data.case = data.case;
        return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case){
            return Http.getInstance().post(`/products/${context.product}/cases/${context.case}/save`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/cases/${context.case}/save`,data,isloading);
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/cases`,data,isloading);
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
        let res:any = await Http.getInstance().post(`/cases`,data,isloading);
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case){
            return Http.getInstance().post(`/products/${context.product}/cases/${context.case}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/cases/${context.case}/checkkey`,data,isloading);
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case){
            return Http.getInstance().delete(`/products/${context.product}/cases/${context.case}`,isloading);
        }
            return Http.getInstance().delete(`/cases/${context.case}`,isloading);

    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/cases/${context.case}`,isloading);
            return res;

    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case){
            return Http.getInstance().put(`/products/${context.product}/cases/${context.case}`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/cases/${context.case}`,data,isloading);
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/cases/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/cases/fetchdefault`,tempData,isloading);
    }
}