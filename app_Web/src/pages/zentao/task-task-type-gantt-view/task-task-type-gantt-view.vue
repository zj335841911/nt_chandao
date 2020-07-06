<template src="./task-task-type-gantt-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTaskTypeGanttViewBase } from './task-task-type-gantt-view-base';
import view_gantt from '@widgets/task/type-gantt-gantt/type-gantt-gantt.vue';

/**
 * 任务甘特视图视图
 *
 * @export
 * @class TaskTaskTypeGanttView
 * @extends {TaskTaskTypeGanttViewBase}
 */
@Component({
    components: {
        view_gantt, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class TaskTaskTypeGanttView extends TaskTaskTypeGanttViewBase { }
</script>
