<template src="./involved-project-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { InvolvedProjectChartBase } from './involved-project-chart-base';
 

/**
 * dashboard_sysportlet6_chart部件
 *
 * @export
 * @class InvolvedProjectChart
 * @extends {InvolvedProjectChartBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class InvolvedProjectChart extends InvolvedProjectChartBase { 
    
    /**
     * 初始化图表所需参数
     *
     * @type {}
     * @memberof Dashboard_sysportlet6_chartBase
     */   
    public chartOption:any = {
        title:{
            show:true ,
            text:'参与项目',
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
            id:'involved',
            name:'',
            type:'pie',
            datasetIndex:0,
            startAngle:180,
            seriesLayoutBy:"column",
            encode:{
                itemName:"status",
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
