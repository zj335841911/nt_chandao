import { Util } from '@/utils';
import { AppContextStore } from '../app-context-store/AppContextStore';
import { UIStateService } from '../UIStateService';

/**
 * 应用导航记录基类
 *
 * @export
 * @class AppNavHistoryBase
 */
export class AppNavHistoryBase {

    /**
     * 应用上下文仓库
     *
     * @type {AppContextStore}
     * @memberof AppNavHistoryBase
     */
    public readonly contextStore: AppContextStore = new AppContextStore();

    /**
     * 界面UI状态服务
     *
     * @type {UIStateService}
     * @memberof AppNavHistoryBase
     */
    public readonly uiStateService: UIStateService = new UIStateService();

    /**
     * 路由记录缓存
     *
     * @type {any[]}
     * @memberof AppNavHistoryBase
     */
    public readonly historyList: any[] = [];

    /**
     * 参数列表
     *
     * @type {string[]}
     * @memberof AppNavHistoryBase
     */
    public readonly metaList: string[] = [];

    /**
     * 视图标识
     *
     * @type {Map<string, string>}
     * @memberof AppNavHistoryBase
     */
    public readonly viewTagMap: Map<string, string> = new Map();

    /**
     * 导航缓存，忽略判断的导航参数正则
     *
     * @type {RegExp}
     * @memberof AppNavHistoryBase
     */
    public readonly navIgnoreParameters: RegExp = new RegExp(/(srftabactivate|srftreeexpactivate)/);

    /**
     * 查找路由缓存
     *
     * @protected
     * @param {*} page
     * @param {any[]} [list=this.historyList]
     * @returns {number}
     * @memberof AppNavHistoryBase
     */
    protected findHistoryIndex(page: any, list: any[] = this.historyList): number {
        if (page === undefined || page === null) {
            return -1;
        }
        return list.findIndex((item: any) => {
            // 基本路径是否一致
            if (Object.is(item.path, page.path)) {
                // 历史路径是否存在参数
                if (this.uiStateService.layoutState.styleMode === 'STYLE2' && item.query) {
                    let judge: boolean = true;
                    // 新路径是否存在参数
                    if (page.query) {
                        for (const key in page.query) {
                            // 忽略的参数略过
                            if (this.navIgnoreParameters.test(`|${key}|`)) {
                                continue;
                            }
                            if (item.query[key] === undefined || item.query[key] === null) {
                                judge = false;
                            }
                        }
                    } else {
                        judge = false;
                    }
                    return judge;
                }
                return true;
            }
            return false;
        });;
    }

    /**
     * 添加视图缓存
     *
     * @param {*} page 当前路由信息
     * @memberof AppNavHistoryBase
     */
    public add(page: any): void {
        if (this.findHistoryIndex(page) === -1) {
            if (this.uiStateService.layoutState.styleMode === 'DEFAULT' && page?.matched?.length === 1) {
                return;
            }
            this.historyList.push(page);
            this.metaList.push(Util.deepCopy(page.meta));
        }
    }

    /**
     * 删除视图缓存
     *
     * @param {*} page
     * @memberof AppNavHistoryBase
     */
    public remove(page: any): void {
        const i = this.findHistoryIndex(page);
        if (i !== -1) {
            this.historyList.splice(i, 1);
            this.metaList.splice(i, 1);
        }
    }

    /**
     * 重置路由缓存
     *
     * @memberof AppNavHistoryBase
     */
    public reset(): void {
        this.historyList.splice(0, this.historyList.length);
        this.metaList.splice(0, this.metaList.length);
    }

    /**
     * 设置指定缓存视图标题
     *
     * @param {({ route: any, caption: string | null, info: string | null })} { route, caption, info }
     * @returns {boolean}
     * @memberof AppNavHistoryBase
     */
    public setCaption({ route, caption, info }: { route: any, caption: string | null, info: string | null }): boolean {
        const i = this.findHistoryIndex(route);
        if (i === -1) {
            return false;
        }
        const meta = this.metaList[i];
        Object.assign(meta, { caption, info });
        return true;
    }

    /**
     * 设置缓存视图标识
     *
     * @param {string} tag
     * @param {*} route
     * @returns {boolean}
     * @memberof AppNavHistoryBase
     */
    public setViewTag(tag: string, route: any): boolean {
        const i = this.findHistoryIndex(route);
        if (i === -1) {
            return false;
        }
        const page = this.historyList[i];
        this.viewTagMap.set(page.fullPath, tag);
        return true;
    }

    /**
     * 删除其他缓存
     *
     * @param {*} page
     * @memberof AppNavHistoryBase
     */
    public removeOther(page: any): void {
        const i = this.findHistoryIndex(page);
        if (i !== -1) {
            const page = this.historyList[i];
            const meta = this.metaList[i];
            this.historyList.splice(0, this.historyList.length);
            this.metaList.splice(0, this.metaList.length);
            this.historyList.push(page);
            this.metaList.push(meta);
        }
    }

}