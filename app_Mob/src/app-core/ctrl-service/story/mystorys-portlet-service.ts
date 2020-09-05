import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MYSTORYSModel } from '@/app-core/ctrl-model/story/mystorys-portlet-model';


/**
 * MYSTORYS 部件服务对象
 *
 * @export
 * @class MYSTORYSService
 * @extends {PortletServiceBase}
 */
export class MYSTORYSService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MYSTORYSModel}
     * @memberof ControlServiceBase
     */
    protected model: MYSTORYSModel = new MYSTORYSModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MYSTORYSService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MYSTORYSService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MYSTORYSService;