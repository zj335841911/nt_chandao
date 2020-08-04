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
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/select`,isloading);
            
            return res;
        }
        if(context.project && context.task){
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/select`,isloading);
            
            return res;
        }
        if(context.story && context.task){
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/tasks/${context.task}/select`,isloading);
            
            return res;
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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));
            
            return res;
        }
        if(context.project && true){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));
            
            return res;
        }
        if(context.story && true){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));
            
            return res;
        }
        let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/tasks`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));
        
        return res;
        if(context.product && context.story && true){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));
            
            return res;
        }
        if(context.project && true){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));
            
            return res;
        }
        if(context.story && true){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));
            
            return res;
        }
        let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/tasks`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));
        
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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/tasks/${context.task}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/tasks/${context.task}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/tasks/${context.task}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/tasks/${context.task}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/tasks/${context.task}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/tasks/${context.task}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

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
            let res:any = Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/tasks/${context.task}`,isloading);
            return res;
        }
        if(context.project && context.task){
            let res:any = Http.getInstance().delete(`/projects/${context.project}/tasks/${context.task}`,isloading);
            return res;
        }
        if(context.story && context.task){
            let res:any = Http.getInstance().delete(`/stories/${context.story}/tasks/${context.task}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/tasks/${context.task}`,isloading);
            return res;
        if(context.product && context.story && context.task){
            let res:any = Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/tasks/${context.task}`,isloading);
            return res;
        }
        if(context.project && context.task){
            let res:any = Http.getInstance().delete(`/projects/${context.project}/tasks/${context.task}`,isloading);
            return res;
        }
        if(context.story && context.task){
            let res:any = Http.getInstance().delete(`/stories/${context.story}/tasks/${context.task}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/tasks/${context.task}`,isloading);
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
        if(context.product && context.story && context.task){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = await Http.getInstance().get(`/tasks/${context.task}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        if(context.product && context.story && context.task){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = await Http.getInstance().get(`/tasks/${context.task}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

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
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && true){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/getdraft`,isloading);
            res.data.task = data.task;
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/getdraft`,isloading);
            res.data.task = data.task;
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        let res:any = await  Http.getInstance().get(`/tasks/getdraft`,isloading);
        res.data.task = data.task;
                    this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

        return res;
        if(context.product && context.story && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/getdraft`,isloading);
            res.data.task = data.task;
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && true){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/getdraft`,isloading);
            res.data.task = data.task;
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/getdraft`,isloading);
            res.data.task = data.task;
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        let res:any = await  Http.getInstance().get(`/tasks/getdraft`,isloading);
        res.data.task = data.task;
                    this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/activate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/activate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/activate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/activate`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/activate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/activate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/activate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/activate`,data,isloading);
            return res;
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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/assignto`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/assignto`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/assignto`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/assignto`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/assignto`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/assignto`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/assignto`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/assignto`,data,isloading);
            return res;
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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/cancel`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/cancel`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/cancel`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/cancel`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/cancel`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/cancel`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/cancel`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/cancel`,data,isloading);
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
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/checkkey`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/checkkey`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/checkkey`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/checkkey`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/checkkey`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/checkkey`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/checkkey`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/checkkey`,data,isloading);
            return res;
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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/close`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/close`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/close`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/close`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/close`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/close`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/close`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/close`,data,isloading);
            return res;
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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/deleteestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/deleteestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/deleteestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/deleteestimate`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/deleteestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/deleteestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/deleteestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/deleteestimate`,data,isloading);
            return res;
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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/editestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/editestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/editestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/editestimate`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/editestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/editestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/editestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/editestimate`,data,isloading);
            return res;
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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/finish`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/finish`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/finish`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/finish`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/finish`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/finish`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/finish`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/finish`,data,isloading);
            return res;
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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/pause`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/pause`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/pause`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/pause`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/pause`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/pause`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/pause`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/pause`,data,isloading);
            return res;
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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/recordestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/recordestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/recordestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/recordestimate`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/recordestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/recordestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/recordestimate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/recordestimate`,data,isloading);
            return res;
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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/restart`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/restart`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/restart`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/restart`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/restart`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/restart`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/restart`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/restart`,data,isloading);
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
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/tasks/${context.task}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/tasks/${context.task}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

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
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/start`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/start`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/start`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/start`,data,isloading);
            return res;
        if(context.product && context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/tasks/${context.task}/start`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/start`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let masterData:any = {};
        let ibztaskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates'),'undefined')){
            ibztaskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskestimates') as any);
            if(ibztaskestimatesData && ibztaskestimatesData.length && ibztaskestimatesData.length > 0){
                ibztaskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskestimates = ibztaskestimatesData;
        let ibztaskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams'),'undefined')){
            ibztaskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibztaskteams') as any);
            if(ibztaskteamsData && ibztaskteamsData.length && ibztaskteamsData.length > 0){
                ibztaskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.ibztaskteams = ibztaskteamsData;
        let subtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_subtasks'),'undefined')){
            subtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_subtasks') as any);
            if(subtasksData && subtasksData.length && subtasksData.length > 0){
                subtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.subtasks = subtasksData;
        let taskestimatesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates'),'undefined')){
            taskestimatesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskestimates') as any);
            if(taskestimatesData && taskestimatesData.length && taskestimatesData.length > 0){
                taskestimatesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskestimates = taskestimatesData;
        let taskteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_taskteams'),'undefined')){
            taskteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_taskteams') as any);
            if(taskteamsData && taskteamsData.length && taskteamsData.length > 0){
                taskteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.taskteams = taskteamsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/tasks/${context.task}/start`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/tasks/${context.task}/start`,data,isloading);
            return res;
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
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchbymodule`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/fetchbymodule`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/fetchbymodule`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/tasks/fetchbymodule`,tempData,isloading);
        return res;
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
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/tasks/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefaultRow接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchDefaultRow(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchdefaultrow`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/fetchdefaultrow`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/fetchdefaultrow`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/tasks/fetchdefaultrow`,tempData,isloading);
        return res;
    }

    /**
     * FetchProjectTASK接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchProjectTASK(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchprojecttask`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/fetchprojecttask`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/fetchprojecttask`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/tasks/fetchprojecttask`,tempData,isloading);
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
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchroottask`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/fetchroottask`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/fetchroottask`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/tasks/fetchroottask`,tempData,isloading);
        return res;
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
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchtypegroup`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/fetchtypegroup`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/fetchtypegroup`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/tasks/fetchtypegroup`,tempData,isloading);
        return res;
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

    /**
     * FetchTempByModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchTempByModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempDefaultRow接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchTempDefaultRow(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempProjectTASK接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchTempProjectTASK(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempRootTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchTempRootTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempTypeGroup接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchTempTypeGroup(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}