import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 计划模板详情服务对象基类
 *
 * @export
 * @class IbzPlanTempletDetailServiceBase
 * @extends {EntityServie}
 */
export default class IbzPlanTempletDetailServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzPlanTempletDetailServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzPlanTempletDetailServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzPlanTempletDetailServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzplantempletdetail';
        this.APPDEKEY = 'ibzplantempletdetailid';
        this.APPDENAME = 'ibzplantempletdetails';
        this.APPDETEXT = 'ibzplantempletdetailname';
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
     * @memberof IbzPlanTempletDetailServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchDefault ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzplantempletdetails'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzplantempletdetails') as any);
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
     * searchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzPlanTempletDetailServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}