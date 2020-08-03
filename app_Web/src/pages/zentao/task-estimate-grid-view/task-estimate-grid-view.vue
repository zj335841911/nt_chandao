<template src="./task-estimate-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskEstimateGridViewBase } from './task-estimate-grid-view-base';
import view_grid from '@widgets/task-estimate/main-grid/main-grid.vue';

/**
 * taskestimate表格视图视图
 *
 * @export
 * @class TaskEstimateGridView
 * @extends {TaskEstimateGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskEstimateGridView extends TaskEstimateGridViewBase { }
</script>
