<template src="./close-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CloseBase } from './close-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Close
 * @extends {CloseBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Close extends CloseBase { }
</script>
