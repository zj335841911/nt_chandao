<template src="./main-new-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainNewBase } from './main-new-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainNew
 * @extends {MainNewBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainNew extends MainNewBase { }
</script>
