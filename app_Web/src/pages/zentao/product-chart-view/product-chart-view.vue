<template src="./product-chart-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductChartViewBase } from './product-chart-view-base';
import view_chart from '@widgets/product/product-status-chart/product-status-chart.vue';

/**
 * 产品图表视图视图
 *
 * @export
 * @class ProductChartView
 * @extends {ProductChartViewBase}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class ProductChartView extends ProductChartViewBase { }
</script>
