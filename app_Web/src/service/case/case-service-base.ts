import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 测试用例服务对象基类
 *
 * @export
 * @class CaseServiceBase
 * @extends {EntityServie}
 */
export default class CaseServiceBase extends EntityService {

    /**
     * Creates an instance of  CaseServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof CaseServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='case';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'cases';
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
     * @memberof CaseServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/select`,isloading);
        }
        if(context.story && context.case){
            return Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/select`,isloading);
        }
        if(context.product && context.case){
            return Http.getInstance().get(`/products/${context.product}/cases/${context.case}/select`,isloading);
        }
            return Http.getInstance().get(`/cases/${context.case}/select`,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.story && true){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.product && true){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/cases`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/cases/${context.case}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.story && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/cases/${context.case}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.product && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/cases/${context.case}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/cases/${context.case}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case){
            return Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/cases/${context.case}`,isloading);
        }
        if(context.story && context.case){
            return Http.getInstance().delete(`/stories/${context.story}/cases/${context.case}`,isloading);
        }
        if(context.product && context.case){
            return Http.getInstance().delete(`/products/${context.product}/cases/${context.case}`,isloading);
        }
            return Http.getInstance().delete(`/cases/${context.case}`,isloading);
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.story && context.case){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/cases/${context.case}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.product && context.case){
            let res:any = await Http.getInstance().get(`/products/${context.product}/cases/${context.case}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
            let res:any = await Http.getInstance().get(`/cases/${context.case}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/getdraft`,isloading);
            res.data.case = data.case;
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.story && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/cases/getdraft`,isloading);
            res.data.case = data.case;
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.product && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/cases/getdraft`,isloading);
            res.data.case = data.case;
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        let res:any = await  Http.getInstance().get(`/cases/getdraft`,isloading);
        res.data.case = data.case;
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/checkkey`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.story && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/checkkey`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.product && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/checkkey`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
            return Http.getInstance().post(`/cases/${context.case}/checkkey`,data,isloading);
    }

    /**
     * RunCase接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async RunCase(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/runcase`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.story && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/runcase`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.product && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/runcase`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
            return Http.getInstance().post(`/cases/${context.case}/runcase`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.story && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        if(context.product && context.case){
            let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
        }
        let masterData:any = {};
        let casestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(casestepsData && casestepsData.length && casestepsData.length > 0){
                casestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.casesteps = casestepsData;
        let ibzcasestepsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            ibzcasestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
            if(ibzcasestepsData && ibzcasestepsData.length && ibzcasestepsData.length > 0){
                ibzcasestepsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibzcasesteps = ibzcasestepsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/cases/${context.case}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps));
            this.tempStorage.setItem(context.srfsessionkey+'_ibzcasesteps',JSON.stringify(res.data.ibzcasesteps));
            return res;
    }

    /**
     * FetchCurSuite接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async FetchCurSuite(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/fetchcursuite`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/cases/fetchcursuite`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/cases/fetchcursuite`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/cases/fetchcursuite`,tempData,isloading);
    }

    /**
     * FetchCurTestTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async FetchCurTestTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/fetchcurtesttask`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/cases/fetchcurtesttask`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/cases/fetchcurtesttask`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/cases/fetchcurtesttask`,tempData,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/fetchdefault`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/cases/fetchdefault`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/cases/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/cases/fetchdefault`,tempData,isloading);
    }

    /**
     * BugCreateCase接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async BugCreateCase(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // URI参数传递情况未实现
        // URI参数传递情况未实现
        // URI参数传递情况未实现
        // URI参数传递情况未实现
    }

    /**
     * FetchTempCurSuite接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async FetchTempCurSuite(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/fetchdefault`,data,isloading);
        }
        if(context.story && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/fetchdefault`,data,isloading);
        }
        if(context.product && true){
            return Http.getInstance().get(`/products/${context.product}/cases/fetchdefault`,data,isloading);
        }
        return Http.getInstance().get(`/cases/fetchdefault`,data,isloading);
    }

    /**
     * FetchTempCurTestTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async FetchTempCurTestTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/fetchdefault`,data,isloading);
        }
        if(context.story && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/fetchdefault`,data,isloading);
        }
        if(context.product && true){
            return Http.getInstance().get(`/products/${context.product}/cases/fetchdefault`,data,isloading);
        }
        return Http.getInstance().get(`/cases/fetchdefault`,data,isloading);
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/fetchdefault`,data,isloading);
        }
        if(context.story && true){
            return Http.getInstance().get(`/stories/${context.story}/cases/fetchdefault`,data,isloading);
        }
        if(context.product && true){
            return Http.getInstance().get(`/products/${context.product}/cases/fetchdefault`,data,isloading);
        }
        return Http.getInstance().get(`/cases/fetchdefault`,data,isloading);
    }
}