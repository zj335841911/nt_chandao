import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import BugService from '@/service/bug/bug-service';
import MainModel from './main-form-model';
import ProductService from '@/service/product/product-service';
import ModuleService from '@/service/module/module-service';
import ProjectService from '@/service/project/project-service';
import StoryService from '@/service/story/story-service';
import TaskService from '@/service/task/task-service';


/**
 * Main 部件服务对象
 *
 * @export
 * @class MainService
 */
export default class MainService extends ControlService {

    /**
     * Bug服务对象
     *
     * @type {BugService}
     * @memberof MainService
     */
    public appEntityService: BugService = new BugService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MainService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MainService.
     * 
     * @param {*} [opts={}]
     * @memberof MainService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MainModel();
    }

    /**
     * 产品服务对象
     *
     * @type {ProductService}
     * @memberof MainService
     */
    public productService: ProductService = new ProductService();

    /**
     * 模块服务对象
     *
     * @type {ModuleService}
     * @memberof MainService
     */
    public moduleService: ModuleService = new ModuleService();

    /**
     * 项目服务对象
     *
     * @type {ProjectService}
     * @memberof MainService
     */
    public projectService: ProjectService = new ProjectService();

    /**
     * 需求服务对象
     *
     * @type {StoryService}
     * @memberof MainService
     */
    public storyService: StoryService = new StoryService();

    /**
     * 任务服务对象
     *
     * @type {TaskService}
     * @memberof MainService
     */
    public taskService: TaskService = new TaskService();

    /**
     * 处理数据
     *
     * @private
     * @param {Promise<any>} promise
     * @returns {Promise<any>}
     * @memberof MainService
     */
    private doItems(promise: Promise<any>, deKeyField: string, deName: string): Promise<any> {
        return new Promise((resolve, reject) => {
            promise.then((response: any) => {
                if (response && response.status === 200) {
                    const data = response.data;
                    data.forEach((item:any,index:number) =>{
                        item[deName] = item[deKeyField];
                        data[index] = item;
                    });
                    resolve(data);
                } else {
                    reject([])
                }
            }).catch((response: any) => {
                reject([])
            });
        });
    }

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} data
     * @param {boolean} [isloading]
     * @returns {Promise<any[]>}
     * @memberof  MainService
     */
    @Errorlog
    public getItems(serviceName: string, interfaceName: string, context: any = {}, data: any, isloading?: boolean): Promise<any[]> {
        if (Object.is(serviceName, 'ProductService') && Object.is(interfaceName, 'FetchDefault')) {
            return this.doItems(this.productService.FetchDefault(JSON.parse(JSON.stringify(context)),data, isloading), 'id', 'product');
        }
        if (Object.is(serviceName, 'ModuleService') && Object.is(interfaceName, 'FetchBugModule')) {
            return this.doItems(this.moduleService.FetchBugModule(JSON.parse(JSON.stringify(context)),data, isloading), 'id', 'module');
        }
        if (Object.is(serviceName, 'ProjectService') && Object.is(interfaceName, 'FetchBugProject')) {
            return this.doItems(this.projectService.FetchBugProject(JSON.parse(JSON.stringify(context)),data, isloading), 'id', 'project');
        }
        if (Object.is(serviceName, 'StoryService') && Object.is(interfaceName, 'FetchDefault')) {
            return this.doItems(this.storyService.FetchDefault(JSON.parse(JSON.stringify(context)),data, isloading), 'id', 'story');
        }
        if (Object.is(serviceName, 'TaskService') && Object.is(interfaceName, 'FetchDefault')) {
            return this.doItems(this.taskService.FetchDefault(JSON.parse(JSON.stringify(context)),data, isloading), 'id', 'task');
        }

        return Promise.reject([])
    }

    /**
     * 启动工作流
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MainService
     */
    @Errorlog
    public wfstart(action: string,context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        data = this.handleWFData(data);
        context = this.handleRequestData(action,context,data).context;
        return new Promise((resolve: any, reject: any) => {
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](context,data, isloading);
            } else {
                result = this.appEntityService.Create(context,data, isloading);
            }
            result.then((response) => {
                this.handleResponse(action, response);
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    }

    /**
     * 提交工作流
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MainService
     */
    @Errorlog
    public wfsubmit(action: string,context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
        data = this.handleWFData(data,true);
        context = this.handleRequestData(action,context,data).context;
        return new Promise((resolve: any, reject: any) => {
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](context,data, isloading);
            } else {
                result = this.appEntityService.Create(context,data, isloading);
            }
            result.then((response) => {
                this.handleResponse(action, response);
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    }


    /**
     * 添加数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MainService
     */
    @Errorlog
    public add(action: string, context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data);
        return new Promise((resolve: any, reject: any) => {
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            } else {
                result = this.appEntityService.Create(Context,Data, isloading);
            }
            result.then((response) => {
                this.handleResponse(action, response);
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    }

    /**
     * 删除数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MainService
     */
    @Errorlog
    public delete(action: string, context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data);
        return new Promise((resolve: any, reject: any) => {
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            } else {
                result = this.appEntityService.Remove(Context,Data, isloading);
            }
            result.then((response) => {
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    }

    /**
     * 修改数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MainService
     */
    @Errorlog
    public update(action: string, context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data);
        return new Promise((resolve: any, reject: any) => {
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            } else {
                result = this.appEntityService.Update(Context,Data, isloading);
            }
            result.then((response) => {
                this.handleResponse(action, response);
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MainService
     */
    @Errorlog
    public get(action: string,context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data);
        return new Promise((resolve: any, reject: any) => {
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            } else {
                result = this.appEntityService.Get(Context,Data, isloading);
            }
            result.then((response) => {
                this.handleResponse(action, response);
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    }

    /**
     * 加载草稿
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MainService
     */
    @Errorlog
    public loadDraft(action: string,context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data);
        //仿真主键数据
        Data.id = Util.createUUID();
        Data.bug = Data.id;
        return new Promise((resolve: any, reject: any) => {
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            } else {
                result = this.appEntityService.GetDraft(Context,Data, isloading);
            }
            result.then((response) => {
                this.handleResponse(action, response, true);
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    }

     /**
     * 前台逻辑
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MainService
     */
    @Errorlog
    public frontLogic(action:string,context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data);
        return new Promise((resolve: any, reject: any)=>{
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            } else {
                return Promise.reject({ status: 500, data: { title: '失败', message: '系统异常' } });
            }
            result.then((response) => {
                this.handleResponse(action, response,true);
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        })
    }

    /**
     * 处理请求数据
     * 
     * @param action 行为 
     * @param data 数据
     * @memberof MainService
     */
    public handleRequestData(action: string,context:any, data: any = {}){
        let mode: any = this.getMode();
        if (!mode && mode.getDataItems instanceof Function) {
            return data;
        }
        let formItemItems: any[] = mode.getDataItems();
        let requestData:any = {};
        formItemItems.forEach((item:any) =>{
            if(item && item.dataType && Object.is(item.dataType,'FONTKEY')){
                if(item && item.prop){
                    requestData[item.prop] = context[item.name];
                }
            }else{
                if(item && item.prop){
                    requestData[item.prop] = data[item.name];
                }
            }
        });
        if(data && data.viewparams){
            Object.assign(requestData,data.viewparams);
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        if(tempContext && tempContext.srfsessionid){
            tempContext.srfsessionkey = tempContext.srfsessionid;
            delete tempContext.srfsessionid;
        }
        return {context:tempContext,data:requestData};
    }

}