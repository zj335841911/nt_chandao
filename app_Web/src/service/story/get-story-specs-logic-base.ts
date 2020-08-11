import StoryService from '@/service/story/story-service';
import { Verify } from '@/utils/verify/verify';


/**
 * GetStorySpecs
 *
 * @export
 * @class GetStorySpecsLogicBase
 */
export default class GetStorySpecsLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetStorySpecsLogicBase
     */
    private name:string ="GetStorySpecs";

    /**
     * 唯一标识
     * 
     * @memberof  GetStorySpecsLogicBase
     */
    private id:string = "394EE8CD-1AFE-4EA6-8B4A-68A82CFE71D9";

    /**
     * 默认参数名称
     * 
     * @memberof  GetStorySpecsLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetStorySpecsLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetStorySpecsLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetStorySpecsLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetStorySpecsLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('story',{});
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
     * 计算2节点结果
     * 
     * @param params 传入参数
     */
    public compute2Cond(params:any):boolean{
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
    * 参数
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam1(context:any,params:any,isloading:boolean){
        // 准备参数节点
    let tempDstParam0Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam0Data:any = this.paramsMap.get('story').data?this.paramsMap.get('story').data:{};
    Object.assign(tempDstParam0Data,{title:tempSrcParam0Data['title']});
    this.paramsMap.set('Default',{data:tempDstParam0Data,context:tempDstParam0Context});
    let tempDstParam1Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam1Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam1Data:any = this.paramsMap.get('story').data?this.paramsMap.get('story').data:{};
    Object.assign(tempDstParam1Data,{verify:tempSrcParam1Data['verify']});
    this.paramsMap.set('Default',{data:tempDstParam1Data,context:tempDstParam1Context});
    let tempDstParam2Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam2Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam2Data:any = this.paramsMap.get('story').data?this.paramsMap.get('story').data:{};
    Object.assign(tempDstParam2Data,{spec:tempSrcParam2Data['spec']});
    this.paramsMap.set('Default',{data:tempDstParam2Data,context:tempDstParam2Context});
        if(this.compute1Cond(params)){
            return this.executeDeaction1(context,params,isloading);   
        }
    }

    /**
    * 处理
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeDeaction1(context:any,params:any,isloading:boolean){
        // 行为处理节点
        let result: any;
        let actionParam:any = this.paramsMap.get('Default');
        const targetService:StoryService = new StoryService();
        if (targetService['GetStorySpec'] && targetService['GetStorySpec'] instanceof Function) {
            result = await targetService['GetStorySpec'](actionParam.context,actionParam.data, false);
        }
        if(result && result.status == 200){
            Object.assign(actionParam.data,result.data);
        return this.paramsMap.get(this.defaultParamName).data;
        }
    }

    /**
    * 获取数据
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