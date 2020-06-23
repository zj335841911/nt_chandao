<template src="./quick-create-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { QuickCreateBase } from './quick-create-form-base';
 

/**
 * form部件
 *
 * @export
 * @class QuickCreate
 * @extends {QuickCreateBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class QuickCreate extends QuickCreateBase { }
</script>
