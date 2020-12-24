import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { TODOModel } from '@/app-core/ctrl-model/todo/todo-form-model';


/**
 * TODO 部件服务对象
 *
 * @export
 * @class TODOService
 * @extends {FormServiceBase}
 */
export class TODOService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {TODOModel}
     * @memberof ControlServiceBase
     */
    protected model: TODOModel = new TODOModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TODOService
     */
    protected appDEName: string = 'todo';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof TODOService
     */
    protected appDeKey: string = 'id';

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} [context]
     * @param {*} [data]
     * @param {boolean} [isLoading]
     * @returns {Promise<any[]>}
     * @memberof  TODOService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof TODOService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default TODOService;