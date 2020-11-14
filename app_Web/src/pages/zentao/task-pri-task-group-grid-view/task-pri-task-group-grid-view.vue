<template src="./task-pri-task-group-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskPriTaskGroupGridViewBase } from './task-pri-task-group-grid-view-base';
import view_grid from '@widgets/task/pri-task-group-grid/pri-task-group-grid.vue';
import view_searchform from '@widgets/task/default-searchform/default-searchform.vue';

/**
 * 任务表格视图（优先级分组）视图
 *
 * @export
 * @class TaskPriTaskGroupGridView
 * @extends {TaskPriTaskGroupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class TaskPriTaskGroupGridView extends TaskPriTaskGroupGridViewBase { }
</script>
