<template>
  <div style="width: 100%;height:100%;display: flex;justify-content: space-between;">
      <!-- 图表 -->
      <div style="width: 70%;">
          <div v-if="isNoData" class="chart-no-data"><i class="el-icon-data-analysis"></i>{{$t('app.commonWords.noData')}}</div>
          <div class="app-charts" :id="chartId" style="height: 100%;padding: 6px 0;"></div>
          <div class="app-charts" v-if="originId" :id="originId" style="width:0px;height:0px"></div>
      </div>

      <!-- 图例 -->
      <div class="legend" v-if="legendList.length > 0" style="width: 25%;">
          <el-table
              :data="legendList"
              style="width: 100%;"
              :header-cell-style="{'text-align':'center'}"
              :cell-style="{'text-align':'center',padding:'0px'}"
              border
              >
              <el-table-column
                  label="图例"
                  width="50">
                  <template slot-scope="scope" style="display: flex;">
                      <div :style="{backgroundColor: scope.row.color,width: '10px',height: '10px',borderRadius: '50%',margin:'auto'}"></div>
                  </template>
              </el-table-column>
              <el-table-column
                  :prop="itemName"
                  label="条目">
              </el-table-column>
              <el-table-column
                  prop="srfcount"
                  label="值"
                  width="80">
              </el-table-column>
              <el-table-column
                  prop="percentage"
                  label="百分比"
                  width="80">
              </el-table-column>
          </el-table>
      </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import echarts from "echarts";

@Component({})
export default class ChartFormLegend extends Vue {

  /**
   * echarts配置参数
   *
   * @type {any}
   * @memberof ChartFormLegend
   */
  @Prop()
  public chartOption!: any;

  /**
   * 图表自定义参数集合
   *
   * @type {any}
   * @memberof ChartFormLegend
   */
  @Prop()
  public chartUserParams?: any;

  /**
   * 图表自定义参数集合
   *
   * @type {any}
   * @memberof ChartFormLegend
   */
  @Prop()
  public originId!: any;

    /**
   * echarts图表对象
   *
   * @type {any}
   * @memberof ChartFormLegend
   */
  public myChart: any;

  /**
   * 图表div绑定的id
   *
   * @type {}
   * @memberof ChartFormLegend
   */
  public chartId: string = this.$util.createUUID();

  /**
   * 图表div绑定的id
   *
   * @type {}
   * @memberof ChartFormLegend
   */
  public itemName: string = "";

  /**
   * 图例表格数据
   *
   * @type {}
   * @memberof ChartFormLegend
   */
  public legendList: Array<any> = [];  

  /**
   * 是否无数据
   *
   * @public
   * @type {boolean}
   * @memberof Dashboard_sysportlet2_chartBase
   */
  public isNoData: boolean = true;

  /**
   * 图表配置参数值变化
   * @memberof ChartFormLegend
   */
  @Watch('chartOption')
  public watchChartOption(newVal: any, oldVal: any) {
      if (newVal.dataset.length > 0) {
        // 绘制图表
        this.drawCharts();
        this.isNoData = false;
      } else {
        this.isNoData = true;
      }
      if (newVal.series[0]) {
        // 设置图例条目
        this.itemName = newVal.series[0].encode.itemName;
      }
  }

  // 绘制图表
  public drawCharts() {
    if (!this.myChart) {
      let element: any = document.getElementById(this.chartId);
      this.myChart = echarts.init(element);
    }
      // 设置图例表格数据
      this.setlegendGrid(this.chartOption.dataset[0].source);
      // 设置图表样式（临时）
      let finalOption:any =  this.configChart(this.chartOption);
      // 绘制图表
      this.myChart.setOption(finalOption);
      this.myChart.resize();
  }

  public setlegendGrid(source: any) {
    // 添加图例表格数据
    this.legendList.push(...source);
    // 计算百分比
    this.calcPercent();
    // 设置图例颜色
    this.setLegendColor();
    // 根据值大小排序
    this.sortBySrfcount();
  }

  public configChart(option:any) {
    let tempOption:any = {...option};
    tempOption.title.left = 'center'; // 配置标题位置
    tempOption.series[0].label.formatter = "{b}:{@srfcount}" // 配置标签显示值
    tempOption.series[0].avoidLabelOverlap = true; // 避免标签重叠
    tempOption.series[0].top = 50; // 避免标签和标题或图例重叠
    tempOption.series[0].startAngle = 180; // 同上
    tempOption.legend.show = false; // 不显示默认图例样式
    if (tempOption.title.subtext) {
      tempOption.title.text = '';
    }
    return tempOption;
  }

  public calcPercent() {
    // 求和
    let sum: number = this.legendList.reduce((acc: any, cur: any) => {
      acc = acc + cur.srfcount;
      return acc;
    }, 0);
    // 设置百分比
    this.legendList.forEach((legend: any) => {
      legend.percentage =
        Math.round((legend.srfcount / sum) * 10000) / 100.0 + "%";
    });
  }

  public setLegendColor() {
    if (Object.keys(this.chartUserParams).length > 0) {
      this.legendList.forEach((legend: any, legendIndex: any) => {
        this.chartUserParams.color.forEach((color: any, colorIndex: any) => {
          if (legendIndex === colorIndex) {
            legend.color = color;
          }
        });
      });
      
      if (this.legendList.length > this.chartUserParams.color.length) {
        let colorIndex:number = -1;
        this.legendList.forEach((legend: any, legendIndex: any) => {
          if (!legend.color) {
            colorIndex = colorIndex + 1;
            legend.color = this.chartUserParams.color[colorIndex]
          }
        })
      }
    }
  }

  public sortBySrfcount() {
    this.legendList.sort((prev: any, next: any) => {
      const value1: number = prev.srfcount;
      const value2: number = next.srfcount;
      return value1 - value2;
    });
  }
}
</script>
<style lang="less">
@import "./chart-form-legend.less";
</style>
