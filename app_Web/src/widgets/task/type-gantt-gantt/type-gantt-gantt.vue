<template src="./type-gantt-gantt.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TypeGanttBase } from './type-gantt-gantt-base';
import GanttElastic from "ibiz-gantt-elastic/src/GanttElastic.vue";
 

/**
 * gantt部件
 *
 * @export
 * @class TypeGantt
 * @extends {TypeGanttBase}
 */
@Component({
    components: {
        GanttElastic,
 
    }
})
@VueLifeCycleProcessing()
export default class TypeGantt extends TypeGanttBase { }
</script>
