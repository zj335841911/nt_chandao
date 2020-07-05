import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



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
        if(context.product && context.story && context.task){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/select`,isloading);
        }
        if(context.project && context.task){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/select`,isloading);
        }
        if(context.story && context.task){
            return Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/select`,isloading);
        }
            return Http.getInstance().get(`/tasks/${context.task}/select`,isloading);
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
        if(context.product && context.story && true){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && true){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && true){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
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
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/tasks/${context.task}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().put(`/stories/${context.story}/tasks/${context.task}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
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
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
            return Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/tasks/${context.task}`,isloading);
        }
        if(context.project && context.task){
            return Http.getInstance().delete(`/projects/${context.project}/tasks/${context.task}`,isloading);
        }
        if(context.story && context.task){
            return Http.getInstance().delete(`/stories/${context.story}/tasks/${context.task}`,isloading);
        }
            return Http.getInstance().delete(`/tasks/${context.task}`,isloading);
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
        if(context.product && context.story && context.task){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            let res:any = await Http.getInstance().get(`/tasks/${context.task}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
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
        if(context.product && context.story && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/getdraft`,isloading);
            res.data.task = data.task;
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && true){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/getdraft`,isloading);
            res.data.task = data.task;
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/getdraft`,isloading);
            res.data.task = data.task;
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        let res:any = await  Http.getInstance().get(`/tasks/getdraft`,isloading);
        res.data.task = data.task;
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
        return res;
    }

    /**
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/activate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/activate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/activate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/activate`,data,isloading);
    }

    /**
     * AssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async AssignTo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/assignto`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/assignto`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/assignto`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/assignto`,data,isloading);
    }

    /**
     * Cancel接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Cancel(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/cancel`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/cancel`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/cancel`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/cancel`,data,isloading);
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
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/checkkey`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/checkkey`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/checkkey`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/checkkey`,data,isloading);
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/close`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/close`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/close`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/close`,data,isloading);
    }

    /**
     * DeleteEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async DeleteEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/deleteestimate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/deleteestimate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/deleteestimate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/deleteestimate`,data,isloading);
    }

    /**
     * EditEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async EditEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/editestimate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/editestimate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/editestimate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/editestimate`,data,isloading);
    }

    /**
     * Finish接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Finish(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/finish`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/finish`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/finish`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/finish`,data,isloading);
    }

    /**
     * Pause接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Pause(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/pause`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/pause`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/pause`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/pause`,data,isloading);
    }

    /**
     * RecordEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async RecordEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/recordestimate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/recordestimate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/recordestimate`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/recordestimate`,data,isloading);
    }

    /**
     * Restart接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Restart(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/restart`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/restart`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/restart`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/restart`,data,isloading);
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
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
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
     * Start接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Start(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/start`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.project && context.task){
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/start`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
        if(context.story && context.task){
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
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/start`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks));
            return res;
        }
            return Http.getInstance().post(`/tasks/${context.task}/start`,data,isloading);
    }

    /**
     * FetchByModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchByModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchbymodule`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/fetchbymodule`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/fetchbymodule`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/tasks/fetchbymodule`,tempData,isloading);
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
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchdefault`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/fetchdefault`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/tasks/fetchdefault`,tempData,isloading);
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
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchroottask`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/fetchroottask`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/fetchroottask`,tempData,isloading);
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
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchtypegroup`,tempData,isloading);
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/fetchtypegroup`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/tasks/fetchtypegroup`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/tasks/fetchtypegroup`,tempData,isloading);
    }

    /**
     * CalcTime接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async CalcTime(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // URI参数传递情况未实现
        // URI参数传递情况未实现
        // URI参数传递情况未实现
        // URI参数传递情况未实现
    }
}