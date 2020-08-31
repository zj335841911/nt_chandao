import { Http,Util } from '@/utils';
import SendTodoTaskLogicBase from './send-todo-task-logic-base';

/**
 * 发送代办任务
 *
 * @export
 * @class SendTodoTaskLogic
 */
export default class SendTodoTaskLogic extends SendTodoTaskLogicBase{

    /**
     * Creates an instance of  SendTodoTaskLogic
     * 
     * @param {*} [opts={}]
     * @memberof  SendTodoTaskLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}