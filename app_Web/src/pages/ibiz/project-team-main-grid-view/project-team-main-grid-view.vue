<template src="./project-team-main-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTeamMainGridViewBase } from './project-team-main-grid-view-base';
import view_grid from '@widgets/project-team/main-grid/main-grid.vue';
import view_searchform from '@widgets/project-team/main2-searchform/main2-searchform.vue';

/**
 * 项目团队表格视图视图
 *
 * @export
 * @class ProjectTeamMainGridView
 * @extends {ProjectTeamMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectTeamMainGridView extends ProjectTeamMainGridViewBase {}
</script>
