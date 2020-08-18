import StoryService from '@/service/story/story-service';
import { Verify } from '@/utils/verify/verify';


/**
 * projectUnlinkStorys
 *
 * @export
 * @class ProjectUnlinkStorysLogicBase
 */
export default class ProjectUnlinkStorysLogicBase {

    /**
     * 名称
     * 
     * @memberof  ProjectUnlinkStorysLogicBase
     */
    private name:string ="projectUnlinkStorys";

    /**
     * 唯一标识
     * 
     * @memberof  ProjectUnlinkStorysLogicBase
     */
    private id:string = "11AE1744-BF6D-4868-9A71-2DBCFCFC9871";

    /**
     * 默认参数名称
     * 
     * @memberof  ProjectUnlinkStorysLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  ProjectUnlinkStorysLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  ProjectUnlinkStorysLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectUnlinkStorysLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectUnlinkStorysLogicBase
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
    * 开始
    * 
    * @param params 传入参数
    */
    private async executeBegin(context:any,params:any,isloading:boolean){
        //开始节点
        if(this.compute0Cond(params)){
            return this.executePrepareparam1(context,params,isloading);   
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
        if (targetService['ProjectUnlinkStory'] && targetService['ProjectUnlinkStory'] instanceof Function) {
            result = await targetService['ProjectUnlinkStory'](actionParam.context,actionParam.data, false);
        }
        if(result && result.status == 200){
            Object.assign(actionParam.data,result.data);
        return this.paramsMap.get(this.defaultParamName).data;
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
    let tempDstParam0Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    Object.assign(tempDstParam0Data,{story:tempSrcParam0Data['id']});
    this.paramsMap.set('Default',{data:tempDstParam0Data,context:tempDstParam0Context});
    let tempDstParam1Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam1Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam1Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    Object.assign(tempDstParam1Context,{story:tempSrcParam1Data['project']});
    Object.assign(tempDstParam1Data,{id:tempSrcParam1Data['project']});
    this.paramsMap.set('Default',{data:tempDstParam1Data,context:tempDstParam1Context});
        if(this.compute1Cond(params)){
            return this.executeDeaction1(context,params,isloading);   
        }
    }


}