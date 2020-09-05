import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MYTASKSModel } from '@/app-core/ctrl-model/task/mytasks-portlet-model';


/**
 * MYTASKS 部件服务对象
 *
 * @export
 * @class MYTASKSService
 * @extends {PortletServiceBase}
 */
export class MYTASKSService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MYTASKSModel}
     * @memberof ControlServiceBase
     */
    protected model: MYTASKSModel = new MYTASKSModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MYTASKSService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MYTASKSService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MYTASKSService;