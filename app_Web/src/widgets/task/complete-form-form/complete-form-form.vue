<template src="./complete-form-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CompleteFormBase } from './complete-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class CompleteForm
 * @extends {CompleteFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class CompleteForm extends CompleteFormBase { }
</script>
