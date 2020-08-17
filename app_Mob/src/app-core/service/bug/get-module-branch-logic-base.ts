import { Verify } from '@/ibiz-core/utils';


/**
 * 获取模块的平台
 *
 * @export
 * @class GetModuleBranchLogicBase
 */
export class GetModuleBranchLogicBase {

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
     * 参数集合
     * 
     * @memberof  GetModuleBranchLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetModuleBranchLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetModuleBranchLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetModuleBranchLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('Default',opts);
        this.paramsMap.set('Module',{});
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
    let tempDstParam0Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam0Data:any = this.paramsMap.get('Module').data?this.paramsMap.get('Module').data:{};
    Object.assign(tempDstParam0Data,{branch:tempSrcParam0Data['branch']});
    this.paramsMap.set('Default',{data:tempDstParam0Data,context:tempDstParam0Context});
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
    }

    /**
    * 设置模块参数
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam1(context:any,params:any,isloading:boolean){
        // 准备参数节点
    let tempDstParam0Context:any = this.paramsMap.get('Module').context?this.paramsMap.get('Module').context:{};
    let tempDstParam0Data:any = this.paramsMap.get('Module').data?this.paramsMap.get('Module').data:{};
    let tempSrcParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    Object.assign(tempDstParam0Data,{id:tempSrcParam0Data['module']});
    this.paramsMap.set('Module',{data:tempDstParam0Data,context:tempDstParam0Context});
        if(this.compute2Cond(params)){
            return this.executeDeaction1(context,params,isloading);   
        }
    }


}