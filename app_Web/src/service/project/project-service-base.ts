import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 项目服务对象基类
 *
 * @export
 * @class ProjectServiceBase
 * @extends {EntityServie}
 */
export default class ProjectServiceBase extends EntityService {

    /**
     * Creates an instance of  ProjectServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProjectServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='project';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'projects';
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
     * @memberof ProjectServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().get(`/projects/${context.project}/select`,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        let projectproductsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts'),'undefined')){
            projectproductsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts') as any);
            if(projectproductsData && projectproductsData.length && projectproductsData.length > 0){
                projectproductsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectproducts = projectproductsData;
        let projectmodulesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectmodules'),'undefined')){
            projectmodulesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectmodules') as any);
            if(projectmodulesData && projectmodulesData.length && projectmodulesData.length > 0){
                projectmodulesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectmodules = projectmodulesData;
        let projectteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectteams'),'undefined')){
            projectteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectteams') as any);
            if(projectteamsData && projectteamsData.length && projectteamsData.length > 0){
                projectteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectteams = projectteamsData;
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
        let burnsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_burns'),'undefined')){
            burnsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_burns') as any);
            if(burnsData && burnsData.length && burnsData.length > 0){
                burnsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.burns = burnsData;
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
        let buildsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_builds'),'undefined')){
            buildsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_builds') as any);
            if(buildsData && buildsData.length && buildsData.length > 0){
                buildsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.builds = buildsData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/projects`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts ? res.data.projectproducts : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_projectmodules',JSON.stringify(res.data.projectmodules ? res.data.projectmodules : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_projectteams',JSON.stringify(res.data.projectteams ? res.data.projectteams : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_burns',JSON.stringify(res.data.burns ? res.data.burns : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks ? res.data.tasks : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_builds',JSON.stringify(res.data.builds ? res.data.builds : []));
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        let projectproductsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts'),'undefined')){
            projectproductsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts') as any);
            if(projectproductsData && projectproductsData.length && projectproductsData.length > 0){
                projectproductsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectproducts = projectproductsData;
        let projectmodulesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectmodules'),'undefined')){
            projectmodulesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectmodules') as any);
            if(projectmodulesData && projectmodulesData.length && projectmodulesData.length > 0){
                projectmodulesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectmodules = projectmodulesData;
        let projectteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectteams'),'undefined')){
            projectteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectteams') as any);
            if(projectteamsData && projectteamsData.length && projectteamsData.length > 0){
                projectteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectteams = projectteamsData;
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
        let burnsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_burns'),'undefined')){
            burnsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_burns') as any);
            if(burnsData && burnsData.length && burnsData.length > 0){
                burnsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.burns = burnsData;
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
        let buildsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_builds'),'undefined')){
            buildsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_builds') as any);
            if(buildsData && buildsData.length && buildsData.length > 0){
                buildsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.builds = buildsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/projects/${context.project}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts ? res.data.projectproducts : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectmodules',JSON.stringify(res.data.projectmodules ? res.data.projectmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectteams',JSON.stringify(res.data.projectteams ? res.data.projectteams : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_burns',JSON.stringify(res.data.burns ? res.data.burns : []));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks ? res.data.tasks : []));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds ? res.data.builds : []));
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().delete(`/projects/${context.project}`,isloading);
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = await Http.getInstance().get(`/projects/${context.project}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts ? res.data.projectproducts : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectmodules',JSON.stringify(res.data.projectmodules ? res.data.projectmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectteams',JSON.stringify(res.data.projectteams ? res.data.projectteams : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_burns',JSON.stringify(res.data.burns ? res.data.burns : []));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks ? res.data.tasks : []));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds ? res.data.builds : []));
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().get(`/projects/getdraft`,isloading);
        res.data.project = data.project;
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts ? res.data.projectproducts : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectmodules',JSON.stringify(res.data.projectmodules ? res.data.projectmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectteams',JSON.stringify(res.data.projectteams ? res.data.projectteams : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_burns',JSON.stringify(res.data.burns ? res.data.burns : []));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks ? res.data.tasks : []));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds ? res.data.builds : []));
        return res;
    }

    /**
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/projects/${context.project}/activate`,data,isloading);
    }

    /**
     * BatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async BatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/projects/${context.project}/batchunlinkstory`,data,isloading);
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/projects/${context.project}/checkkey`,data,isloading);
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/projects/${context.project}/close`,data,isloading);
    }

    /**
     * LinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async LinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/projects/${context.project}/linkstory`,data,isloading);
    }

    /**
     * ManageMembers接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async ManageMembers(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/projects/${context.project}/managemembers`,data,isloading);
    }

    /**
     * Putoff接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async Putoff(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/projects/${context.project}/putoff`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        let projectproductsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts'),'undefined')){
            projectproductsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts') as any);
            if(projectproductsData && projectproductsData.length && projectproductsData.length > 0){
                projectproductsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectproducts = projectproductsData;
        let projectmodulesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectmodules'),'undefined')){
            projectmodulesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectmodules') as any);
            if(projectmodulesData && projectmodulesData.length && projectmodulesData.length > 0){
                projectmodulesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectmodules = projectmodulesData;
        let projectteamsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectteams'),'undefined')){
            projectteamsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectteams') as any);
            if(projectteamsData && projectteamsData.length && projectteamsData.length > 0){
                projectteamsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectteams = projectteamsData;
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
        let burnsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_burns'),'undefined')){
            burnsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_burns') as any);
            if(burnsData && burnsData.length && burnsData.length > 0){
                burnsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.burns = burnsData;
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
        let buildsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_builds'),'undefined')){
            buildsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_builds') as any);
            if(buildsData && buildsData.length && buildsData.length > 0){
                buildsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.builds = buildsData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/projects/${context.project}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts ? res.data.projectproducts : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectmodules',JSON.stringify(res.data.projectmodules ? res.data.projectmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectteams',JSON.stringify(res.data.projectteams ? res.data.projectteams : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_burns',JSON.stringify(res.data.burns ? res.data.burns : []));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks ? res.data.tasks : []));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds ? res.data.builds : []));
            return res;
    }

    /**
     * Start接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async Start(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/projects/${context.project}/start`,data,isloading);
    }

    /**
     * Suspend接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async Suspend(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/projects/${context.project}/suspend`,data,isloading);
    }

    /**
     * UnlinkMember接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async UnlinkMember(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/projects/${context.project}/unlinkmember`,data,isloading);
    }

    /**
     * UnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async UnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/projects/${context.project}/unlinkstory`,data,isloading);
    }

    /**
     * UpdateOrder接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async UpdateOrder(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().put(`/projects/${context.project}/updateorder`,data,isloading);
    }

    /**
     * FetchBugProject接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async FetchBugProject(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/projects/fetchbugproject`,tempData,isloading);
    }

    /**
     * FetchCurProduct接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async FetchCurProduct(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/projects/fetchcurproduct`,tempData,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/projects/fetchdefault`,tempData,isloading);
    }

    /**
     * UpdateProjectCycle接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async UpdateProjectCycle(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // URI参数传递情况未实现
    }
}