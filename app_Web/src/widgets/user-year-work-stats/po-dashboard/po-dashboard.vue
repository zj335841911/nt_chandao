<template src="./po-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PODashboardBase } from './po-dashboard-base';
import view_dashboard_sysportlet6 from '@widgets/story/my-opened-story-portlet/my-opened-story-portlet.vue';
import view_dashboard_sysportlet7 from '@widgets/story/my-opened-story-stage-portlet/my-opened-story-stage-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/user-year-work-stats/product-plancnt-and-storycnt-portlet/product-plancnt-and-storycnt-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/user-year-work-stats/month-opened-story-portlet/month-opened-story-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/user-year-work-stats/info-portlet/info-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/product-sum/product-creat-stroy-admin-portlet/product-creat-stroy-admin-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class PODashboard
 * @extends {PODashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet6, 
        view_dashboard_sysportlet7, 
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet5, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
         
    }
})
@VueLifeCycleProcessing()
export default class PODashboard extends PODashboardBase { }
</script>
