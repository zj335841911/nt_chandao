<template src="./doc-lib-undone-project-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibUndoneProjectGridViewBase } from './doc-lib-undone-project-grid-view-base';
import view_grid from '@widgets/doc-lib/main-grid/main-grid.vue';
import view_searchbar from '@widgets/doc-lib/custom-searchbar/custom-searchbar.vue';
import view_searchform from '@widgets/doc-lib/default-searchform/default-searchform.vue';

/**
 * doclib表格视图视图
 *
 * @export
 * @class DocLibUndoneProjectGridView
 * @extends {DocLibUndoneProjectGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibUndoneProjectGridView extends DocLibUndoneProjectGridViewBase {}
</script>
