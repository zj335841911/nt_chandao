<template src="./project-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectEditViewBase } from './project-edit-view-base';
import view_form from '@widgets/project/main-form/main-form.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectEditView
 * @extends {ProjectEditViewBase}
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
export default class ProjectEditView extends ProjectEditViewBase {

}
</script>
