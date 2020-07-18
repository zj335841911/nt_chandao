import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 任务团队服务对象基类
 *
 * @export
 * @class TaskTeamServiceBase
 * @extends {EntityServie}
 */
export default class TaskTeamServiceBase extends EntityService {

    /**
     * Creates an instance of  TaskTeamServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskTeamServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof TaskTeamServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='taskteam';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'taskteams';
        this.APPDETEXT = 'account';
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
     * @memberof TaskTeamServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskteam){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}/select`,isloading);
        }
        if(context.project && context.task && context.taskteam){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskteams/${context.taskteam}/select`,isloading);
        }
        if(context.story && context.task && context.taskteam){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}/select`,isloading);
        }
        if(context.task && context.taskteam){
            return Http.getInstance().get(`/tasks/${context.task}/taskteams/${context.taskteam}/select`,isloading);
        }
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskTeamServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams`,data,isloading);
            return res;
        }
        if(context.project && context.task && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskteams`,data,isloading);
            return res;
        }
        if(context.story && context.task && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskteams`,data,isloading);
            return res;
        }
        if(context.task && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/taskteams`,data,isloading);
            return res;
        }
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskTeamServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}/taskteams/${context.taskteam}`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}`,data,isloading);
            return res;
        }
        if(context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/tasks/${context.task}/taskteams/${context.taskteam}`,data,isloading);
            return res;
        }
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskTeamServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskteam){
            return Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
        }
        if(context.project && context.task && context.taskteam){
            return Http.getInstance().delete(`/projects/${context.project}/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
        }
        if(context.story && context.task && context.taskteam){
            return Http.getInstance().delete(`/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
        }
        if(context.task && context.taskteam){
            return Http.getInstance().delete(`/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
        }
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskTeamServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskteam){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
            return res;
        }
        if(context.project && context.task && context.taskteam){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
            return res;
        }
        if(context.story && context.task && context.taskteam){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
            return res;
        }
        if(context.task && context.taskteam){
            let res:any = await Http.getInstance().get(`/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
            return res;
        }
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskTeamServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/getdraft`,isloading);
            res.data.taskteam = data.taskteam;
            return res;
        }
        if(context.project && context.task && true){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskteams/getdraft`,isloading);
            res.data.taskteam = data.taskteam;
            return res;
        }
        if(context.story && context.task && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskteams/getdraft`,isloading);
            res.data.taskteam = data.taskteam;
            return res;
        }
        if(context.task && true){
            let res:any = await Http.getInstance().get(`/tasks/${context.task}/taskteams/getdraft`,isloading);
            res.data.taskteam = data.taskteam;
            return res;
        }
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskTeamServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}/checkkey`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskteams/${context.taskteam}/checkkey`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}/checkkey`,data,isloading);
            return res;
        }
        if(context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/taskteams/${context.taskteam}/checkkey`,data,isloading);
            return res;
        }
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskTeamServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}/save`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskteams/${context.taskteam}/save`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}/save`,data,isloading);
            return res;
        }
        if(context.task && context.taskteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/taskteams/${context.taskteam}/save`,data,isloading);
            return res;
        }
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskTeamServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/fetchdefault`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskteams/fetchdefault`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskteams/fetchdefault`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/taskteams/fetchdefault`,tempData,isloading);
        }
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskTeamServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/fetchdefault`,data,isloading);
        }
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskteams/fetchdefault`,data,isloading);
        }
        if(context.story && context.task && true){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskteams/fetchdefault`,data,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/taskteams/fetchdefault`,data,isloading);
        }
    }
}