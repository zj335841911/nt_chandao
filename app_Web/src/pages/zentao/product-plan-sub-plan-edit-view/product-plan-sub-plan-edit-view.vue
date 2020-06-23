<template src="./product-plan-sub-plan-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlanSubPlanEditViewBase } from './product-plan-sub-plan-edit-view-base';
import view_form from '@widgets/sub-product-plan/main-sub-plan-form/main-sub-plan-form.vue';

/**
 * 子计划视图
 *
 * @export
 * @class ProductPlanSubPlanEditView
 * @extends {ProductPlanSubPlanEditViewBase}
 */
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductPlanSubPlanEditView extends ProductPlanSubPlanEditViewBase { }
</script>
