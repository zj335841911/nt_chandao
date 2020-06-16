import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 用例步骤服务对象基类
 *
 * @export
 * @class CaseStepServiceBase
 * @extends {EntityServie}
 */
export default class CaseStepServiceBase extends EntityService {

    /**
     * Creates an instance of  CaseStepServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseStepServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof CaseStepServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='casestep';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'casesteps';
        this.APPDETEXT = 'expect';
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
     * @memberof CaseStepServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case && context.casestep){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}/select`,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/${context.casestep}/select`,isloading);
        }
            return Http.getInstance().get(`/casesteps/${context.casestep}/select`,isloading);
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case && context.casestep){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/${context.casestep}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/casesteps/${context.casestep}`,isloading);
            return res;

    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case && context.casestep){
            return Http.getInstance().put(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().put(`/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/casesteps/${context.casestep}`,data,isloading);
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/getdraft`,isloading);
        }
        if(context.case && true){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/casesteps/getdraft`,isloading);
        res.data.casestep = data.casestep;
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case && context.casestep){
            return Http.getInstance().post(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().post(`/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/casesteps/${context.casestep}/checkkey`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case && context.casestep){
            return Http.getInstance().post(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().post(`/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/casesteps/${context.casestep}/save`,data,isloading);
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/cases/${context.case}/casesteps`,data,isloading);
        }
        if(context.case && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/cases/${context.case}/casesteps`,data,isloading);
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
        let res:any = await Http.getInstance().post(`/casesteps`,data,isloading);
        return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case && context.casestep){
            return Http.getInstance().delete(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().delete(`/cases/${context.case}/casesteps/${context.casestep}`,isloading);
        }
            return Http.getInstance().delete(`/casesteps/${context.casestep}`,isloading);

    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchdefault`,tempData,isloading);
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/casesteps/fetchdefault`,tempData,isloading);
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchdefault`,data,isloading);
        }
        if(context.case && true){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchdefault`,data,isloading);
        }
        return Http.getInstance().get(`/casesteps/fetchdefault`,data,isloading);
    }
}