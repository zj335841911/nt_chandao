<template src="./company-stats-company-dynamic-stats-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CompanyStatsCompanyDynamicStatsGridViewBase } from './company-stats-company-dynamic-stats-grid-view-base';
import view_grid from '@widgets/company-stats/company-dynamic-stats-grid/company-dynamic-stats-grid.vue';

/**
 * 公司动态汇总表格视图视图
 *
 * @export
 * @class CompanyStatsCompanyDynamicStatsGridView
 * @extends {CompanyStatsCompanyDynamicStatsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CompanyStatsCompanyDynamicStatsGridView extends CompanyStatsCompanyDynamicStatsGridViewBase {}
</script>
