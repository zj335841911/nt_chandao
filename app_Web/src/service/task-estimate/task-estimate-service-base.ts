import { Http } from '@/utils';
import { Util } from '@/utils';
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
     * @memberof TaskEstimateServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule && context.task && context.taskestimate){
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
            
            return res;
        }
        if(context.product && context.story && context.task && context.taskestimate){
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
            
            return res;
        }
        if(context.product && context.productplan && context.task && context.taskestimate){
            let res:any = Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
            
            return res;
        }
        if(context.project && context.task && context.taskestimate){
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
            
            return res;
        }
        if(context.story && context.task && context.taskestimate){
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
            
            return res;
        }
        if(context.productplan && context.task && context.taskestimate){
            let res:any = Http.getInstance().get(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
            
            return res;
        }
        if(context.projectmodule && context.task && context.taskestimate){
            let res:any = Http.getInstance().get(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
            
            return res;
        }
        if(context.task && context.taskestimate){
            let res:any = Http.getInstance().get(`/tasks/${context.task}/taskestimates/${context.taskestimate}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/taskestimates/${context.taskestimate}/select`,isloading);
            
            return res;
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
        if(context.project && context.projectmodule && context.task && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates`,data,isloading);
            
            return res;
        }
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates`,data,isloading);
            
            return res;
        }
        if(context.product && context.productplan && context.task && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates`,data,isloading);
            
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskestimates`,data,isloading);
            
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskestimates`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.task && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates`,data,isloading);
            
            return res;
        }
        if(context.projectmodule && context.task && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates`,data,isloading);
            
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
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/taskestimates`,data,isloading);
            
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
        let res:any = await Http.getInstance().post(`/taskestimates`,data,isloading);
        
        return res;
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
        if(context.project && context.projectmodule && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
            
            return res;
        }
        if(context.product && context.story && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
            
            return res;
        }
        if(context.product && context.productplan && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
            
            return res;
        }
        if(context.project && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
            
            return res;
        }
        if(context.story && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
            
            return res;
        }
        if(context.projectmodule && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
            
            return res;
        }
        if(context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/tasks/${context.task}/taskestimates/${context.taskestimate}`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/taskestimates/${context.taskestimate}`,data,isloading);
            
            return res;
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
        if(context.project && context.projectmodule && context.task && context.taskestimate){
            let res:any = Http.getInstance().delete(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            return res;
        }
        if(context.product && context.story && context.task && context.taskestimate){
            let res:any = Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            return res;
        }
        if(context.product && context.productplan && context.task && context.taskestimate){
            let res:any = Http.getInstance().delete(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            return res;
        }
        if(context.project && context.task && context.taskestimate){
            let res:any = Http.getInstance().delete(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            return res;
        }
        if(context.story && context.task && context.taskestimate){
            let res:any = Http.getInstance().delete(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            return res;
        }
        if(context.productplan && context.task && context.taskestimate){
            let res:any = Http.getInstance().delete(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            return res;
        }
        if(context.projectmodule && context.task && context.taskestimate){
            let res:any = Http.getInstance().delete(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            return res;
        }
        if(context.task && context.taskestimate){
            let res:any = Http.getInstance().delete(`/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/taskestimates/${context.taskestimate}`,isloading);
            return res;
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
        if(context.project && context.projectmodule && context.task && context.taskestimate){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            
            return res;
        }
        if(context.product && context.story && context.task && context.taskestimate){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            
            return res;
        }
        if(context.product && context.productplan && context.task && context.taskestimate){
            let res:any = await Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            
            return res;
        }
        if(context.project && context.task && context.taskestimate){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            
            return res;
        }
        if(context.story && context.task && context.taskestimate){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            
            return res;
        }
        if(context.productplan && context.task && context.taskestimate){
            let res:any = await Http.getInstance().get(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            
            return res;
        }
        if(context.projectmodule && context.task && context.taskestimate){
            let res:any = await Http.getInstance().get(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            
            return res;
        }
        if(context.task && context.taskestimate){
            let res:any = await Http.getInstance().get(`/tasks/${context.task}/taskestimates/${context.taskestimate}`,isloading);
            
            return res;
        }
            let res:any = await Http.getInstance().get(`/taskestimates/${context.taskestimate}`,isloading);
            
            return res;
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
        if(context.project && context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            if(tempData.taskestimate) delete tempData.taskestimate;
            if(tempData.id) delete tempData.id;
            let res:any = await Http.getInstance().get(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/getdraft`,tempData,isloading);
            res.data.taskestimate = data.taskestimate;
            
            return res;
        }
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            if(tempData.taskestimate) delete tempData.taskestimate;
            if(tempData.id) delete tempData.id;
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/getdraft`,tempData,isloading);
            res.data.taskestimate = data.taskestimate;
            
            return res;
        }
        if(context.product && context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            if(tempData.taskestimate) delete tempData.taskestimate;
            if(tempData.id) delete tempData.id;
            let res:any = await Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/getdraft`,tempData,isloading);
            res.data.taskestimate = data.taskestimate;
            
            return res;
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            if(tempData.taskestimate) delete tempData.taskestimate;
            if(tempData.id) delete tempData.id;
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/getdraft`,tempData,isloading);
            res.data.taskestimate = data.taskestimate;
            
            return res;
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            if(tempData.taskestimate) delete tempData.taskestimate;
            if(tempData.id) delete tempData.id;
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/getdraft`,tempData,isloading);
            res.data.taskestimate = data.taskestimate;
            
            return res;
        }
        if(context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            if(tempData.taskestimate) delete tempData.taskestimate;
            if(tempData.id) delete tempData.id;
            let res:any = await Http.getInstance().get(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/getdraft`,tempData,isloading);
            res.data.taskestimate = data.taskestimate;
            
            return res;
        }
        if(context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            if(tempData.taskestimate) delete tempData.taskestimate;
            if(tempData.id) delete tempData.id;
            let res:any = await Http.getInstance().get(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/getdraft`,tempData,isloading);
            res.data.taskestimate = data.taskestimate;
            
            return res;
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            if(tempData.taskestimate) delete tempData.taskestimate;
            if(tempData.id) delete tempData.id;
            let res:any = await Http.getInstance().get(`/tasks/${context.task}/taskestimates/getdraft`,tempData,isloading);
            res.data.taskestimate = data.taskestimate;
            
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        if(tempData.taskestimate) delete tempData.taskestimate;
        if(tempData.id) delete tempData.id;
        let res:any = await  Http.getInstance().get(`/taskestimates/getdraft`,tempData,isloading);
        res.data.taskestimate = data.taskestimate;
        
        return res;
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
        if(context.project && context.projectmodule && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.product && context.story && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.product && context.productplan && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.project && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.story && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.projectmodule && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/taskestimates/${context.taskestimate}/checkkey`,data,isloading);
            return res;
    }

    /**
     * PMEvaluation接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async PMEvaluation(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}/pmevaluation`,data,isloading);
            
            return res;
        }
        if(context.product && context.story && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/pmevaluation`,data,isloading);
            
            return res;
        }
        if(context.product && context.productplan && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}/pmevaluation`,data,isloading);
            
            return res;
        }
        if(context.project && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}/pmevaluation`,data,isloading);
            
            return res;
        }
        if(context.story && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/pmevaluation`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}/pmevaluation`,data,isloading);
            
            return res;
        }
        if(context.projectmodule && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}/pmevaluation`,data,isloading);
            
            return res;
        }
        if(context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/taskestimates/${context.taskestimate}/pmevaluation`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/taskestimates/${context.taskestimate}/pmevaluation`,data,isloading);
            return res;
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
        if(context.project && context.projectmodule && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
            
            return res;
        }
        if(context.product && context.story && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
            
            return res;
        }
        if(context.product && context.productplan && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
            
            return res;
        }
        if(context.project && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
            
            return res;
        }
        if(context.story && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
            
            return res;
        }
        if(context.productplan && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
            
            return res;
        }
        if(context.projectmodule && context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
            
            return res;
        }
        if(context.task && context.taskestimate){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/tasks/${context.task}/taskestimates/${context.taskestimate}/save`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/taskestimates/${context.taskestimate}/save`,data,isloading);
            
            return res;
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
        if(context.project && context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.product && context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/tasks/${context.task}/taskestimates/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/taskestimates/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * searchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/searchdefault`,tempData,isloading);
        }
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/searchdefault`,tempData,isloading);
        }
        if(context.product && context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/searchdefault`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskestimates/searchdefault`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskestimates/searchdefault`,tempData,isloading);
        }
        if(context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/searchdefault`,tempData,isloading);
        }
        if(context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/searchdefault`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/tasks/${context.task}/taskestimates/searchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/taskestimates/searchdefault`,tempData,isloading);
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
        if(context.project && context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
            return res;
        }
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
            return res;
        }
        if(context.product && context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
            return res;
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
            return res;
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
            return res;
        }
        if(context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
            return res;
        }
        if(context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
            return res;
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/tasks/${context.task}/taskestimates/fetchdefaults`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/taskestimates/fetchdefaults`,tempData,isloading);
        return res;
    }

    /**
     * searchDefaults接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async searchDefaults(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/searchdefaults`,tempData,isloading);
        }
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/searchdefaults`,tempData,isloading);
        }
        if(context.product && context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/searchdefaults`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskestimates/searchdefaults`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskestimates/searchdefaults`,tempData,isloading);
        }
        if(context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/searchdefaults`,tempData,isloading);
        }
        if(context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/searchdefaults`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/tasks/${context.task}/taskestimates/searchdefaults`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/taskestimates/searchdefaults`,tempData,isloading);
    }

    /**
     * FetchProjectTaskEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async FetchProjectTaskEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/fetchprojecttaskestimate`,tempData,isloading);
            return res;
        }
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/fetchprojecttaskestimate`,tempData,isloading);
            return res;
        }
        if(context.product && context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/fetchprojecttaskestimate`,tempData,isloading);
            return res;
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/taskestimates/fetchprojecttaskestimate`,tempData,isloading);
            return res;
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/taskestimates/fetchprojecttaskestimate`,tempData,isloading);
            return res;
        }
        if(context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/fetchprojecttaskestimate`,tempData,isloading);
            return res;
        }
        if(context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/fetchprojecttaskestimate`,tempData,isloading);
            return res;
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/tasks/${context.task}/taskestimates/fetchprojecttaskestimate`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/taskestimates/fetchprojecttaskestimate`,tempData,isloading);
        return res;
    }

    /**
     * searchProjectTaskEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async searchProjectTaskEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/projects/${context.project}/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/searchprojecttaskestimate`,tempData,isloading);
        }
        if(context.product && context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/taskestimates/searchprojecttaskestimate`,tempData,isloading);
        }
        if(context.product && context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/tasks/${context.task}/taskestimates/searchprojecttaskestimate`,tempData,isloading);
        }
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/taskestimates/searchprojecttaskestimate`,tempData,isloading);
        }
        if(context.story && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/taskestimates/searchprojecttaskestimate`,tempData,isloading);
        }
        if(context.productplan && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/productplans/${context.productplan}/tasks/${context.task}/taskestimates/searchprojecttaskestimate`,tempData,isloading);
        }
        if(context.projectmodule && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/projectmodules/${context.projectmodule}/tasks/${context.task}/taskestimates/searchprojecttaskestimate`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return await Http.getInstance().post(`/tasks/${context.task}/taskestimates/searchprojecttaskestimate`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/taskestimates/searchprojecttaskestimate`,tempData,isloading);
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
    }

    /**
     * FetchTempProjectTaskEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskEstimateServiceBase
     */
    public async FetchTempProjectTaskEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}