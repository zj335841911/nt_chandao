<template src="./task-assignedto-task-group-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskAssignedtoTaskGroupGridViewBase } from './task-assignedto-task-group-grid-view-base';
import view_grid from '@widgets/task/assignedto-group-grid/assignedto-group-grid.vue';
import view_searchform from '@widgets/task/default-searchform/default-searchform.vue';

/**
 * 任务表格视图（指派分组）视图
 *
 * @export
 * @class TaskAssignedtoTaskGroupGridView
 * @extends {TaskAssignedtoTaskGroupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class TaskAssignedtoTaskGroupGridView extends TaskAssignedtoTaskGroupGridViewBase { }
</script>
