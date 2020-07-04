<template src="./story-build-sub-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryBuildSubGridViewBase } from './story-build-sub-grid-view-base';
import view_grid from '@widgets/story/main-build-sub-grid/main-build-sub-grid.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryBuildSubGridView
 * @extends {StoryBuildSubGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class StoryBuildSubGridView extends StoryBuildSubGridViewBase { }
</script>
