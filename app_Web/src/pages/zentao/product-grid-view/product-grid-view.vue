<template src="./product-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductGridViewBase } from './product-grid-view-base';
import view_grid from '@widgets/product/main-grid/main-grid.vue';

/**
 * 所有产品视图
 *
 * @export
 * @class ProductGridView
 * @extends {ProductGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductGridView extends ProductGridViewBase { }
</script>
