import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzproConfigServiceBase from './ibzpro-config-service-base';


/**
 * 系统配置表服务对象
 *
 * @export
 * @class IbzproConfigService
 * @extends {IbzproConfigServiceBase}
 */
export default class IbzproConfigService extends IbzproConfigServiceBase {

    /**
     * Creates an instance of  IbzproConfigService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzproConfigService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}