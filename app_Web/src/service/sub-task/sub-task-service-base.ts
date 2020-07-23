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
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/activate`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/activate`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/activate`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/activate`,data,isloading);
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
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/assignto`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/assignto`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/assignto`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/assignto`,data,isloading);
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
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/calctime`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/calctime`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/calctime`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/calctime`,data,isloading);
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
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/cancel`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/cancel`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/cancel`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/cancel`,data,isloading);
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
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/close`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/close`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/close`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/close`,data,isloading);
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
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/deleteestimate`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/deleteestimate`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/deleteestimate`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/deleteestimate`,data,isloading);
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
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/editestimate`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/editestimate`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/editestimate`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/editestimate`,data,isloading);
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
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/finish`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/finish`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/finish`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/finish`,data,isloading);
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
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/pause`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/pause`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/pause`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/pause`,data,isloading);
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
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/recordestimate`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/recordestimate`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/recordestimate`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/recordestimate`,data,isloading);
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
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/restart`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/restart`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/restart`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/restart`,data,isloading);
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
        if(context.product && context.story && context.task &&  true){
            return Http.getInstance().post(`products/${context.product}/stories/${context.story}/tasks/${context.task}/subtasks/start`,data,isloading);
        }
        if(context.project && context.task &&  true){
            return Http.getInstance().post(`projects/${context.project}/tasks/${context.task}/subtasks/start`,data,isloading);
        }
        if(context.story && context.task &&  true){
            return Http.getInstance().post(`stories/${context.story}/tasks/${context.task}/subtasks/start`,data,isloading);
        }
        if(context.task &&  true){
            return Http.getInstance().post(`tasks/${context.task}/subtasks/start`,data,isloading);
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
        // FetchByModule ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
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
        // FetchTempByModule ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
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
        // FetchDefault ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
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
        // FetchTempDefault ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
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
        // FetchRootTask ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
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
        // FetchTempRootTask ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
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
        // FetchTypeGroup ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
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
        // FetchTempTypeGroup ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }
}