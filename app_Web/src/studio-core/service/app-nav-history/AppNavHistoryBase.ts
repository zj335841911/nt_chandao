import { Util } from '@/utils';
import { AppContextStore } from '../app-context-store/AppContextStore';
import { UIStateService } from '../UIStateService';
import qs from 'qs';

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
     * 
     * @memberof AppNavHistoryBase
     */
    constructor() {
        if (this.uiStateService.layoutState.styleMode === 'STYLE2') {
            addEventListener('hashchange', ({ oldURL }) => {
                const hash = oldURL.substring(oldURL.indexOf('#') + 1);
                const queryIndex = hash.indexOf('?');
                const path = queryIndex === -1 ? hash : hash.substring(0, queryIndex);
                const queryStr = queryIndex === -1 ? '' : hash.substring(queryIndex + 1);
                if (this.isRouteSame({ path, query: !isEmpty(queryStr) ? qs.parse(queryStr) : {} }, this.historyList[this.historyList.length - 1].to)) {
                    this.pop();
                }
            });
        }
    }

    /**
     * 根据视图标识查找记录
     *
     * @param {string} tag
     * @returns {*}
     * @memberof AppNavHistoryBase
     */
    public findHistoryByTag(tag: string): any {
        return this.historyList.find((item) => item.tag === tag);
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
        if (!isExist(page)) {
            return -1;
        }
        return list.findIndex((item: any) => {
            return this.isRouteSame(page, item.to);
        });;
    }

    /**
     * 新旧路由是否相同
     *
     * @param {*} newRoute
     * @param {*} oldRoute
     * @returns {boolean}
     * @memberof AppNavHistoryBase
     */
    public isRouteSame(newRoute: any, oldRoute: any): boolean {
        if (Object.is(newRoute.path, oldRoute.path)) {
            return this.isQuerySame(newRoute.query, oldRoute.query);
        }
        return false;
    }

    /**
     * 判断查询参数是否相同，会排除预定义的忽略参数
     *
     * @param {*} newQuery 新查询参数
     * @param {*} oldQuery 旧查询参数
     * @returns {boolean}
     * @memberof AppNavHistoryBase
     */
    public isQuerySame(newQuery: any, oldQuery: any): boolean {
        if (Object.keys(newQuery).length !== Object.keys(oldQuery).length) {
            return false;
        }
        for (const key in newQuery) {
            // 忽略的参数略过
            if (this.navIgnoreParameters.test(`|${key}|`)) {
                continue;
            }
            if (!isExist(oldQuery) || !Object.is(oldQuery[key], newQuery[key])) {
                console.log('相同');
                return false;
            }
        }
        return true;
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
     * @param {({ tag: string, caption: string | null, info: string | null })} { tag, caption, info }
     * @returns {boolean}
     * @memberof AppNavHistoryBase
     */
    public setCaption({ tag, caption, info }: { tag: string, caption?: string, info?: string }): boolean {
        const item = this.findHistoryByTag(tag);
        if (item) {
            if (caption) {
                item.meta.caption = caption;
            }
            if (info) {
                item.meta.info = info;
            }
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