import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 项目产品服务对象基类
 *
 * @export
 * @class ProjectProductServiceBase
 * @extends {EntityServie}
 */
export default class ProjectProductServiceBase extends EntityService {

    /**
     * Creates an instance of  ProjectProductServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectProductServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProjectProductServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='projectproduct';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'projectproducts';
        this.APPDETEXT = 'productname';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectProductServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectproduct){
            return Http.getInstance().get(`/projects/${context.project}/projectproducts/${context.projectproduct}/select`,isloading);
        }
        if(context.product && context.projectproduct){
            return Http.getInstance().get(`/products/${context.product}/projectproducts/${context.projectproduct}/select`,isloading);
        }
            return Http.getInstance().get(`/projectproducts/${context.projectproduct}/select`,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectProductServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/projects/${context.project}/projectproducts`,data,isloading);
        }
        if(context.product && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/projectproducts`,data,isloading);
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
        let res:any = await Http.getInstance().post(`/projectproducts`,data,isloading);
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectProductServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectproduct){
            return Http.getInstance().put(`/projects/${context.project}/projectproducts/${context.projectproduct}`,data,isloading);
        }
        if(context.product && context.projectproduct){
            return Http.getInstance().put(`/products/${context.product}/projectproducts/${context.projectproduct}`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/projectproducts/${context.projectproduct}`,data,isloading);
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectProductServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectproduct){
            return Http.getInstance().delete(`/projects/${context.project}/projectproducts/${context.projectproduct}`,isloading);
        }
        if(context.product && context.projectproduct){
            return Http.getInstance().delete(`/products/${context.product}/projectproducts/${context.projectproduct}`,isloading);
        }
            return Http.getInstance().delete(`/projectproducts/${context.projectproduct}`,isloading);

    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectProductServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectproduct){
            return Http.getInstance().get(`/projects/${context.project}/projectproducts/${context.projectproduct}`,isloading);
        }
        if(context.product && context.projectproduct){
            return Http.getInstance().get(`/products/${context.product}/projectproducts/${context.projectproduct}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/projectproducts/${context.projectproduct}`,isloading);
            return res;

    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectProductServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            return Http.getInstance().get(`/projects/${context.project}/projectproducts/getdraft`,isloading);
        }
        if(context.product && true){
            return Http.getInstance().get(`/products/${context.product}/projectproducts/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/projectproducts/getdraft`,isloading);
        res.data.projectproduct = data.projectproduct;
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectProductServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectproduct){
            return Http.getInstance().post(`/projects/${context.project}/projectproducts/${context.projectproduct}/checkkey`,data,isloading);
        }
        if(context.product && context.projectproduct){
            return Http.getInstance().post(`/products/${context.product}/projectproducts/${context.projectproduct}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/projectproducts/${context.projectproduct}/checkkey`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectProductServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectproduct){
            return Http.getInstance().post(`/projects/${context.project}/projectproducts/${context.projectproduct}/save`,data,isloading);
        }
        if(context.product && context.projectproduct){
            return Http.getInstance().post(`/products/${context.product}/projectproducts/${context.projectproduct}/save`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/projectproducts/${context.projectproduct}/save`,data,isloading);
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectProductServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/projectproducts/fetchdefault`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/projectproducts/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/projectproducts/fetchdefault`,tempData,isloading);
    }

    /**
     * FetchRelationPlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectProductServiceBase
     */
    public async FetchRelationPlan(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/projectproducts/fetchrelationplan`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/projectproducts/fetchrelationplan`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/projectproducts/fetchrelationplan`,tempData,isloading);
    }
}