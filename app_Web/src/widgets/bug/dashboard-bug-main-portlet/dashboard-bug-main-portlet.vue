<template src="./dashboard-bug-main-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardBugMainBase } from './dashboard-bug-main-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class DashboardBugMain
 * @extends {DashboardBugMainBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class DashboardBugMain extends DashboardBugMainBase { }
</script>
