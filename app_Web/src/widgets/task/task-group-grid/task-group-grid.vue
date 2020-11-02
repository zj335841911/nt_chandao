<template src="./task-group-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskGroupGridBase } from './task-group-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class TaskGroupGrid
 * @extends {TaskGroupGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TaskGroupGrid extends TaskGroupGridBase { }
</script>
