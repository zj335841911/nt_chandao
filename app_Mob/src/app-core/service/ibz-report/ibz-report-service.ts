import { Http,Util } from '@/ibiz-core/utils';
import {IbzReportServiceBase} from './ibz-report-service-base';


/**
 * 汇报服务对象
 *
 * @export
 * @class IbzReportService
 * @extends {IbzReportServiceBase}
 */
export class IbzReportService extends IbzReportServiceBase {

    /**
     * Creates an instance of  IbzReportService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzReportService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IbzReportService;