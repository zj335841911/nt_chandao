import CaseService from '@/service/case/case-service';
import { Verify } from '@/utils/verify/verify';


/**
 * unlinkSuiteCases
 *
 * @export
 * @class UnlinkSuiteCasesLogicBase
 */
export default class UnlinkSuiteCasesLogicBase {

    /**
     * 名称
     * 
     * @memberof  UnlinkSuiteCasesLogicBase
     */
    private name:string ="unlinkSuiteCases";

    /**
     * 唯一标识
     * 
     * @memberof  UnlinkSuiteCasesLogicBase
     */
    private id:string = "750348F7-256B-4A96-8975-83D0AEAB08C2";

    /**
     * 默认参数名称
     * 
     * @memberof  UnlinkSuiteCasesLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  UnlinkSuiteCasesLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  UnlinkSuiteCasesLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  UnlinkSuiteCasesLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  UnlinkSuiteCasesLogicBase
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
     * 计算1节点结果
     * 
     * @param params 传入参数
     */
    public compute1Cond(params:any):boolean{
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
    * 准备参数
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam1(context:any,params:any,isloading:boolean){
        // 准备参数节点
    let tempDstParam0Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    Object.assign(tempDstParam0Data,{case:tempSrcParam0Data['id']});
    this.paramsMap.set('Default',{data:tempDstParam0Data,context:tempDstParam0Context});
    let tempDstParam1Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam1Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam1Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    Object.assign(tempDstParam1Context,{case:tempSrcParam1Data['suite']});
    Object.assign(tempDstParam1Data,{id:tempSrcParam1Data['suite']});
    this.paramsMap.set('Default',{data:tempDstParam1Data,context:tempDstParam1Context});
        if(this.compute1Cond(params)){
            return this.executeDeaction1(context,params,isloading);   
        }
    }

    /**
    * 移除用例
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeDeaction1(context:any,params:any,isloading:boolean){
        // 行为处理节点
        let result: any;
        let actionParam:any = this.paramsMap.get('Default');
        const targetService:CaseService = new CaseService();
        if (targetService['UnlinkSuiteCase'] && targetService['UnlinkSuiteCase'] instanceof Function) {
            result = await targetService['UnlinkSuiteCase'](actionParam.context,actionParam.data, false);
        }
        if(result && result.status == 200){
            Object.assign(actionParam.data,result.data);
        return this.paramsMap.get(this.defaultParamName).data;
        }
    }

    /**
    * 开始
    * 
    * @param params 传入参数
    */
    private async executeBegin(context:any,params:any,isloading:boolean){
        //开始节点
        if(this.compute0Cond(params)){
            return this.executePrepareparam1(context,params,isloading);   
        }
    }


}