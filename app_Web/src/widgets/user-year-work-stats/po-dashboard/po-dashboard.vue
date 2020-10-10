<template src="./po-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PODashboardBase } from './po-dashboard-base';
import view_dashboard_sysportlet2 from '@widgets/user-year-work-stats/info-portlet/info-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/product-sum/product-creat-stroy-admin-portlet/product-creat-stroy-admin-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/user-year-work-stats/title-portlet/title-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class PODashboard
 * @extends {PODashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
@VueLifeCycleProcessing()
export default class PODashboard extends PODashboardBase { }
</script>
