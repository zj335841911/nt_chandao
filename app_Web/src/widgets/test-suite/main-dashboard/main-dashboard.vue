<template src="./main-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainBase } from './main-dashboard-base';
import view_dashboard_container3 from '@widgets/test-suite/main-dashboard-viewdashboard-container3-portlet/main-dashboard-viewdashboard-container3-portlet.vue';
import view_dashboard_container2 from '@widgets/test-suite/main-dashboard-viewdashboard-container2-portlet/main-dashboard-viewdashboard-container2-portlet.vue';
import view_dashboard_container1 from '@widgets/test-suite/main-dashboard-viewdashboard-container1-portlet/main-dashboard-viewdashboard-container1-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/test-suite/main-info-view-portlet/main-info-view-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/test-suite/cur-suit-case-grid-view-portlet/cur-suit-case-grid-view-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class Main
 * @extends {MainBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
@VueLifeCycleProcessing()
export default class Main extends MainBase { }
</script>
