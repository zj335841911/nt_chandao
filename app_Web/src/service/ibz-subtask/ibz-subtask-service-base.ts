import { Http,Util } from '@/utils';
import EntityService from '../entity-service';
import OpenTaskLogic from '@/service/ibz-subtask/open-task-logic';



/**
 * 任务服务对象基类
 *
 * @export
 * @class IBZ_SUBTASKServiceBase
 * @extends {EntityServie}
 */
export default class IBZ_SUBTASKServiceBase extends EntityService {

    /**
     * Creates an instance of  IBZ_SUBTASKServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZ_SUBTASKServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IBZ_SUBTASKServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibz_subtask';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibz_subtasks';
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
     * @memberof IBZ_SUBTASKServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.ibz_subtask){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}/select`,isloading);
        }
        if(context.task && context.ibz_subtask){
            return Http.getInstance().get(`/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}/select`,isloading);
        }
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBTASKServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && true){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/ibz_subtasks/getdraft`,isloading);
        }
        if(context.task && true){
            return Http.getInstance().get(`/tasks/${context.task}/ibz_subtasks/getdraft`,isloading);
        }
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBTASKServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.ibz_subtask){
            return Http.getInstance().delete(`/projects/${context.project}/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}`,isloading);
        }
        if(context.task && context.ibz_subtask){
            return Http.getInstance().delete(`/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}`,isloading);
        }
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBTASKServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.ibz_subtask){
            return Http.getInstance().put(`/projects/${context.project}/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}`,data,isloading);
        }
        if(context.task && context.ibz_subtask){
            return Http.getInstance().put(`/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}`,data,isloading);
        }
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBTASKServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.ibz_subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}/save`,data,isloading);
        }
        if(context.task && context.ibz_subtask){
            return Http.getInstance().post(`/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}/save`,data,isloading);
        }
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBTASKServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.ibz_subtask){
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}`,isloading);
        }
        if(context.task && context.ibz_subtask){
            return Http.getInstance().get(`/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}`,isloading);
        }
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBTASKServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && context.ibz_subtask){
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}/checkkey`,data,isloading);
        }
        if(context.task && context.ibz_subtask){
            return Http.getInstance().post(`/tasks/${context.task}/ibz_subtasks/${context.ibz_subtask}/checkkey`,data,isloading);
        }
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBTASKServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/projects/${context.project}/tasks/${context.task}/ibz_subtasks`,data,isloading);
        }
        if(context.task && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/tasks/${context.task}/ibz_subtasks`,data,isloading);
        }
    }

    /**
     * FetchRootTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBTASKServiceBase
     */
    public async FetchRootTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/ibz_subtasks/fetchroottask`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/ibz_subtasks/fetchroottask`,tempData,isloading);
        }
    }

    /**
     * FetchTypeGroup接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBTASKServiceBase
     */
    public async FetchTypeGroup(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/ibz_subtasks/fetchtypegroup`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/ibz_subtasks/fetchtypegroup`,tempData,isloading);
        }
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZ_SUBTASKServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}/ibz_subtasks/fetchdefault`,tempData,isloading);
        }
        if(context.task && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/tasks/${context.task}/ibz_subtasks/fetchdefault`,tempData,isloading);
        }
    }
}