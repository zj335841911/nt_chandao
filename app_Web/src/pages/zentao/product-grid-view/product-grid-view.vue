<template src="product-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductGridViewBase } from './product-grid-view-base';
import view_grid from '@widgets/product/main-grid/main-grid.vue';

/**
 * 所有产品视图
 *
 * @export
 * @class ProductGridView
 * @extends {ProductGridViewBase}
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
export default class ProductGridView extends ProductGridViewBase {

}
</script>
