import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 项目汇报用户任务服务对象基类
 *
 * @export
 * @class IbzproProjectUserTaskServiceBase
 * @extends {EntityServie}
 */
export default class IbzproProjectUserTaskServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzproProjectUserTaskServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzproProjectUserTaskServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzproProjectUserTaskServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzproprojectusertask';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzproprojectusertasks';
        this.APPDETEXT = 'id';
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
     * @memberof IbzproProjectUserTaskServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzproprojectusertasks/${context.ibzproprojectusertask}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzproProjectUserTaskServiceBase
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
     * @memberof IbzproProjectUserTaskServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibzproprojectusertasks/searchdefault`,tempData,isloading);
    }

    /**
     * FetchProjectDailyTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzproProjectUserTaskServiceBase
     */
    public async FetchProjectDailyTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * searchProjectDailyTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzproProjectUserTaskServiceBase
     */
    public async searchProjectDailyTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibzproprojectusertasks/searchprojectdailytask`,tempData,isloading);
    }
}