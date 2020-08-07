import UtilService from '../util-service';
import DynaDashboardService from '@/service/dyna-dashboard/dyna-dashboard-service';

/**
 * 动态数据看板功能服务对象基类
 *
 * @export
 * @class DYNADASHBOARDUtilServiceBase
 */
export default class DYNADASHBOARDUtilServiceBase extends UtilService {

    /**
     * 存储数据服务
     * 
     * @memberof  DYNADASHBOARDUtilServiceBase
     */ 
    protected stoageDataService: DynaDashboardService = new DynaDashboardService();

    /**
     * 获取数据行为
     * 
     * @memberof  DYNADASHBOARDUtilServiceBase
     */ 
    protected loadAction: string = "Get";

    /**
     * 建立数据行为
     * 
     * @memberof  DYNADASHBOARDUtilServiceBase
     */ 
    protected createAction: string = "Create";

    /**
     * 更新数据行为
     * 
     * @memberof  DYNADASHBOARDUtilServiceBase
     */ 
    protected updateAction: string = "Update";

    /**
     * 删除数据行为
     * 
     * @memberof  DYNADASHBOARDUtilServiceBase
     */ 
    protected removeAction: string = "Remove";

    /**
     * Creates an instance of  DYNADASHBOARDUtilServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  DYNADASHBOARDUtilServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
    * 初始化基础参数
    *
    * @memberof DYNADASHBOARDUtilServiceBase
    */
   public initBasicParam(){
        this.modelIdField = "modelid";
        this.modelField = "model";
        this.appIdField = "appid";
        this.userIdField = "userid";
        this.stoageEntityName ="dynadashboard";
        this.stoageEntityKey ="dynadashboardid";
   }

    /**
     * 获取模型数据
     * 
     * @param context 应用上下文 
     * @param data 传入模型数据
     * @param isloading 是否加载
     * @memberof  DYNADASHBOARDUtilServiceBase
     */ 
    protected loadModelData(context: any = {},data: any = {}, isloading?: boolean): Promise<any>{
        return new Promise((resolve: any, reject: any) => {
            let dataStr = window.localStorage.getItem(data.modelid);
            if(dataStr) {
                const data: any = JSON.parse(dataStr);
                resolve({status:200,data:data.model});
            } else {
                resolve({status:200,data:[]});
            }
        });
    }

    /**
     * 保存模型数据
     * 
     * @param context 应用上下文 
     * @param action 操作行为 Update|Create
     * @param data 传入模型数据
     * @param isloading 是否加载
     * @memberof  DYNADASHBOARDUtilServiceBase
     */ 
    protected saveModelData(context: any = {},action:string,data: any = {}, isloading?: boolean):Promise<any>{
        return new Promise((resolve: any, reject: any) => {
            window.localStorage.setItem(data.modelid, JSON.stringify(data));
            resolve({status:200,data:data.model});
        });
    }

    /**
     * 新建模型数据
     * 
     * @param context 应用上下文 
     * @param data 传入模型数据
     * @param isloading 是否加载
     * @memberof  DYNADASHBOARDUtilServiceBase
     */ 
    protected createdModelData(context: any = {},data: any = {}, isloading?: boolean):Promise<any>{
        const {context:contextResult,data:dataResult} = this.handlePreParam(context,data);
        return new Promise((resolve: any, reject: any) => {
            let result: Promise<any>;
            const _appEntityService: any = this.stoageDataService;
            result = _appEntityService[this.createAction](contextResult,dataResult, isloading);
            result.then((response) => {
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    }

    /**
     * 更新模型数据
     * 
     * @param context 应用上下文 
     * @param data 传入模型数据
     * @param isloading 是否加载
     * @memberof  DYNADASHBOARDUtilServiceBase
     */     
    protected updateModelData(context: any = {},data: any = {}, isloading?: boolean):Promise<any>{
        const {context:contextResult,data:dataResult} = this.handlePreParam(context,data);
        return new Promise((resolve: any, reject: any) => {
            let result: Promise<any>;
            const _appEntityService: any = this.stoageDataService;
            result = _appEntityService[this.updateAction](contextResult,dataResult, isloading);
            result.then((response) => {
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    }

}