<template src="./home-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { HomeDashboardBase } from './home-dashboard-base';
import view_dashboard_sysportlet8 from '@widgets/project/project-exp-view-portlet/project-exp-view-portlet.vue';
import view_dashboard_sysportlet6 from '@widgets/task/assign-to-me-portlet/assign-to-me-portlet.vue';
import view_dashboard_sysportlet7 from '@widgets/product/product-status-chart-portlet/product-status-chart-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/bug/assigned-to-me-bug-portlet/assigned-to-me-bug-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/story/assigned-to-me-story-portlet/assigned-to-me-story-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/ibz-my-territory/my-work-portlet/my-work-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/all-trends-portlet/all-trends-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/ibz-my-territory/welcome-portlet/welcome-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class HomeDashboard
 * @extends {HomeDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet8, 
        view_dashboard_sysportlet6, 
        view_dashboard_sysportlet7, 
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet5, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
@VueLifeCycleProcessing()
export default class HomeDashboard extends HomeDashboardBase { }
</script>
