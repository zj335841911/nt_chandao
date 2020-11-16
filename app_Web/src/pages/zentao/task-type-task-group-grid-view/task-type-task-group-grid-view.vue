<template src="./task-type-task-group-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTypeTaskGroupGridViewBase } from './task-type-task-group-grid-view-base';
import view_grid from '@widgets/task/type-task-group-grid/type-task-group-grid.vue';
import view_searchform from '@widgets/task/default-searchform/default-searchform.vue';

/**
 * 任务表格视图（类型分组）视图
 *
 * @export
 * @class TaskTypeTaskGroupGridView
 * @extends {TaskTypeTaskGroupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class TaskTypeTaskGroupGridView extends TaskTypeTaskGroupGridViewBase {}
</script>
