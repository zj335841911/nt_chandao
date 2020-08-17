import { Util } from '@/ibiz-core/utils';
import UIActionBase from '@/utils/ui-service-base/ui-action-base';

/**
 * 全局界面行为基类
 *
 * @export
 * @class GlobalUiServiceBase
 * @extends {UIActionBase}
 */
export default class GlobalUiServiceBase extends UIActionBase {

    /**
     * Creates an instance of UiServiceBase.
     * 
     * @memberof UiServiceBase
     */
    constructor() {
        super();
    }


    /**
     * 刷新
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName]
     * @returns {Promise<any>}
     * @memberof 
     */
    public async RefreshParent(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        if (xData && xData.refresh_parent && xData.refresh_parent instanceof Function) {
            xData.refresh_parent();
            return;
        }
        const _this: any = this;
        if (container.refresh_parent && container.refresh_parent instanceof Function) {
            container.refresh_parent();
            return;
        }
    }
}