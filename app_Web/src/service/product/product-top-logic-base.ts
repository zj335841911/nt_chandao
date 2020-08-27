import { Verify } from '@/utils/verify/verify';


/**
 * 置顶
 *
 * @export
 * @class ProductTopLogicBase
 */
export default class ProductTopLogicBase {

    /**
     * 名称
     * 
     * @memberof  ProductTopLogicBase
     */
    private name:string ="ProductTop";

    /**
     * 唯一标识
     * 
     * @memberof  ProductTopLogicBase
     */
    private id:string = "A062E59A-5E49-4CD8-A1D9-07301EA2C693";

    /**
     * 默认参数名称
     * 
     * @memberof  ProductTopLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  ProductTopLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  ProductTopLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductTopLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  ProductTopLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('Default',opts);
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
        return this.paramsMap.get(this.defaultParamName).data;
    }


}