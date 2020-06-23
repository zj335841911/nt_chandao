<template src="./test-report-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportEditViewBase } from './test-report-edit-view-base';
import view_form from '@widgets/test-report/main-form/main-form.vue';

/**
 * testreport编辑视图视图
 *
 * @export
 * @class TestReportEditView
 * @extends {TestReportEditViewBase}
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
export default class TestReportEditView extends TestReportEditViewBase {

}
</script>
