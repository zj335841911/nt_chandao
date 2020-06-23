<template src="./start-form-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StartFormBase } from './start-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class StartForm
 * @extends {StartFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class StartForm extends StartFormBase { }
</script>
