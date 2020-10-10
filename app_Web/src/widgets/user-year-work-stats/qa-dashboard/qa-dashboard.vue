<template src="./qa-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { QADashboardBase } from './qa-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/bug/cur-user-opened-bug-portlet/cur-user-opened-bug-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/case/cur-user-opened-case-portlet/cur-user-opened-case-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/user-year-work-stats/info-portlet/info-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/user-year-work-stats/month-opened-bug-and-case-portlet/month-opened-bug-and-case-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class QADashboard
 * @extends {QADashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet5, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
         
    }
})
@VueLifeCycleProcessing()
export default class QADashboard extends QADashboardBase { }
</script>
