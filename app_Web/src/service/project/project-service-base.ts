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
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/projects/${context.project}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds));
            this.tempStorage.setItem(context.srfsessionkey+'_projectmodules',JSON.stringify(res.data.projectmodules));
            this.tempStorage.setItem(context.srfsessionkey+'_burns',JSON.stringify(res.data.burns));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
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
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/projects/${context.project}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds));
            this.tempStorage.setItem(context.srfsessionkey+'_projectmodules',JSON.stringify(res.data.projectmodules));
            this.tempStorage.setItem(context.srfsessionkey+'_burns',JSON.stringify(res.data.burns));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            return res;
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
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds));
            this.tempStorage.setItem(context.srfsessionkey+'_projectmodules',JSON.stringify(res.data.projectmodules));
            this.tempStorage.setItem(context.srfsessionkey+'_burns',JSON.stringify(res.data.burns));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
            return res;

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
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/projects`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_builds',JSON.stringify(res.data.builds));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_projectmodules',JSON.stringify(res.data.projectmodules));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_burns',JSON.stringify(res.data.burns));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
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
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds));
            this.tempStorage.setItem(context.srfsessionkey+'_projectmodules',JSON.stringify(res.data.projectmodules));
            this.tempStorage.setItem(context.srfsessionkey+'_burns',JSON.stringify(res.data.burns));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs));
        return res;
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
}