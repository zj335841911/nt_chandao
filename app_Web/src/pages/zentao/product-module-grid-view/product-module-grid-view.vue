<template src="./product-module-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductModuleGridViewBase } from './product-module-grid-view-base';
import view_grid from '@widgets/product-module/main-grid/main-grid.vue';

/**
 * 产品模块表格视图视图
 *
 * @export
 * @class ProductModuleGridView
 * @extends {ProductModuleGridViewBase}
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
export default class ProductModuleGridView extends ProductModuleGridViewBase { }
</script>
