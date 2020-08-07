import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 产品计划服务对象基类
 *
 * @export
 * @class SubProductPlanServiceBase
 * @extends {EntityServie}
 */
export default class SubProductPlanServiceBase extends EntityService {

    /**
     * Creates an instance of  SubProductPlanServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  SubProductPlanServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof SubProductPlanServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='subproductplan';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'subproductplans';
        this.APPDETEXT = 'title';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/select`,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/select`,isloading);
        }
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans`,data,isloading);
        }
        if(context.productplan && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/productplans/${context.productplan}/subproductplans`,data,isloading);
        }
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().put(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,data,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().put(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,data,isloading);
        }
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().delete(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().delete(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,isloading);
        }
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,isloading);
        }
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/getdraft`,isloading);
        }
        if(context.productplan && true){
            return Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/getdraft`,isloading);
        }
    }

    /**
     * BatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async BatchUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/batchunlinkbug`,data,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/batchunlinkbug`,data,isloading);
        }
    }

    /**
     * BatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async BatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/batchunlinkstory`,data,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/batchunlinkstory`,data,isloading);
        }
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/checkkey`,data,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/checkkey`,data,isloading);
        }
    }

    /**
     * LinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async LinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/linkbug`,data,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/linkbug`,data,isloading);
        }
    }

    /**
     * LinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async LinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/linkstory`,data,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/linkstory`,data,isloading);
        }
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/save`,data,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/save`,data,isloading);
        }
    }

    /**
     * UnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async UnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/unlinkbug`,data,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/unlinkbug`,data,isloading);
        }
    }

    /**
     * UnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async UnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/unlinkstory`,data,isloading);
        }
        if(context.productplan && context.subproductplan){
            return Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/unlinkstory`,data,isloading);
        }
    }

    /**
     * FetchCurProductPlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async FetchCurProductPlan(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/fetchcurproductplan`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/fetchcurproductplan`,tempData,isloading);
        }
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/fetchdefault`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/fetchdefault`,tempData,isloading);
        }
    }

    /**
     * FetchProjectPlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async FetchProjectPlan(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/fetchprojectplan`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/fetchprojectplan`,tempData,isloading);
        }
    }
}