import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 用例步骤服务对象基类
 *
 * @export
 * @class IBZCaseStepServiceBase
 * @extends {EntityServie}
 */
export default class IBZCaseStepServiceBase extends EntityService {

    /**
     * Creates an instance of  IBZCaseStepServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZCaseStepServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IBZCaseStepServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzcasestep';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzcasesteps';
        this.APPDETEXT = 'expect';
        this.APPNAME = 'web';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZCaseStepServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // aaa
        // FetchDefault ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
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
     * @memberof IBZCaseStepServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // aaa
        // FetchTempDefault ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
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
     * FetchVersion接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZCaseStepServiceBase
     */
    public async FetchVersion(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // aaa
        // FetchVersion ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
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
     * FetchTempVersion接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZCaseStepServiceBase
     */
    public async FetchTempVersion(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // aaa
        // FetchTempVersion ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzcasesteps') as any);
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