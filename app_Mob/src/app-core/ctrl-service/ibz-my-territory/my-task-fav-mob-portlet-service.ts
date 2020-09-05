import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyTaskFavMobModel } from '@/app-core/ctrl-model/ibz-my-territory/my-task-fav-mob-portlet-model';


/**
 * MyTaskFavMob 部件服务对象
 *
 * @export
 * @class MyTaskFavMobService
 * @extends {PortletServiceBase}
 */
export class MyTaskFavMobService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyTaskFavMobModel}
     * @memberof ControlServiceBase
     */
    protected model: MyTaskFavMobModel = new MyTaskFavMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyTaskFavMobService
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyTaskFavMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyTaskFavMobService;