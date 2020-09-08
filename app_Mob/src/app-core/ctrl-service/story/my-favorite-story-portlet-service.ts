import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyFavoriteStoryModel } from '@/app-core/ctrl-model/story/my-favorite-story-portlet-model';


/**
 * MyFavoriteStory 部件服务对象
 *
 * @export
 * @class MyFavoriteStoryService
 * @extends {PortletServiceBase}
 */
export class MyFavoriteStoryService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyFavoriteStoryModel}
     * @memberof ControlServiceBase
     */
    protected model: MyFavoriteStoryModel = new MyFavoriteStoryModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyFavoriteStoryService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyFavoriteStoryService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyFavoriteStoryService;