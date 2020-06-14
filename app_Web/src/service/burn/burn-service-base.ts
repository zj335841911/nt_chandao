import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * burn服务对象基类
 *
 * @export
 * @class BurnServiceBase
 * @extends {EntityServie}
 */
export default class BurnServiceBase extends EntityService {

    /**
     * Creates an instance of  BurnServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  BurnServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof BurnServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='burn';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'burns';
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
     * @memberof BurnServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.burn){
            return Http.getInstance().get(`/projects/${context.project}/burns/${context.burn}/select`,isloading);
        }
            return Http.getInstance().get(`/burns/${context.burn}/select`,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BurnServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/projects/${context.project}/burns`,data,isloading);
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
        let res:any = await Http.getInstance().post(`/burns`,data,isloading);
        return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BurnServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.burn){
            return Http.getInstance().get(`/projects/${context.project}/burns/${context.burn}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/burns/${context.burn}`,isloading);
            return res;

    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BurnServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.burn){
            return Http.getInstance().post(`/projects/${context.project}/burns/${context.burn}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/burns/${context.burn}/checkkey`,data,isloading);
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BurnServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.burn){
            return Http.getInstance().delete(`/projects/${context.project}/burns/${context.burn}`,isloading);
        }
            return Http.getInstance().delete(`/burns/${context.burn}`,isloading);

    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BurnServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.burn){
            return Http.getInstance().post(`/projects/${context.project}/burns/${context.burn}/save`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/burns/${context.burn}/save`,data,isloading);
            return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BurnServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.burn){
            return Http.getInstance().put(`/projects/${context.project}/burns/${context.burn}`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/burns/${context.burn}`,data,isloading);
            return res;
    }

    /**
     * ComputeBurn接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BurnServiceBase
     */
    public async ComputeBurn(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.burn){
            return Http.getInstance().post(`/projects/${context.project}/burns/${context.burn}/computeburn`,data,isloading);
        }
            return Http.getInstance().post(`/burns/${context.burn}/computeburn`,data,isloading);
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BurnServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            return Http.getInstance().get(`/projects/${context.project}/burns/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/burns/getdraft`,isloading);
        res.data.burn = data.burn;
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BurnServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/burns/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/burns/fetchdefault`,tempData,isloading);
    }

    /**
     * FetchESTIMATEANDLEFT接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BurnServiceBase
     */
    public async FetchESTIMATEANDLEFT(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/projects/${context.project}/burns/fetchestimateandleft`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/burns/fetchestimateandleft`,tempData,isloading);
    }
}