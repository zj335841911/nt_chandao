<template src="./test-module-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestModuleGridViewBase } from './test-module-grid-view-base';
import view_grid from '@widgets/test-module/main-row-grid/main-row-grid.vue';

/**
 * 测试模块表格视图视图
 *
 * @export
 * @class TestModuleGridView
 * @extends {TestModuleGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TestModuleGridView extends TestModuleGridViewBase { }
</script>
