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
        if(context.product && context.ibz_subproductplan){
            return Http.getInstance().get(`/products/${context.product}/ibz_subproductplans/${context.ibz_subproductplan}/select`,isloading);
        }
            return Http.getInstance().get(`/ibz_subproductplans/${context.ibz_subproductplan}/select`,isloading);
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
        if(context.product && context.ibz_subproductplan){
            return Http.getInstance().post(`/products/${context.product}/ibz_subproductplans/${context.ibz_subproductplan}/save`,data,isloading);
        }
        let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/ibz_subproductplans/${context.ibz_subproductplan}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            return res;
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
        if(context.product && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/ibz_subproductplans`,data,isloading);
        }
        let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/ibz_subproductplans`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
        return res;
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
        if(context.product && context.ibz_subproductplan){
            return Http.getInstance().delete(`/products/${context.product}/ibz_subproductplans/${context.ibz_subproductplan}`,isloading);
        }
            return Http.getInstance().delete(`/ibz_subproductplans/${context.ibz_subproductplan}`,isloading);

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
        if(context.product && context.ibz_subproductplan){
            return Http.getInstance().post(`/products/${context.product}/ibz_subproductplans/${context.ibz_subproductplan}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/ibz_subproductplans/${context.ibz_subproductplan}/checkkey`,data,isloading);
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
        if(context.product && true){
            return Http.getInstance().get(`/products/${context.product}/ibz_subproductplans/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/ibz_subproductplans/getdraft`,isloading);
        res.data.ibz_subproductplan = data.ibz_subproductplan;
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
        return res;
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
        if(context.product && context.ibz_subproductplan){
            return Http.getInstance().put(`/products/${context.product}/ibz_subproductplans/${context.ibz_subproductplan}`,data,isloading);
        }
        let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/ibz_subproductplans/${context.ibz_subproductplan}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            return res;
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
        if(context.product && context.ibz_subproductplan){
            return Http.getInstance().get(`/products/${context.product}/ibz_subproductplans/${context.ibz_subproductplan}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/ibz_subproductplans/${context.ibz_subproductplan}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            return res;

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
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/ibz_subproductplans/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/ibz_subproductplans/fetchdefault`,tempData,isloading);
    }
}