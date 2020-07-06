<template src="./product-case-tree-exp-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductCaseTreeExpViewBase } from './product-case-tree-exp-view-base';
import view_treeexpbar from '@widgets/product/case-tree-exp-viewtreeexpbar-treeexpbar/case-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 产品需求导航视图视图
 *
 * @export
 * @class ProductCaseTreeExpView
 * @extends {ProductCaseTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductCaseTreeExpView extends ProductCaseTreeExpViewBase { }
</script>
