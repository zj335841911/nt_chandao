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
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks`,data,isloading);
        }
        if(context.project && context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks`,data,isloading);
        }
        if(context.story && context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks`,data,isloading);
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
            return Http.getInstance().put(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().put(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().put(`/tasks/${context.task}/subtasks/${context.subtask}`,data,isloading);
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
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/${context.subtask}`,isloading);
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
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/getdraft`,isloading);
        }
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/getdraft`,isloading);
        }
        if(context.story && context.task && true){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/getdraft`,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/getdraft`,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/activate`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/activate`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/activate`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/activate`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/assignto`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/assignto`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/assignto`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/assignto`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/cancel`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/cancel`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/cancel`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/cancel`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/checkkey`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/checkkey`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/checkkey`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/checkkey`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/close`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/close`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/close`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/close`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/deleteestimate`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/deleteestimate`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/deleteestimate`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/deleteestimate`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/editestimate`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/editestimate`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/editestimate`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/editestimate`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/finish`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/finish`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/finish`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/finish`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/pause`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/pause`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/pause`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/pause`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/recordestimate`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/recordestimate`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/recordestimate`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/recordestimate`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/restart`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/restart`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/restart`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/restart`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/save`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/save`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/save`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/save`,data,isloading);
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
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/start`,data,isloading);
        }
        if(context.project && context.task && context.subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/subtasks/${context.subtask}/start`,data,isloading);
        }
        if(context.story && context.task && context.subtask){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/subtasks/${context.subtask}/start`,data,isloading);
        }
        if(context.task && context.subtask){
            return Http.getInstance().post(`/tasks/${context.task}/subtasks/${context.subtask}/start`,data,isloading);
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
     * FetchDefaultRow接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchDefaultRow(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/fetchdefaultrow`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/subtasks/fetchdefaultrow`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/subtasks/fetchdefaultrow`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/subtasks/fetchdefaultrow`,tempData,isloading);
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
     * FetchTempDefaultRow接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempDefaultRow(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
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