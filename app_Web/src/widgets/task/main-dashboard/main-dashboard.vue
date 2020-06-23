<template src="./main-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainBase } from './main-dashboard-base';
import view_dashboard_container4 from '@widgets/task/main-dashboard-viewdashboard-container4-portlet/main-dashboard-viewdashboard-container4-portlet.vue';
import view_dashboard_container3 from '@widgets/task/main-dashboard-viewdashboard-container3-portlet/main-dashboard-viewdashboard-container3-portlet.vue';
import view_dashboard_container2 from '@widgets/task/main-dashboard-viewdashboard-container2-portlet/main-dashboard-viewdashboard-container2-portlet.vue';
import view_dashboard_container1 from '@widgets/task/main-dashboard-viewdashboard-container1-portlet/main-dashboard-viewdashboard-container1-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/task/work-info-portlet/work-info-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/task/toolbar-portlet/toolbar-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/task/main-info-portlet/main-info-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/task/main-detail-portlet/main-detail-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class Main
 * @extends {MainBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet5, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
@VueLifeCycleProcessing()
export default class Main extends MainBase { }
</script>
<style lang='less'>
@import './main-dashboard.less';
</style>
