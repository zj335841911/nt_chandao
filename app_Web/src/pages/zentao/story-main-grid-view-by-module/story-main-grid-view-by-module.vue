<template src="./story-main-grid-view-by-module.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainGridView_ByModuleBase } from './story-main-grid-view-by-module-base';
import view_grid from '@widgets/story/main-grid/main-grid.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryMainGridView_ByModule
 * @extends {StoryMainGridView_ByModuleBase}
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
export default class StoryMainGridView_ByModule extends StoryMainGridView_ByModuleBase { }
</script>
