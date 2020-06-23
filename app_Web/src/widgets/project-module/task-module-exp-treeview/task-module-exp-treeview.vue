<template src="./task-module-exp-treeview.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskModuleExpBase } from './task-module-exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class TaskModuleExp
 * @extends {TaskModuleExpBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TaskModuleExp extends TaskModuleExpBase { }
</script>
