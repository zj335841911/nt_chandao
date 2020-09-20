import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyFavoriteTaskModel } from '@/app-core/ctrl-model/app/my-favorite-task-portlet-model';


/**
 * MyFavoriteTask 部件服务对象
 *
 * @export
 * @class MyFavoriteTaskService
 * @extends {PortletServiceBase}
 */
export class MyFavoriteTaskService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyFavoriteTaskModel}
     * @memberof ControlServiceBase
     */
    protected model: MyFavoriteTaskModel = new MyFavoriteTaskModel();
}
// 默认导出
export default MyFavoriteTaskService;