<template src="./test-task-project-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskProjectGridViewBase } from './test-task-project-grid-view-base';
import view_grid from '@widgets/test-task/main-grid/main-grid.vue';

/**
 * 测试单表格视图（项目）视图
 *
 * @export
 * @class TestTaskProjectGridView
 * @extends {TestTaskProjectGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskProjectGridView extends TestTaskProjectGridViewBase { }
</script>
