import { Verify } from '@/ibiz-core/utils';


/**
 * 移动端产品计数器
 *
 * @export
 * @class MobProductCounterLogicBase
 */
export class MobProductCounterLogicBase {

    /**
     * 名称
     * 
     * @memberof  MobProductCounterLogicBase
     */
    private name:string ="MobProductCounter";

    /**
     * 唯一标识
     * 
     * @memberof  MobProductCounterLogicBase
     */
    private id:string = "8F02CDA7-66EF-40EE-8A37-83780ED37D82";

    /**
     * 默认参数名称
     * 
     * @memberof  MobProductCounterLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  MobProductCounterLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  MobProductCounterLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MobProductCounterLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  MobProductCounterLogicBase
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
    * 获取需求数
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
    * 获取相关BUG数
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


}