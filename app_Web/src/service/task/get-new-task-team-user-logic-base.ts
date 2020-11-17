import { Verify } from '@/utils/verify/verify';


/**
 * 获取最新团队成员
 *
 * @export
 * @class GetNewTaskTeamUserLogicBase
 */
export default class GetNewTaskTeamUserLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetNewTaskTeamUserLogicBase
     */
    private name:string ="GetNewTaskTeamUser";

    /**
     * 唯一标识
     * 
     * @memberof  GetNewTaskTeamUserLogicBase
     */
    private id:string = "104D982C-078C-447B-B569-60E18668CB9A";

    /**
     * 默认参数名称
     * 
     * @memberof  GetNewTaskTeamUserLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetNewTaskTeamUserLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetNewTaskTeamUserLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetNewTaskTeamUserLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetNewTaskTeamUserLogicBase
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