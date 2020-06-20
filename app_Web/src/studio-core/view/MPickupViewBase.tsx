import { ViewBase } from './ViewBase';

/**
 * 多项数据选择视图基类
 *
 * @export
 * @class MPickupViewBase
 * @extends {ViewBase}
 */
export class MPickupViewBase extends ViewBase {

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof MPickupViewBase
     */
    public isSingleSelect: boolean = false;
}