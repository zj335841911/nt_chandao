<template src="./build-main-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildMainGridViewBase } from './build-main-grid-view-base';
import view_grid from '@widgets/build/main-grid/main-grid.vue';
import view_searchform from '@widgets/build/default-searchform/default-searchform.vue';

/**
 * build表格视图视图
 *
 * @export
 * @class BuildMainGridView
 * @extends {BuildMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class BuildMainGridView extends BuildMainGridViewBase { }
</script>
