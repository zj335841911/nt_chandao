<template src="./my-opened-story-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyOpenedStoryChartBase } from './my-opened-story-chart-base';
 

/**
 * chart部件
 *
 * @export
 * @class MyOpenedStoryChart
 * @extends {MyOpenedStoryChartBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MyOpenedStoryChart extends MyOpenedStoryChartBase { }
</script>
