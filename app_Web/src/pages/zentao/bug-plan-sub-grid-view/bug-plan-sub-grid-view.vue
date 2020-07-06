<template src="./bug-plan-sub-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugPlanSubGridViewBase } from './bug-plan-sub-grid-view-base';
import view_grid from '@widgets/bug/main-plan-sub-grid/main-plan-sub-grid.vue';

/**
 * Bug视图
 *
 * @export
 * @class BugPlanSubGridView
 * @extends {BugPlanSubGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugPlanSubGridView extends BugPlanSubGridViewBase { }
</script>
