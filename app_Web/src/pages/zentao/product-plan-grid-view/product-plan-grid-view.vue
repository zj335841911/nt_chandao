<template src="./product-plan-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlanGridViewBase } from './product-plan-grid-view-base';
import view_grid from '@widgets/product-plan/main-grid/main-grid.vue';

/**
 * productplan表格视图视图
 *
 * @export
 * @class ProductPlanGridView
 * @extends {ProductPlanGridViewBase}
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
export default class ProductPlanGridView extends ProductPlanGridViewBase { }
</script>
