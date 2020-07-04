<template src="./project-pickup-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectPickupGridViewBase } from './project-pickup-grid-view-base';
import view_grid from '@widgets/project/main-grid/main-grid.vue';
import view_searchform from '@widgets/project/default-searchform/default-searchform.vue';

/**
 * project选择表格视图视图
 *
 * @export
 * @class ProjectPickupGridView
 * @extends {ProjectPickupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProjectPickupGridView extends ProjectPickupGridViewBase { }
</script>
