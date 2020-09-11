import { MultiEditViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MeditviewpanelModel } from '@/app-core/ctrl-model/task-estimate/meditviewpanel-multieditviewpanel-model';


/**
 * Meditviewpanel 部件服务对象
 *
 * @export
 * @class MeditviewpanelService
 * @extends {MultiEditViewPanelServiceBase}
 */
export class MeditviewpanelService extends MultiEditViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MeditviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: MeditviewpanelModel = new MeditviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MeditviewpanelService
     */
    protected appDEName: string = 'taskestimate';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MeditviewpanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MeditviewpanelService;