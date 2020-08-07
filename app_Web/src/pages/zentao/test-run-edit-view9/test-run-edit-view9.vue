<template src="./test-run-edit-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestRunEditView9Base } from './test-run-edit-view9-base';
import view_form from '@widgets/test-run/main-form/main-form.vue';

/**
 * 测试运行编辑视图视图
 *
 * @export
 * @class TestRunEditView9
 * @extends {TestRunEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestRunEditView9 extends TestRunEditView9Base { }
</script>
