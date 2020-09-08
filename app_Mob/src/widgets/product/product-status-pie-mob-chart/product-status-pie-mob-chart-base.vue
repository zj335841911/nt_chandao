<template>
    <div class="app-data-chart product-chart ">
        <div class="app-charts" :id="chartId" style="height: 50vh;padding: 6px 0;"></div>
  </div>
</template>



<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import ProductService from '@/app-core/service/product/product-service';
import ProductStatusPieMobService from '@/app-core/ctrl-service/product/product-status-pie-mob-chart-service';

import ProductUIService from '@/ui-service/product/product-ui-action';

import echarts from 'echarts';


@Component({
    components: {
    }
})
export default class ProductStatusPieMobBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ProductStatusPieMob
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ProductStatusPieMob
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ProductStatusPieMob
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ProductStatusPieMob
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProductStatusPieMob
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ProductStatusPieMob
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ProductStatusPieMob
     */
    protected getControlType(): string {
        return 'CHART'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ProductStatusPieMob
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  ProductStatusPieMobBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args)['data'];
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {ProductStatusPieMobService}
     * @memberof ProductStatusPieMob
     */
    protected service: ProductStatusPieMobService = new ProductStatusPieMobService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductStatusPieMob
     */
    protected appEntityService: ProductService = new ProductService();

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof ProductStatusPieMobBase
     */  
    public deUIService:ProductUIService = new ProductUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ProductStatusPieMob
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProductStatusPieMob
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProductStatusPieMob
     */
    public getData(): any {
        return null;
    }

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MOBILEENTITY3Canlen
     */
    @Prop({ default: true }) protected showBusyIndicator!: boolean;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected fetchAction!: string;  

    /**
    * Vue声明周期(组件初始化完毕)
    *
    * @memberof ProductStatusPieMob
    */
    public created() {
         this.afterCreated();     
    }

    /**
    * 执行created后的逻辑
    *
    * @memberof ProductStatusPieMob
    */
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    this.load(data);
                }
            });
        }  
    }

    /**
     * vue 生命周期
     *
     * @memberof ProductStatusPieMob
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProductStatusPieMob
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 图表div绑定的id
     *
     * @type {}
     * @memberof Chart
     */   
    public chartId:string = this.$util.createUUID();

    /**
     * echarts图表对象
     *
     * @type {}
     * @memberof Chart
     */   
    public myChart:any;

    /**
     * 初始化图表所需参数
     *
     * @type {}
     * @memberof Chart
     */   
    public chartOption:any = {};

    /**
     * 图表基础配置参数
     * 
     * @returns {*} 
     * @memberof ChartService
     */
    public defaultConfig: any = {
        title: { 
          show: true,
          text: '产品总览',
        },
        legend: {top: 20},
        toolbox: { 
          show: true,  
          feature: { 
            dataView: { 
              show: false, 
              readOnly: true, 
              title: '数据视图' 
            }, 
            saveAsImage: { 
              show: false, 
              title: '保存为图片' 
            }
          }
        },
        tooltip: { trigger: 'item' },
    }

    /**
     * 深度合并对象,把secondObj的内容合并给firstObj，返回合并后的firstObj
     * @param {} firstObj 被合并对象
     * @param {} secondObj 合并对象
     * @memberof Chart
     */
    public deepObjectMerge(firstObj: any, secondObj: any) {
        for (let key in secondObj) {
            firstObj[key] =
                firstObj[key] && firstObj[key].toString() === "[object Object]"
                    ? this.deepObjectMerge(firstObj[key], secondObj[key])
                    : (firstObj[key] = secondObj[key]);
        }
        return firstObj;
    }

    /**
     * 刷新
     *
     * @param {*} [opt={}]
     * @memberof Chart
     */
    protected refresh(opt: any = {}) {
        this.load(opt);
    }

    /**
     * 获取图表数据
     *
     * @param {*} [opt]
     * @returns {Promise<any>}
     * @memberof Chart
     */
    public async load(opt?: any): Promise<any> {
        let _this = this;
        const arg: any = { ...opt };
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(arg, parentdata);
        Object.assign(arg, { viewparams: this.viewparams });
        const response = await this.service.search(this.fetchAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            _this.chartOption = _this.deepObjectMerge(_this.defaultConfig, response.data);
            _this.drawCharts();
        } else {
            console.error(response);
        }
    }

    /**
     * 绘制图表
     * 
     * @returns {*} 
     * @memberof Chart
     */
    public drawCharts(){
        if(!this.myChart){
          let element:any =  document.getElementById(this.chartId);
          this.myChart = echarts.init(element);
        }
        this.myChart.setOption(this.chartOption);
        this.myChart.resize();
    }


}
</script>

<style lang='less'>
@import './product-status-pie-mob-chart.less';
</style>