<template src="./product-plan-sub-plan-create-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlanSubPlanCreateViewBase } from './product-plan-sub-plan-create-view-base';
import view_form from '@widgets/sub-product-plan/main-sub-plan-form/main-sub-plan-form.vue';

/**
 * 计划视图
 *
 * @export
 * @class ProductPlanSubPlanCreateView
 * @extends {ProductPlanSubPlanCreateViewBase}
 */
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductPlanSubPlanCreateView extends ProductPlanSubPlanCreateViewBase { }
</script>
