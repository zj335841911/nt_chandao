<template src="./dashboard-bug-life-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardBugLifeBase } from './dashboard-bug-life-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class DashboardBugLife
 * @extends {DashboardBugLifeBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class DashboardBugLife extends DashboardBugLifeBase { }
</script>
