<template src="./ibz-case-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzCaseEditViewBase } from './ibz-case-edit-view-base';
import view_form from '@widgets/ibz-case/main-form/main-form.vue';

/**
 * 用例库用例编辑视图视图
 *
 * @export
 * @class IbzCaseEditView
 * @extends {IbzCaseEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzCaseEditView extends IbzCaseEditViewBase { }
</script>
