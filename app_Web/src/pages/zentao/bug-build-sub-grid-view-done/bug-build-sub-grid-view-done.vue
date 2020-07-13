<template src="./bug-build-sub-grid-view-done.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugBuildSubGridView_DoneBase } from './bug-build-sub-grid-view-done-base';
import view_grid from '@widgets/bug/main-build-sub-grid/main-build-sub-grid.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugBuildSubGridView_Done
 * @extends {BugBuildSubGridView_DoneBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugBuildSubGridView_Done extends BugBuildSubGridView_DoneBase { }
</script>
