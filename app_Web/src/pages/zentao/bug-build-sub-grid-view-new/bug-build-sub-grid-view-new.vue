<template src="./bug-build-sub-grid-view-new.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugBuildSubGridView_NewBase } from './bug-build-sub-grid-view-new-base';
import view_grid from '@widgets/bug/main-build-sub-grid/main-build-sub-grid.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugBuildSubGridView_New
 * @extends {BugBuildSubGridView_NewBase}
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
export default class BugBuildSubGridView_New extends BugBuildSubGridView_NewBase { }
</script>
