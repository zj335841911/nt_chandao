import { PickupViewBase } from './PickupViewBase';

/**
 * 多项数据选择视图基类
 *
 * @export
 * @class MPickupViewBase
 * @extends {ViewBase}
 */
export class MPickupViewBase extends PickupViewBase {

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof MPickupViewBase
     */
    public isSingleSelect: boolean = false;
}