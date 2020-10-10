import { Verify } from '@/utils/verify/verify';


/**
 * 获取参与的产品数
 *
 * @export
 * @class GetProductsLogicBase
 */
export default class GetProductsLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetProductsLogicBase
     */
    private name:string ="GetProducts";

    /**
     * 唯一标识
     * 
     * @memberof  GetProductsLogicBase
     */
    private id:string = "7ECD3387-72C3-434D-9F32-49B7ABB59092";

    /**
     * 默认参数名称
     * 
     * @memberof  GetProductsLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetProductsLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetProductsLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetProductsLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetProductsLogicBase
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
            return this.executeRawsqlcall1(context,params,isloading);   
        }
    }

    /**
    * 获取产品数
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