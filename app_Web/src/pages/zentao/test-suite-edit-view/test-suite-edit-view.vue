<template src="./test-suite-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestSuiteEditViewBase } from './test-suite-edit-view-base';
import view_form from '@widgets/test-suite/main-form/main-form.vue';

/**
 * testsuite编辑视图视图
 *
 * @export
 * @class TestSuiteEditView
 * @extends {TestSuiteEditViewBase}
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
export default class TestSuiteEditView extends TestSuiteEditViewBase { }
</script>
