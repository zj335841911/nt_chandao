import { Http } from '@/ibiz-core/utils';
import { Store } from 'vuex';

/**
 * LoadAppData net 对象
 * 调用 getInstance() 获取实例
 *
 * @export
 * @class AuthGuard
 */
export class AuthGuard {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @type {AuthGuard}
     * @memberof AuthGuard
     */
    private static readonly instance: AuthGuard = new AuthGuard();

    /**
     * 获取 Auth 单例对象
     *
     * @static
     * @returns {Auth}
     * @memberof Auth
     */
    public static getInstance(): AuthGuard {
        return this.instance;
    }

    /**
     * 应用数据状态
     *
     * @private
     * @type {boolean}
     * @memberof AuthGuard
     */
    private appDataState: boolean = false;

    /**
     * 数据字典状态
     *
     * @private
     * @type {boolean}
     * @memberof AuthGuard
     */
    private dictionaryDatasState: boolean = false;

    /**
     * Creates an instance of AuthGuard.
     * 私有构造，拒绝通过 new 创建对象
     * 
     * @memberof AuthGuard
     */
    private constructor() {
        if (AuthGuard.instance) {
            return AuthGuard.instance;
        }
    }

    /**
     * post请求
     *
     * @param {string} url
     * @param {*} [params={}]
     * @param {Store<any>} store
     * @returns {Promise<boolean>}
     * @memberof AuthGuard
     */
    public async authGuard(url: string, params: any = {}, store: Store<any>): Promise<boolean> {
        // const get: Promise<any> = Http.getInstance().get(url);
        // get.then((response: any) => {
        //     if (response && response.status === 200) {
        //         const { data }: { data: any } = response;
        //         const { remotetag, localdata }: { remotetag: string, localdata: {} } = data;
        //         if (remotetag) {
        //             store.commit('addAppData', remotetag);
        //         }
        //         if (localdata) {
        //             store.commit('addLocalData', localdata);
        //         }
        //     }
        // }).catch((error: any) => {
        // });
        return await this.loadDictionaryDatas(store)
    }

    /**
     * 加载数据字典
     *
     * @private
     * @param {Store<any>} store
     * @returns {Promise<any>}
     * @memberof AuthGuard
     */
    private async loadDictionaryDatas(store: Store<any>): Promise<any> {
        if (this.dictionaryDatasState) {
            return Promise.resolve(true);
        }
        const url = `./assets/json/data-dictionary.json`;
        let response: any = await Http.getInstance().get(url)
        if (response && response.status === 200 && response.data && Array.isArray(response.data)) {
            const datas: any[] = [...response.data];
            datas.forEach((item: any) => {
                if (!item.items) {
                    item.items = [];
                }
            });
            store.commit('addCodeLists', datas);
            this.dictionaryDatasState = true;
        }
        return Promise.resolve(true);
    }

}
