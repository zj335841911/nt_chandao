<template src="./task-pause-task-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskPauseTaskViewBase } from './task-pause-task-view-base';
import view_form from '@widgets/task/close-pause-cancel-form-form/close-pause-cancel-form-form.vue';

/**
 * 暂停任务视图
 *
 * @export
 * @class TaskPauseTaskView
 * @extends {TaskPauseTaskViewBase}
 */
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class TaskPauseTaskView extends TaskPauseTaskViewBase { }
</script>
