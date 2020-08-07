import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 测试版本服务对象基类
 *
 * @export
 * @class TestTaskServiceBase
 * @extends {EntityServie}
 */
export default class TestTaskServiceBase extends EntityService {

    /**
     * Creates an instance of  TestTaskServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TestTaskServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof TestTaskServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='testtask';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'testtasks';
        this.APPDETEXT = 'name';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().get(`/products/${context.product}/testtasks/${context.testtask}/select`,isloading);
        }
            return Http.getInstance().get(`/testtasks/${context.testtask}/select`,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/testtasks`,data,isloading);
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
        let res:any = await Http.getInstance().post(`/testtasks`,data,isloading);
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().put(`/products/${context.product}/testtasks/${context.testtask}`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/testtasks/${context.testtask}`,data,isloading);
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().delete(`/products/${context.product}/testtasks/${context.testtask}`,isloading);
        }
            return Http.getInstance().delete(`/testtasks/${context.testtask}`,isloading);

    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().get(`/products/${context.product}/testtasks/${context.testtask}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/testtasks/${context.testtask}`,isloading);
            return res;

    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            return Http.getInstance().get(`/products/${context.product}/testtasks/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/testtasks/getdraft`,isloading);
        res.data.testtask = data.testtask;
        return res;
    }

    /**
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().post(`/products/${context.product}/testtasks/${context.testtask}/activate`,data,isloading);
        }
            return Http.getInstance().post(`/testtasks/${context.testtask}/activate`,data,isloading);
    }

    /**
     * Block接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async Block(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().post(`/products/${context.product}/testtasks/${context.testtask}/block`,data,isloading);
        }
            return Http.getInstance().post(`/testtasks/${context.testtask}/block`,data,isloading);
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().post(`/products/${context.product}/testtasks/${context.testtask}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/testtasks/${context.testtask}/checkkey`,data,isloading);
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().post(`/products/${context.product}/testtasks/${context.testtask}/close`,data,isloading);
        }
            return Http.getInstance().post(`/testtasks/${context.testtask}/close`,data,isloading);
    }

    /**
     * LinkCase接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async LinkCase(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().post(`/products/${context.product}/testtasks/${context.testtask}/linkcase`,data,isloading);
        }
            return Http.getInstance().post(`/testtasks/${context.testtask}/linkcase`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().post(`/products/${context.product}/testtasks/${context.testtask}/save`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/testtasks/${context.testtask}/save`,data,isloading);
            return res;
    }

    /**
     * Start接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async Start(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().post(`/products/${context.product}/testtasks/${context.testtask}/start`,data,isloading);
        }
            return Http.getInstance().post(`/testtasks/${context.testtask}/start`,data,isloading);
    }

    /**
     * UnlinkCase接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async UnlinkCase(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testtask){
            return Http.getInstance().post(`/products/${context.product}/testtasks/${context.testtask}/unlinkcase`,data,isloading);
        }
            return Http.getInstance().post(`/testtasks/${context.testtask}/unlinkcase`,data,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/testtasks/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/testtasks/fetchdefault`,tempData,isloading);
    }
}