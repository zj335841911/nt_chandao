<template src="./case-stats-test-case-stats-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseStatsTestCaseStatsGridViewBase } from './case-stats-test-case-stats-grid-view-base';
import view_grid from '@widgets/case-stats/test-case-stats-grid/test-case-stats-grid.vue';

/**
 * 测试用例统计表格视图视图
 *
 * @export
 * @class CaseStatsTestCaseStatsGridView
 * @extends {CaseStatsTestCaseStatsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseStatsTestCaseStatsGridView extends CaseStatsTestCaseStatsGridViewBase {}
</script>
