<template src="./bug-release-sub-grid-view-done.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugReleaseSubGridView_DoneBase } from './bug-release-sub-grid-view-done-base';
import view_grid from '@widgets/bug/main-release-sub-r-grid/main-release-sub-r-grid.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugReleaseSubGridView_Done
 * @extends {BugReleaseSubGridView_DoneBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugReleaseSubGridView_Done extends BugReleaseSubGridView_DoneBase { }
</script>
