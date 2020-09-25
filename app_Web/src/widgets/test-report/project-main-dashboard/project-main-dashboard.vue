<template src="./project-main-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMainDashboardBase } from './project-main-dashboard-base';
import view_dashboard_sysportlet10 from '@widgets/bug/bug-type-portlet/bug-type-portlet.vue';
import view_dashboard_sysportlet13 from '@widgets/bug/bug-opened-by-portlet/bug-opened-by-portlet.vue';
import view_dashboard_sysportlet14 from '@widgets/bug/bug-module-portlet/bug-module-portlet.vue';
import view_dashboard_sysportlet11 from '@widgets/bug/bug-status-portlet/bug-status-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/case/case-lastrunner-project-portlet/case-lastrunner-project-portlet.vue';
import view_dashboard_sysportlet12 from '@widgets/bug/bug-resolution-portlet/bug-resolution-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/case/case-type-project-portlet/case-type-project-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/case/case-module-project-portlet/case-module-project-portlet.vue';
import view_dashboard_sysportlet15 from '@widgets/bug/bug-resolved-by-project-portlet/bug-resolved-by-project-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/case/case-result-project-portlet/case-result-project-portlet.vue';
import view_dashboard_sysportlet9 from '@widgets/bug/bug-severity-portlet/bug-severity-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class ProjectMainDashboard
 * @extends {ProjectMainDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet10, 
        view_dashboard_sysportlet13, 
        view_dashboard_sysportlet14, 
        view_dashboard_sysportlet11, 
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet12, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet15, 
        view_dashboard_sysportlet1, 
        view_dashboard_sysportlet9, 
         
    }
})
@VueLifeCycleProcessing()
export default class ProjectMainDashboard extends ProjectMainDashboardBase { }
</script>
