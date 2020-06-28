import { Subject } from 'rxjs';
import { ChartViewBase } from '@/studio-core';
import BurnService from '@/service/burn/burn-service';
import ChartViewEngine from '@engine/view/chart-view-engine';

/**
 * 燃尽图视图基类
 *
 * @export
 * @class BurnChartViewBase
 * @extends {ChartViewBase}
 */
export class BurnChartViewBase extends ChartViewBase {

    /**
     * 实体服务对象
     *
     * @type {BurnService}
     * @memberof BurnChartViewBase
     */
    protected appEntityService: BurnService = new BurnService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof BurnChartViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BurnChartViewBase
     */
    protected model: any = {
        srfCaption: 'entities.burn.views.chartview.caption',
        srfTitle: 'entities.burn.views.chartview.title',
        srfSubTitle: 'entities.burn.views.chartview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BurnChartViewBase
     */
    protected containerModel: any = {
        view_chart: { name: 'chart', type: 'CHART' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '441544d65ca067ea5ea625645b70e610';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BurnChartViewBase
     */
    public engine: ChartViewEngine = new ChartViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BurnChartViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            chart: this.$refs.chart,
            keyPSDEField: 'burn',
            isLoadDefault: true,
        });
    }

    /**
     * chart 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BurnChartViewBase
     */
    public chart_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }

    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BurnChartViewBase
     */
    public chart_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }




}