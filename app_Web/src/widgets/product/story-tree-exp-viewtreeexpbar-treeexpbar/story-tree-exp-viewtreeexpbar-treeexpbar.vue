<template src="./story-tree-exp-viewtreeexpbar-treeexpbar.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryTreeExpViewtreeexpbarBase } from './story-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/product-module/exp-treeview/exp-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class StoryTreeExpViewtreeexpbar
 * @extends {StoryTreeExpViewtreeexpbarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree, 
         
    }
})
@VueLifeCycleProcessing()
export default class StoryTreeExpViewtreeexpbar extends StoryTreeExpViewtreeexpbarBase { }
</script>
