<template src="./test-run-medit-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestRunMEditView9Base } from './test-run-medit-view9-base';
import view_meditviewpanel from '@widgets/test-run/main-multieditviewpanel/main-multieditviewpanel.vue';

/**
 * 测试运行多表单编辑视图视图
 *
 * @export
 * @class TestRunMEditView9
 * @extends {TestRunMEditView9Base}
 */
@Component({
    components: {
        view_meditviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class TestRunMEditView9 extends TestRunMEditView9Base { }
</script>
