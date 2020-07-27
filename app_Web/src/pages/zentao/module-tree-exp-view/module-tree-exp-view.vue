<template src="./module-tree-exp-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ModuleTreeExpViewBase } from './module-tree-exp-view-base';
import view_treeexpbar from '@widgets/module/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 模块树导航视图视图
 *
 * @export
 * @class ModuleTreeExpView
 * @extends {ModuleTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class ModuleTreeExpView extends ModuleTreeExpViewBase { }
</script>
