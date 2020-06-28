<template src="./product-story-tree-exp-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStoryTreeExpViewBase } from './product-story-tree-exp-view-base';
import view_treeexpbar from '@widgets/product/story-tree-exp-viewtreeexpbar-treeexpbar/story-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 产品需求导航视图视图
 *
 * @export
 * @class ProductStoryTreeExpView
 * @extends {ProductStoryTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ProductStoryTreeExpView extends ProductStoryTreeExpViewBase { }
</script>
