import { Http } from '@/utils';
import { Util } from '@/utils';
import IBIZPRO_INDEXServiceBase from './ibizpro-index-service-base';


/**
 * 索引检索服务对象
 *
 * @export
 * @class IBIZPRO_INDEXService
 * @extends {IBIZPRO_INDEXServiceBase}
 */
export default class IBIZPRO_INDEXService extends IBIZPRO_INDEXServiceBase {

    /**
     * Creates an instance of  IBIZPRO_INDEXService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBIZPRO_INDEXService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}