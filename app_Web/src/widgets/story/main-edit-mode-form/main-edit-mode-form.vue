<template src="./main-edit-mode-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_EditModeBase } from './main-edit-mode-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Main_EditMode
 * @extends {Main_EditModeBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Main_EditMode extends Main_EditModeBase { }
</script>
