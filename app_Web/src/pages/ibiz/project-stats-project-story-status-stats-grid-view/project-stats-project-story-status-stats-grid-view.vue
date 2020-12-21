<template src="./project-stats-project-story-status-stats-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsProjectStoryStatusStatsGridViewBase } from './project-stats-project-story-status-stats-grid-view-base';
import view_grid from '@widgets/project-stats/project-story-status-stats-grid/project-story-status-stats-grid.vue';

/**
 * 项目统计表格视图视图
 *
 * @export
 * @class ProjectStatsProjectStoryStatusStatsGridView
 * @extends {ProjectStatsProjectStoryStatusStatsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsProjectStoryStatusStatsGridView extends ProjectStatsProjectStoryStatusStatsGridViewBase {}
</script>
