<template src="./bug-dashboard-actions-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugDashboardActionsBase } from './bug-dashboard-actions-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class BugDashboardActions
 * @extends {BugDashboardActionsBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BugDashboardActions extends BugDashboardActionsBase { }
</script>
