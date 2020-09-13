import { ChartServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProductStatusPieMobModel } from '@/app-core/ctrl-model/product/product-status-pie-mob-chart-model';


/**
 * ProductStatusPieMob 部件服务对象
 *
 * @export
 * @class ProductStatusPieMobService
 * @extends {ChartServiceBase}
 */
export class ProductStatusPieMobService extends ChartServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProductStatusPieMobModel}
     * @memberof ControlServiceBase
     */
    protected model: ProductStatusPieMobModel = new ProductStatusPieMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStatusPieMobService
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProductStatusPieMobService
     */
    protected appDeKey: string = 'id';

    /**
     * 生成图表数据
     *
     * @param {string} action
     * @param {*} response
     * @memberof ProductStatusPieMobService
     */
    public handleResponse(action: string, response: any): any {
        const chartOption: any = {};
        const catalogFields: any = ["status",];
        const valueFields: any = [[ "srfcount", "属性" ],];
        // 数据按分类属性分组处理
        const xFields:any = [];
        const yFields:any = [];
        valueFields.forEach((field: any, index: number) => {
            yFields[index] = [];
        });
        response.data.forEach((item:any) => {
            if(xFields.indexOf(item[catalogFields[0]]) > -1){
                const num = xFields.indexOf(item[catalogFields[0]]);
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
        const series: any = [];
        valueFields.forEach((field: any,index: number) => {
            const yData: any = [];
            xFields.forEach((item:any, num: number) => {
                yData.push({value: yFields[index][num], name: item});
            });
            yData.sort(function (a:any, b:any) { return a.value - b.value; });
            series.push({
              name: field[1],
              type: "pie",
              data: yData,
              top:"40px",
              left: (100 / valueFields.length) * index + "%",
              right: (100 / valueFields.length) * (valueFields.length - index - 1) + "%",
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx: any) {
                  return Math.random() * 200;
              }
            });
        });
        chartOption.series = series;
        return new HttpResponse(response.status, chartOption);
    }

}
// 默认导出
export default ProductStatusPieMobService;