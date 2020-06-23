<template src="./steps-info-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StepsInfoBase } from './steps-info-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class StepsInfo
 * @extends {StepsInfoBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class StepsInfo extends StepsInfoBase { }
</script>
