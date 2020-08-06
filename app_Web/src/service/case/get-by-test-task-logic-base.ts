import CaseService from '@/service/case/case-service';
import { Verify } from '@/utils/verify/verify';


/**
 * 获取状态值
 *
 * @export
 * @class GetByTestTaskLogicBase
 */
export default class GetByTestTaskLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetByTestTaskLogicBase
     */
    private name:string ="GetByTestTask";

    /**
     * 唯一标识
     * 
     * @memberof  GetByTestTaskLogicBase
     */
    private id:string = "4481BAEC-F57E-4CCE-8728-1741F2698CFF";

    /**
     * 默认参数名称
     * 
     * @memberof  GetByTestTaskLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetByTestTaskLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetByTestTaskLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetByTestTaskLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetByTestTaskLogicBase
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
            return this.executeDeaction1(context,params,isloading);   
        }
    }

    /**
    * 获取详情
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeDeaction1(context:any,params:any,isloading:boolean){
        // 行为处理节点
        let result: any;
        let actionParam:any = this.paramsMap.get('Default');
        const targetService:CaseService = new CaseService();
        if (targetService['Get'] && targetService['Get'] instanceof Function) {
            result = await targetService['Get'](actionParam.context,actionParam.data, false);
        }
        if(result && result.status == 200){
            Object.assign(actionParam.data,result.data);
        return this.paramsMap.get(this.defaultParamName).data;
        }
    }


}