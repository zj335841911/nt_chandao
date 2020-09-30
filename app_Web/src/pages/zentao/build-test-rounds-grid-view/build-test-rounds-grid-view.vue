<template src="./build-test-rounds-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildTestRoundsGridViewBase } from './build-test-rounds-grid-view-base';
import view_grid from '@widgets/build/test-rounds-grid/test-rounds-grid.vue';

/**
 * 版本表格视图（轮次）视图
 *
 * @export
 * @class BuildTestRoundsGridView
 * @extends {BuildTestRoundsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BuildTestRoundsGridView extends BuildTestRoundsGridViewBase { }
</script>
