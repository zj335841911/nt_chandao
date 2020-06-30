<template src="./project-edit-view-suspend.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectEditView_SuspendBase } from './project-edit-view-suspend-base';
import view_form from '@widgets/project/suspend-nclose-form/suspend-nclose-form.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectEditView_Suspend
 * @extends {ProjectEditView_SuspendBase}
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
export default class ProjectEditView_Suspend extends ProjectEditView_SuspendBase { }
</script>
