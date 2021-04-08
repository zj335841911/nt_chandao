import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 任务预计服务对象基类
 *
 * @export
 * @class IbzTaskestimateServiceBase
 * @extends {EntityServie}
 */
export class IbzTaskestimateServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzTaskestimateServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzTaskestimateServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzTaskestimateServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibztaskestimate';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibztaskestimates';
        this.APPDETEXT = 'id';
        this.APPNAME = 'mob';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * PMEvaluation接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async PMEvaluation(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/ibztaskestimates/pmevaluation`,data,isloading);
        }
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/ibztaskestimates/pmevaluation`,data,isloading);
        }
        if(context.product && context.productplan && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/ibztaskestimates/pmevaluation`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/ibztaskestimates/pmevaluation`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/ibztaskestimates/pmevaluation`,data,isloading);
        }
        if(context.productplan && context.task &&  true){
            return Http.getInstance().post(`productplans/${context.productplan}/tasks/${context.task}/ibztaskestimates/pmevaluation`,data,isloading);
        }
        if(context.projectmodule && context.task &&  true){
            return Http.getInstance().post(`projectmodules/${context.projectmodule}/tasks/${context.task}/ibztaskestimates/pmevaluation`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/ibztaskestimates/pmevaluation`,data,isloading);
        }
    }

    /**
     * FetchActionMonth接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchActionMonth(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchActionMonth ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }

    /**
     * FetchTempActionMonth接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchTempActionMonth(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempActionMonth ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return new HttpResponse(200,result);
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchActionYear接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchActionYear(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchActionYear ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }

    /**
     * FetchTempActionYear接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchTempActionYear(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempActionYear ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return new HttpResponse(200,result);
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchDefault ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempDefault ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return new HttpResponse(200,result);
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchDefaults接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchDefaults(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchDefaults ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }

    /**
     * FetchTempDefaults接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchTempDefaults(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempDefaults ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return new HttpResponse(200,result);
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchProjectActionMonth接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchProjectActionMonth(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchProjectActionMonth ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }

    /**
     * FetchTempProjectActionMonth接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchTempProjectActionMonth(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempProjectActionMonth ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return new HttpResponse(200,result);
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchProjectActionYear接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchProjectActionYear(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchProjectActionYear ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }

    /**
     * FetchTempProjectActionYear接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchTempProjectActionYear(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempProjectActionYear ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return new HttpResponse(200,result);
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchProjectTaskEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchProjectTaskEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchProjectTaskEstimate ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }

    /**
     * FetchTempProjectTaskEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzTaskestimateServiceBase
     */
    public async FetchTempProjectTaskEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempProjectTaskEstimate ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(result){
                return new HttpResponse(200,result);
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }
}