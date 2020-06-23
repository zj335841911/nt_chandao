<template src="./main-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainBase } from './main-dashboard-base';
import view_dashboard_container3 from '@widgets/project/main-dashboard-viewdashboard-container3-portlet/main-dashboard-viewdashboard-container3-portlet.vue';
import view_dashboard_container2 from '@widgets/project/main-dashboard-viewdashboard-container2-portlet/main-dashboard-viewdashboard-container2-portlet.vue';
import view_dashboard_container1 from '@widgets/project/main-dashboard-viewdashboard-container1-portlet/main-dashboard-viewdashboard-container1-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/action/project-trends-timeline-portlet/project-trends-timeline-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/project/dash-borad-info-view-portlet/dash-borad-info-view-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/burn/burn-down-chart-portlet/burn-down-chart-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class Main
 * @extends {MainBase}
 */
@Component({
    components: {
        view_dashboard_container3, 
        view_dashboard_container2, 
        view_dashboard_container1, 
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
@VueLifeCycleProcessing()
export default class Main extends MainBase { }
</script>
