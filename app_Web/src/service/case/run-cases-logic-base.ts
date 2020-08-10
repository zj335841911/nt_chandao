import CaseService from '@/service/case/case-service';
import { Verify } from '@/utils/verify/verify';


/**
 * runCases
 *
 * @export
 * @class RunCasesLogicBase
 */
export default class RunCasesLogicBase {

    /**
     * 名称
     * 
     * @memberof  RunCasesLogicBase
     */
    private name:string ="runCases";

    /**
     * 唯一标识
     * 
     * @memberof  RunCasesLogicBase
     */
    private id:string = "687D83DD-A007-4137-804B-7ABC04B7FF48";

    /**
     * 默认参数名称
     * 
     * @memberof  RunCasesLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  RunCasesLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  RunCasesLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  RunCasesLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  RunCasesLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('Default',opts);
        this.paramsMap.set('testrun',{});
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
    * 重置ID
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam1(context:any,params:any,isloading:boolean){
        // 准备参数节点
    let tempDstParam0Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam0Data:any = this.paramsMap.get('testrun').data?this.paramsMap.get('testrun').data:{};
    Object.assign(tempDstParam0Context,{case:tempSrcParam0Data['id']});
    Object.assign(tempDstParam0Data,{id:tempSrcParam0Data['id']});
    this.paramsMap.set('Default',{data:tempDstParam0Data,context:tempDstParam0Context});
        if(this.compute1Cond(params)){
            return this.executeDeaction1(context,params,isloading);   
        }
    }

    /**
    * 获取数据
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeRawsqlcall1(context:any,params:any,isloading:boolean){
        // RAWSQLCALL暂未支持
        console.log("RAWSQLCALL暂未支持");
        return this.paramsMap.get(this.defaultParamName).data;
    }

    /**
    * 开始
    * 
    * @param params 传入参数
    */
    private async executeBegin(context:any,params:any,isloading:boolean){
        //开始节点
        if(this.compute2Cond(params)){
            return this.executeRawsqlcall1(context,params,isloading);   
        }
    }

    /**
    * 执行测试
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeDeaction1(context:any,params:any,isloading:boolean){
        // 行为处理节点
        let result: any;
        let actionParam:any = this.paramsMap.get('Default');
        const targetService:CaseService = new CaseService();
        if (targetService['RunCase'] && targetService['RunCase'] instanceof Function) {
            result = await targetService['RunCase'](actionParam.context,actionParam.data, false);
        }
        if(result && result.status == 200){
            Object.assign(actionParam.data,result.data);
        return this.paramsMap.get(this.defaultParamName).data;
        }
    }


}