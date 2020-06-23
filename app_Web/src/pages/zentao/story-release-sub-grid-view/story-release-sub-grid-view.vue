<template src="./story-release-sub-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryReleaseSubGridViewBase } from './story-release-sub-grid-view-base';
import view_grid from '@widgets/story/main-release-sub-grid/main-release-sub-grid.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryReleaseSubGridView
 * @extends {StoryReleaseSubGridViewBase}
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
export default class StoryReleaseSubGridView extends StoryReleaseSubGridViewBase {

}
</script>
