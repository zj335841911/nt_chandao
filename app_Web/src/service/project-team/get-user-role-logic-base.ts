import { Verify } from '@/utils/verify/verify';


/**
 * 获取成员角色
 *
 * @export
 * @class GetUserRoleLogicBase
 */
export default class GetUserRoleLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetUserRoleLogicBase
     */
    private name:string ="GetUserRole";

    /**
     * 唯一标识
     * 
     * @memberof  GetUserRoleLogicBase
     */
    private id:string = "AD340CC5-120C-45A9-87D6-C172B35ADB6A";

    /**
     * 默认参数名称
     * 
     * @memberof  GetUserRoleLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetUserRoleLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetUserRoleLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetUserRoleLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetUserRoleLogicBase
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
    * 获取角色成员
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