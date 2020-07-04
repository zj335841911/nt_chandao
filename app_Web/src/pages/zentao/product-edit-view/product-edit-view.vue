<template src="./product-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductEditViewBase } from './product-edit-view-base';
import view_form from '@widgets/product/main-form/main-form.vue';

/**
 * product编辑视图视图
 *
 * @export
 * @class ProductEditView
 * @extends {ProductEditViewBase}
 */
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductEditView extends ProductEditViewBase { }
</script>
