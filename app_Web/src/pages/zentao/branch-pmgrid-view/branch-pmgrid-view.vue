<template src="./branch-pmgrid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BranchPMGridViewBase } from './branch-pmgrid-view-base';
import view_grid from '@widgets/branch/platform-management-grid/platform-management-grid.vue';

/**
 * 平台管理视图
 *
 * @export
 * @class BranchPMGridView
 * @extends {BranchPMGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class BranchPMGridView extends BranchPMGridViewBase { }
</script>
