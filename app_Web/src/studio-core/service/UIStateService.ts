import { SingletonMode } from '../decorators/SingletonMode';
import { LayoutState } from '../interface/LayoutState';
import { on } from '@/utils/dom/dom';

/**
 * 应用UI状态管理服务类
 *
 * @export
 * @class UIStateService
 */
@SingletonMode()
export class UIStateService {

    /**
     * 缓存标识
     *
     * @protected
     * @type {string}
     * @memberof UIStateService
     */
    protected localStoreKey: string = 'UIStateCache';

    /**
     * 全局布局状态管理
     *
     * @type {LayoutState}
     * @memberof UIStateService
     */
    public layoutState!: LayoutState;

    /**
     * Creates an instance of UIStateService.
     * @memberof UIStateService
     */
    constructor() {
        try {
            const data: any = localStorage.getItem(this.localStoreKey);
            if (data) {
                this.fillLayoutState(JSON.parse(data));
            } else {
                this.fillLayoutState({});
            }
        } catch (error) {
            this.fillLayoutState({});
        }
        let z = this;
        on(window, 'beforeunload', () => {
            localStorage.setItem(this.localStoreKey, JSON.stringify(this.layoutState));
        });
    }

    /**
     * 填充状态
     *
     * @protected
     * @param {*} data
     * @memberof UIStateService
     */
    protected fillLayoutState(data: any): void {
        this.layoutState = {
            styleMode: 'DEFAULT',
            contentBottomShow: true,
            contentHorizontalSplit: 0.23,
            contentVerticalSplit: 0.65,
            leftExpActiveIndex: 0,
            bottomExpActiveIndex: 0,
            leftExpContentShow: true,
            leftNavMenuCollapse: false,
            leftNavOpenedMenus: []
        };
        Object.assign(this.layoutState, data)
    }

    /**
     * 改变布局状态
     *
     * @param {LayoutState} state
     * @memberof UIStateService
     */
    public changeLayoutState(state: any): void {
        if (state) {
            Object.assign(this.layoutState, state);
        }
    }

    /**
     * 左侧导航内容区显示切换
     *
     * @param {boolean} [bool]
     * @memberof UIStateService
     */
    public leftExpContentShowChange(bool?: boolean): void {
        if (bool !== undefined) {
            this.layoutState.leftExpContentShow = bool;
        } else {
            this.layoutState.leftExpContentShow = !this.layoutState.leftExpContentShow;
        }
    }

    /**
     * 改变左侧菜单收缩状态
     *
     * @param {boolean} [bool]
     * @memberof UIStateService
     */
    public leftNavMenuCollapseChange(bool?: boolean): void {
        if (bool !== undefined) {
            this.layoutState.leftNavMenuCollapse = bool;
        } else {
            this.layoutState.leftNavMenuCollapse = !this.layoutState.leftNavMenuCollapse;
        }
    }

}