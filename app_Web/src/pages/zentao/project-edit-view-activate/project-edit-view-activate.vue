<template src="./project-edit-view-activate.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectEditView_ActivateBase } from './project-edit-view-activate-base';
import view_form from '@widgets/project/putoff-form/putoff-form.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectEditView_Activate
 * @extends {ProjectEditView_ActivateBase}
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
export default class ProjectEditView_Activate extends ProjectEditView_ActivateBase { }
</script>
