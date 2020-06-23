<template src="./steps-info-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StepsInfoBase } from './steps-info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class StepsInfo
 * @extends {StepsInfoBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class StepsInfo extends StepsInfoBase { }
</script>
