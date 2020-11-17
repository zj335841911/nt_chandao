<template src="./project-more-undone-pro-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMoreUndoneProGridViewBase } from './project-more-undone-pro-grid-view-base';
import view_grid from '@widgets/project/more-undone-project-grid/more-undone-project-grid.vue';
import view_searchbar from '@widgets/project/custom-searchbar/custom-searchbar.vue';
import view_searchform from '@widgets/project/default-searchform/default-searchform.vue';

/**
 * 项目表格视图视图
 *
 * @export
 * @class ProjectMoreUndoneProGridView
 * @extends {ProjectMoreUndoneProGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectMoreUndoneProGridView extends ProjectMoreUndoneProGridViewBase {}
</script>
