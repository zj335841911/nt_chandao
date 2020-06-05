import { Verify } from '@/utils/verify/verify';


/**
 * 任务开始
 *
 * @export
 * @class OpenTaskLogicBase
 */
export default class OpenTaskLogicBase {

    /**
     * 名称
     * 
     * @memberof  OpenTaskLogicBase
     */
    private name:string ="OpenTask";

    /**
     * 唯一标识
     * 
     * @memberof  OpenTaskLogicBase
     */
    private id:string = "C36410C5-650C-4B91-9A62-D0DA71234151";

    /**
     * 默认参数名称
     * 
     * @memberof  OpenTaskLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  OpenTaskLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  OpenTaskLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  OpenTaskLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  OpenTaskLogicBase
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

    /**
    * 修改状态为开始
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam1(context:any,params:any,isloading:boolean){
        // 准备参数节点
    let tempDstParam0Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    Object.assign(tempDstParam0Data,{status:"doing"});
    this.paramsMap.set('Default',{data:tempDstParam0Data,context:tempDstParam0Context});
        return this.paramsMap.get(this.defaultParamName).data;
    }


}