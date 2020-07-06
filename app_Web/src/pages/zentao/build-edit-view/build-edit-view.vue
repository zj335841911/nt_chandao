<template src="./build-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildEditViewBase } from './build-edit-view-base';
import view_form from '@widgets/build/quick-create-form/quick-create-form.vue';

/**
 * build编辑视图视图
 *
 * @export
 * @class BuildEditView
 * @extends {BuildEditViewBase}
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
export default class BuildEditView extends BuildEditViewBase { }
</script>
