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
                this.handleSeries(response);
                resolve(response);
            }).catch(response => {
                reject(response);
            });      
        });
    }
    /**
     * 生成图表数据
     *
     * @param {*} response
     * @memberof BurnDownService
     */
    public handleSeries(response: any) {
        let chartOption:any = {};
        let catalogFields: any = ["begin",];
        let valueFields: any = [[ "id", "项目编号" ],];
        // 数据按分类属性分组处理
        let xFields:any = [];
        let yFields:any = [];
        valueFields.forEach((field: any,index: number) => {
            yFields[index] = [];
        });
        response.data.forEach((item:any) => {
            if(xFields.indexOf(item[catalogFields[0]]) > -1){
                let num = xFields.indexOf(item[catalogFields[0]]);
                valueFields.forEach((field: any,index: number) => {
                    yFields[index][num] += item[field[0]];
                });
            }else{
                xFields.push(item[catalogFields[0]]);
                valueFields.forEach((field: any,index: number) => {
                    yFields[index].push(item[field[0]]);
                });
            }
        });
        chartOption.xAxis = { data: xFields };
        let series: any = [];
        valueFields.forEach((field: any,index: number) => {
            let yData: any = [];
             xFields.forEach((item:any, num: number) => {
                yData.push(yFields[index][num]);
            });
            yData.sort(function (a:any, b:any) { return a.value - b.value; });
            series.push({
              name:field[1],
              type:"line",
              data:yData,
            });
        });
        chartOption.series = series;
        response.data = chartOption;
    }
}