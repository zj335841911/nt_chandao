<template src="./project-team-main-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTeamMainGridViewBase } from './project-team-main-grid-view-base';
import view_grid from '@widgets/project-team/main-grid/main-grid.vue';

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
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProjectTeamMainGridView extends ProjectTeamMainGridViewBase { }
</script>
