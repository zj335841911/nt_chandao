import { MultiEditViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MainModel } from '@/app-core/ctrl-model/task-estimate/main-multieditviewpanel-model';


/**
 * Main 部件服务对象
 *
 * @export
 * @class MainService
 * @extends {MultiEditViewPanelServiceBase}
 */
export class MainService extends MultiEditViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MainModel}
     * @memberof ControlServiceBase
     */
    protected model: MainModel = new MainModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainService
     */
    protected appDEName: string = 'taskestimate';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MainService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MainService;