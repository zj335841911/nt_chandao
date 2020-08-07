import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 产品计划服务对象基类
 *
 * @export
 * @class ProductPlanServiceBase
 * @extends {EntityServie}
 */
export default class ProductPlanServiceBase extends EntityService {

    /**
     * Creates an instance of  ProductPlanServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductPlanServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProductPlanServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='productplan';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'productplans';
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
     * @memberof ProductPlanServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/select`,isloading);
        }
            return Http.getInstance().get(`/productplans/${context.productplan}/select`,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/productplans`,data,isloading);
        }
        let masterData:any = {};
        let subproductplansData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subproductplans'),'undefined')){
            subproductplansData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subproductplans') as any);
            if(subproductplansData && subproductplansData.length && subproductplansData.length > 0){
                subproductplansData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subproductplans = subproductplansData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/productplans`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_subproductplans',JSON.stringify(res.data.subproductplans));
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().put(`/products/${context.product}/productplans/${context.productplan}`,data,isloading);
        }
        let masterData:any = {};
        let subproductplansData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subproductplans'),'undefined')){
            subproductplansData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subproductplans') as any);
            if(subproductplansData && subproductplansData.length && subproductplansData.length > 0){
                subproductplansData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subproductplans = subproductplansData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/productplans/${context.productplan}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subproductplans',JSON.stringify(res.data.subproductplans));
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().delete(`/products/${context.product}/productplans/${context.productplan}`,isloading);
        }
            return Http.getInstance().delete(`/productplans/${context.productplan}`,isloading);

    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/productplans/${context.productplan}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subproductplans',JSON.stringify(res.data.subproductplans));
            return res;

    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            return Http.getInstance().get(`/products/${context.product}/productplans/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/productplans/getdraft`,isloading);
        res.data.productplan = data.productplan;
            this.tempStorage.setItem(context.srfsessionkey+'_subproductplans',JSON.stringify(res.data.subproductplans));
        return res;
    }

    /**
     * BatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async BatchUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/batchunlinkbug`,data,isloading);
        }
            return Http.getInstance().post(`/productplans/${context.productplan}/batchunlinkbug`,data,isloading);
    }

    /**
     * BatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async BatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/batchunlinkstory`,data,isloading);
        }
            return Http.getInstance().post(`/productplans/${context.productplan}/batchunlinkstory`,data,isloading);
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/productplans/${context.productplan}/checkkey`,data,isloading);
    }

    /**
     * LinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async LinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/linkbug`,data,isloading);
        }
            return Http.getInstance().post(`/productplans/${context.productplan}/linkbug`,data,isloading);
    }

    /**
     * LinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async LinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/linkstory`,data,isloading);
        }
            return Http.getInstance().post(`/productplans/${context.productplan}/linkstory`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/save`,data,isloading);
        }
        let masterData:any = {};
        let subproductplansData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subproductplans'),'undefined')){
            subproductplansData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subproductplans') as any);
            if(subproductplansData && subproductplansData.length && subproductplansData.length > 0){
                subproductplansData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subproductplans = subproductplansData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/productplans/${context.productplan}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subproductplans',JSON.stringify(res.data.subproductplans));
            return res;
    }

    /**
     * UnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async UnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/unlinkbug`,data,isloading);
        }
            return Http.getInstance().post(`/productplans/${context.productplan}/unlinkbug`,data,isloading);
    }

    /**
     * UnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async UnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/unlinkstory`,data,isloading);
        }
            return Http.getInstance().post(`/productplans/${context.productplan}/unlinkstory`,data,isloading);
    }

    /**
     * FetchCurProductPlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async FetchCurProductPlan(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/fetchcurproductplan`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/productplans/fetchcurproductplan`,tempData,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/productplans/fetchdefault`,tempData,isloading);
    }

    /**
     * FetchProjectPlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async FetchProjectPlan(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/fetchprojectplan`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/productplans/fetchprojectplan`,tempData,isloading);
    }
}