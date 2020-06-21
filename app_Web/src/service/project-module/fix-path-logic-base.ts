import ModuleService from '@/service/module/module-service';
import { Verify } from '@/utils/verify/verify';


/**
 * 重建模块路径
 *
 * @export
 * @class FixPathLogicBase
 */
export default class FixPathLogicBase {

    /**
     * 名称
     * 
     * @memberof  FixPathLogicBase
     */
    private name:string ="FixPath";

    /**
     * 唯一标识
     * 
     * @memberof  FixPathLogicBase
     */
    private id:string = "546970BC-9D81-4DBF-8D1D-67B3C13853C8";

    /**
     * 默认参数名称
     * 
     * @memberof  FixPathLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  FixPathLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  FixPathLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  FixPathLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  FixPathLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('ZT_Module',{});
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
    * 执行重建模块路径行为
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeDeaction1(context:any,params:any,isloading:boolean){
        // 行为处理节点
        let result: any;
        let actionParam:any = this.paramsMap.get('ZT_Module');
        const targetService:ModuleService = new ModuleService();
        if (targetService['Fix'] && targetService['Fix'] instanceof Function) {
            result = await targetService['Fix'](actionParam.context,actionParam.data, false);
        }
        if(result && result.status == 200){
            Object.assign(actionParam.data,result.data);
        return this.paramsMap.get(this.defaultParamName).data;
        }
    }

    /**
    * 转化至模块实体
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam1(context:any,params:any,isloading:boolean){
        // 准备参数节点
    let tempDstParam0Context:any = this.paramsMap.get('ZT_Module').context?this.paramsMap.get('ZT_Module').context:{};
    let tempDstParam0Data:any = this.paramsMap.get('ZT_Module').data?this.paramsMap.get('ZT_Module').data:{};
    this.paramsMap.set('ZT_Module',{data:tempDstParam0Data,context:tempDstParam0Context});
    let tempDstParam1Context:any = this.paramsMap.get('ZT_Module').context?this.paramsMap.get('ZT_Module').context:{};
    let tempDstParam1Data:any = this.paramsMap.get('ZT_Module').data?this.paramsMap.get('ZT_Module').data:{};
    this.paramsMap.set('ZT_Module',{data:tempDstParam1Data,context:tempDstParam1Context});
        if(this.compute0Cond(params)){
            return this.executeDeaction1(context,params,isloading);   
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


}