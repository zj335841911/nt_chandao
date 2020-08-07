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
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps`,data,isloading);
        }
        if(context.story && context.case && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/casesteps`,data,isloading);
        }
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
            return Http.getInstance().put(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
        }
        if(context.story && context.case && context.casestep){
            return Http.getInstance().put(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
        }
        if(context.product && context.case && context.casestep){
            return Http.getInstance().put(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().put(`/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
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
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
        }
        if(context.story && context.case && context.casestep){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
        }
        if(context.product && context.case && context.casestep){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/${context.casestep}`,isloading);
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
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/getdraft`,isloading);
        }
        if(context.story && context.case && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/getdraft`,isloading);
        }
        if(context.product && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/getdraft`,isloading);
        }
        if(context.case && true){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/getdraft`,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
        }
        if(context.story && context.case && context.casestep){
            return Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
        }
        if(context.product && context.case && context.casestep){
            return Http.getInstance().post(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().post(`/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
        }
        if(context.story && context.case && context.casestep){
            return Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
        }
        if(context.product && context.case && context.casestep){
            return Http.getInstance().post(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
        }
        if(context.case && context.casestep){
            return Http.getInstance().post(`/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
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
     * FetchDefault1接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchDefault1(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchdefault1`,tempData,isloading);
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchdefault1`,tempData,isloading);
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchdefault1`,tempData,isloading);
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchdefault1`,tempData,isloading);
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
     * FetchVersions接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchVersions(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,tempData,isloading);
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,tempData,isloading);
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchversions`,tempData,isloading);
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchversions`,tempData,isloading);
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
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.story && context.case && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.product && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.case && true){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
    }

    /**
     * FetchTempDefault1接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchTempDefault1(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.story && context.case && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.product && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.case && true){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchversions`,data,isloading);
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
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.story && context.case && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.product && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.case && true){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
    }

    /**
     * FetchTempVersions接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchTempVersions(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.story && context.case && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.product && context.case && true){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
        if(context.case && true){
            return Http.getInstance().get(`/cases/${context.case}/casesteps/fetchversions`,data,isloading);
        }
    }
}