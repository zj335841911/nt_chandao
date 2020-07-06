<template src="./case-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseEditViewBase } from './case-edit-view-base';
import view_form from '@widgets/case/main-form/main-form.vue';

/**
 * case编辑视图视图
 *
 * @export
 * @class CaseEditView
 * @extends {CaseEditViewBase}
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
export default class CaseEditView extends CaseEditViewBase { }
</script>
