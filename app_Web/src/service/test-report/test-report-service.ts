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


}