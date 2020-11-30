<template src="./task-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskUsr2GridViewBase } from './task-usr2-grid-view-base';
import view_grid from '@widgets/task/main-grid/main-grid.vue';
import view_searchform from '@widgets/task/default-searchform/default-searchform.vue';

/**
 * 任务表格视图视图
 *
 * @export
 * @class TaskUsr2GridView
 * @extends {TaskUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class TaskUsr2GridView extends TaskUsr2GridViewBase {}
</script>
