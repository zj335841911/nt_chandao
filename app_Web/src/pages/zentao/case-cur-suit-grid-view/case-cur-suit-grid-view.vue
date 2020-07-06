<template src="./case-cur-suit-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseCurSuitGridViewBase } from './case-cur-suit-grid-view-base';
import view_grid from '@widgets/case/main-grid-suit-sub-grid/main-grid-suit-sub-grid.vue';

/**
 * 功能测试视图
 *
 * @export
 * @class CaseCurSuitGridView
 * @extends {CaseCurSuitGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class CaseCurSuitGridView extends CaseCurSuitGridViewBase { }
</script>
