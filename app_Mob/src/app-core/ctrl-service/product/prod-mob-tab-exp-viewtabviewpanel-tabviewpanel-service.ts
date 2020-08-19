import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProdMobTabExpViewtabviewpanelModel } from '@/app-core/ctrl-model/product/prod-mob-tab-exp-viewtabviewpanel-tabviewpanel-model';


/**
 * ProdMobTabExpViewtabviewpanel 部件服务对象
 *
 * @export
 * @class ProdMobTabExpViewtabviewpanelService
 * @extends {TabViewPanelServiceBase}
 */
export class ProdMobTabExpViewtabviewpanelService extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProdMobTabExpViewtabviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: ProdMobTabExpViewtabviewpanelModel = new ProdMobTabExpViewtabviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanelService
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProdMobTabExpViewtabviewpanelService;