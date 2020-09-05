import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyTodoMobModel } from '@/app-core/ctrl-model/ibz-my-territory/my-todo-mob-portlet-model';


/**
 * MyTodoMob 部件服务对象
 *
 * @export
 * @class MyTodoMobService
 * @extends {PortletServiceBase}
 */
export class MyTodoMobService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyTodoMobModel}
     * @memberof ControlServiceBase
     */
    protected model: MyTodoMobModel = new MyTodoMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyTodoMobService
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyTodoMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyTodoMobService;