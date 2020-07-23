<template src="./task-grid-view9-my-assigned-to-me.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskGridView9_MyAssignedToMeBase } from './task-grid-view9-my-assigned-to-me-base';
import view_grid from '@widgets/task/main-grid/main-grid.vue';

/**
 * 任务表格视图视图
 *
 * @export
 * @class TaskGridView9_MyAssignedToMe
 * @extends {TaskGridView9_MyAssignedToMeBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskGridView9_MyAssignedToMe extends TaskGridView9_MyAssignedToMeBase { }
</script>
