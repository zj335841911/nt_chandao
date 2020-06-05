import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProjectService from '@/service/project/project-service';
import BurnDownModel from './burn-down-chart-model';


/**
 * BurnDown 部件服务对象
 *
 * @export
 * @class BurnDownService
 */
export default class BurnDownService extends ControlService {

    /**
     * 项目服务对象
     *
     * @type {ProjectService}
     * @memberof BurnDownService
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof BurnDownService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of BurnDownService.
     * 
     * @param {*} [opts={}]
     * @memberof BurnDownService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new BurnDownModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BurnDownService
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