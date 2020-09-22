import { Http,Util } from '@/utils';
import TestReportServiceBase from './test-report-service-base';


/**
 * 测试报告服务对象
 *
 * @export
 * @class TestReportService
 * @extends {TestReportServiceBase}
 */
export default class TestReportService extends TestReportServiceBase {

    /**
     * Creates an instance of  TestReportService.
     * 
     * @param {*} [opts={}]
     * @memberof  TestReportService
     */
    constructor(opts: any = {}) {
        super(opts);
    }
    /**
     * GetInfoTestTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestReportServiceBase
     */
    public async GetInfoTestTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testreport){
            let masterData:any = {};
            context.testreport = 0;
            data.id = 0;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/testreports/${context.testreport}/getinfotesttask`,data,isloading);

            return res;
        }
        context.testreport = 0;
        data.id = 0;
        let res:any = Http.getInstance().put(`/testreports/${context.testreport}/getinfotesttask`,data,isloading);
        return res;
    }

}