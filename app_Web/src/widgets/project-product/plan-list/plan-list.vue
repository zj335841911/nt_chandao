<template src="./plan-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PlanListBase } from './plan-list-base';
 

/**
 * list部件
 *
 * @export
 * @class PlanList
 * @extends {PlanListBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class PlanList extends PlanListBase { }
</script>
