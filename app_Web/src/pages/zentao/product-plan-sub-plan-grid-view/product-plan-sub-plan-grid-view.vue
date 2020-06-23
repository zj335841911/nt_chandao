<template src="product-plan-sub-plan-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlanSubPlanGridViewBase } from './product-plan-sub-plan-grid-view-base';
import view_grid from '@widgets/sub-product-plan/main-sub-plan-grid/main-sub-plan-grid.vue';

/**
 * 子计划视图
 *
 * @export
 * @class ProductPlanSubPlanGridView
 * @extends {ProductPlanSubPlanGridViewBase}
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
export default class ProductPlanSubPlanGridView extends ProductPlanSubPlanGridViewBase {

}
</script>
