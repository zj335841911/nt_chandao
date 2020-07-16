import { AppNavHistory } from '../app-nav-history/AppNavHistory';
import { AppContextStore } from '../app-context-store/AppContextStore';
import { AppViewStore } from '../app-view-store/AppViewStore';

/**
 * 应用服务基类
 *
 * @export
 * @class AppServiceBase
 */
export class AppServiceBase {

    /**
     * 应用导航工具类
     *
     * @type {AppNavHistory}
     * @memberof AppServiceBase
     */
    public readonly navHistory: AppNavHistory = new AppNavHistory();

    /**
     * 应用上下文仓库
     *
     * @type {AppContextStore}
     * @memberof AppServiceBase
     */
    public readonly contextStore: AppContextStore = this.navHistory.contextStore;

    /**
     * 应用视图仓库
     *
     * @type {AppViewStore}
     * @memberof AppServiceBase
     */
    public readonly viewStore: AppViewStore = new AppViewStore();

    /**
     * 退出登录
     *
     * @memberof AppServiceBase
     */
    public logout(): void {
        const leftTime = new Date();
        leftTime.setTime(leftTime.getSeconds() - 1000);
        document.cookie = "ibzuaa-token=;expires=" + leftTime.toUTCString();
        localStorage.removeItem('token');
        location.href = location.origin + location.pathname + '#/login?redirect=' + encodeURIComponent(location.href);
    }
}