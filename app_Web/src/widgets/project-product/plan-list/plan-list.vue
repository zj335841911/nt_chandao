<template src="./plan-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PlanBase } from './plan-list-base';
 

/**
 * list部件
 *
 * @export
 * @class Plan
 * @extends {PlanBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Plan extends PlanBase { }
</script>
