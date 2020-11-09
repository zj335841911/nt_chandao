import { MapServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { UserLoginPositionModel } from '@/app-core/ctrl-model/action/user-login-position-map-model';


/**
 * UserLoginPosition 部件服务对象
 *
 * @export
 * @class UserLoginPositionService
 * @extends {MapServiceBase}
 */
export class UserLoginPositionService extends MapServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {UserLoginPositionModel}
     * @memberof ControlServiceBase
     */
    protected model: UserLoginPositionModel = new UserLoginPositionModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserLoginPositionService
     */
    protected appDEName: string = 'action';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof UserLoginPositionService
     */
    protected appDeKey: string = 'id';

 
     public async search(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        let responseData = {
            
        }
        let response = new HttpResponse(200,responseData);
        return response;
    }



}
// 默认导出
export default UserLoginPositionService;