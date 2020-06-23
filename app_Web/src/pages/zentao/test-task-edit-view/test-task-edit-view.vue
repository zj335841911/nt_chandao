<template src="test-task-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskEditViewBase } from './test-task-edit-view-base';
import view_form from '@widgets/test-task/main-form/main-form.vue';

/**
 * testtask编辑视图视图
 *
 * @export
 * @class TestTaskEditView
 * @extends {TestTaskEditViewBase}
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
export default class TestTaskEditView extends TestTaskEditViewBase {

}
</script>
