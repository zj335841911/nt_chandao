import { Verify } from '@/utils/verify/verify';


/**
 * 移动端菜单计数器
 *
 * @export
 * @class MobMenuCountLogicBase
 */
export default class MobMenuCountLogicBase {

    /**
     * 名称
     * 
     * @memberof  MobMenuCountLogicBase
     */
    private name:string ="MobMenuCount";

    /**
     * 唯一标识
     * 
     * @memberof  MobMenuCountLogicBase
     */
    private id:string = "F32B689E-3B32-4D8E-BC9F-D8FE603102BC";

    /**
     * 默认参数名称
     * 
     * @memberof  MobMenuCountLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  MobMenuCountLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  MobMenuCountLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MobMenuCountLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  MobMenuCountLogicBase
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