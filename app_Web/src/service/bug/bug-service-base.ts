import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * Bug服务对象基类
 *
 * @export
 * @class BugServiceBase
 * @extends {EntityServie}
 */
export default class BugServiceBase extends EntityService {

    /**
     * Creates an instance of  BugServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  BugServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof BugServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='bug';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'bugs';
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
     * @memberof BugServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.bug){
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/bugs/${context.bug}/select`,isloading);
        }
        if(context.project && context.bug){
            return Http.getInstance().get(`/projects/${context.project}/bugs/${context.bug}/select`,isloading);
        }
        if(context.productplan && context.bug){
            return Http.getInstance().get(`/productplans/${context.productplan}/bugs/${context.bug}/select`,isloading);
        }
        if(context.product && context.bug){
            return Http.getInstance().get(`/products/${context.product}/bugs/${context.bug}/select`,isloading);
        }
            return Http.getInstance().get(`/bugs/${context.bug}/select`,isloading);
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/bugs/${context.bug}/close`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/close`,data,isloading);
            return res;
        }
        if(context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/bugs/${context.bug}/close`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/close`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/close`,data,isloading);
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.bug){
            let res:any = await Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/bugs/${context.bug}`,isloading);
            return res;
        }
        if(context.project && context.bug){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/bugs/${context.bug}`,isloading);
            return res;
        }
        if(context.productplan && context.bug){
            let res:any = await Http.getInstance().get(`/productplans/${context.productplan}/bugs/${context.bug}`,isloading);
            return res;
        }
        if(context.product && context.bug){
            let res:any = await Http.getInstance().get(`/products/${context.product}/bugs/${context.bug}`,isloading);
            return res;
        }
            let res:any = await Http.getInstance().get(`/bugs/${context.bug}`,isloading);
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/bugs/getdraft`,isloading);
            res.data.bug = data.bug;
            return res;
        }
        if(context.project && true){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/bugs/getdraft`,isloading);
            res.data.bug = data.bug;
            return res;
        }
        if(context.productplan && true){
            let res:any = await Http.getInstance().get(`/productplans/${context.productplan}/bugs/getdraft`,isloading);
            res.data.bug = data.bug;
            return res;
        }
        if(context.product && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/bugs/getdraft`,isloading);
            res.data.bug = data.bug;
            return res;
        }
        let res:any = await  Http.getInstance().get(`/bugs/getdraft`,isloading);
        res.data.bug = data.bug;
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/bugs/${context.bug}/checkkey`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/checkkey`,data,isloading);
            return res;
        }
        if(context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/bugs/${context.bug}/checkkey`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/checkkey`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/checkkey`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/bugs/${context.bug}/save`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/save`,data,isloading);
            return res;
        }
        if(context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/bugs/${context.bug}/save`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/save`,data,isloading);
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/bugs/${context.bug}/save`,data,isloading);
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/bugs`,data,isloading);
            return res;
        }
        if(context.project && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs`,data,isloading);
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
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/bugs`,data,isloading);
            return res;
        }
        if(context.product && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs`,data,isloading);
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/bugs`,data,isloading);
        return res;
    }

    /**
     * Confirm接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Confirm(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/bugs/${context.bug}/confirm`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/confirm`,data,isloading);
            return res;
        }
        if(context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/bugs/${context.bug}/confirm`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/confirm`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/confirm`,data,isloading);
    }

    /**
     * Resolve接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Resolve(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/bugs/${context.bug}/resolve`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/resolve`,data,isloading);
            return res;
        }
        if(context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/bugs/${context.bug}/resolve`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/resolve`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/resolve`,data,isloading);
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.bug){
            return Http.getInstance().delete(`/products/${context.product}/productplans/${context.productplan}/bugs/${context.bug}`,isloading);
        }
        if(context.project && context.bug){
            return Http.getInstance().delete(`/projects/${context.project}/bugs/${context.bug}`,isloading);
        }
        if(context.productplan && context.bug){
            return Http.getInstance().delete(`/productplans/${context.productplan}/bugs/${context.bug}`,isloading);
        }
        if(context.product && context.bug){
            return Http.getInstance().delete(`/products/${context.product}/bugs/${context.bug}`,isloading);
        }
            return Http.getInstance().delete(`/bugs/${context.bug}`,isloading);
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/productplans/${context.productplan}/bugs/${context.bug}`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/bugs/${context.bug}`,data,isloading);
            return res;
        }
        if(context.productplan && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/productplans/${context.productplan}/bugs/${context.bug}`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/bugs/${context.bug}`,data,isloading);
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/bugs/${context.bug}`,data,isloading);
            return res;
    }

    /**
     * FetchReportBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchReportBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/bugs/fetchreportbugs`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchreportbugs`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/productplans/${context.productplan}/bugs/fetchreportbugs`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchreportbugs`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchreportbugs`,tempData,isloading);
    }

    /**
     * FetchReleaseBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchReleaseBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/bugs/fetchreleasebugs`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchreleasebugs`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/productplans/${context.productplan}/bugs/fetchreleasebugs`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchreleasebugs`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchreleasebugs`,tempData,isloading);
    }

    /**
     * FetchBuildOpenBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildOpenBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/bugs/fetchbuildopenbugs`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildopenbugs`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/productplans/${context.productplan}/bugs/fetchbuildopenbugs`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildopenbugs`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchbuildopenbugs`,tempData,isloading);
    }

    /**
     * FetchReleaseLeftBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchReleaseLeftBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/bugs/fetchreleaseleftbugs`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchreleaseleftbugs`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/productplans/${context.productplan}/bugs/fetchreleaseleftbugs`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchreleaseleftbugs`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchreleaseleftbugs`,tempData,isloading);
    }

    /**
     * FetchBuildBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/bugs/fetchbuildbugs`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildbugs`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/productplans/${context.productplan}/bugs/fetchbuildbugs`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildbugs`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchbuildbugs`,tempData,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/bugs/fetchdefault`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchdefault`,tempData,isloading);
        }
        if(context.productplan && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/productplans/${context.productplan}/bugs/fetchdefault`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchdefault`,tempData,isloading);
    }
}