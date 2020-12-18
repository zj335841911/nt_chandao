<template src="./ibz-casestatstest-case-stats-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBZ_CASESTATSTestCaseStatsGridViewBase } from './ibz-casestatstest-case-stats-grid-view-base';
import view_grid from '@widgets/ibz-casestats/test-case-stats-grid/test-case-stats-grid.vue';
import view_searchform from '@widgets/ibz-casestats/default-searchform/default-searchform.vue';

/**
 * 测试用例统计表格视图视图
 *
 * @export
 * @class IBZ_CASESTATSTestCaseStatsGridView
 * @extends {IBZ_CASESTATSTestCaseStatsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IBZ_CASESTATSTestCaseStatsGridView extends IBZ_CASESTATSTestCaseStatsGridViewBase {}
</script>
