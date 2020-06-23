<template src="./task-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskEditViewBase } from './task-edit-view-base';
import view_form from '@widgets/task/main-form/main-form.vue';

/**
 * task编辑视图视图
 *
 * @export
 * @class TaskEditView
 * @extends {TaskEditViewBase}
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
export default class TaskEditView extends TaskEditViewBase {

}
</script>
