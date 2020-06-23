<template src="./close-pause-cancel-form-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ClosePauseCancelFormBase } from './close-pause-cancel-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ClosePauseCancelForm
 * @extends {ClosePauseCancelFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ClosePauseCancelForm extends ClosePauseCancelFormBase { }
</script>
