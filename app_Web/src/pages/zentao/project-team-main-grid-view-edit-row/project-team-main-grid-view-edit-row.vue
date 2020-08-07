<template src="./project-team-main-grid-view-edit-row.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTeamMainGridView_EditRowBase } from './project-team-main-grid-view-edit-row-base';
import view_grid from '@widgets/project-team/main-edit-row-grid/main-edit-row-grid.vue';

/**
 * 项目团队表格视图视图
 *
 * @export
 * @class ProjectTeamMainGridView_EditRow
 * @extends {ProjectTeamMainGridView_EditRowBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectTeamMainGridView_EditRow extends ProjectTeamMainGridView_EditRowBase { }
</script>
