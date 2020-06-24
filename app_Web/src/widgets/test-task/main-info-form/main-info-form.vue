<template src="./main-info-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainInfoEditFormBase } from './main-info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainInfo
 * @extends {MainInfoEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainInfoEditForm extends MainInfoEditFormBase { }
</script>
