import { Store } from 'vuex';
import axios from 'axios';
import Router from 'vue-router';
import i18n from '@/locale';
import ignoreProxyMap from './ignore-proxy';
import { Loading } from '@/ibiz-core/utils';
/**
 * 拦截器
 *
 * @export
 * @class Interceptors
 */
export class Interceptors {

    /**
     * 路由对象
     *
     * @private
     * @type {(Router | any)}
     * @memberof Interceptors
     */
    private router: Router | any;

    /**
     * 缓存对象
     *
     * @private
     * @type {(Store<any> | any)}
     * @memberof Interceptors
     */
    private store: Store<any> | any;

    

    /**
     *  单列对象
     *
     * @private
     * @static
     * @type {LoadAppData}
     * @memberof Interceptors
     */
    private static readonly instance: Interceptors = new Interceptors();

    /**
     * Creates an instance of Interceptors.
     * 私有构造，拒绝通过 new 创建对象
     * 
     * @memberof Interceptors
     */
    private constructor() {
        if (Interceptors.instance) {
            return Interceptors.instance;
        } else {
            this.intercept();
        }
    }

    /**
     * 获取 LoadAppData 单例对象
     *
     * @static
     * @param {Router} route
     * @param {Store<any>} store
     * @returns {Interceptors}
     * @memberof Interceptors
     */
    public static getInstance(route: Router, store: Store<any>): Interceptors {
        this.instance.router = route;
        this.instance.store = store;
        return this.instance;
    }

    /**
     * 拦截器实现接口
     *
     * @private
     * @memberof Interceptors
     */
    private intercept(): void {
        axios.interceptors.request.use((config: any) => {
            let appdata: any = this.store.getters.getAppData();;
            if (appdata && appdata.context) {
                config.headers['srforgsectorid'] = appdata.context.srforgsectorid;
            }
            if (window.localStorage.getItem('token')) {
                const token = window.localStorage.getItem('token');
                config.headers.Authorization = `Bearer ${token}`;
            }
            config.headers['Accept-Language'] =  i18n.locale;
            
            // 混合 app 代理处理
            if (Object.is(process.env.VUE_APP_CURRENTMODE, 'hybridapp') && !config.url.startsWith('https://') && !config.url.startsWith('http://')) {
                if (!ignoreProxyMap.has(config.url)) {
                    config.url = process.env.VUE_APP_PROXY + config.url;
                }
            }
            return config;
        }, (error: any) => {
            return Promise.reject(error);
        });

        axios.interceptors.response.use((response: any) => {
            return response;
        }, (error: any) => {
            error = error ? error : { response: {} };
            // tslint:disable-next-line:prefer-const
            let { response: res } = error;
            let { data: _data } = res;

            if (res.status === 401) {
                Loading.hidden();
                this.doNoLogin(_data.data);
            }
            if (res.status === 404) {
                Loading.hidden();
                this.router.push({ name:'errorTransfer', params:{errorPage:res.status} });
            } else if (res.status === 500) {
                Loading.hidden();
                this.router.push({ name:'errorTransfer', params:{errorPage:res.status} });
            }

            return Promise.reject(res);
        });
    }

    /**
     * 处理未登录异常情况
     *
     * @private
     * @param {*} [data={}]
     * @memberof Interceptors
     */
    private doNoLogin(data: any = {}): void {
        if (data.loginurl && !Object.is(data.loginurl, '') && data.originurl && !Object.is(data.originurl, '')) {
            let _url = encodeURIComponent(encodeURIComponent(window.location.href));
            let loginurl: string = data.loginurl;
            const originurl: string = data.originurl;

            if (originurl.indexOf('?') === -1) {
                _url = `${encodeURIComponent('?RU=')}${_url}`;
            } else {
                _url = `${encodeURIComponent('&RU=')}${_url}`;
            }
            loginurl = `${loginurl}${_url}`;

            window.location.href = loginurl;
        } else {
            if (Object.is(this.router.currentRoute.name, 'login')) {
                return;
            }
            this.router.push({ name: 'login', query: { redirect: this.router.currentRoute.fullPath } });
        }
    }

}

