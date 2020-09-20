import { ListServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyWork2Model } from '@/app-core/ctrl-model/ibz-my-territory/my-work2-panel-model';


/**
 * MyWork2 部件服务对象
 *
 * @export
 * @class MyWork2Service
 * @extends {ListServiceBase}
 */
export class MyWork2Service extends ListServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyWork2Model}
     * @memberof ControlServiceBase
     */
    protected model: MyWork2Model = new MyWork2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyWork2Service
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyWork2Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyWork2Service;