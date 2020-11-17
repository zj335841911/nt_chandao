<template src="./doc-recent-more-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocRecentMoreGridViewBase } from './doc-recent-more-grid-view-base';
import view_grid from '@widgets/doc/more-recent-update-grid/more-recent-update-grid.vue';
import view_searchbar from '@widgets/doc/custom-searchbar/custom-searchbar.vue';
import view_searchform from '@widgets/doc/default-searchform/default-searchform.vue';

/**
 * doc表格视图视图
 *
 * @export
 * @class DocRecentMoreGridView
 * @extends {DocRecentMoreGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class DocRecentMoreGridView extends DocRecentMoreGridViewBase {}
</script>
