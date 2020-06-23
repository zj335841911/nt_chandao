<template src="./main-sub-plan-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainSubPlanBase } from './main-sub-plan-form-base';
 

/**
 * form部件
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
