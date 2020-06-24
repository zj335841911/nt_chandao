<template src="./work-info-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WorkInfoPortletBase } from './work-info-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class WorkInfo
 * @extends {WorkInfoPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class WorkInfoPortlet extends WorkInfoPortletBase { }
</script>
