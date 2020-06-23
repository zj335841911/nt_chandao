<template src="./product-life-road-map-list-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductLifeRoadMapListView9Base } from './product-life-road-map-list-view9-base';
import view_list2 from '@widgets/product-life/get-roadmap-list/get-roadmap-list.vue';
import view_list from '@widgets/product-life/get-roadmap-year-list/get-roadmap-year-list.vue';

/**
 * 路线图视图
 *
 * @export
 * @class ProductLifeRoadMapListView9
 * @extends {ProductLifeRoadMapListView9Base}
 */
@Component({
    components: {
        view_list2, 
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductLifeRoadMapListView9 extends ProductLifeRoadMapListView9Base {

}
</script>
