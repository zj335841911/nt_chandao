import { Verify } from '@/utils/verify/verify';


/**
 * 发送代办任务
 *
 * @export
 * @class SendTodoTaskLogicBase
 */
export default class SendTodoTaskLogicBase {

    /**
     * 名称
     * 
     * @memberof  SendTodoTaskLogicBase
     */
    private name:string ="sendTodoTask";

    /**
     * 唯一标识
     * 
     * @memberof  SendTodoTaskLogicBase
     */
    private id:string = "9908AB52-C5A1-4442-8B0E-B9864FBE7190";

    /**
     * 默认参数名称
     * 
     * @memberof  SendTodoTaskLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  SendTodoTaskLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  SendTodoTaskLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  SendTodoTaskLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  SendTodoTaskLogicBase
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