import { Prop } from 'vue-property-decorator';
import { ViewBase } from './ViewBase';

/**
 * 选择表格视图基类
 *
 * @export
 * @class PickupGridViewBase
 * @extends {ViewBase}
 */
export class PickupGridViewBase extends ViewBase {

    /**
     * 选中数据字符串
     *
     * @type {string}
     * @memberof PickupGridViewBase
     */
    @Prop()
    public selectedData?: string;

}