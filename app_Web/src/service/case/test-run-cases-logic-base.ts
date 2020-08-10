import CaseService from '@/service/case/case-service';
import { Verify } from '@/utils/verify/verify';


/**
 * testRunCases
 *
 * @export
 * @class TestRunCasesLogicBase
 */
export default class TestRunCasesLogicBase {

    /**
     * 名称
     * 
     * @memberof  TestRunCasesLogicBase
     */
    private name:string ="testRunCases";

    /**
     * 唯一标识
     * 
     * @memberof  TestRunCasesLogicBase
     */
    private id:string = "589422AB-B708-4249-A3C9-990DFF28AAC5";

    /**
     * 默认参数名称
     * 
     * @memberof  TestRunCasesLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  TestRunCasesLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  TestRunCasesLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TestRunCasesLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  TestRunCasesLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('testrun',{});
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
    let tempSrcParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    Object.assign(tempDstParam0Data,{case:tempSrcParam0Data['id']});
    this.paramsMap.set('Default',{data:tempDstParam0Data,context:tempDstParam0Context});
    let tempDstParam1Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam1Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam1Data:any = this.paramsMap.get('testrun').data?this.paramsMap.get('testrun').data:{};
    Object.assign(tempDstParam1Context,{case:tempSrcParam1Data['id']});
    Object.assign(tempDstParam1Data,{id:tempSrcParam1Data['id']});
    this.paramsMap.set('Default',{data:tempDstParam1Data,context:tempDstParam1Context});
    let tempDstParam2Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam2Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam2Data:any = this.paramsMap.get('testrun').data?this.paramsMap.get('testrun').data:{};
    Object.assign(tempDstParam2Data,{version:tempSrcParam2Data['version']});
    this.paramsMap.set('Default',{data:tempDstParam2Data,context:tempDstParam2Context});
        if(this.compute2Cond(params)){
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
        if(this.compute1Cond(params)){
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
        if (targetService['TestRunCase'] && targetService['TestRunCase'] instanceof Function) {
            result = await targetService['TestRunCase'](actionParam.context,actionParam.data, false);
        }
        if(result && result.status == 200){
            Object.assign(actionParam.data,result.data);
        return this.paramsMap.get(this.defaultParamName).data;
        }
    }


}