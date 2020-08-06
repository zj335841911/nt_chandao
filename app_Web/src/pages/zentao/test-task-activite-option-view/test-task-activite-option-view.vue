<template src="./test-task-activite-option-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskActiviteOptionViewBase } from './test-task-activite-option-view-base';
import view_form from '@widgets/test-task/activite-form/activite-form.vue';

/**
 * 测试版本选项操作视图（激活）视图
 *
 * @export
 * @class TestTaskActiviteOptionView
 * @extends {TestTaskActiviteOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskActiviteOptionView extends TestTaskActiviteOptionViewBase { }
</script>
