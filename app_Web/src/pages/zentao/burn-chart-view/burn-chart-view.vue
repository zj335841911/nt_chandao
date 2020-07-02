<template src="./burn-chart-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BurnChartViewBase } from './burn-chart-view-base';
import view_chart from '@widgets/burn/burn-down2-chart/burn-down2-chart.vue';

/**
 * 燃尽图视图
 *
 * @export
 * @class BurnChartView
 * @extends {BurnChartViewBase}
 */
@Component({
    components: {
        view_chart, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class BurnChartView extends BurnChartViewBase { }
</script>
