<template src="./bug-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugGridViewBase } from './bug-grid-view-base';
import view_grid from '@widgets/bug/main-grid/main-grid.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugGridView
 * @extends {BugGridViewBase}
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
export default class BugGridView extends BugGridViewBase {

}
</script>
