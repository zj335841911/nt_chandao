import { Verify } from '@/ibiz-core/utils';


/**
 * 项目任务快速分组计数器
 *
 * @export
 * @class ProjectTaskQCntLogicBase
 */
export class ProjectTaskQCntLogicBase {

    /**
     * 名称
     * 
     * @memberof  ProjectTaskQCntLogicBase
     */
    private name:string ="ProjectTaskQCnt";

    /**
     * 唯一标识
     * 
     * @memberof  ProjectTaskQCntLogicBase
     */
    private id:string = "1094D243-F2C1-4270-9E84-C0D54C8D0383";

    /**
     * 默认参数名称
     * 
     * @memberof  ProjectTaskQCntLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  ProjectTaskQCntLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  ProjectTaskQCntLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTaskQCntLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTaskQCntLogicBase
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