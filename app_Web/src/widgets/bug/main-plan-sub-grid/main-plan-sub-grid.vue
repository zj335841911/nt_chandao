<template src="./main-plan-sub-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_PlanSubBase } from './main-plan-sub-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_PlanSub
 * @extends {Main_PlanSubBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Main_PlanSub extends Main_PlanSubBase { }
</script>
