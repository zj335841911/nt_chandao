import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MystoryModel } from '@/app-core/ctrl-model/ibz-my-territory/mystory-portlet-model';


/**
 * Mystory 部件服务对象
 *
 * @export
 * @class MystoryService
 * @extends {PortletServiceBase}
 */
export class MystoryService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MystoryModel}
     * @memberof ControlServiceBase
     */
    protected model: MystoryModel = new MystoryModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MystoryService
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MystoryService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MystoryService;