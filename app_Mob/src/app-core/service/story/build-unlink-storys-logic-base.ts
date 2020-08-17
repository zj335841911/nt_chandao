import { Util, Verify } from '@/ibiz-core/utils';
import { EntityLogicBase } from '@/ibiz-core';


/**
 * buildUnlinkStorys处理逻辑基类
 *
 * @export
 * @class buildUnlinkStorysLogicBase
 * @extends {EntityLogicBase}
 */
export class buildUnlinkStorysLogicBase extends EntityLogicBase {

    /**
     * 名称
     * 
     * @protected
     * @memberof buildUnlinkStorysLogicBase
     */
    protected name:string ="buildUnlinkStorys";

    /**
     * 唯一标识
     * 
     * @protected
     * @memberof buildUnlinkStorysLogicBase
     */
    protected id:string = "A59F4127-D1BC-4D2C-BF24-95BFDBBCB4F8";

    /**
     * 默认参数名称
     * 
     * @protected
     * @memberof buildUnlinkStorysLogicBase
     */
    protected defaultParamName:string = "Default";

    /**
     * 执行逻辑
     * 
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof buildUnlinkStorysLogicBase
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
     * @memberof buildUnlinkStorysLogicBase
     */
    protected async executeBegin(context: any, params: any): Promise<any> {
        //开始节点
        return this.executePrepareparam1(context, params);
    }

    /**
     * 参数
     * 
     * @protected
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof buildUnlinkStorysLogicBase
     */
    protected async executePrepareparam1(context: any, params: any): Promise<any> {
        // 准备参数节点
        Object.assign(params, { build: params.build });
        Object.assign(params, { id: params.id });
        Object.assign(context, { story : params.id });
        return this.executeDeaction1(context, params);
    }

    /**
     * 处理
     * 
     * @protected
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof buildUnlinkStorysLogicBase
     */
    protected async executeDeaction1(context: any, params: any): Promise<any> {
        // 行为处理节点
        let result: any;
        // Story服务
        const targetService: any = await this.getService('Story');
        if (Util.isFunction(targetService['BuildUnlinkStory'])) {
            result = await targetService['BuildUnlinkStory'](context, params);
        }
        if(result && result.status == 200){
            Object.assign(params, result.data);
        return params;
        }
    }

}