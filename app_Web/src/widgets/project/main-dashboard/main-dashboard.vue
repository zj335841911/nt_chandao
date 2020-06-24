<template src="./main-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDashboardBase } from './main-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/action/project-trends-timeline-portlet/project-trends-timeline-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/project/dash-borad-info-view-portlet/dash-borad-info-view-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/burn/burn-down-chart-portlet/burn-down-chart-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class MainDashboard
 * @extends {MainDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
@VueLifeCycleProcessing()
export default class MainDashboard extends MainDashboardBase { }
</script>
