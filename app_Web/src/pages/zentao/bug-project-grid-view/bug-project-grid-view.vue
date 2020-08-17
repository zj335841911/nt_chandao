<template src="./bug-project-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugProjectGridViewBase } from './bug-project-grid-view-base';
import view_grid from '@widgets/bug/main-grid/main-grid.vue';

/**
 * bug表格视图（项目）视图
 *
 * @export
 * @class BugProjectGridView
 * @extends {BugProjectGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugProjectGridView extends BugProjectGridViewBase { }
</script>
