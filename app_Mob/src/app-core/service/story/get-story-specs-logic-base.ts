import { Util, Verify } from '@/ibiz-core/utils';
import { EntityLogicBase } from '@/ibiz-core';


/**
 * GetStorySpecs处理逻辑基类
 *
 * @export
 * @class GetStorySpecsLogicBase
 * @extends {EntityLogicBase}
 */
export class GetStorySpecsLogicBase extends EntityLogicBase {

    /**
     * 名称
     * 
     * @protected
     * @memberof GetStorySpecsLogicBase
     */
    protected name:string ="GetStorySpecs";

    /**
     * 唯一标识
     * 
     * @protected
     * @memberof GetStorySpecsLogicBase
     */
    protected id:string = "394EE8CD-1AFE-4EA6-8B4A-68A82CFE71D9";

    /**
     * 默认参数名称
     * 
     * @protected
     * @memberof GetStorySpecsLogicBase
     */
    protected defaultParamName:string = "Default";

    /**
     * 执行逻辑
     * 
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof GetStorySpecsLogicBase
     */
    public onExecute(context: any, params: any): Promise<any> {
        return this.executeBegin(context, params);
    }


    /**
     * 参数
     * 
     * @protected
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof GetStorySpecsLogicBase
     */
    protected async executePrepareparam1(context: any, params: any): Promise<any> {
        // 准备参数节点
        Object.assign(params, { title: params.title });
        Object.assign(params, { verify: params.verify });
        Object.assign(params, { spec: params.spec });
        return this.executeDeaction1(context, params);
    }

    /**
     * 处理
     * 
     * @protected
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof GetStorySpecsLogicBase
     */
    protected async executeDeaction1(context: any, params: any): Promise<any> {
        // 行为处理节点
        let result: any;
        // Story服务
        const targetService: any = await this.getService('Story');
        if (Util.isFunction(targetService['GetStorySpec'])) {
            result = await targetService['GetStorySpec'](context, params);
        }
        if(result && result.status == 200){
            Object.assign(params, result.data);
        return params;
        }
    }

    /**
     * 获取数据
     * 
     * @protected
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof GetStorySpecsLogicBase
     */
    protected async executeRawsqlcall1(context: any, params: any): Promise<any> {
        throw new Error('RAWSQLCALL暂未支持');
    }

    /**
     * 开始
     * 
     * @protected
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof GetStorySpecsLogicBase
     */
    protected async executeBegin(context: any, params: any): Promise<any> {
        //开始节点
        return this.executeRawsqlcall1(context, params);
    }

}