<template src="./story-plan-sub-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryPlanSubGridViewBase } from './story-plan-sub-grid-view-base';
import view_grid from '@widgets/story/main-plan-sub-grid/main-plan-sub-grid.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryPlanSubGridView
 * @extends {StoryPlanSubGridViewBase}
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
export default class StoryPlanSubGridView extends StoryPlanSubGridViewBase {

}
</script>
