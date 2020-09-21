import { Http,Util } from '@/ibiz-core/utils';
import {HuaFavoriteLogicBase} from './hua-favorite-logic-base';

/**
 * huaFavorite
 *
 * @export
 * @class HuaFavoriteLogic
 */
export class HuaFavoriteLogic extends HuaFavoriteLogicBase{

    /**
     * Creates an instance of  HuaFavoriteLogic
     * 
     * @param {*} [opts={}]
     * @memberof  HuaFavoriteLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default HuaFavoriteLogic;
