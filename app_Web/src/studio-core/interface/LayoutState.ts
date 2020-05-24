/**
 * 布局状态
 *
 * @export
 * @interface LayoutState
 */
export interface LayoutState {
    /**
     * 内容区底部是否展示
     *
     * @type {boolean}
     * @memberof LayoutState
     */
    contentBottomShow: boolean;
    /**
     * 内容区左右分割比例
     *
     * @type {number}
     * @memberof LayoutState
     */
    contentHorizontalSplit: number;
    /**
     * 内容区上下分割比例
     *
     * @type {number}
     * @memberof LayoutState
     */
    contentVerticalSplit: number;
    /**
     * 左侧导航默认激活项
     *
     * @type {number}
     * @memberof LayoutState
     */
    leftExpActiveIndex: number;
    /**
     * 底部导航默认激活项
     *
     * @type {number}
     * @memberof LayoutState
     */
    bottomExpActiveIndex: number;
}