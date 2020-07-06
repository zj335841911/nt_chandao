<template src="./product-portal-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPortalViewBase } from './product-portal-view-base';
import view_dashboard from '@widgets/app/product-portal-view-db-dashboard/product-portal-view-db-dashboard.vue';

/**
 * 产品主页视图
 *
 * @export
 * @class ProductPortalView
 * @extends {ProductPortalViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductPortalView extends ProductPortalViewBase { }
</script>
