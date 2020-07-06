<template src="./project-edit-view-putoff.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectEditView_PutoffBase } from './project-edit-view-putoff-base';
import view_form from '@widgets/project/putoff-form/putoff-form.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectEditView_Putoff
 * @extends {ProjectEditView_PutoffBase}
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
export default class ProjectEditView_Putoff extends ProjectEditView_PutoffBase { }
</script>
