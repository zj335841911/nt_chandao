<template src="./story-cur-project-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryCurProjectGridViewBase } from './story-cur-project-grid-view-base';
import view_grid from '@widgets/story/main-grid/main-grid.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryCurProjectGridView
 * @extends {StoryCurProjectGridViewBase}
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
export default class StoryCurProjectGridView extends StoryCurProjectGridViewBase { }
</script>
