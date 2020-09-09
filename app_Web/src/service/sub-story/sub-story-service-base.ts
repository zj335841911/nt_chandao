import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 需求服务对象基类
 *
 * @export
 * @class SubStoryServiceBase
 * @extends {EntityServie}
 */
export default class SubStoryServiceBase extends EntityService {

    /**
     * Creates an instance of  SubStoryServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  SubStoryServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof SubStoryServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='substory';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'substories';
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
     * @memberof SubStoryServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/select`,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/${context.substory}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/substories/${context.substory}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories`,data,isloading);
            
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories`,data,isloading);
            
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
        let res:any = await Http.getInstance().post(`/substories`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/substories/${context.substory}`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/substories/${context.substory}`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/substories/${context.substory}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let res:any = Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/substories/${context.substory}`,isloading);
            return res;
        }
        if(context.story && context.substory){
            let res:any = Http.getInstance().delete(`/stories/${context.story}/substories/${context.substory}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/substories/${context.substory}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/${context.substory}`,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/substories/${context.substory}`,isloading);
            
            return res;
        }
            let res:any = await Http.getInstance().get(`/substories/${context.substory}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/getdraft`,isloading);
            res.data.substory = data.substory;
            
            return res;
        }
        if(context.story && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/substories/getdraft`,isloading);
            res.data.substory = data.substory;
            
            return res;
        }
        let res:any = await  Http.getInstance().get(`/substories/getdraft`,isloading);
        res.data.substory = data.substory;
        
        return res;
    }

    /**
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/activate`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/activate`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/activate`,data,isloading);
            return res;
    }

    /**
     * AssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async AssignTo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/assignto`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/assignto`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/assignto`,data,isloading);
            return res;
    }

    /**
     * BatchAssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BatchAssignTo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/batchassignto`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/batchassignto`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/batchassignto`,data,isloading);
            return res;
    }

    /**
     * BatchChangeBranch接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BatchChangeBranch(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/batchchangebranch`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/batchchangebranch`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/batchchangebranch`,data,isloading);
            return res;
    }

    /**
     * BatchChangeModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BatchChangeModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/batchchangemodule`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/batchchangemodule`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/batchchangemodule`,data,isloading);
            return res;
    }

    /**
     * BatchChangePlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BatchChangePlan(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/batchchangeplan`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/batchchangeplan`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/batchchangeplan`,data,isloading);
            return res;
    }

    /**
     * BatchChangeStage接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BatchChangeStage(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/batchchangestage`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/batchchangestage`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/batchchangestage`,data,isloading);
            return res;
    }

    /**
     * BatchClose接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BatchClose(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/batchclose`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/batchclose`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/batchclose`,data,isloading);
            return res;
    }

    /**
     * BatchReview接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BatchReview(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/batchreview`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/batchreview`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/batchreview`,data,isloading);
            return res;
    }

    /**
     * BatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/batchunlinkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/batchunlinkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/batchunlinkstory`,data,isloading);
            return res;
    }

    /**
     * BugToStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BugToStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/bugtostory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/bugtostory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/bugtostory`,data,isloading);
            return res;
    }

    /**
     * BuildBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BuildBatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/buildbatchunlinkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/buildbatchunlinkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/buildbatchunlinkstory`,data,isloading);
            return res;
    }

    /**
     * BuildLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BuildLinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/buildlinkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/buildlinkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/buildlinkstory`,data,isloading);
            return res;
    }

    /**
     * BuildUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BuildUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/buildunlinkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/buildunlinkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/buildunlinkstory`,data,isloading);
            return res;
    }

    /**
     * BuildUnlinkStorys接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async BuildUnlinkStorys(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/buildunlinkstorys`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/buildunlinkstorys`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/buildunlinkstorys`,data,isloading);
            return res;
    }

    /**
     * Change接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async Change(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/change`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/change`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/change`,data,isloading);
            return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/checkkey`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/checkkey`,data,isloading);
            return res;
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/close`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/close`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/close`,data,isloading);
            return res;
    }

    /**
     * GetStorySpec接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async GetStorySpec(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/getstoryspec`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/getstoryspec`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/getstoryspec`,data,isloading);
            return res;
    }

    /**
     * GetStorySpecs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async GetStorySpecs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/getstoryspecs`,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/substories/${context.substory}/getstoryspecs`,isloading);
            
            return res;
        }
            let res:any = await Http.getInstance().get(`/substories/${context.substory}/getstoryspecs`,isloading);
            
            return res;
    }

    /**
     * ImportPlanStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async ImportPlanStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/importplanstories`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/importplanstories`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/importplanstories`,data,isloading);
            return res;
    }

    /**
     * LinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async LinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/linkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/linkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/linkstory`,data,isloading);
            return res;
    }

    /**
     * ProjectBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async ProjectBatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/projectbatchunlinkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/projectbatchunlinkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/projectbatchunlinkstory`,data,isloading);
            return res;
    }

    /**
     * ProjectLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async ProjectLinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/projectlinkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/projectlinkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/projectlinkstory`,data,isloading);
            return res;
    }

    /**
     * ProjectUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async ProjectUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/projectunlinkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/projectunlinkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/projectunlinkstory`,data,isloading);
            return res;
    }

    /**
     * ProjectUnlinkStorys接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async ProjectUnlinkStorys(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/projectunlinkstorys`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/projectunlinkstorys`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/projectunlinkstorys`,data,isloading);
            return res;
    }

    /**
     * Push接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async Push(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/push`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/push`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/push`,data,isloading);
            return res;
    }

    /**
     * ReleaseBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async ReleaseBatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/releasebatchunlinkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/releasebatchunlinkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/releasebatchunlinkstory`,data,isloading);
            return res;
    }

    /**
     * ReleaseLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async ReleaseLinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/releaselinkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/releaselinkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/releaselinkstory`,data,isloading);
            return res;
    }

    /**
     * ReleaseUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async ReleaseUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/releaseunlinkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/releaseunlinkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/releaseunlinkstory`,data,isloading);
            return res;
    }

    /**
     * ResetReviewedBy接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async ResetReviewedBy(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/resetreviewedby`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/resetreviewedby`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/resetreviewedby`,data,isloading);
            return res;
    }

    /**
     * Review接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async Review(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/review`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/review`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/review`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/save`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/save`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/substories/${context.substory}/save`,data,isloading);
            
            return res;
    }

    /**
     * SendMessage接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async SendMessage(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/sendmessage`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/sendmessage`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/sendmessage`,data,isloading);
            return res;
    }

    /**
     * SendMsgPreProcess接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async SendMsgPreProcess(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/sendmsgpreprocess`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/sendmsgpreprocess`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/sendmsgpreprocess`,data,isloading);
            return res;
    }

    /**
     * StoryFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async StoryFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/storyfavorites`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/storyfavorites`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/storyfavorites`,data,isloading);
            return res;
    }

    /**
     * StoryNFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async StoryNFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/storynfavorites`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/storynfavorites`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/storynfavorites`,data,isloading);
            return res;
    }

    /**
     * SyncFromIBIZ接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async SyncFromIBIZ(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/syncfromibiz`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/syncfromibiz`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/syncfromibiz`,data,isloading);
            return res;
    }

    /**
     * UnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async UnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/substories/${context.substory}/unlinkstory`,data,isloading);
            
            return res;
        }
        if(context.story && context.substory){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/substories/${context.substory}/unlinkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/substories/${context.substory}/unlinkstory`,data,isloading);
            return res;
    }

    /**
     * FetchAssignedToMyStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchAssignedToMyStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchassignedtomystory`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchassignedtomystory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchassignedtomystory`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildLinkCompletedStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchBuildLinkCompletedStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchbuildlinkcompletedstories`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchbuildlinkcompletedstories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchbuildlinkcompletedstories`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildLinkableStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchBuildLinkableStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchbuildlinkablestories`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchbuildlinkablestories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchbuildlinkablestories`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchBuildStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchbuildstories`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchbuildstories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchbuildstories`,tempData,isloading);
        return res;
    }

    /**
     * FetchByModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchByModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchbymodule`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchbymodule`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchbymodule`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchGetProductStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchGetProductStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchgetproductstories`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchgetproductstories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchgetproductstories`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchMyFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchmyfavorites`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchmyfavorites`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchmyfavorites`,tempData,isloading);
        return res;
    }

    /**
     * FetchParentDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchParentDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchparentdefault`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchparentdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchparentdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchProjectLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchProjectLinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchprojectlinkstory`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchprojectlinkstory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchprojectlinkstory`,tempData,isloading);
        return res;
    }

    /**
     * FetchProjectStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchProjectStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchprojectstories`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchprojectstories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchprojectstories`,tempData,isloading);
        return res;
    }

    /**
     * FetchReleaseLinkableStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchReleaseLinkableStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchreleaselinkablestories`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchreleaselinkablestories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchreleaselinkablestories`,tempData,isloading);
        return res;
    }

    /**
     * FetchReleaseStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchReleaseStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchreleasestories`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchreleasestories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchreleasestories`,tempData,isloading);
        return res;
    }

    /**
     * FetchReportStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchReportStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchreportstories`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchreportstories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchreportstories`,tempData,isloading);
        return res;
    }

    /**
     * FetchStoryChild接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchStoryChild(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchstorychild`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchstorychild`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchstorychild`,tempData,isloading);
        return res;
    }

    /**
     * FetchStoryRelated接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchStoryRelated(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchstoryrelated`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchstoryrelated`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchstoryrelated`,tempData,isloading);
        return res;
    }

    /**
     * FetchSubStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchSubStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchsubstory`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchsubstory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchsubstory`,tempData,isloading);
        return res;
    }

    /**
     * FetchTaskRelatedStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async FetchTaskRelatedStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/substories/fetchtaskrelatedstory`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/substories/fetchtaskrelatedstory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/substories/fetchtaskrelatedstory`,tempData,isloading);
        return res;
    }

    /**
     * GetTaskReStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async GetTaskReStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * ToStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubStoryServiceBase
     */
    public async ToStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}