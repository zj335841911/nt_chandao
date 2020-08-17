import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 用例库用例服务对象基类
 *
 * @export
 * @class IbzCaseServiceBase
 * @extends {EntityServie}
 */
export default class IbzCaseServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzCaseServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzCaseServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzCaseServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzcase';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzcases';
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
     * @memberof IbzCaseServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.ibzlib && context.ibzcase){
            let res:any = Http.getInstance().get(`/ibzlibs/${context.ibzlib}/ibzcases/${context.ibzcase}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/ibzcases/${context.ibzcase}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzCaseServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.ibzlib && true){
            let masterData:any = {};
        let ibzlibcasestepqtsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts'),'undefined')){
            ibzlibcasestepqtsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts') as any);
            if(ibzlibcasestepqtsData && ibzlibcasestepqtsData.length && ibzlibcasestepqtsData.length > 0){
                ibzlibcasestepqtsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasestepqts = ibzlibcasestepqtsData;
        let ibzlibcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps'),'undefined')){
            ibzlibcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps') as any);
            if(ibzlibcasestepsData && ibzlibcasestepsData.length && ibzlibcasestepsData.length > 0){
                ibzlibcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasesteps = ibzlibcasestepsData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/ibzlibs/${context.ibzlib}/ibzcases`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibzlibcasestepqts',JSON.stringify(res.data.ibzlibcasestepqts?res.data.ibzlibcasestepqts:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibzlibcasesteps',JSON.stringify(res.data.ibzlibcasesteps?res.data.ibzlibcasesteps:[]));
            
            return res;
        }
        let masterData:any = {};
        let ibzlibcasestepqtsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts'),'undefined')){
            ibzlibcasestepqtsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts') as any);
            if(ibzlibcasestepqtsData && ibzlibcasestepqtsData.length && ibzlibcasestepqtsData.length > 0){
                ibzlibcasestepqtsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasestepqts = ibzlibcasestepqtsData;
        let ibzlibcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps'),'undefined')){
            ibzlibcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps') as any);
            if(ibzlibcasestepsData && ibzlibcasestepsData.length && ibzlibcasestepsData.length > 0){
                ibzlibcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasesteps = ibzlibcasestepsData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/ibzcases`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_ibzlibcasestepqts',JSON.stringify(res.data.ibzlibcasestepqts?res.data.ibzlibcasestepqts:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_ibzlibcasesteps',JSON.stringify(res.data.ibzlibcasesteps?res.data.ibzlibcasesteps:[]));
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzCaseServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.ibzlib && context.ibzcase){
            let masterData:any = {};
        let ibzlibcasestepqtsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts'),'undefined')){
            ibzlibcasestepqtsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts') as any);
            if(ibzlibcasestepqtsData && ibzlibcasestepqtsData.length && ibzlibcasestepqtsData.length > 0){
                ibzlibcasestepqtsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasestepqts = ibzlibcasestepqtsData;
        let ibzlibcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps'),'undefined')){
            ibzlibcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps') as any);
            if(ibzlibcasestepsData && ibzlibcasestepsData.length && ibzlibcasestepsData.length > 0){
                ibzlibcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasesteps = ibzlibcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/ibzlibs/${context.ibzlib}/ibzcases/${context.ibzcase}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasestepqts',JSON.stringify(res.data.ibzlibcasestepqts?res.data.ibzlibcasestepqts:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasesteps',JSON.stringify(res.data.ibzlibcasesteps?res.data.ibzlibcasesteps:[]));

            return res;
        }
        let masterData:any = {};
        let ibzlibcasestepqtsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts'),'undefined')){
            ibzlibcasestepqtsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts') as any);
            if(ibzlibcasestepqtsData && ibzlibcasestepqtsData.length && ibzlibcasestepqtsData.length > 0){
                ibzlibcasestepqtsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasestepqts = ibzlibcasestepqtsData;
        let ibzlibcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps'),'undefined')){
            ibzlibcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps') as any);
            if(ibzlibcasestepsData && ibzlibcasestepsData.length && ibzlibcasestepsData.length > 0){
                ibzlibcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasesteps = ibzlibcasestepsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/ibzcases/${context.ibzcase}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasestepqts',JSON.stringify(res.data.ibzlibcasestepqts?res.data.ibzlibcasestepqts:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasesteps',JSON.stringify(res.data.ibzlibcasesteps?res.data.ibzlibcasesteps:[]));

            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzCaseServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.ibzlib && context.ibzcase){
            let res:any = Http.getInstance().delete(`/ibzlibs/${context.ibzlib}/ibzcases/${context.ibzcase}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/ibzcases/${context.ibzcase}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzCaseServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.ibzlib && context.ibzcase){
            let res:any = await Http.getInstance().get(`/ibzlibs/${context.ibzlib}/ibzcases/${context.ibzcase}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasestepqts',JSON.stringify(res.data.ibzlibcasestepqts?res.data.ibzlibcasestepqts:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasesteps',JSON.stringify(res.data.ibzlibcasesteps?res.data.ibzlibcasesteps:[]));

            return res;
        }
            let res:any = await Http.getInstance().get(`/ibzcases/${context.ibzcase}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasestepqts',JSON.stringify(res.data.ibzlibcasestepqts?res.data.ibzlibcasestepqts:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasesteps',JSON.stringify(res.data.ibzlibcasesteps?res.data.ibzlibcasesteps:[]));

            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzCaseServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.ibzlib && true){
            let res:any = await Http.getInstance().get(`/ibzlibs/${context.ibzlib}/ibzcases/getdraft`,isloading);
            res.data.ibzcase = data.ibzcase;
                        this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasestepqts',JSON.stringify(res.data.ibzlibcasestepqts?res.data.ibzlibcasestepqts:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasesteps',JSON.stringify(res.data.ibzlibcasesteps?res.data.ibzlibcasesteps:[]));

            return res;
        }
        let res:any = await  Http.getInstance().get(`/ibzcases/getdraft`,isloading);
        res.data.ibzcase = data.ibzcase;
                    this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasestepqts',JSON.stringify(res.data.ibzlibcasestepqts?res.data.ibzlibcasestepqts:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasesteps',JSON.stringify(res.data.ibzlibcasesteps?res.data.ibzlibcasesteps:[]));

        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzCaseServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.ibzlib && context.ibzcase){
            let masterData:any = {};
        let ibzlibcasestepqtsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts'),'undefined')){
            ibzlibcasestepqtsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts') as any);
            if(ibzlibcasestepqtsData && ibzlibcasestepqtsData.length && ibzlibcasestepqtsData.length > 0){
                ibzlibcasestepqtsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasestepqts = ibzlibcasestepqtsData;
        let ibzlibcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps'),'undefined')){
            ibzlibcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps') as any);
            if(ibzlibcasestepsData && ibzlibcasestepsData.length && ibzlibcasestepsData.length > 0){
                ibzlibcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasesteps = ibzlibcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/ibzlibs/${context.ibzlib}/ibzcases/${context.ibzcase}/checkkey`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasestepqts',JSON.stringify(res.data.ibzlibcasestepqts?res.data.ibzlibcasestepqts:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasesteps',JSON.stringify(res.data.ibzlibcasesteps?res.data.ibzlibcasesteps:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/ibzcases/${context.ibzcase}/checkkey`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzCaseServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.ibzlib && context.ibzcase){
            let masterData:any = {};
        let ibzlibcasestepqtsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts'),'undefined')){
            ibzlibcasestepqtsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts') as any);
            if(ibzlibcasestepqtsData && ibzlibcasestepqtsData.length && ibzlibcasestepqtsData.length > 0){
                ibzlibcasestepqtsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasestepqts = ibzlibcasestepqtsData;
        let ibzlibcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps'),'undefined')){
            ibzlibcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps') as any);
            if(ibzlibcasestepsData && ibzlibcasestepsData.length && ibzlibcasestepsData.length > 0){
                ibzlibcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasesteps = ibzlibcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/ibzlibs/${context.ibzlib}/ibzcases/${context.ibzcase}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasestepqts',JSON.stringify(res.data.ibzlibcasestepqts?res.data.ibzlibcasestepqts:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasesteps',JSON.stringify(res.data.ibzlibcasesteps?res.data.ibzlibcasesteps:[]));

            return res;
        }
        let masterData:any = {};
        let ibzlibcasestepqtsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts'),'undefined')){
            ibzlibcasestepqtsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasestepqts') as any);
            if(ibzlibcasestepqtsData && ibzlibcasestepqtsData.length && ibzlibcasestepqtsData.length > 0){
                ibzlibcasestepqtsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasestepqts = ibzlibcasestepqtsData;
        let ibzlibcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps'),'undefined')){
            ibzlibcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps') as any);
            if(ibzlibcasestepsData && ibzlibcasestepsData.length && ibzlibcasestepsData.length > 0){
                ibzlibcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzlibcasesteps = ibzlibcasestepsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/ibzcases/${context.ibzcase}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasestepqts',JSON.stringify(res.data.ibzlibcasestepqts?res.data.ibzlibcasestepqts:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzlibcasesteps',JSON.stringify(res.data.ibzlibcasesteps?res.data.ibzlibcasesteps:[]));

            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzCaseServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.ibzlib && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/ibzlibs/${context.ibzlib}/ibzcases/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/ibzcases/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzCaseServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}