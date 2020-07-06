<template src="./product-html-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductHtmlViewBase } from './product-html-view-base';

/**
 * iBiz软件生产管理视图
 *
 * @export
 * @class ProductHtmlView
 * @extends {ProductHtmlViewBase}
 */
@Component({
    components: {
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductHtmlView extends ProductHtmlViewBase { }
</script>
