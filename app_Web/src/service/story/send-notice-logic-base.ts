import { Verify } from '@/utils/verify/verify';


/**
 * 发送通知
 *
 * @export
 * @class SendNoticeLogicBase
 */
export default class SendNoticeLogicBase {

    /**
     * 名称
     * 
     * @memberof  SendNoticeLogicBase
     */
    private name:string ="sendNotice";

    /**
     * 唯一标识
     * 
     * @memberof  SendNoticeLogicBase
     */
    private id:string = "6de647ce8d548632ed6c6b1cd06b9367";

    /**
     * 默认参数名称
     * 
     * @memberof  SendNoticeLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  SendNoticeLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  SendNoticeLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  SendNoticeLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  SendNoticeLogicBase
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