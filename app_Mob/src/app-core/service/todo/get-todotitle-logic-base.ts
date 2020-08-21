import { Verify } from '@/ibiz-core/utils';


/**
 * 获取待办名称
 *
 * @export
 * @class GetTODOTitleLogicBase
 */
export class GetTODOTitleLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetTODOTitleLogicBase
     */
    private name:string ="GetTODOTitle";

    /**
     * 唯一标识
     * 
     * @memberof  GetTODOTitleLogicBase
     */
    private id:string = "B80C761B-2D44-4E5C-977E-0ECA3C253B85";

    /**
     * 默认参数名称
     * 
     * @memberof  GetTODOTitleLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetTODOTitleLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetTODOTitleLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetTODOTitleLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetTODOTitleLogicBase
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
        if(Verify.testCond(params.type, 'NOTEQ', 'custom')){
           return true;
        }else{
            return false;
        }
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
    * 获取待办的标题
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeRawsqlcall1(context:any,params:any,isloading:boolean){
        // RAWSQLCALL暂未支持
        console.log("RAWSQLCALL暂未支持");
        return this.paramsMap.get(this.defaultParamName).data;
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


}