import { Http,Util } from '@/utils';
import EntityService from '../entity-service';
import OpenTaskLogic from '@/service/sub-task/open-task-logic';



/**
 * 任务服务对象基类
 *
 * @export
 * @class SubTaskServiceBase
 * @extends {EntityServie}
 */
export default class SubTaskServiceBase extends EntityService {

    /**
     * Creates an instance of  SubTaskServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  SubTaskServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof SubTaskServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='subtask';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'subtasks';
        this.APPDETEXT = 'name';
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
     * @memberof SubTaskServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.subtask){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/select`,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/${context.subtask}/select`,isloading);
        }
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/getdraft`,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/getdraft`,isloading);
        }
    }

    /**
     * Start接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Start(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/start`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/start`,data,isloading);
        }
    }

    /**
     * AssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async AssignTo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/assignto`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/assignto`,data,isloading);
        }
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.subtask){
            return Http.getInstance().delete(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().delete(`/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
        }
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.subtask){
            return Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().put(`/tasks/${context.task}/subtasks/${context.subtask}`,data,isloading);
        }
    }

    /**
     * DeleteEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async DeleteEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/deleteestimate`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/deleteestimate`,data,isloading);
        }
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/save`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/save`,data,isloading);
        }
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.subtask){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
        }
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/checkkey`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/checkkey`,data,isloading);
        }
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks`,data,isloading);
        }
        if(context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/tasks/${context.task}/subtasks`,data,isloading);
        }
    }

    /**
     * FetchRootTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchRootTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchroottask`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchroottask`,tempData,isloading);
        }
    }

    /**
     * FetchTypeGroup接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTypeGroup(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchtypegroup`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchtypegroup`,tempData,isloading);
        }
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchdefault`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchdefault`,tempData,isloading);
        }
    }
}