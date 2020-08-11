import { Verify } from '@/utils/verify/verify';


/**
 * 获取项目产品计划
 *
 * @export
 * @class GetProjectProductPlanLogicBase
 */
export default class GetProjectProductPlanLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetProjectProductPlanLogicBase
     */
    private name:string ="getProjectProductPlan";

    /**
     * 唯一标识
     * 
     * @memberof  GetProjectProductPlanLogicBase
     */
    private id:string = "4058F39F-EBF9-4CA7-83D4-90D1022F0CB0";

    /**
     * 默认参数名称
     * 
     * @memberof  GetProjectProductPlanLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetProjectProductPlanLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetProjectProductPlanLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetProjectProductPlanLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetProjectProductPlanLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('Default',opts);
    }


    /**
     * 计算0节点结果
     * 
     * @param params 传入参数
     */
    public compute0Cond(params:any):boolean{
        return true;
    }

    /**
     * 执行逻辑
     * 
     * @param context 应用上下文
     * @param params 传入参数
     */
    public onExecute(context:any,params:any,isloading:boolean){
        return this.executeBegin(context,params,isloading);
    }


    /**
    * 获取产品计划
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeRawsfcode1(context:any,params:any,isloading:boolean){
        // RAWSFCODE暂未支持
        console.log("RAWSFCODE暂未支持");
        return this.paramsMap.get(this.defaultParamName).data;
    }

    /**
    * 开始
    * 
    * @param params 传入参数
    */
    private async executeBegin(context:any,params:any,isloading:boolean){
        //开始节点
        if(this.compute0Cond(params)){
            return this.executeRawsfcode1(context,params,isloading);   
        }
    }


}