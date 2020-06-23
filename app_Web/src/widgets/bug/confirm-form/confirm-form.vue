<template src="./confirm-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ConfirmBase } from './confirm-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Confirm
 * @extends {ConfirmBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Confirm extends ConfirmBase { }
</script>
