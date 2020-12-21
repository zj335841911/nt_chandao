<template src="./project-stats-project-story-stage-status-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsProjectStoryStageStatusGridViewBase } from './project-stats-project-story-stage-status-grid-view-base';
import view_grid from '@widgets/project-stats/project-story-stage-stats-grid/project-story-stage-stats-grid.vue';

/**
 * 项目统计表格视图视图
 *
 * @export
 * @class ProjectStatsProjectStoryStageStatusGridView
 * @extends {ProjectStatsProjectStoryStageStatusGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsProjectStoryStageStatusGridView extends ProjectStatsProjectStoryStageStatusGridViewBase {}
</script>
