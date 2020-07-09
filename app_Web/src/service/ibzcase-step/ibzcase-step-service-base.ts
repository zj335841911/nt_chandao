import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 用例步骤服务对象基类
 *
 * @export
 * @class IBZCaseStepServiceBase
 * @extends {EntityServie}
 */
export default class IBZCaseStepServiceBase extends EntityService {

    /**
     * Creates an instance of  IBZCaseStepServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZCaseStepServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IBZCaseStepServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzcasestep';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzcasesteps';
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
     * @memberof IBZCaseStepServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.ibzcasestep){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/select`,isloading);
        }
        if(context.story && context.case && context.ibzcasestep){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/select`,isloading);
        }
        if(context.product && context.case && context.ibzcasestep){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/select`,isloading);
        }
        if(context.case && context.ibzcasestep){
            return Http.getInstance().get(`/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/select`,isloading);
        }
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZCaseStepServiceBase
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps`,data,isloading);
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/ibzcasesteps`,data,isloading);
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/ibzcasesteps`,data,isloading);
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
            let res:any = await Http.getInstance().post(`/cases/${context.case}/ibzcasesteps`,data,isloading);
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
     * @memberof IBZCaseStepServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,data,isloading);
            return res;
        }
        if(context.story && context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,data,isloading);
            return res;
        }
        if(context.product && context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,data,isloading);
            return res;
        }
        if(context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,data,isloading);
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
     * @memberof IBZCaseStepServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.ibzcasestep){
            return Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,isloading);
        }
        if(context.story && context.case && context.ibzcasestep){
            return Http.getInstance().delete(`/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,isloading);
        }
        if(context.product && context.case && context.ibzcasestep){
            return Http.getInstance().delete(`/products/${context.product}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,isloading);
        }
        if(context.case && context.ibzcasestep){
            return Http.getInstance().delete(`/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,isloading);
        }
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZCaseStepServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.ibzcasestep){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,isloading);
            return res;
        }
        if(context.story && context.case && context.ibzcasestep){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,isloading);
            return res;
        }
        if(context.product && context.case && context.ibzcasestep){
            let res:any = await Http.getInstance().get(`/products/${context.product}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,isloading);
            return res;
        }
        if(context.case && context.ibzcasestep){
            let res:any = await Http.getInstance().get(`/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}`,isloading);
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
     * @memberof IBZCaseStepServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps/getdraft`,isloading);
            res.data.ibzcasestep = data.ibzcasestep;
            return res;
        }
        if(context.story && context.case && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/ibzcasesteps/getdraft`,isloading);
            res.data.ibzcasestep = data.ibzcasestep;
            return res;
        }
        if(context.product && context.case && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/cases/${context.case}/ibzcasesteps/getdraft`,isloading);
            res.data.ibzcasestep = data.ibzcasestep;
            return res;
        }
        if(context.case && true){
            let res:any = await Http.getInstance().get(`/cases/${context.case}/ibzcasesteps/getdraft`,isloading);
            res.data.ibzcasestep = data.ibzcasestep;
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
     * @memberof IBZCaseStepServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/checkkey`,data,isloading);
            return res;
        }
        if(context.story && context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/checkkey`,data,isloading);
            return res;
        }
        if(context.product && context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/checkkey`,data,isloading);
            return res;
        }
        if(context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/checkkey`,data,isloading);
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
     * @memberof IBZCaseStepServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/save`,data,isloading);
            return res;
        }
        if(context.story && context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/save`,data,isloading);
            return res;
        }
        if(context.product && context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/save`,data,isloading);
            return res;
        }
        if(context.case && context.ibzcasestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/cases/${context.case}/ibzcasesteps/${context.ibzcasestep}/save`,data,isloading);
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
     * @memberof IBZCaseStepServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps/fetchdefault`,tempData,isloading);
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/ibzcasesteps/fetchdefault`,tempData,isloading);
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/ibzcasesteps/fetchdefault`,tempData,isloading);
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/cases/${context.case}/ibzcasesteps/fetchdefault`,tempData,isloading);
        }
    }

    /**
     * FetchVersion接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZCaseStepServiceBase
     */
    public async FetchVersion(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps/fetchversion`,tempData,isloading);
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/ibzcasesteps/fetchversion`,tempData,isloading);
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/ibzcasesteps/fetchversion`,tempData,isloading);
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/cases/${context.case}/ibzcasesteps/fetchversion`,tempData,isloading);
        }
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZCaseStepServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps/fetchversion`,data,isloading);
        }
        if(context.story && context.case && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/ibzcasesteps/fetchversion`,data,isloading);
        }
        if(context.product && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/ibzcasesteps/fetchversion`,data,isloading);
        }
        if(context.case && true){
            return Http.getInstance().get(`/cases/${context.case}/ibzcasesteps/fetchversion`,data,isloading);
        }
    }

    /**
     * FetchTempVersion接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZCaseStepServiceBase
     */
    public async FetchTempVersion(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/ibzcasesteps/fetchversion`,data,isloading);
        }
        if(context.story && context.case && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/ibzcasesteps/fetchversion`,data,isloading);
        }
        if(context.product && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/ibzcasesteps/fetchversion`,data,isloading);
        }
        if(context.case && true){
            return Http.getInstance().get(`/cases/${context.case}/ibzcasesteps/fetchversion`,data,isloading);
        }
    }
}