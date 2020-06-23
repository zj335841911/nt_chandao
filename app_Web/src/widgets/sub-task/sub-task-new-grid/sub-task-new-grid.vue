<template src="./sub-task-new-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SubTaskNewBase } from './sub-task-new-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class SubTaskNew
 * @extends {SubTaskNewBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class SubTaskNew extends SubTaskNewBase { }
</script>
