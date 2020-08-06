<template src="./bug-pickup-grid-view-build-link-resolved-bugs.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugPickupGridView_buildLinkResolvedBugsBase } from './bug-pickup-grid-view-build-link-resolved-bugs-base';
import view_grid from '@widgets/bug/pickup-gird-grid/pickup-gird-grid.vue';

/**
 * bug选择表格视图视图
 *
 * @export
 * @class BugPickupGridView_buildLinkResolvedBugs
 * @extends {BugPickupGridView_buildLinkResolvedBugsBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugPickupGridView_buildLinkResolvedBugs extends BugPickupGridView_buildLinkResolvedBugsBase { }
</script>
