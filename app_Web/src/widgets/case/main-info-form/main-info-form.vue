<template src="./main-info-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainInfoBase } from './main-info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainInfo
 * @extends {MainInfoBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainInfo extends MainInfoBase { }
</script>
