<template src="./module-exp-treeview.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ModuleExpBase } from './module-exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class ModuleExp
 * @extends {ModuleExpBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ModuleExp extends ModuleExpBase { }
</script>
