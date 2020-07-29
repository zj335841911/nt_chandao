<template src="./test-task-my-ygrid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskMyYGridViewBase } from './test-task-my-ygrid-view-base';
import view_grid from '@widgets/test-task/main-grid/main-grid.vue';

/**
 * 测试单表格视图视图
 *
 * @export
 * @class TestTaskMyYGridView
 * @extends {TestTaskMyYGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskMyYGridView extends TestTaskMyYGridViewBase { }
</script>
