<template src="./task-main-dashboard-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMainDashboardViewBase } from './task-main-dashboard-view-base';
import view_dashboard from '@widgets/task/main-dashboard/main-dashboard.vue';

/**
 * 任务主数据看板视图视图
 *
 * @export
 * @class TaskMainDashboardView
 * @extends {TaskMainDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class TaskMainDashboardView extends TaskMainDashboardViewBase {

}
</script>
