<template src="./task-pivot-table-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskPivotTableViewBase } from './task-pivot-table-view-base';
import view_grid from '@widgets/task/pivot-table-grid/pivot-table-grid.vue';
import view_searchbar from '@widgets/task/custom-searchbar/custom-searchbar.vue';

/**
 * 任务表格视图视图
 *
 * @export
 * @class TaskPivotTableView
 * @extends {TaskPivotTableViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class TaskPivotTableView extends TaskPivotTableViewBase {}
</script>
