<template src="./main-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDashboardBase } from './main-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/case/case-lastrunner-portlet/case-lastrunner-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/case/case-type-portlet/case-type-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/case/case-module-portlet/case-module-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/case/case-result-portlet/case-result-portlet.vue';
 

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
