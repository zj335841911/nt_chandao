<template src="./test-report-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportGridViewBase } from './test-report-grid-view-base';
import view_grid from '@widgets/test-report/main-grid/main-grid.vue';

/**
 * testreport表格视图视图
 *
 * @export
 * @class TestReportGridView
 * @extends {TestReportGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportGridView extends TestReportGridViewBase { }
</script>
