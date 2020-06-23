<template src="./work-info-form-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WorkInfoFormBase } from './work-info-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class WorkInfoForm
 * @extends {WorkInfoFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class WorkInfoForm extends WorkInfoFormBase { }
</script>
