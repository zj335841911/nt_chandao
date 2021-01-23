import { Http } from '@/utils';
import { Util } from '@/utils';
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
            let res:any = Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/select`,isloading);
            
            return res;
        }
        if(context.productplan && context.subproductplan){
            let res:any = Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/select`,isloading);
            
            return res;
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
            let res:any = Http.getInstance().delete(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,isloading);
            return res;
        }
        if(context.productplan && context.subproductplan){
            let res:any = Http.getInstance().delete(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}`,isloading);
            return res;
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
            let tempData:any = JSON.parse(JSON.stringify(data));
            if(tempData.subproductplan) delete tempData.subproductplan;
            if(tempData.id) delete tempData.id;
            let res:any = await Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/getdraft`,tempData,isloading);
            res.data.subproductplan = data.subproductplan;
            
            return res;
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            if(tempData.subproductplan) delete tempData.subproductplan;
            if(tempData.id) delete tempData.id;
            let res:any = await Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/getdraft`,tempData,isloading);
            res.data.subproductplan = data.subproductplan;
            
            return res;
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
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/batchunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/batchunlinkbug`,data,isloading);
            
            return res;
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
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/batchunlinkstory`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/batchunlinkstory`,data,isloading);
            
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
     * GetOldPlanName接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async GetOldPlanName(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/getoldplanname`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/getoldplanname`,data,isloading);
            
            return res;
        }
    }

    /**
     * ImportPlanTemplet接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async ImportPlanTemplet(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/importplantemplet`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/importplantemplet`,data,isloading);
            
            return res;
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
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/linkbug`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/linkbug`,data,isloading);
            
            return res;
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
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/linkstory`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/linkstory`,data,isloading);
            
            return res;
        }
    }

    /**
     * MobProductPlanCounter接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async MobProductPlanCounter(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/mobproductplancounter`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/mobproductplancounter`,data,isloading);
            
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
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/unlinkbug`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/unlinkbug`,data,isloading);
            
            return res;
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
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/${context.subproductplan}/unlinkstory`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.subproductplan){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/${context.subproductplan}/unlinkstory`,data,isloading);
            
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
            let res:any = Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/fetchcurproductplan`,tempData,isloading);
            return res;
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/fetchcurproductplan`,tempData,isloading);
            return res;
        }
    }

    /**
     * searchCurProductPlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async searchCurProductPlan(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/searchcurproductplan`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/searchcurproductplan`,tempData,isloading);
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
            let res:any = Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/fetchdefault`,tempData,isloading);
            return res;
        }
    }

    /**
     * searchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/searchdefault`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/searchdefault`,tempData,isloading);
        }
    }

    /**
     * FetchDefaultParent接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async FetchDefaultParent(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/fetchdefaultparent`,tempData,isloading);
            return res;
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/fetchdefaultparent`,tempData,isloading);
            return res;
        }
    }

    /**
     * searchDefaultParent接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async searchDefaultParent(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/searchdefaultparent`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/searchdefaultparent`,tempData,isloading);
        }
    }

    /**
     * FetchPlanCodeList接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async FetchPlanCodeList(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/fetchplancodelist`,tempData,isloading);
            return res;
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/fetchplancodelist`,tempData,isloading);
            return res;
        }
    }

    /**
     * searchPlanCodeList接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async searchPlanCodeList(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/searchplancodelist`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/searchplancodelist`,tempData,isloading);
        }
    }

    /**
     * FetchProjectApp接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async FetchProjectApp(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/fetchprojectapp`,tempData,isloading);
            return res;
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/fetchprojectapp`,tempData,isloading);
            return res;
        }
    }

    /**
     * searchProjectApp接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async searchProjectApp(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/searchprojectapp`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/searchprojectapp`,tempData,isloading);
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
            let res:any = Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/subproductplans/fetchprojectplan`,tempData,isloading);
            return res;
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/productplans/${context.productplan}/subproductplans/fetchprojectplan`,tempData,isloading);
            return res;
        }
    }

    /**
     * searchProjectPlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async searchProjectPlan(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/subproductplans/searchprojectplan`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/productplans/${context.productplan}/subproductplans/searchprojectplan`,tempData,isloading);
        }
    }

    /**
     * GetPlanEnd接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubProductPlanServiceBase
     */
    public async GetPlanEnd(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan &&  true){
            return Http.getInstance().post(`products/${context.product}/productplans/${context.productplan}/subproductplans/getplanend`,data,isloading);
        }
        if(context.productplan &&  true){
            return Http.getInstance().post(`productplans/${context.productplan}/subproductplans/getplanend`,data,isloading);
        }
    }
}