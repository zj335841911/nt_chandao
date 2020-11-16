<template src="./doc-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocGridViewBase } from './doc-grid-view-base';
import view_grid from '@widgets/doc/main-grid/main-grid.vue';
import view_searchform from '@widgets/doc/default-searchform/default-searchform.vue';

/**
 * doc表格视图视图
 *
 * @export
 * @class DocGridView
 * @extends {DocGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class DocGridView extends DocGridViewBase {}
</script>
