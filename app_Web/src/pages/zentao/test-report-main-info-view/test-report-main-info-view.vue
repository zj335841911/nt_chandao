<template src="test-report-main-info-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportMainInfoViewBase } from './test-report-main-info-view-base';
import view_form from '@widgets/test-report/main-form/main-form.vue';

/**
 * 测试报告编辑视图视图
 *
 * @export
 * @class TestReportMainInfoView
 * @extends {TestReportMainInfoViewBase}
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
export default class TestReportMainInfoView extends TestReportMainInfoViewBase {

}
</script>
