<template src="./bug-build-sub-grid-view-linkdone.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugBuildSubGridView_LINKDONEBase } from './bug-build-sub-grid-view-linkdone-base';
import view_grid from '@widgets/bug/main-build-sub3-grid/main-build-sub3-grid.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugBuildSubGridView_LINKDONE
 * @extends {BugBuildSubGridView_LINKDONEBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugBuildSubGridView_LINKDONE extends BugBuildSubGridView_LINKDONEBase { }
</script>
