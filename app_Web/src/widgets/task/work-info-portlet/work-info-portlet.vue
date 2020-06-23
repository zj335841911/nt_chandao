<template src="./work-info-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WorkInfoBase } from './work-info-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class WorkInfo
 * @extends {WorkInfoBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class WorkInfo extends WorkInfoBase { }
</script>
