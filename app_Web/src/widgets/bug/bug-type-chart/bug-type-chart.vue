<template>
<div style="width: 100%;height:100%;display: flex;justify-content: space-between;">
    <div class="app-data-chart" style="width: 70%;">
        <div v-if="isNoData" class="chart-no-data"><i class="el-icon-data-analysis"></i>{{$t('app.commonWords.noData')}}</div>
        <div v-else class="app-charts" :id="chartId" style="height: 100%;padding: 6px 0;"></div>
    </div>
    <div v-if="legendList.length > 0" style="width: 25%;height: 100%;background-color: #FFF;padding-left: 10px;">
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
                prop="modulename"
                label="条目">
            </el-table-column>
            <el-table-column
                prop="srfcount"
                label="值">
            </el-table-column>
            <el-table-column
                prop="percentage"
                label="百分比">
            </el-table-column>
        </el-table>
    </div>
</div>
</template>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugTypeChartBase } from './bug-type-chart-base';
import echarts from 'echarts';
import { ChartDataSetField,ChartLineSeries,ChartFunnelSeries,ChartPieSeries,ChartBarSeries,ChartRadarSeries} from '@/model/chart-detail';

/**
 * dashboard_sysportlet10_chart部件
 *
 * @export
 * @class BugTypeChart
 * @extends {BugTypeChartBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BugTypeChart extends BugTypeChartBase {

  // 重写图表初始化参数
  public chartOption:any = {
    title:{
      show:true ,
      text:'Bug类型分布',
      subtext:'',
      left:'center' // 标题居中
    },
    // legend:{
    //     show:true
    // },
    tooltip:{
        show:true
    },
    dataset:[],
    series:[
      {
        id:'severity',
        name:'',
        type:'pie',
        datasetIndex:0,
        avoidLabelOverlap: true,  // 避免标签相互间重叠
        top:50, // 避免标签和标题或图例重叠
        startAngle:180, // 避免标签和标题或图例重叠
        seriesLayoutBy:"column",
        encode:{
            itemName:"type",
            value:"srfcount"
        }
      }
    ]
  }

  // 重写序列模型
  public  seriesModel:any = {
    severity:new ChartPieSeries({
    name:'severity',
    categorField:'type',
    categorCodeList:{type:'STATIC',tag:'Bug__type',emptycode:'empty',emptytext:'未定义'},
    valueField:'srfcount',
    seriesValues:[],
    seriesIndex:0,
    data:[],
    seriesMap:{},
    dataSetFields:[
    {name:"type",codelist:{type:"STATIC",tag:"Bug__type",emptycode:'empty',emptytext:'未定义'},isGroupField:true,groupMode:"CODELIST"},
    {name:"srfcount",codelist:null,isGroupField:false,groupMode:""}
    ],
    ecxObject:{
        label:{
            show: true,
            position: 'outside',
            formatter:'{b}:{@srfcount}' // 标签显示数值
        },
        labelLine:{
            show: true,
            length: 10,
            lineStyle: {
                width: 1,
                type: 'solid'
            }
        },
        itemStyle:{
            borderColor: '#fff',
            borderWidth: 1
        },
        emphasis:{
            label: {
                fontSize: 20
            }
        }
    },
    ecObject:{
    },
    seriesTemp:{
        type:'pie',
    },
    baseOption:{
    },
    seriesLayoutBy:"column"
    })
  };
  
  // 图例表格数据源
  public legendList:Array<any> = [];

  // 重写图表绘制方法（补充设置图例表格数据）
  public drawCharts(codelist:any) {
    if(!this.myChart) {
      let element:any =  document.getElementById(this.chartId);
      this.myChart = echarts.init(element);
    }
    let _chartOption = this.handleChartOPtion(codelist);
    // 设置图例表格数据
    this.setlegendGrid(_chartOption.dataset[0].source);
    this.myChart.setOption(_chartOption);
    this.myChart.resize();
  }

  public setlegendGrid(source:any) {
    // 添加图例表格数据
    this.legendList.push(...source);
    // 计算百分比
    this.calcPercent();
    // 设置图例颜色
    this.setLegendColor();
    // 根据值大小排序
    this.sortBySrfcount();
  }

  public calcPercent() {
    // 求和
    let sum:number = this.legendList.reduce((acc:any,cur:any) => {
        acc = acc + cur.srfcount;
        return acc;
    },0)
    // 设置百分比
    this.legendList.forEach((legend:any) => {
        legend.percentage = Math.round(legend.srfcount / sum * 10000) / 100.00 + "%";
    })
  }

  public setLegendColor() {
    if(Object.keys(this.chartUserParams).length >0) {
      this.legendList.forEach((legend:any,legendIndex:any) => {
        this.chartUserParams.color.forEach((color:any,colorIndex:any) => {
            if (legendIndex === colorIndex) {
                legend.color = color;
            }
        })
      })
    }
  }

  public sortBySrfcount() {
    this.legendList.sort((prev:any,next:any) => {
      const value1:number = prev.srfcount;
      const value2:number = next.srfcount;
      return value1 - value2;
    })
  }
 }
</script>
