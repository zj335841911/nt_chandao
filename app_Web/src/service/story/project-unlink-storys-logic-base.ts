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
        return this.paramsMap.get(this.defaultParamName).data;
    }


}