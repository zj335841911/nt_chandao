import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyBugModel } from '@/app-core/ctrl-model/bug/my-bug-portlet-model';


/**
 * MyBug 部件服务对象
 *
 * @export
 * @class MyBugService
 * @extends {PortletServiceBase}
 */
export class MyBugService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyBugModel}
     * @memberof ControlServiceBase
     */
    protected model: MyBugModel = new MyBugModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyBugService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyBugService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyBugService;