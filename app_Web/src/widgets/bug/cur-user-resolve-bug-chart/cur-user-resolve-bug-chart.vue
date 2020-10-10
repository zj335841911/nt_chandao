<template src="./cur-user-resolve-bug-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CurUserResolveBugChartBase } from './cur-user-resolve-bug-chart-base';
 

/**
 * chart部件
 *
 * @export
 * @class CurUserResolveBugChart
 * @extends {CurUserResolveBugChartBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class CurUserResolveBugChart extends CurUserResolveBugChartBase { 
    /**
     * 初始化图表所需参数
     *
     * @type {}
     * @memberof ChartBase
     */   
    public chartOption:any = {
        title:{
            show:true ,
            text:'解决的Bug数',
            subtext:'',
            x:'center',
            y:'center',
            textStyle: {
                fontSize: 20
            },
            subtextStyle: {
                fontSize:15
            }
        },
        legend:{
            show:true
        },
        tooltip:{
            show:true
        },
        dataset:[],
        series:[
                     {
            id:'resolvebug',
            name:'',
            type:'pie',
            datasetIndex:0,
            startAngle:180,
            seriesLayoutBy:"column",
            encode:{
                itemName:"severity",
                value:"srfcount"
            }}
        ]
    };

    /**
     * 获取图表数据
     * 
     * @returns {*} 
     * @memberof Dashboard_sysportlet6_chartBase
     */
    public load(opt?:any) {
        let _this = this;
        const arg: any = { ...opt };
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(arg, parentdata);
        Object.assign(arg,{viewparams:this.viewparams,page:0,size:1000});
        this.service.search(this.fetchAction,JSON.parse(JSON.stringify(this.context)),arg,this.showBusyIndicator).then((res) => {
            if (res) {
               this.chartOption.title.subtext = `${res.data.length} 个`;
               this.transformToBasicChartSetData(res.data,(codelist:any) =>{_this.drawCharts(codelist)});
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}
</script>
