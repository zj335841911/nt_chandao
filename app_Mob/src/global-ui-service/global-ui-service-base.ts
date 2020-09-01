import { Util, Loading } from '@/ibiz-core/utils';
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
     * 保存并关闭
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
    public async SaveAndExit(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        let response: any;
        if (xData && xData.saveAndExit instanceof Function) {
            const _data = {};
            response = await xData.saveAndExit(_data);
            if (response || response.status === 200) {
                container.$emit('viewdataschange', [{ ...response.data }]);
            }
        } else if (container.saveAndExit && container.saveAndExit instanceof Function) {
            response = await xData.saveAndExit();
            if (response || response.status === 200) {
                container.$emit('closeview', [{ ...response.data }]);
            }
        }
        return response;
    }

    /**
     * 返回
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
    public async Exit(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        container.closeView(args);
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
    public async Refresh(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _this: any = this;
        if (xData && xData.refresh && xData.refresh instanceof Function) {
            xData.refresh(args);
        } else if (container.refresh && container.refresh instanceof Function) {
            container.refresh(args);
        }
    }

    /**
     * 新建
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
    public async New(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
         const _this: any = this;
        if (container.newdata && container.newdata instanceof Function) {
            const data: any = {};
            container.newdata(args, contextJO, paramJO, $event, xData, container, srfParentDeName);
        } else {
            this.notice.error('newdata 视图处理逻辑不存在，请添加!');
        }
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