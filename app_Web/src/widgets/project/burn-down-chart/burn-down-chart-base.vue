<template>
    <div class="app-data-chart ">
        <div class="app-charts" :id="chartId" style="height: 100%;padding: 6px 0;"></div>
  </div>
</template>


<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProjectService from '@/service/project/project-service';
import BurnDownService from './burn-down-chart-service';

import echarts from 'echarts';


@Component({
    components: {
      
    }
})
export default class BurnDownBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof BurnDown
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof BurnDown
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof BurnDown
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof BurnDown
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof BurnDown
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof BurnDown
     */
    public getControlType(): string {
        return 'CHART'
    }



    /**
     * 建构部件服务对象
     *
     * @type {BurnDownService}
     * @memberof BurnDown
     */
    public service: BurnDownService = new BurnDownService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof BurnDown
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof BurnDown
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof BurnDown
     */
    public counterRefresh(){
        const _this:any =this;
        if(_this.counterServiceArray && _this.counterServiceArray.length >0){
            _this.counterServiceArray.forEach((item:any) =>{
                if(item.refreshData && item.refreshData instanceof Function){
                    item.refreshData();
                }
            })
        }
    }


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof BurnDown
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof BurnDown
     */
    public getData(): any {
        return null;
    }

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof BurnDown
     */
    @Prop({ default: true }) public showBusyIndicator!: boolean;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof BurnDown
     */
    @Prop() public fetchAction!: string;  

    /**
    * Vue声明周期(组件初始化完毕)
    *
    * @memberof BurnDown
    */
    public created() {
         this.afterCreated();     
    }

    /**
    * 执行created后的逻辑
    *
    * @memberof BurnDown
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
     * @memberof BurnDown
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof BurnDown
     */
    public afterDestroy() {
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
          text: '燃尽图',
        },
        legend: {top: 20},
        toolbox: { 
          show: true,  
          feature: { 
            dataView: { 
              show: true, 
              readOnly: true, 
              title: '数据视图' 
            }, 
            saveAsImage: { 
              show: true, 
              title: '保存为图片' 
            }
          }
        },
        tooltip: { trigger: 'axis' },
        xAxis: {
          type: 'category', 
          position: 'bottom', 
          name: '日期', 
        },
        yAxis: {
          type: 'value', 
          position: 'left', 
          name: '工时', 
        },
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
    public refresh(opt: any = {}) {
        this.load(opt);
    }

    /**
     * 获取图表数据
     * 
     * @returns {*} 
     * @memberof Chart
     */
    public load(opt?:any) {
        let _this = this;
        const arg: any = { ...opt };
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(arg, parentdata);
        Object.assign(arg,{viewparams:this.viewparams});
        this.service.search(this.fetchAction,JSON.parse(JSON.stringify(this.context)),arg,this.showBusyIndicator).then((res) => {
            if (res) {
                _this.chartOption = _this.deepObjectMerge(_this.defaultConfig, res.data);
                _this.drawCharts();
            }
        }).catch((error) => {
            console.error(error);
        });
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
@import './burn-down-chart.less';
</style>