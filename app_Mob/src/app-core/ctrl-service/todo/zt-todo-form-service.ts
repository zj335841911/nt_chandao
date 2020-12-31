import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ZT_TODOModel } from '@/app-core/ctrl-model/todo/zt-todo-form-model';


/**
 * ZT_TODO 部件服务对象
 *
 * @export
 * @class ZT_TODOService
 * @extends {FormServiceBase}
 */
export class ZT_TODOService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ZT_TODOModel}
     * @memberof ControlServiceBase
     */
    protected model: ZT_TODOModel = new ZT_TODOModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ZT_TODOService
     */
    protected appDEName: string = 'todo';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ZT_TODOService
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
     * @memberof  ZT_TODOService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof ZT_TODOService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default ZT_TODOService;