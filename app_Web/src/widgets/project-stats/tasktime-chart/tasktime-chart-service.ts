import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProjectStatsService from '@/service/project-stats/project-stats-service';
import TASKTIMEModel from './tasktime-chart-model';


/**
 * TASKTIME 部件服务对象
 *
 * @export
 * @class TASKTIMEService
 */
export default class TASKTIMEService extends ControlService {

    /**
     * 项目统计服务对象
     *
     * @type {ProjectStatsService}
     * @memberof TASKTIMEService
     */
    public appEntityService: ProjectStatsService = new ProjectStatsService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof TASKTIMEService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of TASKTIMEService.
     * 
     * @param {*} [opts={}]
     * @memberof TASKTIMEService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new TASKTIMEModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TASKTIMEService
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