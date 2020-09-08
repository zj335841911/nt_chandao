import { AppNavHistory } from '../app-nav-history/AppNavHistory';
import { AppContextStore } from '../app-context-store/AppContextStore';
import { AppViewStore } from '../app-view-store/AppViewStore';
import { Environment } from '@/environments/environment';
import { Util } from '@/utils';

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
        this.doLogin();
    }

    /**
     * 去登录
     *
     * @param {*} [data]
     * @memberof AppServiceBase
     */
    public doLogin(data?: any): void {
        const win: any = window;
        if (win.isDoLogin) {
            return;
        }
        // 清除user、token和cookie
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
        }
        this.clearToken();
        if (data && data.loginurl && !Object.is(data.loginurl, '') && data.originurl && !Object.is(data.originurl, '')) {
            let _url = encodeURIComponent(encodeURIComponent(location.href));
            let loginUrl: string = data.loginurl;
            const originUrl: string = data.originurl;

            if (originUrl.indexOf('?') === -1) {
                _url = `${encodeURIComponent('?RU=')}${_url}`;
            } else {
                _url = `${encodeURIComponent('&RU=')}${_url}`;
            }
            loginUrl = `${loginUrl}${_url}`;
            location.href = loginUrl;
        } else {
            // 后期此处应调用后天退出，明确可以退出后才退出
            if (Environment.LoginMode === 'UAA') {
                location.href = `${Environment.LoginUrl}?redirect=${encodeURIComponent(location.href)}`;
            } else if (Environment.LoginMode === 'CAS') {
                location.href = `${Environment.CasUrl}/logout?service=${encodeURIComponent(`${Environment.CasUrl}/login?service=${encodeURIComponent(`${window.location.origin}${Environment.BaseUrl}/appdata?RU=${encodeURIComponent(location.href)}`)}`)}`;
            } else {
                location.href = `${location.origin}${location.pathname}#/login?redirect=${encodeURIComponent(location.href)}`;
            }
            const x = document.getElementById('app-loading-x');
            if (x) {
                x.style.display = 'block';
            }
        }
        win.isDoLogin = true;
        setTimeout(() => {
            location.reload();
        }, 100);
    }

    /**
     * 设置token
     *
     * @param {string} token
     * @memberof AppServiceBase
     */
    public setToken(token: string): void {
        Util.setCookie('ibzuaa-token', token, 7, true);
    }

    /**
     * 获取token
     *
     * @return {*}  {string}
     * @memberof AppServiceBase
     */
    public getToken(): string {
        return Util.getCookie('ibzuaa-token');
    }

    /**
     * 清楚token
     *
     * @memberof AppServiceBase
     */
    public clearToken(): void {
        Util.clearCookie('ibzuaa-token', true);
    }
}