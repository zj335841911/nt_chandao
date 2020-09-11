import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { NewFormModel } from '@/app-core/ctrl-model/task-estimate/new-form-form-model';


/**
 * NewForm 部件服务对象
 *
 * @export
 * @class NewFormService
 * @extends {FormServiceBase}
 */
export class NewFormService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {NewFormModel}
     * @memberof ControlServiceBase
     */
    protected model: NewFormModel = new NewFormModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof NewFormService
     */
    protected appDEName: string = 'taskestimate';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof NewFormService
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
     * @memberof  NewFormService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof NewFormService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default NewFormService;