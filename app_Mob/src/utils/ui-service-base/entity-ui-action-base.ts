import GlobalUiService from '@/global-ui-service/global-ui-service';
import UIActionBase from './ui-action-base';

/**
 * 实体服务基类
 *
 * @export
 * @class EntityUIActionBase
 * @extends {UIActionBase}
 */
export default class EntityUIActionBase extends UIActionBase {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof EntityUIActionBase
     */
    public globaluiservice: GlobalUiService = new GlobalUiService();
}