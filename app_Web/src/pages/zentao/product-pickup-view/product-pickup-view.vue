<template src="./product-pickup-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPickupViewBase } from './product-pickup-view-base';
import view_pickupviewpanel from '@widgets/product/pickup-viewpickupviewpanel-pickupviewpanel/pickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * product数据选择视图视图
 *
 * @export
 * @class ProductPickupView
 * @extends {ProductPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductPickupView extends ProductPickupViewBase { }
</script>
