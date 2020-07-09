import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 需求服务对象基类
 *
 * @export
 * @class StoryServiceBase
 * @extends {EntityServie}
 */
export default class StoryServiceBase extends EntityService {

    /**
     * Creates an instance of  StoryServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  StoryServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof StoryServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='story';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'stories';
        this.APPDETEXT = 'title';
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
     * @memberof StoryServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/select`,isloading);
        }
            return Http.getInstance().get(`/stories/${context.story}/select`,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
        let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/stories`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
        let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/stories/${context.story}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            return Http.getInstance().delete(`/products/${context.product}/stories/${context.story}`,isloading);
        }
            return Http.getInstance().delete(`/stories/${context.story}`,isloading);
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            let res:any = await Http.getInstance().get(`/stories/${context.story}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/getdraft`,isloading);
            res.data.story = data.story;
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
        let res:any = await  Http.getInstance().get(`/stories/getdraft`,isloading);
        res.data.story = data.story;
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
        return res;
    }

    /**
     * AssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async AssignTo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/assignto`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/assignto`,data,isloading);
    }

    /**
     * BatchAssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchAssignTo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchassignto`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/batchassignto`,data,isloading);
    }

    /**
     * BatchChangeBranch接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchChangeBranch(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchchangebranch`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/batchchangebranch`,data,isloading);
    }

    /**
     * BatchChangeModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchChangeModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchchangemodule`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/batchchangemodule`,data,isloading);
    }

    /**
     * BatchChangePlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchChangePlan(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchchangeplan`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/batchchangeplan`,data,isloading);
    }

    /**
     * BatchChangeStage接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchChangeStage(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchchangestage`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/batchchangestage`,data,isloading);
    }

    /**
     * BatchClose接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchClose(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchclose`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/batchclose`,data,isloading);
    }

    /**
     * BatchReview接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchReview(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchreview`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/batchreview`,data,isloading);
    }

    /**
     * BatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchunlinkstory`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/batchunlinkstory`,data,isloading);
    }

    /**
     * Change接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Change(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/change`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/change`,data,isloading);
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/checkkey`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/checkkey`,data,isloading);
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/close`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/close`,data,isloading);
    }

    /**
     * GetStorySpec接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async GetStorySpec(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/getstoryspec`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/getstoryspec`,data,isloading);
    }

    /**
     * LinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async LinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/linkstory`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/linkstory`,data,isloading);
    }

    /**
     * ProjectBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ProjectBatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/projectbatchunlinkstory`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/projectbatchunlinkstory`,data,isloading);
    }

    /**
     * ProjectLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ProjectLinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/projectlinkstory`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/projectlinkstory`,data,isloading);
    }

    /**
     * ProjectUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ProjectUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/projectunlinkstory`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/projectunlinkstory`,data,isloading);
    }

    /**
     * ReleaseBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ReleaseBatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/releasebatchunlinkstory`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/releasebatchunlinkstory`,data,isloading);
    }

    /**
     * ReleaseLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ReleaseLinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/releaselinkstory`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/releaselinkstory`,data,isloading);
    }

    /**
     * ReleaseUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ReleaseUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/releaseunlinkstory`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/releaseunlinkstory`,data,isloading);
    }

    /**
     * ResetReviewedBy接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ResetReviewedBy(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/resetreviewedby`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/resetreviewedby`,data,isloading);
    }

    /**
     * Review接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Review(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/review`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/review`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
        let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/stories/${context.story}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
    }

    /**
     * UnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async UnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        let storyspecsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs'),'undefined')){
            storyspecsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_storyspecs') as any);
            if(storyspecsData && storyspecsData.length && storyspecsData.length > 0){
                storyspecsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.storyspecs = storyspecsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/unlinkstory`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs));
            return res;
        }
            return Http.getInstance().post(`/stories/${context.story}/unlinkstory`,data,isloading);
    }

    /**
     * FetchBuildStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchBuildStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/fetchbuildstories`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/stories/fetchbuildstories`,tempData,isloading);
    }

    /**
     * FetchByModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchByModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/fetchbymodule`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/stories/fetchbymodule`,tempData,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/stories/fetchdefault`,tempData,isloading);
    }

    /**
     * FetchGetProductStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchGetProductStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/fetchgetproductstories`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/stories/fetchgetproductstories`,tempData,isloading);
    }

    /**
     * FetchProjectStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchProjectStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/fetchprojectstories`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/stories/fetchprojectstories`,tempData,isloading);
    }

    /**
     * FetchReleaseStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchReleaseStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/fetchreleasestories`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/stories/fetchreleasestories`,tempData,isloading);
    }

    /**
     * FetchReportStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchReportStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/fetchreportstories`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/stories/fetchreportstories`,tempData,isloading);
    }

    /**
     * FetchStoryChild接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchStoryChild(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/fetchstorychild`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/stories/fetchstorychild`,tempData,isloading);
    }

    /**
     * FetchStoryRelated接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchStoryRelated(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/fetchstoryrelated`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/stories/fetchstoryrelated`,tempData,isloading);
    }
}