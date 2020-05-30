import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 产品计划服务对象基类
 *
 * @export
 * @class IBZ_SUBPRODUCTPLANServiceBase
 * @extends {EntityServie}
 */
export default class IBZ_SUBPRODUCTPLANServiceBase extends EntityService {

    /**
     * Creates an instance of  IBZ_SUBPRODUCTPLANServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZ_SUBPRODUCTPLANServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IBZ_SUBPRODUCTPLANServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibz_subproductplan';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibz_subproductplans';
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
     * @memberof IBZ_SUBPRODUCTPLANServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.ibz_subproductplan){
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}/select`,isloading);
        }
        if(context.productplan && context.ibz_subproductplan){
            return Http.getInstance().get(`/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}/select`,isloading);
        }
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBPRODUCTPLANServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.ibz_subproductplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}/save`,data,isloading);
        }
        if(context.productplan && context.ibz_subproductplan){
            return Http.getInstance().post(`/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}/save`,data,isloading);
        }
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBPRODUCTPLANServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/ibz_subproductplans`,data,isloading);
        }
        if(context.productplan && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/productplans/${context.productplan}/ibz_subproductplans`,data,isloading);
        }
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBPRODUCTPLANServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.ibz_subproductplan){
            return Http.getInstance().delete(`/products/${context.product}/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}`,isloading);
        }
        if(context.productplan && context.ibz_subproductplan){
            return Http.getInstance().delete(`/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}`,isloading);
        }
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBPRODUCTPLANServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.ibz_subproductplan){
            return Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}/checkkey`,data,isloading);
        }
        if(context.productplan && context.ibz_subproductplan){
            return Http.getInstance().post(`/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}/checkkey`,data,isloading);
        }
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBPRODUCTPLANServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/ibz_subproductplans/getdraft`,isloading);
        }
        if(context.productplan && true){
            return Http.getInstance().get(`/productplans/${context.productplan}/ibz_subproductplans/getdraft`,isloading);
        }
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBPRODUCTPLANServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.ibz_subproductplan){
            return Http.getInstance().put(`/products/${context.product}/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}`,data,isloading);
        }
        if(context.productplan && context.ibz_subproductplan){
            return Http.getInstance().put(`/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}`,data,isloading);
        }
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBPRODUCTPLANServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.ibz_subproductplan){
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}`,isloading);
        }
        if(context.productplan && context.ibz_subproductplan){
            return Http.getInstance().get(`/productplans/${context.productplan}/ibz_subproductplans/${context.ibz_subproductplan}`,isloading);
        }
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBPRODUCTPLANServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/ibz_subproductplans/fetchdefault`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/productplans/${context.productplan}/ibz_subproductplans/fetchdefault`,tempData,isloading);
        }
    }

    /**
     * FetchCurProductPlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBPRODUCTPLANServiceBase
     */
    public async FetchCurProductPlan(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/ibz_subproductplans/fetchcurproductplan`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/productplans/${context.productplan}/ibz_subproductplans/fetchcurproductplan`,tempData,isloading);
        }
    }
}