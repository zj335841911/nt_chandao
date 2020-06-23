<template src="./task-main-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMainEditViewBase } from './task-main-edit-view-base';
import view_form from '@widgets/task/main-edit-form/main-edit-form.vue';

/**
 * 任务视图
 *
 * @export
 * @class TaskMainEditView
 * @extends {TaskMainEditViewBase}
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
export default class TaskMainEditView extends TaskMainEditViewBase { }
</script>
