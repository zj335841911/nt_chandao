<template src="./doc-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocGridViewBase } from './doc-grid-view-base';
import view_searchform from '@widgets/doc/default-searchform/default-searchform.vue';
import view_grid from '@widgets/doc/main-grid/main-grid.vue';

/**
 * doc表格视图视图
 *
 * @export
 * @class DocGridView
 * @extends {DocGridViewBase}
 */
@Component({
    components: {
        view_searchform, 
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class DocGridView extends DocGridViewBase { }
</script>
