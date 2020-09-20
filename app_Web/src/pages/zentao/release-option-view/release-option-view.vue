<template src="./release-option-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReleaseOptionViewBase } from './release-option-view-base';
import view_form from '@widgets/release/one-release-form/one-release-form.vue';

/**
 * 发布选项操作视图视图
 *
 * @export
 * @class ReleaseOptionView
 * @extends {ReleaseOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ReleaseOptionView extends ReleaseOptionViewBase { }
</script>
