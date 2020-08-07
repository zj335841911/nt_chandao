import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 产品的分支和平台信息服务对象基类
 *
 * @export
 * @class BranchServiceBase
 * @extends {EntityServie}
 */
export default class BranchServiceBase extends EntityService {

    /**
     * Creates an instance of  BranchServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  BranchServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof BranchServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='branch';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'branches';
        this.APPDETEXT = 'name';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BranchServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.branch){
            return Http.getInstance().get(`/products/${context.product}/branches/${context.branch}/select`,isloading);
        }
            return Http.getInstance().get(`/branches/${context.branch}/select`,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BranchServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/branches`,data,isloading);
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
        let res:any = await Http.getInstance().post(`/branches`,data,isloading);
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BranchServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.branch){
            return Http.getInstance().put(`/products/${context.product}/branches/${context.branch}`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/branches/${context.branch}`,data,isloading);
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BranchServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.branch){
            return Http.getInstance().delete(`/products/${context.product}/branches/${context.branch}`,isloading);
        }
            return Http.getInstance().delete(`/branches/${context.branch}`,isloading);

    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BranchServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.branch){
            return Http.getInstance().get(`/products/${context.product}/branches/${context.branch}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/branches/${context.branch}`,isloading);
            return res;

    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BranchServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            return Http.getInstance().get(`/products/${context.product}/branches/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/branches/getdraft`,isloading);
        res.data.branch = data.branch;
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BranchServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.branch){
            return Http.getInstance().post(`/products/${context.product}/branches/${context.branch}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/branches/${context.branch}/checkkey`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BranchServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.branch){
            return Http.getInstance().post(`/products/${context.product}/branches/${context.branch}/save`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/branches/${context.branch}/save`,data,isloading);
            return res;
    }

    /**
     * Sort接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BranchServiceBase
     */
    public async Sort(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.branch){
            return Http.getInstance().post(`/products/${context.product}/branches/${context.branch}/sort`,data,isloading);
        }
            return Http.getInstance().post(`/branches/${context.branch}/sort`,data,isloading);
    }

    /**
     * FetchCurProduct接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BranchServiceBase
     */
    public async FetchCurProduct(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/branches/fetchcurproduct`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/branches/fetchcurproduct`,tempData,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BranchServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/branches/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/branches/fetchdefault`,tempData,isloading);
    }
}