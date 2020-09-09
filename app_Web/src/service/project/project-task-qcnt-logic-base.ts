import { Verify } from '@/utils/verify/verify';


/**
 * 项目任务快速分组计数器
 *
 * @export
 * @class ProjectTaskQCntLogicBase
 */
export default class ProjectTaskQCntLogicBase {

    /**
     * 名称
     * 
     * @memberof  ProjectTaskQCntLogicBase
     */
    private name:string ="ProjectTaskQCnt";

    /**
     * 唯一标识
     * 
     * @memberof  ProjectTaskQCntLogicBase
     */
    private id:string = "1094D243-F2C1-4270-9E84-C0D54C8D0383";

    /**
     * 默认参数名称
     * 
     * @memberof  ProjectTaskQCntLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  ProjectTaskQCntLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  ProjectTaskQCntLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTaskQCntLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTaskQCntLogicBase
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
     * 计算2节点结果
     * 
     * @param params 传入参数
     */
    public compute2Cond(params:any):boolean{
        return true;
    }

    /**
     * 计算3节点结果
     * 
     * @param params 传入参数
     */
    public compute3Cond(params:any):boolean{
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
    * 已完成的任务数
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeRawsqlcall3(context:any,params:any,isloading:boolean){
        // RAWSQLCALL暂未支持
        console.log("RAWSQLCALL暂未支持");
        return this.paramsMap.get(this.defaultParamName).data;
    }

    /**
    * 我完成的任务数
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeRawsqlcall4(context:any,params:any,isloading:boolean){
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
    * 指派给我的任务数
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeRawsqlcall2(context:any,params:any,isloading:boolean){
        // RAWSQLCALL暂未支持
        console.log("RAWSQLCALL暂未支持");
        return this.paramsMap.get(this.defaultParamName).data;
    }

    /**
    * 未关闭任务数
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeRawsqlcall1(context:any,params:any,isloading:boolean){
        // RAWSQLCALL暂未支持
        console.log("RAWSQLCALL暂未支持");
        return this.paramsMap.get(this.defaultParamName).data;
    }


}