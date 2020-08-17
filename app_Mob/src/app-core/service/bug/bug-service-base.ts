import { Http,Util } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';
import { GetModuleBranchLogic } from './get-module-branch-logic';



/**
 * Bug服务对象基类
 *
 * @export
 * @class BugServiceBase
 * @extends {EntityServie}
 */
export class BugServiceBase extends EntityService {

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
        this.APPNAME = 'mob';
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
            let res:any = Http.getInstance().get(`/bugs/${context.bug}/select`,isloading);
            
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
        if(context.story && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs`,data,isloading);
            
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
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/bugs/${context.bug}`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/bugs/${context.bug}`,data,isloading);
            
            return res;
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
        if(context.story && context.bug){
            let res:any = Http.getInstance().delete(`/stories/${context.story}/bugs/${context.bug}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/bugs/${context.bug}`,isloading);
            return res;
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
        if(context.story && context.bug){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/bugs/${context.bug}`,isloading);
            
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
        if(context.story && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/bugs/getdraft`,isloading);
            res.data.bug = data.bug;
            
            return res;
        }
        let res:any = await  Http.getInstance().get(`/bugs/getdraft`,isloading);
        res.data.bug = data.bug;
        
        return res;
    }

    /**
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/activate`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/activate`,data,isloading);
            return res;
    }

    /**
     * AssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async AssignTo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/assignto`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/assignto`,data,isloading);
            return res;
    }

    /**
     * BatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async BatchUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/batchunlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/batchunlinkbug`,data,isloading);
            return res;
    }

    /**
     * BuildBatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async BuildBatchUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
            return res;
    }

    /**
     * BuildLinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async BuildLinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/buildlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/buildlinkbug`,data,isloading);
            return res;
    }

    /**
     * BuildUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async BuildUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/buildunlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/buildunlinkbug`,data,isloading);
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
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/checkkey`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/checkkey`,data,isloading);
            return res;
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
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/close`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/close`,data,isloading);
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
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/confirm`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/confirm`,data,isloading);
            return res;
    }

    /**
     * LinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async LinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/linkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/linkbug`,data,isloading);
            return res;
    }

    /**
     * ReleaaseBatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ReleaaseBatchUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
            return res;
    }

    /**
     * ReleaseLinkBugbyBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ReleaseLinkBugbyBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
            return res;
    }

    /**
     * ReleaseLinkBugbyLeftBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ReleaseLinkBugbyLeftBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
            return res;
    }

    /**
     * ReleaseUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ReleaseUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
            return res;
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
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/resolve`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/resolve`,data,isloading);
            return res;
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
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/save`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/bugs/${context.bug}/save`,data,isloading);
            
            return res;
    }

    /**
     * ToStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ToStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/tostory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/tostory`,data,isloading);
            return res;
    }

    /**
     * UnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async UnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/unlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/unlinkbug`,data,isloading);
            return res;
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
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildbugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildbugs`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildLinkResolvedBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildLinkResolvedBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildlinkresolvedbugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildlinkresolvedbugs`,tempData,isloading);
        return res;
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
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildopenbugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildopenbugs`,tempData,isloading);
        return res;
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
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchdefault`,tempData,isloading);
        return res;
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
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchreleasebugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchreleasebugs`,tempData,isloading);
        return res;
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
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchreleaseleftbugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchreleaseleftbugs`,tempData,isloading);
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
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchreportbugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchreportbugs`,tempData,isloading);
        return res;
    }
}