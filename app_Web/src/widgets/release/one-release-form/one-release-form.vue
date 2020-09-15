<template src="./one-release-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { OneReleaseEditFormBase } from './one-release-form-base';
 

/**
 * form部件
 *
 * @export
 * @class OneReleaseEditForm
 * @extends {OneReleaseEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class OneReleaseEditForm extends OneReleaseEditFormBase { }
</script>
