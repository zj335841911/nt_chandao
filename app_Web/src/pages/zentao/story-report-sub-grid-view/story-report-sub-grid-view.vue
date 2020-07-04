<template src="./story-report-sub-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryReportSubGridViewBase } from './story-report-sub-grid-view-base';
import view_grid from '@widgets/story/main-report-sub-grid/main-report-sub-grid.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryReportSubGridView
 * @extends {StoryReportSubGridViewBase}
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
export default class StoryReportSubGridView extends StoryReportSubGridViewBase { }
</script>
