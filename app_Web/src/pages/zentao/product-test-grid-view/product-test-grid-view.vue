<template src="./product-test-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTestGridViewBase } from './product-test-grid-view-base';
import view_grid from '@widgets/product/test-grid/test-grid.vue';
import view_searchform from '@widgets/product/default-searchform/default-searchform.vue';

/**
 * product表格视图视图
 *
 * @export
 * @class ProductTestGridView
 * @extends {ProductTestGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProductTestGridView extends ProductTestGridViewBase { }
</script>
