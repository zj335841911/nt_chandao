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

    /**
     * 所依赖权限服务
     *
     * @memberof EntityUIActionBase
     */
    public authService:any;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  EntityUIActionBase
     */
    public dataService:any;

}