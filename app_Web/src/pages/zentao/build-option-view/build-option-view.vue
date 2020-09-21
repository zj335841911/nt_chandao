<template src="./build-option-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildOptionViewBase } from './build-option-view-base';
import view_form from '@widgets/build/test-build-release-form/test-build-release-form.vue';

/**
 * 版本选项操作视图视图
 *
 * @export
 * @class BuildOptionView
 * @extends {BuildOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BuildOptionView extends BuildOptionViewBase { }
</script>
