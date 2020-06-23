<template src="./tree-exp-viewtreeexpbar-treeexpbar.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TreeExpViewtreeexpbarBase } from './tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/project-module/module-exp-treeview/module-exp-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class TreeExpViewtreeexpbar
 * @extends {TreeExpViewtreeexpbarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree, 
         
    }
})
@VueLifeCycleProcessing()
export default class TreeExpViewtreeexpbar extends TreeExpViewtreeexpbarBase { }
</script>
