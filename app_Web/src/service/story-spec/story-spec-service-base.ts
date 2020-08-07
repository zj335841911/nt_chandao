import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 需求描述服务对象基类
 *
 * @export
 * @class StorySpecServiceBase
 * @extends {EntityServie}
 */
export default class StorySpecServiceBase extends EntityService {

    /**
     * Creates an instance of  StorySpecServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  StorySpecServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof StorySpecServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='storyspec';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'storyspecs';
        this.APPDETEXT = 'title';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StorySpecServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.storyspec){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/storyspecs/${context.storyspec}/select`,isloading);
        }
        if(context.story && context.storyspec){
            return Http.getInstance().get(`/stories/${context.story}/storyspecs/${context.storyspec}/select`,isloading);
        }
            return Http.getInstance().get(`/storyspecs/${context.storyspec}/select`,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StorySpecServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/storyspecs`,data,isloading);
        }
        if(context.story && true){
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            return Http.getInstance().post(`/stories/${context.story}/storyspecs`,data,isloading);
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
        let res:any = await Http.getInstance().post(`/storyspecs`,data,isloading);
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StorySpecServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.storyspec){
            return Http.getInstance().put(`/products/${context.product}/stories/${context.story}/storyspecs/${context.storyspec}`,data,isloading);
        }
        if(context.story && context.storyspec){
            return Http.getInstance().put(`/stories/${context.story}/storyspecs/${context.storyspec}`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/storyspecs/${context.storyspec}`,data,isloading);
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StorySpecServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.storyspec){
            return Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/storyspecs/${context.storyspec}`,isloading);
        }
        if(context.story && context.storyspec){
            return Http.getInstance().delete(`/stories/${context.story}/storyspecs/${context.storyspec}`,isloading);
        }
            return Http.getInstance().delete(`/storyspecs/${context.storyspec}`,isloading);

    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StorySpecServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.storyspec){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/storyspecs/${context.storyspec}`,isloading);
        }
        if(context.story && context.storyspec){
            return Http.getInstance().get(`/stories/${context.story}/storyspecs/${context.storyspec}`,isloading);
        }
            let res:any = await Http.getInstance().get(`/storyspecs/${context.storyspec}`,isloading);
            return res;

    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StorySpecServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/storyspecs/getdraft`,isloading);
        }
        if(context.story && true){
            return Http.getInstance().get(`/stories/${context.story}/storyspecs/getdraft`,isloading);
        }
        let res:any = await  Http.getInstance().get(`/storyspecs/getdraft`,isloading);
        res.data.storyspec = data.storyspec;
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StorySpecServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.storyspec){
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/storyspecs/${context.storyspec}/checkkey`,data,isloading);
        }
        if(context.story && context.storyspec){
            return Http.getInstance().post(`/stories/${context.story}/storyspecs/${context.storyspec}/checkkey`,data,isloading);
        }
            return Http.getInstance().post(`/storyspecs/${context.storyspec}/checkkey`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StorySpecServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.storyspec){
            return Http.getInstance().post(`/products/${context.product}/stories/${context.story}/storyspecs/${context.storyspec}/save`,data,isloading);
        }
        if(context.story && context.storyspec){
            return Http.getInstance().post(`/stories/${context.story}/storyspecs/${context.storyspec}/save`,data,isloading);
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/storyspecs/${context.storyspec}/save`,data,isloading);
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StorySpecServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/storyspecs/fetchdefault`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/storyspecs/fetchdefault`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/storyspecs/fetchdefault`,tempData,isloading);
    }

    /**
     * FetchVersion接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StorySpecServiceBase
     */
    public async FetchVersion(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/products/${context.product}/stories/${context.story}/storyspecs/fetchversion`,tempData,isloading);
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            return Http.getInstance().get(`/stories/${context.story}/storyspecs/fetchversion`,tempData,isloading);
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/storyspecs/fetchversion`,tempData,isloading);
    }
}