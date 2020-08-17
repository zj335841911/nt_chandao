import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 用例库用例服务对象基类
 *
 * @export
 * @class IbzCaseServiceBase
 * @extends {EntityServie}
 */
export default class IbzCaseServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzCaseServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzCaseServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzCaseServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzcase';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzcases';
        this.APPDETEXT = 'title';
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
     * @memberof IbzCaseServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.ibzlib && context.ibzcase){
            let res:any = Http.getInstance().get(`/ibzlibs/${context.ibzlib}/ibzcases/${context.ibzcase}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/ibzcases/${context.ibzcase}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzCaseServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzCaseServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}