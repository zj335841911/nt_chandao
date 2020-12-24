import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { TodoModel } from '@/app-core/ctrl-model/todo/todo-form-model';


/**
 * Todo 部件服务对象
 *
 * @export
 * @class TodoService
 * @extends {FormServiceBase}
 */
export class TodoService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {TodoModel}
     * @memberof ControlServiceBase
     */
    protected model: TodoModel = new TodoModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TodoService
     */
    protected appDEName: string = 'todo';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof TodoService
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
     * @memberof  TodoService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof TodoService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default TodoService;