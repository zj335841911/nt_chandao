<template src="./main-new-mode-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_NewModeBase } from './main-new-mode-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Main_NewMode
 * @extends {Main_NewModeBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Main_NewMode extends Main_NewModeBase { }
</script>
