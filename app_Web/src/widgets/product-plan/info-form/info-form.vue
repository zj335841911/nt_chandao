<template src="./info-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { InfoBase } from './info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Info
 * @extends {InfoBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Info extends InfoBase { }
</script>
