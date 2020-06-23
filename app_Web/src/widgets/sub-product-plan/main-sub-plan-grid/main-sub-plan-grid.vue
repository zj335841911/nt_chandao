<template src="./main-sub-plan-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainSubPlanBase } from './main-sub-plan-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainSubPlan
 * @extends {MainSubPlanBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainSubPlan extends MainSubPlanBase { }
</script>
