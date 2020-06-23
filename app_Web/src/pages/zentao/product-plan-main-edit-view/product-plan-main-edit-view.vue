<template src="./product-plan-main-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlanMainEditViewBase } from './product-plan-main-edit-view-base';
import view_form from '@widgets/product-plan/info-form/info-form.vue';

/**
 * 计划详情视图
 *
 * @export
 * @class ProductPlanMainEditView
 * @extends {ProductPlanMainEditViewBase}
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
export default class ProductPlanMainEditView extends ProductPlanMainEditViewBase { }
</script>
