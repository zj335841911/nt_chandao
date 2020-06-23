<template src="./main-detail-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDetailBase } from './main-detail-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainDetail
 * @extends {MainDetailBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainDetail extends MainDetailBase { }
</script>
