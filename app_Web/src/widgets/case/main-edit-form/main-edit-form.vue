<template src="./main-edit-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainEditBase } from './main-edit-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainEdit
 * @extends {MainEditBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainEdit extends MainEditBase { }
</script>
