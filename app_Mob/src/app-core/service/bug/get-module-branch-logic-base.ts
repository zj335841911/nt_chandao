import { Util, Verify } from '@/ibiz-core/utils';
import { EntityLogicBase } from '@/ibiz-core';


/**
 * 获取模块的平台处理逻辑基类
 *
 * @export
 * @class GetModuleBranchLogicBase
 * @extends {EntityLogicBase}
 */
export class GetModuleBranchLogicBase extends EntityLogicBase {

    /**
     * 名称
     * 
     * @protected
     * @memberof GetModuleBranchLogicBase
     */
    protected name:string ="GetModuleBranch";

    /**
     * 唯一标识
     * 
     * @protected
     * @memberof GetModuleBranchLogicBase
     */
    protected id:string = "2EB279DB-E388-42BB-845F-D1B9EF3F2F8B";

    /**
     * 默认参数名称
     * 
     * @protected
     * @memberof GetModuleBranchLogicBase
     */
    protected defaultParamName:string = "Default";

    /**
     * 计算1节点结果
     * 
     * @param params 传入上下文参数
     * @returns {boolean}
     * @memberof GetModuleBranchLogicBase
     */
    public compute1Cond(params: any): boolean {
        if (Verify.testCond(params.module, 'ISNOTNULL', '')) {
           return true;
        }
        return false;
    }

    /**
     * 执行逻辑
     * 
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof GetModuleBranchLogicBase
     */
    public onExecute(context: any, params: any): Promise<any> {
        return this.executeBegin(context, params);
    }


    /**
     * 设置bug平台值
     * 
     * @protected
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof GetModuleBranchLogicBase
     */
    protected async executePrepareparam2(context: any, params: any): Promise<any> {
        // 准备参数节点
        Object.assign(params, { branch: params.branch });
        return params;
    }

    /**
     * 开始
     * 
     * @protected
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof GetModuleBranchLogicBase
     */
    protected async executeBegin(context: any, params: any): Promise<any> {
        //开始节点
        if (this.compute1Cond(params)) {
            return this.executePrepareparam1(context, params);
        }
    }

    /**
     * 获取模块详情
     * 
     * @protected
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof GetModuleBranchLogicBase
     */
    protected async executeDeaction1(context: any, params: any): Promise<any> {
        // 行为处理节点
    }

    /**
     * 设置模块参数
     * 
     * @protected
     * @param context 应用上下文
     * @param params 传入参数
     * @returns {Promise<any>}
     * @memberof GetModuleBranchLogicBase
     */
    protected async executePrepareparam1(context: any, params: any): Promise<any> {
        // 准备参数节点
        Object.assign(params, { id: params.module });
        if (this.compute1Cond(params)) {
            return this.executeDeaction1(context, params);
        }
    }

}