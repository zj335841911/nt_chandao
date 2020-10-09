import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import MonthFinishTaskAndBugModel from './month-finish-task-and-bug-chart-model';


/**
 * MonthFinishTaskAndBug 部件服务对象
 *
 * @export
 * @class MonthFinishTaskAndBugService
 */
export default class MonthFinishTaskAndBugService extends ControlService {

    /**
     * 用户年度工作内容统计服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof MonthFinishTaskAndBugService
     */
    public appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MonthFinishTaskAndBugService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MonthFinishTaskAndBugService.
     * 
     * @param {*} [opts={}]
     * @memberof MonthFinishTaskAndBugService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MonthFinishTaskAndBugModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MonthFinishTaskAndBugService
     */
    @Errorlog
    public search(action: string,context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data,true);
        return new Promise((resolve: any, reject: any) => {
            const _appEntityService: any = this.appEntityService;
            let result: Promise<any>;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            }else{
                result =_appEntityService.FetchDefault(Context,Data, isloading);
            }
            result.then((response) => {
                resolve(response);
            }).catch(response => {
                reject(response);
            });      
        });
    }
}