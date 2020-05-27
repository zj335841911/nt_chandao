import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductService from '@/service/product/product-service';
import ProductStatusModel from './product-status-chart-model';


/**
 * ProductStatus 部件服务对象
 *
 * @export
 * @class ProductStatusService
 */
export default class ProductStatusService extends ControlService {

    /**
     * 产品服务对象
     *
     * @type {ProductService}
     * @memberof ProductStatusService
     */
    public appEntityService: ProductService = new ProductService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ProductStatusService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ProductStatusService.
     * 
     * @param {*} [opts={}]
     * @memberof ProductStatusService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ProductStatusModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatusService
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
     * @memberof ProductStatusService
     */
    public handleSeries(response: any) {
        let chartOption:any = {};
        let catalogFields: any = ["status",];
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
        let series: any = [];
        valueFields.forEach((field: any,index: number) => {
            let yData: any = [];
             xFields.forEach((item:any, num: number) => {
                yData.push({value: yFields[index][num], name: item});
            });
            yData.sort(function (a:any, b:any) { return a.value - b.value; });
            series.push({
              name:field[1],
              type:"pie",
              data:yData,
              top:"40px",
              left: (100/valueFields.length)*index+"%",
              right: (100/valueFields.length)*(valueFields.length-index-1)+"%",
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx: any) {
                  return Math.random() * 200;
              }
            });
        });
        chartOption.series = series;
        response.data = chartOption;
    }
}