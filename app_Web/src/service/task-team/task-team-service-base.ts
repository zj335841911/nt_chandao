import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 任务团队服务对象基类
 *
 * @export
 * @class TaskTeamServiceBase
 * @extends {EntityServie}
 */
export default class TaskTeamServiceBase extends EntityService {

    /**
     * Creates an instance of  TaskTeamServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskTeamServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof TaskTeamServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='taskteam';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'taskteams';
        this.APPDETEXT = 'account';
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
     * @memberof TaskTeamServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskTeamServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}