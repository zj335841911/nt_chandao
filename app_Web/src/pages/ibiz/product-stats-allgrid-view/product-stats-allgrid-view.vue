<template src="./product-stats-allgrid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatsALLGridViewBase } from './product-stats-allgrid-view-base';
import view_grid from '@widgets/product-stats/allproduct-grid/allproduct-grid.vue';
import view_searchform from '@widgets/product-stats/default-searchform/default-searchform.vue';

/**
 * 所有产品视图
 *
 * @export
 * @class ProductStatsALLGridView
 * @extends {ProductStatsALLGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProductStatsALLGridView extends ProductStatsALLGridViewBase { }
</script>
