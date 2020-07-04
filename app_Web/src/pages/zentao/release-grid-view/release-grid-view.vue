<template src="./release-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReleaseGridViewBase } from './release-grid-view-base';
import view_grid from '@widgets/release/main-grid/main-grid.vue';

/**
 * release表格视图视图
 *
 * @export
 * @class ReleaseGridView
 * @extends {ReleaseGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ReleaseGridView extends ReleaseGridViewBase { }
</script>
