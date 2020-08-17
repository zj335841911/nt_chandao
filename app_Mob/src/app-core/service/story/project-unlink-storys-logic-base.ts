import { Util, Verify } from '@/ibiz-core/utils';
import { EntityLogicBase } from '@/ibiz-core';


/**
 * projectUnlinkStorys处理逻辑基类
 *
 * @export
 * @class projectUnlinkStorysLogicBase
 * @extends {EntityLogicBase}
 */
export class projectUnlinkStorysLogicBase extends EntityLogicBase {

    /**
     * 名称
     * 
     * @protected
     * @memberof projectUnlinkStorysLogicBase
     */
    protected name:string ="projectUnlinkStorys";

    /**
     * 唯一标识
     * 
     * @protected
     * @memberof projectUnlinkStorysLogicBase
     */
    protected id:string = "11AE1744-BF6D-4868-9A71-2DBCFCFC9871";

    /**
     * 默认参数名称
     * 
     * @protected
     * @memberof projectUnlinkStorysLogicBase
     */
    protected defaultParamName:string = "Default";

    /**
     * 执行逻辑
     * 
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof projectUnlinkStorysLogicBase
     */
    public onExecute(context: any, params: any): Promise<any> {
        return this.executeBegin(context, params);
    }


    /**
     * 开始
     * 
     * @protected
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof projectUnlinkStorysLogicBase
     */
    protected async executeBegin(context: any, params: any): Promise<any> {
        //开始节点
        return this.executePrepareparam1(context, params);
    }

    /**
     * 处理
     * 
     * @protected
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof projectUnlinkStorysLogicBase
     */
    protected async executeDeaction1(context: any, params: any): Promise<any> {
        // 行为处理节点
        let result: any;
        // Story服务
        const targetService: any = await this.getService('Story');
        if (Util.isFunction(targetService['ProjectUnlinkStory'])) {
            result = await targetService['ProjectUnlinkStory'](context, params);
        }
        if(result && result.status == 200){
            Object.assign(params, result.data);
        return params;
        }
    }

    /**
     * 准备参数
     * 
     * @protected
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof projectUnlinkStorysLogicBase
     */
    protected async executePrepareparam1(context: any, params: any): Promise<any> {
        // 准备参数节点
        Object.assign(params, { story: params.id });
        Object.assign(context, { story : params.id });
        Object.assign(params, { id: params.project });
        return this.executeDeaction1(context, params);
    }

}