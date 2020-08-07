import ModuleService from '@/service/module/module-service';
import { Verify } from '@/utils/verify/verify';


/**
 * 获取模块的平台
 *
 * @export
 * @class GetModuleBranchLogicBase
 */
export default class GetModuleBranchLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetModuleBranchLogicBase
     */
    private name:string ="GetModuleBranch";

    /**
     * 唯一标识
     * 
     * @memberof  GetModuleBranchLogicBase
     */
    private id:string = "2EB279DB-E388-42BB-845F-D1B9EF3F2F8B";

    /**
     * 默认参数名称
     * 
     * @memberof  GetModuleBranchLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * Creates an instance of  GetModuleBranchLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetModuleBranchLogicBase
     */
    constructor(opts: any = {}) {
        
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
     * 计算1节点结果
     * 
     * @param params 传入参数
     */
    public compute1Cond(params:any):boolean{
        if(Verify.testCond(params.module, 'ISNOTNULL', '')){
           return true;
        }else{
            return false;
        }
    }

    /**
     * 计算2节点结果
     * 
     * @param params 传入参数
     */
    public compute2Cond(params:any):boolean{
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
    * 设置bug平台值
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam2(context:any,params:any,isloading:boolean){
        // 准备参数节点
        Object.assign(params,{branch:params.branch});
        return params;
    }

    /**
    * 开始
    * 
    * @param params 传入参数
    */
    private async executeBegin(context:any,params:any,isloading:boolean){
        //开始节点
        if(this.compute1Cond(params)){
            return this.executePrepareparam1(context,params,isloading);   
        }
    }

    /**
    * 获取模块详情
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeDeaction1(context:any,params:any,isloading:boolean){
        // 行为处理节点
        let result: any;
        const targetService:ModuleService = new ModuleService();
        if (targetService['Get'] && targetService['Get'] instanceof Function) {
            result = await targetService['Get'](context,params, false);
        }
        if(result && result.status == 200){
            Object.assign(params,result.data);
        if(this.compute0Cond(params)){
            return this.executePrepareparam2(context,params,isloading);   
        }
        }
    }

    /**
    * 设置模块参数
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam1(context:any,params:any,isloading:boolean){
        // 准备参数节点
        Object.assign(params,{id:params.module});
        if(this.compute2Cond(params)){
            return this.executeDeaction1(context,params,isloading);   
        }
    }


}