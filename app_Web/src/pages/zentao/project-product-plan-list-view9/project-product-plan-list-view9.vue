<template src="./project-product-plan-list-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectProductPlanListView9Base } from './project-product-plan-list-view9-base';
import view_list from '@widgets/project-product/plan-list/plan-list.vue';

/**
 * 项目产品列表视图视图
 *
 * @export
 * @class ProjectProductPlanListView9
 * @extends {ProjectProductPlanListView9Base}
 */
@Component({
    components: {
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProjectProductPlanListView9 extends ProjectProductPlanListView9Base { }
</script>
