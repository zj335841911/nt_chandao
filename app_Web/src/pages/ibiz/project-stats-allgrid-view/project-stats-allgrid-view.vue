<template src="./project-stats-allgrid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsALLGridViewBase } from './project-stats-allgrid-view-base';
import view_grid from '@widgets/project-stats/all-project-grid/all-project-grid.vue';
import view_searchform from '@widgets/project-stats/default-searchform/default-searchform.vue';

/**
 * 项目统计表格视图（所有项目）视图
 *
 * @export
 * @class ProjectStatsALLGridView
 * @extends {ProjectStatsALLGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsALLGridView extends ProjectStatsALLGridViewBase { }
</script>
