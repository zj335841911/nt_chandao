import { CaseService } from '@app-core/service/case/case-service';
import { Verify } from '@/ibiz-core/utils';


/**
 * huaFavorite
 *
 * @export
 * @class HuaFavoriteLogicBase
 */
export class HuaFavoriteLogicBase {

    /**
     * 名称
     * 
     * @memberof  HuaFavoriteLogicBase
     */
    private name:string ="huaFavorite";

    /**
     * 唯一标识
     * 
     * @memberof  HuaFavoriteLogicBase
     */
    private id:string = "F144C1D3-1400-49A6-A632-0279D2B11DFC";

    /**
     * 默认参数名称
     * 
     * @memberof  HuaFavoriteLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  HuaFavoriteLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  HuaFavoriteLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  HuaFavoriteLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  HuaFavoriteLogicBase
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
     * 计算1节点结果
     * 
     * @param params 传入参数
     */
    public compute1Cond(params:any):boolean{
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
    * Create
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeCreate(context:any,params:any,isloading:boolean){
        // 行为处理节点
        let result: any;
        let actionParam:any = this.paramsMap.get('Default');
        const targetService:CaseService = new CaseService();
        if (targetService['Create'] && targetService['Create'] instanceof Function) {
            result = await targetService['Create'](actionParam.context,actionParam.data, false);
        }
        if(result && result.status == 200){
            Object.assign(actionParam.data,result.data);
        return this.paramsMap.get(this.defaultParamName).data;
        }
    }

    /**
    * 开始
    * 
    * @param params 传入参数
    */
    private async executeBegin(context:any,params:any,isloading:boolean){
        //开始节点
        if(this.compute1Cond(params)){
            return this.executePrepareparam1(context,params,isloading);   
        }
    }

    /**
    * 准备参数
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam1(context:any,params:any,isloading:boolean){
        // 准备参数节点
        if(this.compute0Cond(params)){
            return this.executeCreate(context,params,isloading);   
        }
    }


}