<template src="./qa-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { QADashboardBase } from './qa-dashboard-base';
import view_dashboard_sysportlet2 from '@widgets/user-year-work-stats/info-portlet/info-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/user-year-work-stats/month-opened-bug-and-case-portlet/month-opened-bug-and-case-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/user-year-work-stats/title-portlet/title-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class QADashboard
 * @extends {QADashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
@VueLifeCycleProcessing()
export default class QADashboard extends QADashboardBase { }
</script>
