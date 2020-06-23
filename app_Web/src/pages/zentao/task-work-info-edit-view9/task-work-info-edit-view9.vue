<template src="./task-work-info-edit-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskWorkInfoEditView9Base } from './task-work-info-edit-view9-base';
import view_form from '@widgets/task/work-info-form-form/work-info-form-form.vue';

/**
 * 工时信息视图
 *
 * @export
 * @class TaskWorkInfoEditView9
 * @extends {TaskWorkInfoEditView9Base}
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
export default class TaskWorkInfoEditView9 extends TaskWorkInfoEditView9Base {

}
</script>
