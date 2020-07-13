<template src="./burn-down2-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BurnDown2ChartBase } from './burn-down2-chart-base';
 

/**
 * chart部件
 *
 * @export
 * @class BurnDown2Chart
 * @extends {BurnDown2ChartBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BurnDown2Chart extends BurnDown2ChartBase { }
</script>
