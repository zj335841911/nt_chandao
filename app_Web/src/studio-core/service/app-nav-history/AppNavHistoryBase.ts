import { Util } from '@/utils';
import { AppContextStore } from '../app-context-store/AppContextStore';
import { UIStateService } from '../UIStateService';

/**
 * 历史记录项
 *
 * @export
 * @interface HistoryItem
 */
export interface HistoryItem {
    /**
     * 路由信息
     *
     * @type {*}
     * @memberof HistoryItem
     */
    to?: any;
    /**
     * 参数信息
     *
     * @type {*}
     * @memberof HistoryItem
     */
    meta?: any;
    /**
     * 视图标识
     *
     * @type {string}
     * @memberof HistoryItem
     */
    tag?: string;
    /**
     * 上下文
     *
     * @type {*}
     * @memberof HistoryItem
     */
    context?: any;
}

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
     * @type {HistoryItem[]}
     * @memberof AppNavHistoryBase
     */
    public readonly historyList: HistoryItem[] = [];

    /**
     * 导航缓存，忽略判断的导航参数正则
     *
     * @type {RegExp}
     * @memberof AppNavHistoryBase
     */
    public readonly navIgnoreParameters: RegExp = new RegExp(/(srftabactivate|srftreeexpactivate)/);

    /**
     * 首页mate信息
     *
     * @type {*}
     * @memberof AppNavHistoryBase
     */
    public indexMeta: any = null;

    /**
     * Creates an instance of AppNavHistoryBase.
     * @memberof AppNavHistoryBase
     */
    constructor() {
        addEventListener('popstate', (event) => {
            this.pop();
        });
    }

    /**
     * 查找路由缓存
     *
     * @param {*} page
     * @param {any[]} [list=this.historyList]
     * @returns {number}
     * @memberof AppNavHistoryBase
     */
    public findHistoryIndex(page: any, list: any[] = this.historyList): number {
        if (page === undefined || page === null) {
            return -1;
        }
        return list.findIndex((item: any) => {
            const to = item.to;
            // 基本路径是否一致
            if (Object.is(to.path, page.path)) {
                // 历史路径是否存在参数
                if (this.uiStateService.layoutState.styleMode === 'STYLE2' && to.query) {
                    let judge: boolean = true;
                    // 新路径是否存在参数
                    if (page.query) {
                        for (const key in page.query) {
                            // 忽略的参数略过
                            if (this.navIgnoreParameters.test(`|${key}|`)) {
                                continue;
                            }
                            if (to.query[key] === undefined || to.query[key] === null) {
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
     * @param {*} to 当前路由信息
     * @memberof AppNavHistoryBase
     */
    public add(to: any): void {
        if (this.findHistoryIndex(to) === -1) {
            if (this.uiStateService.layoutState.styleMode === 'DEFAULT' && to?.matched?.length === 1) {
                return;
            }
            this.historyList.push({
                to,
                meta: Util.deepCopy(to.meta),
                tag: '',
                context: {}
            });
        }
    }

    /**
     * 删除视图缓存
     *
     * @param {HistoryItem} item
     * @memberof AppNavHistoryBase
     */
    public remove(item: HistoryItem): void {
        const i = this.findHistoryIndex(item.to);
        if (i !== -1) {
            this.historyList.splice(i, 1);
        }
    }

    /**
     * 重置路由缓存
     *
     * @param {number} [num=0]
     * @memberof AppNavHistoryBase
     */
    public reset(num: number = 0): void {
        this.historyList.splice(num, this.historyList.length);
    }

    /**
     * 设置指定缓存视图标题
     *
     * @param {({ route: any, caption: string | null, info: string | null })} { route, caption, info }
     * @returns {boolean}
     * @memberof AppNavHistoryBase
     */
    public setCaption({ route, caption, info }: { route: any, caption?: string, info?: string }): boolean {
        const i = this.findHistoryIndex(route);
        if (i === -1) {
            return false;
        }
        const item = this.historyList[i];
        if (caption) {
            item.meta.caption = caption;
        }
        if (info) {
            item.meta.info = info;
        }
        return true;
    }

    /**
     * 设置路由视图标识
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
        const item = this.historyList[i];
        item.tag = tag;
        return true;
    }

    /**
     * 设置路由视图上下文
     *
     * @param {*} context
     * @param {*} route
     * @returns {boolean}
     * @memberof AppNavHistoryBase
     */
    public setViewContext(context: any, route: any): boolean {
        const i = this.findHistoryIndex(route);
        if (i === -1) {
            return false;
        }
        const item = this.historyList[i];
        item.context = context;
        return true;
    }

    /**
     * 删除其他缓存
     *
     * @param {HistoryItem} item
     * @memberof AppNavHistoryBase
     */
    public removeOther(item: HistoryItem): void {
        const i = this.findHistoryIndex(item.to);
        if (i !== -1) {
            const page = this.historyList[i];
            this.historyList.splice(0, this.historyList.length);
            this.historyList.push(page);
        }
    }

    /**
     * 缓存后退
     *
     * @memberof AppNavHistoryBase
     */
    public pop(): void {
        this.historyList.pop();
    }

}