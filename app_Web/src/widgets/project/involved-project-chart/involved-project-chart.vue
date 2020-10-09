<template src="./involved-project-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { InvolvedProjectChartBase } from './involved-project-chart-base';
 

/**
 * dashboard_sysportlet2_chart部件
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
export default class InvolvedProjectChart extends InvolvedProjectChartBase { }
</script>
