<template src="./burn-down-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BurnDownBase } from './burn-down-chart-base';
 

/**
 * dashboard_sysportlet1_chart部件
 *
 * @export
 * @class BurnDown
 * @extends {BurnDownBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BurnDown extends BurnDownBase { }
</script>
