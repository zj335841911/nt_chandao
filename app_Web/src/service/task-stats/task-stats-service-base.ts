import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 任务统计服务对象基类
 *
 * @export
 * @class TaskStatsServiceBase
 * @extends {EntityServie}
 */
export default class TaskStatsServiceBase extends EntityService {

    /**
     * Creates an instance of  TaskStatsServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskStatsServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof TaskStatsServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='taskstats';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'taskstats';
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
     * @memberof TaskStatsServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/taskstats/${context.taskstats}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskStatsServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * searchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskStatsServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/taskstats/searchdefault`,tempData,isloading);
    }

    /**
     * FetchUserFinishTaskSum接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskStatsServiceBase
     */
    public async FetchUserFinishTaskSum(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * searchUserFinishTaskSum接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskStatsServiceBase
     */
    public async searchUserFinishTaskSum(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/taskstats/searchuserfinishtasksum`,tempData,isloading);
    }
}