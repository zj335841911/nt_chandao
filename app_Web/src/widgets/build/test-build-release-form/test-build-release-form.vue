<template src="./test-build-release-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestBuildReleaseEditFormBase } from './test-build-release-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TestBuildReleaseEditForm
 * @extends {TestBuildReleaseEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TestBuildReleaseEditForm extends TestBuildReleaseEditFormBase { }
</script>
