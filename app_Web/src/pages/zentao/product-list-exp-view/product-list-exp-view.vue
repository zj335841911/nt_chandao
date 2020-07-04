<template src="./product-list-exp-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductListExpViewBase } from './product-list-exp-view-base';
import view_listexpbar from '@widgets/product/list-exp-viewlistexpbar-listexpbar/list-exp-viewlistexpbar-listexpbar.vue';

/**
 * 产品列表导航视图视图
 *
 * @export
 * @class ProductListExpView
 * @extends {ProductListExpViewBase}
 */
@Component({
    components: {
        view_listexpbar, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductListExpView extends ProductListExpViewBase { }
</script>
