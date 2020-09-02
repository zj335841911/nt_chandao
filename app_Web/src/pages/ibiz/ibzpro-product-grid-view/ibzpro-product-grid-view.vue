<template src="./ibzpro-product-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBZProProductGridViewBase } from './ibzpro-product-grid-view-base';
import view_grid from '@widgets/ibzpro-product/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibzpro-product/default-searchform/default-searchform.vue';

/**
 * 产品（开发系统）表格视图视图
 *
 * @export
 * @class IBZProProductGridView
 * @extends {IBZProProductGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IBZProProductGridView extends IBZProProductGridViewBase { }
</script>
