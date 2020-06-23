<template src="./main-dashboard-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDashboardBase } from './main-dashboard-dashboard-base';
import view_dashboard_container4 from '@widgets/case/main-dashboard-viewdashboard-container4-portlet/main-dashboard-viewdashboard-container4-portlet.vue';
import view_dashboard_container3 from '@widgets/case/main-dashboard-viewdashboard-container3-portlet/main-dashboard-viewdashboard-container3-portlet.vue';
import view_dashboard_container2 from '@widgets/case/main-dashboard-viewdashboard-container2-portlet/main-dashboard-viewdashboard-container2-portlet.vue';
import view_dashboard_container1 from '@widgets/case/main-dashboard-viewdashboard-container1-portlet/main-dashboard-viewdashboard-container1-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/case/dashboard-quick-action-portlet/dashboard-quick-action-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/case/main-detail-portlet/main-detail-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/case/main-info-portlet/main-info-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class MainDashboard
 * @extends {MainDashboardBase}
 */
@Component({
    components: {
        view_dashboard_container4, 
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
export default class MainDashboard extends MainDashboardBase { }
</script>
<style lang='less'>
@import './main-dashboard-dashboard.less';
</style>
