<template src="./product-bug-resolution-stats-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductBugResolutionStatsGridBase } from './product-bug-resolution-stats-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductBugResolutionStatsGrid
 * @extends {ProductBugResolutionStatsGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductBugResolutionStatsGrid extends ProductBugResolutionStatsGridBase {}
</script>
