<template src="project-product-list-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectProductListView9Base } from './project-product-list-view9-base';
import view_list from '@widgets/project-product/default-list/default-list.vue';

/**
 * 项目产品列表视图视图
 *
 * @export
 * @class ProjectProductListView9
 * @extends {ProjectProductListView9Base}
 */
@Component({
    components: {
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ProjectProductListView9 extends ProjectProductListView9Base {

}
</script>
