<template src="./story-main-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainGridViewBase } from './story-main-grid-view-base';
import view_grid from '@widgets/story/main-grid/main-grid.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryMainGridView
 * @extends {StoryMainGridViewBase}
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
export default class StoryMainGridView extends StoryMainGridViewBase { }
</script>
