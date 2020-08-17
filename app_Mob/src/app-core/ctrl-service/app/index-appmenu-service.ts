import { AppMenuServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { IndexModel } from '@/app-core/ctrl-model/app/index-appmenu-model';


/**
 * Index 部件服务对象
 *
 * @export
 * @class IndexService
 * @extends {AppMenuServiceBase}
 */
export class IndexService extends AppMenuServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {IndexModel}
     * @memberof ControlServiceBase
     */
    protected model: IndexModel = new IndexModel();

    /**
     * 获取数据
     *
     * @returns {Promise<any>}
     * @memberof Index
     */
    public get(params: any = {}): Promise<any> {
        return this.http.get('v7/indexappmenu', params);
    }

}
// 默认导出
export default IndexService;