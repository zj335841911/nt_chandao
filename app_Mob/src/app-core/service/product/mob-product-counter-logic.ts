import { Http,Util } from '@/ibiz-core/utils';
import {MobProductCounterLogicBase} from './mob-product-counter-logic-base';

/**
 * 移动端产品计数器
 *
 * @export
 * @class MobProductCounterLogic
 */
export class MobProductCounterLogic extends MobProductCounterLogicBase{

    /**
     * Creates an instance of  MobProductCounterLogic
     * 
     * @param {*} [opts={}]
     * @memberof  MobProductCounterLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default MobProductCounterLogic;
