import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 计划模板服务对象基类
 *
 * @export
 * @class IbzPlanTempletServiceBase
 * @extends {EntityServie}
 */
export default class IbzPlanTempletServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzPlanTempletServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzPlanTempletServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzPlanTempletServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzplantemplet';
        this.APPDEKEY = 'ibzplantempletid';
        this.APPDENAME = 'ibzplantemplets';
        this.APPDETEXT = 'ibzplantempletname';
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
     * @memberof IbzPlanTempletServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzplantemplets/${context.ibzplantemplet}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzPlanTempletServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        let ibzplantempletdetailsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzplantempletdetails'),'undefined')){
            ibzplantempletdetailsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzplantempletdetails') as any);
            if(ibzplantempletdetailsData && ibzplantempletdetailsData.length && ibzplantempletdetailsData.length > 0){
                ibzplantempletdetailsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.ibzplantempletdetailid = null;
                            if(item.hasOwnProperty('ibzplantempletid') && item.ibzplantempletid) item.ibzplantempletid = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzplantempletdetails = ibzplantempletdetailsData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/ibzplantemplets`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_ibzplantempletdetails',JSON.stringify(res.data.ibzplantempletdetails?res.data.ibzplantempletdetails:[]));
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzPlanTempletServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        let ibzplantempletdetailsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzplantempletdetails'),'undefined')){
            ibzplantempletdetailsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzplantempletdetails') as any);
            if(ibzplantempletdetailsData && ibzplantempletdetailsData.length && ibzplantempletdetailsData.length > 0){
                ibzplantempletdetailsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.ibzplantempletdetailid = null;
                            if(item.hasOwnProperty('ibzplantempletid') && item.ibzplantempletid) item.ibzplantempletid = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzplantempletdetails = ibzplantempletdetailsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/ibzplantemplets/${context.ibzplantemplet}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibzplantempletdetails',JSON.stringify(res.data.ibzplantempletdetails?res.data.ibzplantempletdetails:[]));

            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzPlanTempletServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().delete(`/ibzplantemplets/${context.ibzplantemplet}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzPlanTempletServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = await Http.getInstance().get(`/ibzplantemplets/${context.ibzplantemplet}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibzplantempletdetails',JSON.stringify(res.data.ibzplantempletdetails?res.data.ibzplantempletdetails:[]));

            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzPlanTempletServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().get(`/ibzplantemplets/getdraft`,isloading);
        res.data.ibzplantemplet = data.ibzplantemplet;
                    this.tempStorage.setItem(context.srfsessionkey+'_ibzplantempletdetails',JSON.stringify(res.data.ibzplantempletdetails?res.data.ibzplantempletdetails:[]));

        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzPlanTempletServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/ibzplantemplets/${context.ibzplantemplet}/checkkey`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzPlanTempletServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        let ibzplantempletdetailsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzplantempletdetails'),'undefined')){
            ibzplantempletdetailsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzplantempletdetails') as any);
            if(ibzplantempletdetailsData && ibzplantempletdetailsData.length && ibzplantempletdetailsData.length > 0){
                ibzplantempletdetailsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.ibzplantempletdetailid = null;
                            if(item.hasOwnProperty('ibzplantempletid') && item.ibzplantempletid) item.ibzplantempletid = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzplantempletdetails = ibzplantempletdetailsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/ibzplantemplets/${context.ibzplantemplet}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibzplantempletdetails',JSON.stringify(res.data.ibzplantempletdetails?res.data.ibzplantempletdetails:[]));

            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzPlanTempletServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/ibzplantemplets/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * searchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzPlanTempletServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibzplantemplets/searchdefault`,tempData,isloading);
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzPlanTempletServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}