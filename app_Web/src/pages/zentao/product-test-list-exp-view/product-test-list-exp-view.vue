<template src="./product-test-list-exp-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTestListExpViewBase } from './product-test-list-exp-view-base';
import view_listexpbar from '@widgets/product/test-list-exp-viewlistexpbar-listexpbar/test-list-exp-viewlistexpbar-listexpbar.vue';

/**
 * 测试统计视图
 *
 * @export
 * @class ProductTestListExpView
 * @extends {ProductTestListExpViewBase}
 */
@Component({
    components: {
        view_listexpbar, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductTestListExpView extends ProductTestListExpViewBase { }
</script>
