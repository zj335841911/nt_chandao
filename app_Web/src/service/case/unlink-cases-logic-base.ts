import { Verify } from '@/utils/verify/verify';


/**
 * unlinkCases
 *
 * @export
 * @class UnlinkCasesLogicBase
 */
export default class UnlinkCasesLogicBase {

    /**
     * 名称
     * 
     * @memberof  UnlinkCasesLogicBase
     */
    private name:string ="unlinkCases";

    /**
     * 唯一标识
     * 
     * @memberof  UnlinkCasesLogicBase
     */
    private id:string = "02C5CDE0-FF72-4170-80B4-A2FBD030C61F";

    /**
     * 默认参数名称
     * 
     * @memberof  UnlinkCasesLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  UnlinkCasesLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  UnlinkCasesLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  UnlinkCasesLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  UnlinkCasesLogicBase
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
     * 执行逻辑
     * 
     * @param context 应用上下文
     * @param params 传入参数
     */
    public onExecute(context:any,params:any,isloading:boolean){
        return this.executeBegin(context,params,isloading);
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
        if(this.compute0Cond(params)){
            return this.executeRawsqlcall1(context,params,isloading);   
        }
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
        return this.paramsMap.get(this.defaultParamName).data;
    }


}