<template src="./task-close-task-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskCloseTaskViewBase } from './task-close-task-view-base';
import view_form from '@widgets/task/close-pause-cancel-form-form/close-pause-cancel-form-form.vue';

/**
 * 关闭任务视图
 *
 * @export
 * @class TaskCloseTaskView
 * @extends {TaskCloseTaskViewBase}
 */
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class TaskCloseTaskView extends TaskCloseTaskViewBase { }
</script>
