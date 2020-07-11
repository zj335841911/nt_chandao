<template src="./test-module-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestModuleEditViewBase } from './test-module-edit-view-base';
import view_form from '@widgets/test-module/main-form/main-form.vue';

/**
 * 测试模块编辑视图视图
 *
 * @export
 * @class TestModuleEditView
 * @extends {TestModuleEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestModuleEditView extends TestModuleEditViewBase { }
</script>
