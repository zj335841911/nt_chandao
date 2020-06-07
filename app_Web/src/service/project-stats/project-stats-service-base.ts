import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 项目统计服务对象基类
 *
 * @export
 * @class ProjectStatsServiceBase
 * @extends {EntityServie}
 */
export default class ProjectStatsServiceBase extends EntityService {

    /**
     * Creates an instance of  ProjectStatsServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectStatsServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProjectStatsServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='projectstats';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'projectstats';
        this.APPDETEXT = '';
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
     * @memberof ProjectStatsServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().get(`/projectstats/${context.projectstats}/select`,isloading);
    }

    /**
     * FetchTaskTime接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectStatsServiceBase
     */
    public async FetchTaskTime(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/projectstats/select`,tempData,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectStatsServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/projectstats/select`,tempData,isloading);
    }
}