<template src="./case-report-link-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseReportLinkGridViewBase } from './case-report-link-grid-view-base';
import view_grid from '@widgets/case/re-port-main-grid-grid/re-port-main-grid-grid.vue';

/**
 * 测试用例表格视图（报告关联用例）视图
 *
 * @export
 * @class CaseReportLinkGridView
 * @extends {CaseReportLinkGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseReportLinkGridView extends CaseReportLinkGridViewBase { }
</script>
