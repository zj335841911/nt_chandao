<template src="./test-task-edit-view-edit.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskEditView_EditBase } from './test-task-edit-view-edit-base';
import view_form from '@widgets/test-task/main-edit-form/main-edit-form.vue';

/**
 * testtask编辑视图视图
 *
 * @export
 * @class TestTaskEditView_Edit
 * @extends {TestTaskEditView_EditBase}
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
export default class TestTaskEditView_Edit extends TestTaskEditView_EditBase { }
</script>
