import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 任务预计服务对象基类
 *
 * @export
 * @class TaskEstimateServiceBase
 * @extends {EntityServie}
 */
export default class TaskEstimateServiceBase extends EntityService {

    /**
     * Creates an instance of  TaskEstimateServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskEstimateServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof TaskEstimateServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='taskestimate';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'taskestimates';
        this.APPDETEXT = 'id';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskestimate){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
        }
        if(context.project && context.task && context.taskestimate){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
        }
        if(context.story && context.task && context.taskestimate){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
        }
        if(context.task && context.taskestimate){
            return Http.getInstance().get(`/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
        }
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates`,data,isloading);
        }
        if(context.project && context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskestimates`,data,isloading);
        }
        if(context.story && context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskestimates`,data,isloading);
        }
        if(context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/tasks/${context.task}/taskestimates`,data,isloading);
        }
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskestimate){
            return Http.getInstance().put(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
        }
        if(context.project && context.task && context.taskestimate){
            return Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
        }
        if(context.story && context.task && context.taskestimate){
            return Http.getInstance().put(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
        }
        if(context.task && context.taskestimate){
            return Http.getInstance().put(`/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
        }
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskestimate){
            return Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
        }
        if(context.project && context.task && context.taskestimate){
            return Http.getInstance().delete(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
        }
        if(context.story && context.task && context.taskestimate){
            return Http.getInstance().delete(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
        }
        if(context.task && context.taskestimate){
            return Http.getInstance().delete(`/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
        }
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskestimate){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
        }
        if(context.project && context.task && context.taskestimate){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
        }
        if(context.story && context.task && context.taskestimate){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
        }
        if(context.task && context.taskestimate){
            return Http.getInstance().get(`/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
        }
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/getdraft`,isloading);
        }
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/getdraft`,isloading);
        }
        if(context.story && context.task && true){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/getdraft`,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/taskestimates/getdraft`,isloading);
        }
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskestimate){
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
        }
        if(context.project && context.task && context.taskestimate){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
        }
        if(context.story && context.task && context.taskestimate){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
        }
        if(context.task && context.taskestimate){
            return Http.getInstance().post(`/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
        }
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && context.taskestimate){
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
        }
        if(context.project && context.task && context.taskestimate){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
        }
        if(context.story && context.task && context.taskestimate){
            return Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
        }
        if(context.task && context.taskestimate){
            return Http.getInstance().post(`/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
        }
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
        }
    }

    /**
     * FetchDefaults接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async FetchDefaults(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
        }
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefaults`,data,isloading);
        }
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/fetchdefaults`,data,isloading);
        }
        if(context.story && context.task && true){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefaults`,data,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/taskestimates/fetchdefaults`,data,isloading);
        }
    }

    /**
     * FetchTempDefaults接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async FetchTempDefaults(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefaults`,data,isloading);
        }
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/fetchdefaults`,data,isloading);
        }
        if(context.story && context.task && true){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefaults`,data,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/taskestimates/fetchdefaults`,data,isloading);
        }
    }
}