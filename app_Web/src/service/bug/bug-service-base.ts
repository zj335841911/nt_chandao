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
        if(context.product && context.story && context.bug){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/select`,isloading);
        }
        if(context.project && context.bug){
            return Http.getInstance().get(`/projects/${context.project}/bugs/${context.bug}/select`,isloading);
        }
        if(context.story && context.bug){
            return Http.getInstance().get(`/stories/${context.story}/bugs/${context.bug}/select`,isloading);
        }
        if(context.product && context.bug){
            return Http.getInstance().get(`/products/${context.product}/bugs/${context.bug}/select`,isloading);
        }
            return Http.getInstance().get(`/bugs/${context.bug}/select`,isloading);
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
        if(context.product && context.story && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs`,data,isloading);
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
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/bugs/${context.bug}`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/bugs/${context.bug}`,data,isloading);
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
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            return Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}`,isloading);
        }
        if(context.project && context.bug){
            return Http.getInstance().delete(`/projects/${context.project}/bugs/${context.bug}`,isloading);
        }
        if(context.story && context.bug){
            return Http.getInstance().delete(`/stories/${context.story}/bugs/${context.bug}`,isloading);
        }
        if(context.product && context.bug){
            return Http.getInstance().delete(`/products/${context.product}/bugs/${context.bug}`,isloading);
        }
            return Http.getInstance().delete(`/bugs/${context.bug}`,isloading);
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
        if(context.product && context.story && context.bug){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}`,isloading);
            return res;
        }
        if(context.project && context.bug){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/bugs/${context.bug}`,isloading);
            return res;
        }
        if(context.story && context.bug){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/bugs/${context.bug}`,isloading);
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
        if(context.product && context.story && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/getdraft`,isloading);
            res.data.bug = data.bug;
            return res;
        }
        if(context.project && true){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/bugs/getdraft`,isloading);
            res.data.bug = data.bug;
            return res;
        }
        if(context.story && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/bugs/getdraft`,isloading);
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
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/activate`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/activate`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/activate`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/activate`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/activate`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/assignto`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/assignto`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/assignto`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/assignto`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/assignto`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/batchunlinkbug`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/batchunlinkbug`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/batchunlinkbug`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/batchunlinkbug`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/batchunlinkbug`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/buildlinkbug`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/buildlinkbug`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/buildlinkbug`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/buildlinkbug`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/buildlinkbug`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/buildunlinkbug`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/buildunlinkbug`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/buildunlinkbug`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/buildunlinkbug`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/buildunlinkbug`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/checkkey`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/checkkey`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/checkkey`,data,isloading);
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
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/close`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/close`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/close`,data,isloading);
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
     * Confirm接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Confirm(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/confirm`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/confirm`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/confirm`,data,isloading);
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
     * LinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async LinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/linkbug`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/linkbug`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/linkbug`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/linkbug`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/linkbug`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/resolve`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/resolve`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/resolve`,data,isloading);
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
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/save`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/save`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/save`,data,isloading);
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
     * ToStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ToStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/tostory`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/tostory`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/tostory`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/tostory`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/tostory`,data,isloading);
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
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/unlinkbug`,data,isloading);
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/unlinkbug`,data,isloading);
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/unlinkbug`,data,isloading);
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/unlinkbug`,data,isloading);
            return res;
        }
            return Http.getInstance().post(`/bugs/${context.bug}/unlinkbug`,data,isloading);
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
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildbugs`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildbugs`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildbugs`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildbugs`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchbuildbugs`,tempData,isloading);
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
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildopenbugs`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildopenbugs`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildopenbugs`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildopenbugs`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchbuildopenbugs`,tempData,isloading);
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
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchdefault`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchdefault`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/bugs/fetchdefault`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchdefault`,tempData,isloading);
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
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchreleasebugs`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchreleasebugs`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/bugs/fetchreleasebugs`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchreleasebugs`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchreleasebugs`,tempData,isloading);
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
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchreleaseleftbugs`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchreleaseleftbugs`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/bugs/fetchreleaseleftbugs`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchreleaseleftbugs`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchreleaseleftbugs`,tempData,isloading);
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
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchreportbugs`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/bugs/fetchreportbugs`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/bugs/fetchreportbugs`,tempData,isloading);
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/bugs/fetchreportbugs`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/bugs/fetchreportbugs`,tempData,isloading);
    }
}