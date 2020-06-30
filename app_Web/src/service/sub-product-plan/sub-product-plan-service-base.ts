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
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans`,data,isloading);
            return res;
        }
        if(context.productplan && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans`,data,isloading);
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
     * @memberof SubProductPlanServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,data,isloading);
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,data,isloading);
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
            let res:any = await Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,isloading);
            return res;
        }
        if(context.productplan && context.subproductplan){
            let res:any = await Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,isloading);
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
     * @memberof SubProductPlanServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/getdraft`,isloading);
            res.data.subproductplan = data.subproductplan;
            return res;
        }
        if(context.productplan && true){
            let res:any = await Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/getdraft`,isloading);
            res.data.subproductplan = data.subproductplan;
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
     * @memberof SubProductPlanServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/checkkey`,data,isloading);
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/checkkey`,data,isloading);
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
     * @memberof SubProductPlanServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/save`,data,isloading);
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/save`,data,isloading);
            return res;
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
}