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
    public readonly layoutState: LayoutState = {
        contentBottomShow: true,
        contentHorizontalSplit: 0.23,
        contentVerticalSplit: 0.65,
        leftExpActiveIndex: 0,
        bottomExpActiveIndex: 0
    }

    /**
     * Creates an instance of UIStateService.
     * @memberof UIStateService
     */
    constructor() {
        try {
            const data: any = localStorage.getItem(this.localStoreKey);
            if (data) {
                this.layoutState = JSON.parse(data);
            }
        } catch (error) { }
        on(window, 'beforeunload', () => {
            localStorage.setItem(this.localStoreKey, JSON.stringify(this.layoutState));
        });
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

}