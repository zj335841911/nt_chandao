import { Verify } from '@/ibiz-core/utils';


/**
 * 我的地盘移动端计数器
 *
 * @export
 * @class MyTerritoryCountLogicBase
 */
export class MyTerritoryCountLogicBase {

    /**
     * 名称
     * 
     * @memberof  MyTerritoryCountLogicBase
     */
    private name:string ="MyTerritoryCount";

    /**
     * 唯一标识
     * 
     * @memberof  MyTerritoryCountLogicBase
     */
    private id:string = "ECC7315C-3CC1-4C75-8540-390551B28B7D";

    /**
     * 默认参数名称
     * 
     * @memberof  MyTerritoryCountLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  MyTerritoryCountLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  MyTerritoryCountLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MyTerritoryCountLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  MyTerritoryCountLogicBase
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