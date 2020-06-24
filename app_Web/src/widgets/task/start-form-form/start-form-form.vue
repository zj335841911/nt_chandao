<template src="./start-form-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StartFormEditFormBase } from './start-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class StartForm
 * @extends {StartFormEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class StartFormEditForm extends StartFormEditFormBase { }
</script>
