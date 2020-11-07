<template src="./doc-lib-product-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibProductGridViewBase } from './doc-lib-product-grid-view-base';
import view_grid from '@widgets/doc-lib/product-main-grid/product-main-grid.vue';
import view_searchform from '@widgets/doc-lib/default-searchform/default-searchform.vue';

/**
 * doclib表格视图视图
 *
 * @export
 * @class DocLibProductGridView
 * @extends {DocLibProductGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibProductGridView extends DocLibProductGridViewBase { }
</script>
