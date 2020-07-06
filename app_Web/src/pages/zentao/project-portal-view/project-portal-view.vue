<template src="./project-portal-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectPortalViewBase } from './project-portal-view-base';
import view_dashboard from '@widgets/app/project-portal-view-db-dashboard/project-portal-view-db-dashboard.vue';

/**
 * 项目主页视图
 *
 * @export
 * @class ProjectPortalView
 * @extends {ProjectPortalViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class ProjectPortalView extends ProjectPortalViewBase { }
</script>
