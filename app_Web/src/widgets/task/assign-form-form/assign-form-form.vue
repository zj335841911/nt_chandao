<template src="./assign-form-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignFormBase } from './assign-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class AssignForm
 * @extends {AssignFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class AssignForm extends AssignFormBase { }
</script>
