import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 项目团队服务对象基类
 *
 * @export
 * @class ProjectTeamServiceBase
 * @extends {EntityServie}
 */
export default class ProjectTeamServiceBase extends EntityService {

    /**
     * Creates an instance of  ProjectTeamServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTeamServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProjectTeamServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='projectteam';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'projectteams';
        this.APPDETEXT = 'account';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectteam){
            return Http.getInstance().get(`/projects/${context.project}/projectteams/${context.projectteam}/select`,isloading);
        }
            return Http.getInstance().get(`/projectteams/${context.projectteam}/select`,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/projects/${context.project}/projectteams`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/projectteams`,data,isloading);
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectteam){
            return Http.getInstance().put(`/projects/${context.project}/projectteams/${context.projectteam}`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/projectteams/${context.projectteam}`,data,isloading);
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectteam){
            return Http.getInstance().delete(`/projects/${context.project}/projectteams/${context.projectteam}`,isloading);
        }
            return Http.getInstance().delete(`/projectteams/${context.projectteam}`,isloading);

    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectteam){
            return Http.getInstance().get(`/projects/${context.project}/projectteams/${context.projectteam}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/projectteams/${context.projectteam}`,isloading);
            return res;

    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            return Http.getInstance().get(`/projects/${context.project}/projectteams/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/projectteams/getdraft`,isloading);
        res.data.projectteam = data.projectteam;
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectteam){
            return Http.getInstance().post(`/projects/${context.project}/projectteams/${context.projectteam}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/projectteams/${context.projectteam}/checkkey`,data,isloading);
    }

    /**
     * GetUserRole接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async GetUserRole(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectteam){
            return Http.getInstance().get(`/projects/${context.project}/projectteams/${context.projectteam}/getuserrole`,isloading);
        }
            let res:any = await Http.getInstance().get(`/projectteams/${context.projectteam}/getuserrole`,isloading);
            return res;

    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectteam){
            return Http.getInstance().post(`/projects/${context.project}/projectteams/${context.projectteam}/save`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/projectteams/${context.projectteam}/save`,data,isloading);
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/projectteams/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/projectteams/fetchdefault`,tempData,isloading);
    }

    /**
     * FetchRowEditDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async FetchRowEditDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/projectteams/fetchroweditdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/projectteams/fetchroweditdefault`,tempData,isloading);
    }
}