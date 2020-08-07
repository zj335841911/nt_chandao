<template src="./test-result-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestResultEditViewBase } from './test-result-edit-view-base';
import view_form from '@widgets/test-result/main-form/main-form.vue';

/**
 * testresult编辑视图视图
 *
 * @export
 * @class TestResultEditView
 * @extends {TestResultEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestResultEditView extends TestResultEditViewBase { }
</script>
