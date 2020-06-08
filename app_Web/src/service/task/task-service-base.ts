import { Http,Util } from '@/utils';
import EntityService from '../entity-service';
import OpenTaskLogic from '@/service/task/open-task-logic';



/**
 * 任务服务对象基类
 *
 * @export
 * @class TaskServiceBase
 * @extends {EntityServie}
 */
export default class TaskServiceBase extends EntityService {

    /**
     * Creates an instance of  TaskServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof TaskServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='task';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'tasks';
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
     * @memberof TaskServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/select`,isloading);
        }
            return Http.getInstance().get(`/tasks/${context.task}/select`,isloading);
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/tasks/getdraft`,isloading);
        res.data.task = data.task;
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
        return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task){
            return Http.getInstance().delete(`/projects/${context.project}/tasks/${context.task}`,isloading);
        }
            return Http.getInstance().delete(`/tasks/${context.task}`,isloading);

    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task){
            return Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}`,data,isloading);
        }
        let masterData:any = {};
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/tasks/${context.task}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/save`,data,isloading);
        }
        let masterData:any = {};
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/tasks/${context.task}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/tasks/${context.task}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;

    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/tasks/${context.task}/checkkey`,data,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/projects/${context.project}/tasks`,data,isloading);
        }
        let masterData:any = {};
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/tasks`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
        return res;
    }

    /**
     * FetchRootTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchRootTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/fetchroottask`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/tasks/fetchroottask`,tempData,isloading);
    }

    /**
     * FetchTypeGroup接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchTypeGroup(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/fetchtypegroup`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/tasks/fetchtypegroup`,tempData,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/tasks/fetchdefault`,tempData,isloading);
    }
}