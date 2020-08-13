import { Verify } from '@/utils/verify/verify';


/**
 * 获取上一个计划的名称
 *
 * @export
 * @class GetOldPlanNameLogicBase
 */
export default class GetOldPlanNameLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetOldPlanNameLogicBase
     */
    private name:string ="GetOldPlanName";

    /**
     * 唯一标识
     * 
     * @memberof  GetOldPlanNameLogicBase
     */
    private id:string = "E64BB774-5C7C-4316-8337-DB49DC1DCC4A";

    /**
     * 默认参数名称
     * 
     * @memberof  GetOldPlanNameLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetOldPlanNameLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetOldPlanNameLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetOldPlanNameLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetOldPlanNameLogicBase
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