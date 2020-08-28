<template src="./task-my-favorite-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMyFavoriteGridViewBase } from './task-my-favorite-grid-view-base';
import view_grid from '@widgets/task/my-favorite-main-grid/my-favorite-main-grid.vue';

/**
 * task表格视图视图
 *
 * @export
 * @class TaskMyFavoriteGridView
 * @extends {TaskMyFavoriteGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskMyFavoriteGridView extends TaskMyFavoriteGridViewBase { }
</script>
