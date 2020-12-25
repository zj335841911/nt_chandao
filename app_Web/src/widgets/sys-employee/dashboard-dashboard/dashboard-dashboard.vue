<template src="./dashboard-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardDashboardBase } from './dashboard-dashboard-base';
import view_dashboard_sysportlet2 from '@widgets/sys-employee/dashboard-viewdashboard-sysportlet2-portlet/dashboard-viewdashboard-sysportlet2-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/sys-employee/person-info-portlet/person-info-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class DashboardDashboard
 * @extends {DashboardDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet2,
        view_dashboard_sysportlet1,
         
    },
})
@VueLifeCycleProcessing()
export default class DashboardDashboard extends DashboardDashboardBase {}
</script>
