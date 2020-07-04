<template src="./project-main-dashboard-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMainDashboardViewBase } from './project-main-dashboard-view-base';
import view_dashboard from '@widgets/project/main-dashboard/main-dashboard.vue';

/**
 * 项目数据看板视图视图
 *
 * @export
 * @class ProjectMainDashboardView
 * @extends {ProjectMainDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProjectMainDashboardView extends ProjectMainDashboardViewBase { }
</script>
