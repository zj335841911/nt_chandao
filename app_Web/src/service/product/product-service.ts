import { Http,Util } from '@/utils';
import ProductServiceBase from './product-service-base';


/**
 * 产品服务对象
 *
 * @export
 * @class ProductService
 * @extends {ProductServiceBase}
 */
export default class ProductService extends ProductServiceBase {

    /**
     * Creates an instance of  ProductService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}