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
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams`,data,isloading);
        }
        if(context.project && context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskteams`,data,isloading);
        }
        if(context.story && context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskteams`,data,isloading);
        }
        if(context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/tasks/${context.task}/taskteams`,data,isloading);
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
            return Http.getInstance().put(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}`,data,isloading);
        }
        if(context.project && context.task && context.taskteam){
            return Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}/taskteams/${context.taskteam}`,data,isloading);
        }
        if(context.story && context.task && context.taskteam){
            return Http.getInstance().put(`/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}`,data,isloading);
        }
        if(context.task && context.taskteam){
            return Http.getInstance().put(`/tasks/${context.task}/taskteams/${context.taskteam}`,data,isloading);
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
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
        }
        if(context.project && context.task && context.taskteam){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
        }
        if(context.story && context.task && context.taskteam){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
        }
        if(context.task && context.taskteam){
            return Http.getInstance().get(`/tasks/${context.task}/taskteams/${context.taskteam}`,isloading);
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
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/getdraft`,isloading);
        }
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskteams/getdraft`,isloading);
        }
        if(context.story && context.task && true){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskteams/getdraft`,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/taskteams/getdraft`,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}/checkkey`,data,isloading);
        }
        if(context.project && context.task && context.taskteam){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskteams/${context.taskteam}/checkkey`,data,isloading);
        }
        if(context.story && context.task && context.taskteam){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}/checkkey`,data,isloading);
        }
        if(context.task && context.taskteam){
            return Http.getInstance().post(`/tasks/${context.task}/taskteams/${context.taskteam}/checkkey`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}/save`,data,isloading);
        }
        if(context.project && context.task && context.taskteam){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskteams/${context.taskteam}/save`,data,isloading);
        }
        if(context.story && context.task && context.taskteam){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskteams/${context.taskteam}/save`,data,isloading);
        }
        if(context.task && context.taskteam){
            return Http.getInstance().post(`/tasks/${context.task}/taskteams/${context.taskteam}/save`,data,isloading);
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