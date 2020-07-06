<template src="./bug-grid-view9-story-related.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugGridView9_StoryRelatedBase } from './bug-grid-view9-story-related-base';
import view_grid from '@widgets/bug/story-related-grid/story-related-grid.vue';

/**
 * 相关Bug视图
 *
 * @export
 * @class BugGridView9_StoryRelated
 * @extends {BugGridView9_StoryRelatedBase}
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
export default class BugGridView9_StoryRelated extends BugGridView9_StoryRelatedBase { }
</script>
