<template src="./ibzpro-product-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBZProProductEditViewBase } from './ibzpro-product-edit-view-base';
import view_form from '@widgets/ibzpro-product/main-form/main-form.vue';

/**
 * 平台产品编辑视图视图
 *
 * @export
 * @class IBZProProductEditView
 * @extends {IBZProProductEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IBZProProductEditView extends IBZProProductEditViewBase { }
</script>
