<template src="./test-suite-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestSuiteGridViewBase } from './test-suite-grid-view-base';
import view_grid from '@widgets/test-suite/main-grid/main-grid.vue';

/**
 * testsuite表格视图视图
 *
 * @export
 * @class TestSuiteGridView
 * @extends {TestSuiteGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TestSuiteGridView extends TestSuiteGridViewBase { }
</script>
