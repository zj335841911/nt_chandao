import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyStoryFavMobModel } from '@/app-core/ctrl-model/ibz-my-territory/my-story-fav-mob-portlet-model';


/**
 * MyStoryFavMob 部件服务对象
 *
 * @export
 * @class MyStoryFavMobService
 * @extends {PortletServiceBase}
 */
export class MyStoryFavMobService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyStoryFavMobModel}
     * @memberof ControlServiceBase
     */
    protected model: MyStoryFavMobModel = new MyStoryFavMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyStoryFavMobService
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyStoryFavMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyStoryFavMobService;