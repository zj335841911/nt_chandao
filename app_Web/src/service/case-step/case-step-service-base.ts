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
        if(context.product && context.story && context.case && context.casestep){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/select`,isloading);
        }
        if(context.story && context.case && context.casestep){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/select`,isloading);
        }
        if(context.product && context.case && context.casestep){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}/select`,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/${context.casestep}/select`,isloading);
        }
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
        if(context.product && context.story && context.case && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps`,data,isloading);
            return res;
        }
        if(context.story && context.case && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/casesteps`,data,isloading);
            return res;
        }
        if(context.product && context.case && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/casesteps`,data,isloading);
            return res;
        }
        if(context.case && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/cases/${context.case}/casesteps`,data,isloading);
            return res;
        }
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
        if(context.product && context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
            return res;
        }
        if(context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
            return res;
        }
        if(context.product && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
            return res;
        }
        if(context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
            return res;
        }
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
        if(context.product && context.story && context.case && context.casestep){
            return Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
        }
        if(context.story && context.case && context.casestep){
            return Http.getInstance().delete(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
        }
        if(context.product && context.case && context.casestep){
            return Http.getInstance().delete(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().delete(`/cases/${context.case}/casesteps/${context.casestep}`,isloading);
        }
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
        if(context.product && context.story && context.case && context.casestep){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            return res;
        }
        if(context.story && context.case && context.casestep){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            return res;
        }
        if(context.product && context.case && context.casestep){
            let res:any = await Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            return res;
        }
        if(context.case && context.casestep){
            let res:any = await Http.getInstance().get(`/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            return res;
        }
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
        if(context.product && context.story && context.case && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/getdraft`,isloading);
            res.data.casestep = data.casestep;
            return res;
        }
        if(context.story && context.case && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/getdraft`,isloading);
            res.data.casestep = data.casestep;
            return res;
        }
        if(context.product && context.case && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/getdraft`,isloading);
            res.data.casestep = data.casestep;
            return res;
        }
        if(context.case && true){
            let res:any = await Http.getInstance().get(`/cases/${context.case}/casesteps/getdraft`,isloading);
            res.data.casestep = data.casestep;
            return res;
        }
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
        if(context.product && context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
            return res;
        }
        if(context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
            return res;
        }
        if(context.product && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
            return res;
        }
        if(context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
            return res;
        }
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
        if(context.product && context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
            return res;
        }
        if(context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
            return res;
        }
        if(context.product && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
            return res;
        }
        if(context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
            return res;
        }
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
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchdefault`,tempData,isloading);
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchdefault`,tempData,isloading);
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchdefault`,tempData,isloading);
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchdefault`,tempData,isloading);
        }
    }

    /**
     * FetchVersion接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchVersion(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchversion`,tempData,isloading);
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchversion`,tempData,isloading);
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchversion`,tempData,isloading);
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchversion`,tempData,isloading);
        }
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
        if(context.product && context.story && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchversion`,data,isloading);
        }
        if(context.story && context.case && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchversion`,data,isloading);
        }
        if(context.product && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchversion`,data,isloading);
        }
        if(context.case && true){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchversion`,data,isloading);
        }
    }

    /**
     * FetchTempVersion接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchTempVersion(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchversion`,data,isloading);
        }
        if(context.story && context.case && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchversion`,data,isloading);
        }
        if(context.product && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchversion`,data,isloading);
        }
        if(context.case && true){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchversion`,data,isloading);
        }
    }
}