import { DashboardServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AppPortalViewtest_dbModel } from '@/app-core/ctrl-model/app/app-portal-viewtest-db-dashboard-model';


/**
 * AppPortalViewtest_db 部件服务对象
 *
 * @export
 * @class AppPortalViewtest_dbService
 * @extends {DashboardServiceBase}
 */
export class AppPortalViewtest_dbService extends DashboardServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AppPortalViewtest_dbModel}
     * @memberof ControlServiceBase
     */
    protected model: AppPortalViewtest_dbModel = new AppPortalViewtest_dbModel();
}
// 默认导出
export default AppPortalViewtest_dbService;