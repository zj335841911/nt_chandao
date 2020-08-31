import { Http,Util } from '@/utils';
import SendNoticeLogicBase from './send-notice-logic-base';

/**
 * 发送通知
 *
 * @export
 * @class SendNoticeLogic
 */
export default class SendNoticeLogic extends SendNoticeLogicBase{

    /**
     * Creates an instance of  SendNoticeLogic
     * 
     * @param {*} [opts={}]
     * @memberof  SendNoticeLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}