<template src="./test-module-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestModuleGridViewBase } from './test-module-grid-view-base';
import view_grid from '@widgets/test-module/main-grid/main-grid.vue';
import view_searchform from '@widgets/test-module/default-searchform/default-searchform.vue';

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
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class TestModuleGridView extends TestModuleGridViewBase { }
</script>
