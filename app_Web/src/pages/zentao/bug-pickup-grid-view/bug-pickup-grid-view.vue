<template src="bug-pickup-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugPickupGridViewBase } from './bug-pickup-grid-view-base';
import view_grid from '@widgets/bug/pickup-gird-grid/pickup-gird-grid.vue';

/**
 * bug选择表格视图视图
 *
 * @export
 * @class BugPickupGridView
 * @extends {BugPickupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class BugPickupGridView extends BugPickupGridViewBase {

}
</script>
