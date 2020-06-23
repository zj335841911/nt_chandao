<template src="./dashboard-quick-action-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardQuickActionBase } from './dashboard-quick-action-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class DashboardQuickAction
 * @extends {DashboardQuickActionBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class DashboardQuickAction extends DashboardQuickActionBase { }
</script>
