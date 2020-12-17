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

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBIZPRO_INDEXServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        data.indexname = data.query;
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/ibizpro_indices/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * searchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBIZPRO_INDEXServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        data.indexname = data.query;
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibizpro_indices/searchdefault`,tempData,isloading);
    }


}