import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



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
        if(context.product && context.story && context.task && context.subtask){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/select`,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/select`,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/select`,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/${context.subtask}/select`,isloading);
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks`,data,isloading);
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks`,data,isloading);
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks`,data,isloading);
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
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks`,data,isloading);
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
     * @memberof SubTaskServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/tasks/${context.task}/subtasks/${context.subtask}`,data,isloading);
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
     * @memberof SubTaskServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            return Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().delete(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().delete(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().delete(`/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
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
        if(context.product && context.story && context.task && context.subtask){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let res:any = await Http.getInstance().get(`/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
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
     * @memberof SubTaskServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/getdraft`,isloading);
            res.data.subtask = data.subtask;
            return res;
        }
        if(context.project && context.task && true){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/getdraft`,isloading);
            res.data.subtask = data.subtask;
            return res;
        }
        if(context.story && context.task && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/getdraft`,isloading);
            res.data.subtask = data.subtask;
            return res;
        }
        if(context.task && true){
            let res:any = await Http.getInstance().get(`/tasks/${context.task}/subtasks/getdraft`,isloading);
            res.data.subtask = data.subtask;
            return res;
        }
    }

    /**
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/activate`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/activate`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/activate`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/activate`,data,isloading);
            return res;
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
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/assignto`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/assignto`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/assignto`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/assignto`,data,isloading);
            return res;
        }
    }

    /**
     * Cancel接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Cancel(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/cancel`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/cancel`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/cancel`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/cancel`,data,isloading);
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
     * @memberof SubTaskServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/checkkey`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/checkkey`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/checkkey`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/checkkey`,data,isloading);
            return res;
        }
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/close`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/close`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/close`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/close`,data,isloading);
            return res;
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
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/deleteestimate`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/deleteestimate`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/deleteestimate`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/deleteestimate`,data,isloading);
            return res;
        }
    }

    /**
     * EditEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async EditEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/editestimate`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/editestimate`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/editestimate`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/editestimate`,data,isloading);
            return res;
        }
    }

    /**
     * Finish接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Finish(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/finish`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/finish`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/finish`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/finish`,data,isloading);
            return res;
        }
    }

    /**
     * Pause接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Pause(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/pause`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/pause`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/pause`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/pause`,data,isloading);
            return res;
        }
    }

    /**
     * RecordEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async RecordEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/recordestimate`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/recordestimate`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/recordestimate`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/recordestimate`,data,isloading);
            return res;
        }
    }

    /**
     * Restart接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Restart(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/restart`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/restart`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/restart`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/restart`,data,isloading);
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
     * @memberof SubTaskServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/save`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/save`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/save`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/save`,data,isloading);
            return res;
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
        if(context.product && context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/start`,data,isloading);
            return res;
        }
        if(context.project && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/start`,data,isloading);
            return res;
        }
        if(context.story && context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/start`,data,isloading);
            return res;
        }
        if(context.task && context.subtask){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/start`,data,isloading);
            return res;
        }
    }

    /**
     * FetchByModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchByModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/fetchbymodule`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchbymodule`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/fetchbymodule`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchbymodule`,tempData,isloading);
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
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/fetchdefault`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchdefault`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/fetchdefault`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchdefault`,tempData,isloading);
        }
    }

    /**
     * FetchProjectTASK接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchProjectTASK(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/fetchprojecttask`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchprojecttask`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/fetchprojecttask`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchprojecttask`,tempData,isloading);
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
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/fetchroottask`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchroottask`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/fetchroottask`,tempData,isloading);
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
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchtypegroup`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchtypegroup`,tempData,isloading);
        }
    }

    /**
     * CalcTime接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async CalcTime(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // URI参数传递情况未实现
        // URI参数传递情况未实现
        // URI参数传递情况未实现
        // URI参数传递情况未实现
    }

    /**
     * FetchTempByModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempByModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.story && context.task && true){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.story && context.task && true){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
    }

    /**
     * FetchTempProjectTASK接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempProjectTASK(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.story && context.task && true){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
    }

    /**
     * FetchTempRootTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempRootTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.story && context.task && true){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
    }

    /**
     * FetchTempTypeGroup接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempTypeGroup(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.story && context.task && true){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchtypegroup`,data,isloading);
        }
    }
}