<template src="./bug-plan-sub-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugPlanSubGridViewBase } from './bug-plan-sub-grid-view-base';
import view_grid from '@widgets/bug/main-plan-sub-grid/main-plan-sub-grid.vue';

/**
 * Bug视图
 *
 * @export
 * @class BugPlanSubGridView
 * @extends {BugPlanSubGridViewBase}
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
export default class BugPlanSubGridView extends BugPlanSubGridViewBase {

}
</script>
