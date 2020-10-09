<template src="./my-finishedby-task-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyFinishedbyTaskChartBase } from './my-finishedby-task-chart-base';
 

/**
 * chart部件
 *
 * @export
 * @class MyFinishedbyTaskChart
 * @extends {MyFinishedbyTaskChartBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MyFinishedbyTaskChart extends MyFinishedbyTaskChartBase { }
</script>
