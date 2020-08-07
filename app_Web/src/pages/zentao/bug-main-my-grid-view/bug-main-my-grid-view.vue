<template src="./bug-main-my-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugMainMyGridViewBase } from './bug-main-my-grid-view-base';
import view_grid from '@widgets/bug/main-grid/main-grid.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugMainMyGridView
 * @extends {BugMainMyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugMainMyGridView extends BugMainMyGridViewBase { }
</script>
