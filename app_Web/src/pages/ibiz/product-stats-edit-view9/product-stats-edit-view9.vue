<template src="./product-stats-edit-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatsEditView9Base } from './product-stats-edit-view9-base';
import view_form from '@widgets/product-stats/main2-form/main2-form.vue';

/**
 * 产品统计编辑视图视图
 *
 * @export
 * @class ProductStatsEditView9
 * @extends {ProductStatsEditView9Base}
 */
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductStatsEditView9 extends ProductStatsEditView9Base { }
</script>
