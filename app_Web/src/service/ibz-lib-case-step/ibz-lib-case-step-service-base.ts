import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 用例库用例步骤服务对象基类
 *
 * @export
 * @class IbzLibCaseStepServiceBase
 * @extends {EntityServie}
 */
export default class IbzLibCaseStepServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzLibCaseStepServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzLibCaseStepServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzLibCaseStepServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzlibcasestep';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzlibcasesteps';
        this.APPDETEXT = 'expect';
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
     * @memberof IbzLibCaseStepServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.ibzlib && context.ibzcase && context.ibzlibcasestep){
            let res:any = Http.getInstance().get(`/ibzlibs/${context.ibzlib}/ibzcases/${context.ibzcase}/ibzlibcasesteps/${context.ibzlibcasestep}/select`,isloading);
            
            return res;
        }
        if(context.ibzcase && context.ibzlibcasestep){
            let res:any = Http.getInstance().get(`/ibzcases/${context.ibzcase}/ibzlibcasesteps/${context.ibzlibcasestep}/select`,isloading);
            
            return res;
        }
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzLibCaseStepServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchDefault ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzLibCaseStepServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempDefault ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzlibcasesteps') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }
}