<template src="./product-main-dashboard-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductMainDashboardViewBase } from './product-main-dashboard-view-base';
import view_dashboard from '@widgets/product/main-dashboard/main-dashboard.vue';

/**
 * 产品数据看板视图视图
 *
 * @export
 * @class ProductMainDashboardView
 * @extends {ProductMainDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductMainDashboardView extends ProductMainDashboardViewBase { }
</script>
