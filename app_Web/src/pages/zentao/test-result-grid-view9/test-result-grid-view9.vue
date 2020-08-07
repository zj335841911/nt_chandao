<template src="./test-result-grid-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestResultGridView9Base } from './test-result-grid-view9-base';
import view_grid from '@widgets/test-result/main-grid/main-grid.vue';

/**
 * 测试结果表格视图视图
 *
 * @export
 * @class TestResultGridView9
 * @extends {TestResultGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TestResultGridView9 extends TestResultGridView9Base { }
</script>
