<template src="./product-plan-main-tab-exp.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlanMainTabExpBase } from './product-plan-main-tab-exp-base';
import view_tabexppanel from '@widgets/product-plan/main-tab-exptabexppanel-tabexppanel/main-tab-exptabexppanel-tabexppanel.vue';

/**
 * 计划视图
 *
 * @export
 * @class ProductPlanMainTabExp
 * @extends {ProductPlanMainTabExpBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductPlanMainTabExp extends ProductPlanMainTabExpBase { }
</script>
