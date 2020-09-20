import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyWorkModel } from '@/app-core/ctrl-model/ibz-my-territory/my-work-mobmdctrl-model';


/**
 * MyWork 部件服务对象
 *
 * @export
 * @class MyWorkService
 * @extends {MdServiceBase}
 */
export class MyWorkService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyWorkModel}
     * @memberof ControlServiceBase
     */
    protected model: MyWorkModel = new MyWorkModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyWorkService
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyWorkService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyWorkService;