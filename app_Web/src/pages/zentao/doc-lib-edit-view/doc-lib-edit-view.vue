<template src="./doc-lib-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibEditViewBase } from './doc-lib-edit-view-base';
import view_form from '@widgets/doc-lib/main-form/main-form.vue';

/**
 * doclib编辑视图视图
 *
 * @export
 * @class DocLibEditView
 * @extends {DocLibEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibEditView extends DocLibEditViewBase { }
</script>
