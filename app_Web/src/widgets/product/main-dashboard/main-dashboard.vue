<template src="./main-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainBase } from './main-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/action/product-trends-timeline-portlet/product-trends-timeline-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/product/product-info-portlet/product-info-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/product-life/get-roadmap-portlet/get-roadmap-portlet.vue';
 

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
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
@VueLifeCycleProcessing()
export default class Main extends MainBase { }
</script>
