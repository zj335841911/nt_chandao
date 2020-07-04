<template src="./bug-test-report-sub-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugTestReportSubGridViewBase } from './bug-test-report-sub-grid-view-base';
import view_grid from '@widgets/bug/main-report-sub-grid/main-report-sub-grid.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugTestReportSubGridView
 * @extends {BugTestReportSubGridViewBase}
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
export default class BugTestReportSubGridView extends BugTestReportSubGridViewBase { }
</script>
