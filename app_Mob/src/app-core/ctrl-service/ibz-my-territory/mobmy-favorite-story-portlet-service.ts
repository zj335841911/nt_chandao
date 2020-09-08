import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOBMyFavoriteStoryModel } from '@/app-core/ctrl-model/ibz-my-territory/mobmy-favorite-story-portlet-model';


/**
 * MOBMyFavoriteStory 部件服务对象
 *
 * @export
 * @class MOBMyFavoriteStoryService
 * @extends {PortletServiceBase}
 */
export class MOBMyFavoriteStoryService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOBMyFavoriteStoryModel}
     * @memberof ControlServiceBase
     */
    protected model: MOBMyFavoriteStoryModel = new MOBMyFavoriteStoryModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOBMyFavoriteStoryService
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOBMyFavoriteStoryService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOBMyFavoriteStoryService;