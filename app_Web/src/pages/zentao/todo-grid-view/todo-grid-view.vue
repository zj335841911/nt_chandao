<template src="./todo-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoGridViewBase } from './todo-grid-view-base';
import view_grid from '@widgets/todo/main-grid/main-grid.vue';
import view_searchform from '@widgets/todo/default-searchform/default-searchform.vue';

/**
 * todo表格视图视图
 *
 * @export
 * @class TodoGridView
 * @extends {TodoGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class TodoGridView extends TodoGridViewBase { }
</script>
