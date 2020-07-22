<template src="./company-main-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CompanyMainView9Base } from './company-main-view9-base';
import view_form from '@widgets/company/main-form/main-form.vue';

/**
 * 公司编辑视图视图
 *
 * @export
 * @class CompanyMainView9
 * @extends {CompanyMainView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CompanyMainView9 extends CompanyMainView9Base { }
</script>
